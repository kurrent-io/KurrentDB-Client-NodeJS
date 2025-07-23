!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

(function () {
    var globalAnalyticsKey = "analytics"
    var analytics = window[globalAnalyticsKey] = window[globalAnalyticsKey] || [];
    if (analytics.initialize) return;
    if (analytics.invoked) {
        if (window.console && console.error) {
            console.error("Segment snippet included twice.");
        }
        return;
    }
    analytics.invoked = true;
    analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "debug",
        "page",
        "screen",
        "once",
        "off",
        "on",
        "addSourceMiddleware",
        "addIntegrationMiddleware",
        "setAnonymousId",
        "addDestinationMiddleware",
        "register"
    ];

    analytics.factory = function (e) {
        return function () {
            if (window[globalAnalyticsKey].initialized) {
                // Sometimes users assigned analytics to a variable before analytics is done loading, resulting in a stale reference.
                // If so, proxy any calls to the 'real' analytics instance.
                return window[globalAnalyticsKey][e].apply(window[globalAnalyticsKey], arguments);
            }
            var args = Array.prototype.slice.call(arguments);

            if (["track", "screen", "alias", "group", "page", "identify"].indexOf(e) > -1) {
                var c = document.querySelector("link[rel='canonical']");
                args.push({
                    __t: "bpc",
                    c: c && c.getAttribute("href") || undefined,
                    p: location.pathname,
                    u: location.href,
                    s: location.search,
                    t: document.title,
                    r: document.referrer
                });
            }

            args.unshift(e);
            analytics.push(args);
            return analytics;
        };
    };

    for (var i = 0; i < analytics.methods.length; i++) {
        var key = analytics.methods[i];
        analytics[key] = analytics.factory(key);
    }

    analytics.load = function (key, options) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.async = true;
        t.setAttribute("data-global-segment-analytics-key", globalAnalyticsKey)
        t.src = "https://cloud.kurrent.io/segment/ajs/REDACTED";

        var first = document.getElementsByTagName("script")[0];
        first.parentNode.insertBefore(t, first);
        analytics._loadOptions = options;
    };
    analytics._writeKey = "REDACTED";
    analytics.SNIPPET_VERSION = "5.2.1";
    analytics.load("REDACTED");
})();
