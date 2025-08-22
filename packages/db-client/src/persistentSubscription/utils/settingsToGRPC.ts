import {
  CreateReq,
  UpdateReq,
} from "../../../generated/kurrentdb/protocols/v1/persistentsubscriptions_pb";

import {
  DISPATCH_TO_SINGLE,
  PINNED,
  PINNED_BY_CORRELATION,
  ROUND_ROBIN,
  UNBOUNDED,
} from "../../constants";

import type {
  PersistentSubscriptionToStreamSettings,
  PersistentSubscriptionToAllSettings,
} from "./persistentSubscriptionSettings";

type GRPCSettings = typeof CreateReq.Settings | typeof UpdateReq.Settings;

export const settingsToGRPC = <T extends GRPCSettings>(
  settings:
    | PersistentSubscriptionToStreamSettings
    | PersistentSubscriptionToAllSettings,
  ReqSettings: T
): InstanceType<T> => {
  const reqSettings = new ReqSettings() as InstanceType<T>;

  reqSettings.setResolveLinks(settings.resolveLinkTos);
  reqSettings.setExtraStatistics(settings.extraStatistics);
  reqSettings.setMessageTimeoutMs(settings.messageTimeout);
  reqSettings.setCheckpointAfterMs(settings.checkPointAfter);
  reqSettings.setMaxRetryCount(settings.maxRetryCount);
  reqSettings.setMinCheckpointCount(settings.checkPointLowerBound);
  reqSettings.setMaxCheckpointCount(settings.checkPointUpperBound);

  switch (settings.maxSubscriberCount) {
    case UNBOUNDED: {
      reqSettings.setMaxSubscriberCount(0);
      break;
    }
    default: {
      reqSettings.setMaxSubscriberCount(settings.maxSubscriberCount);
      break;
    }
  }

  reqSettings.setLiveBufferSize(settings.liveBufferSize);
  reqSettings.setReadBatchSize(settings.readBatchSize);
  reqSettings.setHistoryBufferSize(settings.historyBufferSize);

  switch (settings.consumerStrategyName) {
    case DISPATCH_TO_SINGLE: {
      reqSettings.setNamedConsumerStrategy(
        CreateReq.ConsumerStrategy.DISPATCHTOSINGLE
      );
      break;
    }
    case PINNED: {
      reqSettings.setNamedConsumerStrategy(CreateReq.ConsumerStrategy.PINNED);
      break;
    }
    case ROUND_ROBIN: {
      reqSettings.setNamedConsumerStrategy(
        CreateReq.ConsumerStrategy.ROUNDROBIN
      );
      break;
    }
    case PINNED_BY_CORRELATION: {
      if (reqSettings instanceof CreateReq.Settings) {
        reqSettings.setConsumerStrategy(settings.consumerStrategyName);
        break;
      } else {
        throw new Error("'PinnedByCorrelation' is not supported for updates.");
      }
    }
    default: {
      console.warn(
        `Unknown consumerStrategyName ${settings.consumerStrategyName}.`
      );
      break;
    }
  }

  return reqSettings;
};
