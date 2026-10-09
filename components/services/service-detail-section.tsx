import type { ReactNode } from "react";

import { EditorialGrid } from "@/components/layout";

type ServiceDetailSectionProps = {
  children: ReactNode;
  id: string;
  number: string;
  title: string;
};

export function ServiceDetailSection({
  children,
  id,
  number,
  title,
}: ServiceDetailSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-ink py-10 md:py-14 lg:py-16"
    >
      <EditorialGrid className="gap-y-7">
        <div className="col-span-4 md:col-span-2 lg:col-span-3">
          <span className="text-label font-semibold text-accent">{number}</span>
        </div>
        <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
          <h2 id={`${id}-title`} className="text-h3 font-semibold text-ink">
            {title}
          </h2>
          <div className="mt-7">{children}</div>
        </div>
      </EditorialGrid>
    </section>
  );
}
