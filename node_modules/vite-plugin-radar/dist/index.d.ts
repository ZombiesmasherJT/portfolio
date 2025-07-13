import { HtmlTagDescriptor, Plugin } from 'vite';

declare global {
    interface Window {
        _hmt: any[];
    }
}
interface BaiduTongjiProperty {
    id: string;
}
type BaiduTongjiOptions = BaiduTongjiProperty | BaiduTongjiProperty[];

declare global {
    interface Window {
        fbq: (event: string, id?: string, params?: Record<string, any>) => void;
    }
}
interface FacebookPixel {
    /**
     * Pixel tag
     */
    id: string;
}
type FacebookPixelOption = FacebookPixel | FacebookPixel[];

declare global {
    interface Window {
        _fs_host: any[];
        _fs_script: any[];
        _fs_org: any[];
        _fs_namespace: any[];
    }
}
interface FullStoryOptions {
    host?: string;
    script?: string;
    namespace?: string;
    org?: string;
}

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (command: string, ...args: any[]) => void;
    }
}
interface GAConfiguration {
    send_page_view?: boolean;
    allow_google_signals?: boolean;
    allow_ad_personalization_signals?: boolean;
    transport_url?: string;
    cookie_domain?: string;
    cookie_expires?: number;
    cookie_prefix?: string;
    cookie_update?: boolean;
    cookie_flags?: string;
}
interface GAConsentDefaults {
    ad_storage?: 'granted' | 'denied';
    analytics_storage?: 'granted' | 'denied';
    wait_for_update?: number;
}
type GoogleAnaliticsMainProperty = GoogleAnaliticsProperty & {
    consentDefaults?: GAConsentDefaults;
    injectTo?: HtmlTagDescriptor['injectTo'];
};
interface GoogleAnaliticsProperty {
    id: string;
    source?: string;
    disable?: boolean;
    config?: GAConfiguration;
    persistentValues?: Record<string, string | number | boolean>;
}
type GoogleAnaliticsOptions = GoogleAnaliticsMainProperty | [GoogleAnaliticsMainProperty, ...GoogleAnaliticsProperty[]];

declare global {
    interface Window {
        dataLayer: any[];
    }
}
interface GoogleTagManagerMainProperty {
    id: string;
}
interface GoogleTagManagerDefaultProperty {
    gtmBase?: string;
    nsBase?: string;
    environment?: GoogleTagManagerEnvironment;
}
interface GoogleTagManagerEnvironment {
    auth: string;
    preview: string;
}
type GoogleTagManagerProperty = GoogleTagManagerMainProperty & GoogleTagManagerDefaultProperty;
type GoogleTagManagerOptions = GoogleTagManagerProperty | GoogleTagManagerProperty[];

declare global {
    interface Window {
        hj: any[];
        _hjSettings: any[];
    }
}
interface HotjarOptions {
    id: number;
}

declare global {
    interface Window {
        _linkedin_data_partner_ids: any[];
    }
}
interface LinkedinInsightProperty {
    id: string;
}
type LinkedinInsightOptions = LinkedinInsightProperty | LinkedinInsightProperty[];

declare global {
    interface Window {
        uetq: any[];
    }
}
interface MicrosoftAdvertisingOptions {
    id: string;
}

declare global {
    interface Window {
        clarity: any[];
    }
}
interface MicrosoftClarityOptions {
    id: string;
}

interface PlausibleAnalyticsOptions {
    enabled: boolean;
    hostname?: string;
    script?: string;
}

interface PostHogAnalyticsOptions {
    enabled: boolean;
    token: string;
    api_host: string;
    config?: Record<string, any>;
}

interface SimpleAnalyticsOptions {
    enabled: boolean;
    hostname?: string;
    script?: string;
    noScript?: string;
}

declare const PixelMethods: readonly ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
declare global {
    interface Window {
        TiktokAnalyticsObject: 'ttq';
        ttq: Record<typeof PixelMethods[number], (...args: any[]) => void>;
    }
}
interface TikTokPixelOptions {
    id: string;
    script?: string;
}

interface UnbounceOptions {
    enabled: boolean;
    script: string;
}

declare global {
    interface Window {
        VK: any;
    }
}
interface VKRetargeting {
    /**
     * Retargeting tag
     */
    id: string;
}
type VKRetargetingOption = VKRetargeting | VKRetargeting[];

declare global {
    interface Window {
        dataLayer: any[];
        ym: (id: string, command: string, ...args: any[]) => void;
    }
}
interface MetricaConfiguration {
    defer?: boolean;
    clickmap?: boolean;
    trackLinks?: boolean;
    accurateTrackBounce?: boolean;
    childIframe?: boolean;
    webvisor?: boolean;
    trackHash?: boolean;
    triggerEvent?: boolean;
    ecommerce?: string | boolean | any[];
    trustedDomains?: string[];
    type?: number;
    params?: Record<string, string | number | boolean> | Record<string, string | number | boolean>[];
    userParams?: Record<string, string | number | boolean>;
}
interface YandexMetricaProperty {
    id: string;
    config?: MetricaConfiguration;
}
type YandexMetricaOptions = YandexMetricaProperty | YandexMetricaProperty[];

interface VitePluginRadarOptions {
    enableDev?: boolean;
    analytics?: GoogleAnaliticsOptions;
    gtm?: GoogleTagManagerOptions;
    pixel?: FacebookPixelOption;
    linkedin?: LinkedinInsightOptions;
    tongji?: BaiduTongjiOptions;
    metrica?: YandexMetricaOptions;
    microsoft?: MicrosoftAdvertisingOptions;
    microsoftClarity?: MicrosoftClarityOptions;
    retargeting?: VKRetargetingOption;
    hotjar?: HotjarOptions;
    fullStory?: FullStoryOptions;
    unbounce?: UnbounceOptions | boolean;
    tiktok?: TikTokPixelOptions;
    simpleanalytics?: SimpleAnalyticsOptions;
    posthog?: PostHogAnalyticsOptions;
    plausible?: PlausibleAnalyticsOptions;
}
declare function VitePluginRadar({ enableDev, analytics, gtm, pixel, linkedin, tongji, metrica, microsoft, microsoftClarity, retargeting, hotjar, fullStory, unbounce, tiktok, simpleanalytics, posthog, plausible, }: VitePluginRadarOptions): Plugin;

export { VitePluginRadar, type VitePluginRadarOptions };
