export const analyticsEventNames = [
  "hero_whatsapp_click",
  "case_study_click",
  "service_click",
  "package_click",
  "final_cta_click",
  "email_click",
  "social_click",
] as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[number];

export type AnalyticsEventPayload = {
  event: AnalyticsEventName;
  event_source?: string;
  item_name?: string;
  channel?: string;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsEventPayload[];
  }
}

const analyticsEventNameSet = new Set<string>(analyticsEventNames);

export const analyticsBrowserEvent = "anggit:analytics";

export function isAnalyticsEventName(
  value: string,
): value is AnalyticsEventName {
  return analyticsEventNameSet.has(value);
}

export function trackAnalyticsEvent(payload: AnalyticsEventPayload) {
  if (typeof window === "undefined") return;

  window.dataLayer ??= [];
  window.dataLayer.push(payload);
  window.dispatchEvent(
    new CustomEvent<AnalyticsEventPayload>(analyticsBrowserEvent, {
      detail: payload,
    }),
  );
}
