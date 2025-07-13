'use strict';

const TongjiBase = "https://hm.baidu.com/hm.js";
function injectTag$f(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options
    );
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  let template = "";
  template += "var _hmt = _hmt || [];\n";
  template += "_hmt.push(['_setAutoPageview', true]);\n";
  for (const property of properties)
    template += `_hmt.push(['_setAccount', '${property.id}']);
`;
  tags.push({
    tag: "script",
    children: template
  });
  for (const property of properties) {
    tags.push({
      tag: "script",
      attrs: {
        src: `${TongjiBase}?${property.id}`,
        async: true
      }
    });
  }
  return tags;
}

const PixelBase = "https://connect.facebook.net/en_US/fbevents.js";
const NoScriptBase$4 = "https://www.facebook.com/tr";
function injectTag$e(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options
    );
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  let template = "";
  let noscriptTemplate = "";
  template += "!function(f,b,e,v,n,t,s)";
  template += "{if(f.fbq)return;n=f.fbq=function(){n.callMethod?";
  template += "n.callMethod.apply(n,arguments):n.queue.push(arguments)};";
  template += "if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';";
  template += "n.queue=[];t=b.createElement(e);t.async=!0;";
  template += "t.src=v;s=b.getElementsByTagName(e)[0];";
  template += "s.parentNode.insertBefore(t,s)}(window, document,'script',";
  template += `'${PixelBase}');`;
  for (const property of properties) {
    template += `fbq('init', '${property.id}');`;
    noscriptTemplate += `<img height="1" width="1" style="display:none" src="${NoScriptBase$4}?id=${property.id}&ev=PageView&noscript=1"/>
`;
  }
  template += "fbq('track', 'PageView');";
  tags.push({
    tag: "script",
    children: template
  });
  tags.push({
    tag: "noscript",
    injectTo: "body-prepend",
    children: noscriptTemplate
  });
  return tags;
}

const defaultOptions$1 = {
  host: "fullstory.com",
  script: "edge.fullstory.com/s/fs.js",
  namespace: "FS"
};
function injectTag$d(options) {
  const tags = [];
  const fullOptions = { ...defaultOptions$1, ...options };
  if (!fullOptions.org)
    return tags;
  let template = "";
  template += `window['_fs_host'] = '${fullOptions.host}';`;
  template += `window['_fs_script'] = '${fullOptions.script}';`;
  template += `window['_fs_org'] = '${fullOptions.org}';`;
  template += `window['_fs_namespace'] = '${fullOptions.namespace}';`;
  template += "(function(m,n,e,t,l,o,g,y){";
  template += `if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}`;
  template += "g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];";
  template += "o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;";
  template += "y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);";
  template += "g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};";
  template += "g.anonymize=function(){g.identify(!!0)};";
  template += 'g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};';
  template += 'g.log = function(a,b){g("log",[a,b])};';
  template += 'g.consent=function(a){g("consent",!arguments.length||a)};';
  template += "g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};";
  template += "g.clearUserCookie=function(){};";
  template += "g.setVars=function(n, p){g('setVars',[n,p]);};";
  template += "g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];";
  template += "if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};";
  template += 'g._v="1.3.0";';
  template += "})(window,document,window['_fs_namespace'],'script','user');";
  tags.push({
    tag: "script",
    children: template
  });
  return tags;
}

const GTagSource = "https://www.googletagmanager.com";
const GTagBase = (source) => `${source}/gtag/js`;
function injectTag$c(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options
    );
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  const mainProperty = properties.shift();
  if (!mainProperty)
    return tags;
  let template = "";
  if (mainProperty.disable)
    template += `window['ga-disable-${mainProperty.id}'] = true;
`;
  for (const property of properties) {
    if (property.disable)
      template += `window['ga-disable-${property.id}'] = true;
`;
  }
  template += "window.dataLayer = window.dataLayer || [];\n";
  template += "function gtag(){dataLayer.push(arguments);}\n";
  template += "gtag('js', new Date());\n";
  if (mainProperty.consentDefaults)
    template += `gtag('consent', 'default', ${JSON.stringify(mainProperty.consentDefaults)});
`;
  for (const property of [mainProperty, ...properties]) {
    if (property.config || property.persistentValues) {
      const config = Object.assign(
        {},
        property.persistentValues,
        property.config
      );
      template += `gtag('config', '${property.id}', ${JSON.stringify(config)});
`;
    } else {
      template += `gtag('config', '${property.id}');
`;
    }
  }
  tags.push({
    tag: "script",
    attrs: {
      src: `${GTagBase(mainProperty?.source || GTagSource)}?id=${mainProperty.id}`,
      async: true
    },
    injectTo: mainProperty.injectTo
  });
  tags.push({
    tag: "script",
    children: template,
    injectTo: mainProperty.injectTo
  });
  return tags;
}

const defaultOptions = {
  gtmBase: "https://www.googletagmanager.com/gtm.js",
  nsBase: "https://www.googletagmanager.com/ns.html"
};
function injectTag$b(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options.map((options2) => ({
        ...defaultOptions,
        ...options2
      }))
    );
  } else {
    properties.push({
      ...defaultOptions,
      ...options
    });
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  let template = "";
  template += "window.dataLayer = window.dataLayer || [];\n";
  template += "window.dataLayer.push({";
  template += "'gtm.start': new Date().getTime(),";
  template += "event:'gtm.js'";
  template += "});\n";
  tags.push({
    tag: "script",
    children: template
  });
  for (const property of properties) {
    const environmentAttachment = property.environment ? `&gtm_auth=${property.environment.auth}&gtm_preview=${property.environment.preview}` : "";
    tags.push({
      tag: "script",
      attrs: {
        src: `${property.gtmBase}?id=${property.id}${environmentAttachment}`,
        async: true
      }
    });
    tags.push({
      tag: "noscript",
      injectTo: "body-prepend",
      children: `<iframe src="${property.nsBase}?id=${property.id}${environmentAttachment}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    });
  }
  return tags;
}

const HotjarBase = "https://static.hotjar.com/c/hotjar-";
function injectTag$a(options) {
  const tags = [];
  if (!options.id)
    return tags;
  let template = "";
  template += "(function(h,o,t,j,a,r){";
  template += "h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};";
  template += `h._hjSettings={hjid:${options.id},hjsv:6};`;
  template += 'a=o.getElementsByTagName("head")[0];';
  template += 'r=o.createElement("script");r.async=1;';
  template += "r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;";
  template += "a.appendChild(r);";
  template += `})(window,document,'${HotjarBase}','.js?sv=');`;
  tags.push({
    tag: "script",
    children: template
  });
  return tags;
}

const InsightBase = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
const NoScriptBase$3 = "https://px.ads.linkedin.com/collect/";
function injectTag$9(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options
    );
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  let template = "";
  let noscriptTemplate = "";
  template += "window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];\n";
  for (const property of properties) {
    template += `window._linkedin_data_partner_ids.push(${property.id});
`;
    noscriptTemplate += `<img height="1" width="1" style="display:none;" alt="" src="${NoScriptBase$3}?pid=${property.id}&fmt=gif" />`;
  }
  tags.push({
    tag: "script",
    children: template
  });
  tags.push({
    tag: "script",
    attrs: {
      src: `${InsightBase}`,
      async: true
    }
  });
  tags.push({
    tag: "noscript",
    injectTo: "body-prepend",
    children: noscriptTemplate
  });
  return tags;
}

const UetBase = "//bat.bing.com/bat.js";
function injectTag$8(property) {
  const tags = [];
  if (!property.id)
    return tags;
  let template = "";
  template += "(function (w, d, t, r, u) {";
  template += `var f, n, i; w[u] = w[u] || [], f = function () { var o = { ti: "${property.id}" };`;
  template += 'o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad") }, n = d.createElement(t), ';
  template += "n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { ";
  template += 'var s = this.readyState; s && s !== "loaded" && s !== "complete" || (f(), ';
  template += "n.onload = n.onreadystatechange = null) }, i = d.getElementsByTagName(t)[0], ";
  template += "i.parentNode.insertBefore(n, i) })";
  template += `(window, document, "script", "${UetBase}", "uetq");`;
  tags.push({
    tag: "script",
    children: template
  });
  return tags;
}

const ClarityBase = "https://www.clarity.ms/tag/";
function injectTag$7(property) {
  const tags = [];
  if (!property.id)
    return tags;
  let template = "";
  template += "(function(c,l,a,r,i,t,y){";
  template += `c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};`;
  template += `t=l.createElement(r);t.async=1;t.src="${ClarityBase}"+i;`;
  template += "y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);";
  template += `})(window, document, "clarity", "script", "${property.id}");`;
  tags.push({
    tag: "script",
    children: template
  });
  return tags;
}

const DefaultScriptUrl = "https://plausible.io/js/script.js";
function injectTag$6(options) {
  const tags = [];
  if (!options.enabled)
    return tags;
  const scriptAttrs = {
    src: options.script || DefaultScriptUrl,
    defer: true
  };
  if (options.hostname)
    scriptAttrs["data-domain"] = options.hostname;
  tags.push({
    tag: "script",
    injectTo: "head",
    attrs: scriptAttrs
  });
  return tags;
}

const ARRAY_LOADER = `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);`;
function injectTag$5(options) {
  const tags = [];
  if (!options.enabled)
    return tags;
  if (!options.token)
    throw new Error("PostHog token is required");
  if (!options.api_host)
    throw new Error("PostHog API host is required");
  tags.push({
    tag: "script",
    injectTo: "head",
    children: `
      ${ARRAY_LOADER}
      posthog.init('${options.token}', { api_host: '${options.api_host}', ...${options.config ? JSON.stringify(options.config) : ""} })
    `
  });
  return tags;
}

const SimpleAnalyticsBase = "https://scripts.simpleanalyticscdn.com/latest.js";
const NoScriptBase$2 = "https://queue.simpleanalyticscdn.com/noscript.gif";
function injectTag$4(options) {
  const tags = [];
  if (!options.enabled)
    return tags;
  let noScriptUrl = options.noScript ? options.noScript : NoScriptBase$2;
  const scriptAttrs = {
    src: options.script ? options.script : SimpleAnalyticsBase,
    async: true,
    defer: true
  };
  if (options.hostname) {
    noScriptUrl += `?hostname=${options.hostname}`;
    scriptAttrs["data-hostname"] = options.hostname;
  }
  const noscriptTemplate = `<img src="${noScriptUrl}" referrerpolicy="no-referrer-when-downgrade" alt="" />`;
  tags.push({
    tag: "script",
    injectTo: "body",
    attrs: scriptAttrs
  });
  tags.push({
    tag: "noscript",
    injectTo: "body-prepend",
    children: noscriptTemplate
  });
  return tags;
}

const PixelMethods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
const PixelMethodsAsString = PixelMethods.map((s) => `"${s}"`).join(", ");
const TikTokPixelBase = "analytics.tiktok.com/i18n/pixel/events.js";
function injectTag$3(options) {
  const tags = [];
  const sourceLocation = options.script ?? TikTokPixelBase;
  if (!options.id)
    return tags;
  let template = "";
  template += "!(function (w, d, t) {";
  template += "w.TiktokAnalyticsObject = t;";
  template += "var ttq = (w[t] = w[t] || []);";
  template += `(ttq.methods = [${PixelMethodsAsString}]),`;
  template += "(ttq.setAndDefer = function (t, e) {";
  template += "t[e] = function () {";
  template += "t.push([e].concat(Array.prototype.slice.call(arguments, 0)));";
  template += "};";
  template += "});";
  template += "for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);";
  template += "(ttq.instance = function (t) {";
  template += "for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);";
  template += "return e;";
  template += "}),";
  template += "(ttq.load = function (e, n) {";
  template += `var i = ("https:" == document.location.protocol ? "https://" : "http://") + "${sourceLocation}";`;
  template += "(ttq._i = ttq._i || {}), (ttq._i[e] = []), (ttq._i[e]._u = i), (ttq._t = ttq._t || {}), (ttq._t[e] = +new Date()), (ttq._o = ttq._o || {}), (ttq._o[e] = n || {});";
  template += 'var o = document.createElement("script");';
  template += '(o.type = "text/javascript"), (o.async = !0), (o.src = i + "?sdkid=" + e + "&lib=" + t);';
  template += 'var a = document.getElementsByTagName("script")[0];';
  template += "a.parentNode.insertBefore(o, a);";
  template += "});";
  template += `ttq.load("${options.id}");`;
  template += "ttq.page();";
  template += '})(window, document, "ttq");';
  tags.push({
    tag: "script",
    children: template
  });
  return tags;
}

const UnbounceBase = "d3pkntwtp2ukl5.cloudfront.net/uba.js";
function injectTag$2(options) {
  const tags = [];
  const sourceLocation = options === true ? UnbounceBase : options.script;
  let template = "";
  template += "var _ubaq = _ubaq || [];";
  template += '_ubaq.push(["trackGoal", "convert"]);';
  template += "(function () {";
  template += 'var ub_script = document.createElement("script");';
  template += 'ub_script.type = "text/javascript";';
  template += `ub_script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "${sourceLocation}";`;
  template += 'var s = document.getElementsByTagName("script")[0];';
  template += "s.parentNode.insertBefore(ub_script, s);";
  template += "})();";
  tags.push({
    tag: "script",
    children: template
  });
  return tags;
}

const RetargetingBase = "https://vk.com/js/api/openapi.js?169";
const NoScriptBase$1 = "https://vk.com/rtrg";
function injectTag$1(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options
    );
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  let template = "";
  let noscriptTemplate = "";
  template += "!(function()";
  template += '{var t=document.createElement("script");t.type="text/javascript",';
  template += `t.async=!0,t.src="${RetargetingBase}",t.onload=function(){`;
  for (const property of properties) {
    template += `VK.Retargeting.Init("${property.id}"),`;
    noscriptTemplate += `<img height="1" width="1" style="display:none" src="${NoScriptBase$1}?p=${property.id}"/>
`;
  }
  template += "VK.Retargeting.Hit()},document.head.appendChild(t);})();";
  tags.push({
    tag: "script",
    children: template
  });
  tags.push({
    tag: "noscript",
    injectTo: "body-prepend",
    children: noscriptTemplate
  });
  return tags;
}

const MetricaBase = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js";
const NoScriptBase = "https://mc.yandex.ru/watch/";
function injectTag(options) {
  const tags = [];
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(
      ...options
    );
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length)
    return tags;
  let template = "";
  let noscriptTemplate = "";
  template += "(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};";
  template += "m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})";
  template += `(window, document, "script", "${MetricaBase}", "ym");`;
  for (const property of properties) {
    if (property.config)
      template += `ym(${property.id}, "init", ${JSON.stringify(property.config)});
`;
    else
      template += `ym(${property.id}, "init");
`;
    noscriptTemplate += `<img src="${NoScriptBase}${property.id}" style="position:absolute;left:-9999px;" alt="" />`;
  }
  tags.push({
    tag: "script",
    children: template
  });
  tags.push({
    tag: "noscript",
    injectTo: "body-prepend",
    children: `<div>${noscriptTemplate}</div>`
  });
  return tags;
}

function VitePluginRadar({
  enableDev = false,
  analytics,
  gtm,
  pixel,
  linkedin,
  tongji,
  metrica,
  microsoft,
  microsoftClarity,
  retargeting,
  hotjar,
  fullStory,
  unbounce,
  tiktok,
  simpleanalytics,
  posthog,
  plausible
}) {
  let viteConfig;
  return {
    name: "vite-plugin-Radar",
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
    },
    transformIndexHtml() {
      const tags = [];
      if (viteConfig.command === "serve" && !enableDev)
        return tags;
      if (analytics)
        tags.push(...injectTag$c(analytics));
      if (gtm)
        tags.push(...injectTag$b(gtm));
      if (pixel)
        tags.push(...injectTag$e(pixel));
      if (retargeting)
        tags.push(...injectTag$1(retargeting));
      if (tongji)
        tags.push(...injectTag$f(tongji));
      if (linkedin)
        tags.push(...injectTag$9(linkedin));
      if (metrica)
        tags.push(...injectTag(metrica));
      if (microsoft)
        tags.push(...injectTag$8(microsoft));
      if (microsoftClarity)
        tags.push(...injectTag$7(microsoftClarity));
      if (hotjar)
        tags.push(...injectTag$a(hotjar));
      if (fullStory)
        tags.push(...injectTag$d(fullStory));
      if (unbounce && (unbounce === true || unbounce.enabled === true))
        tags.push(...injectTag$2(unbounce));
      if (tiktok)
        tags.push(...injectTag$3(tiktok));
      if (simpleanalytics)
        tags.push(...injectTag$4(simpleanalytics));
      if (posthog)
        tags.push(...injectTag$5(posthog));
      if (plausible)
        tags.push(...injectTag$6(plausible));
      return tags;
    }
  };
}

exports.VitePluginRadar = VitePluginRadar;
