"use client";

import { useEffect } from "react";

import {
  isAnalyticsEventName,
  trackAnalyticsEvent,
} from "@/lib/analytics";

export function AnalyticsListener() {
  useEffect(() => {
    function handleTrackedClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const trackedElement = event.target.closest<HTMLElement>(
        "[data-analytics-event]",
      );

      if (!trackedElement) return;

      const eventNames = trackedElement.dataset.analyticsEvent
        ?.split(",")
        .map((eventName) => eventName.trim())
        .filter(isAnalyticsEventName);

      if (!eventNames?.length) return;

      for (const eventName of eventNames) {
        trackAnalyticsEvent({
          event: eventName,
          ...(trackedElement.dataset.analyticsSource
            ? { event_source: trackedElement.dataset.analyticsSource }
            : {}),
          ...(trackedElement.dataset.analyticsLabel
            ? { item_name: trackedElement.dataset.analyticsLabel }
            : {}),
          ...(trackedElement.dataset.analyticsChannel
            ? { channel: trackedElement.dataset.analyticsChannel }
            : {}),
        });
      }
    }

    document.addEventListener("click", handleTrackedClick, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("click", handleTrackedClick, true);
    };
  }, []);

  return null;
}
