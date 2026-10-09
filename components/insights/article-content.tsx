import type { ArticleContentBlock } from "@/types/content";

type ArticleContentProps = {
  blocks: readonly ArticleContentBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="max-w-3xl">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.type}-${index}`}
              className="mt-14 font-display text-h3 font-semibold text-ink first:mt-0 md:mt-20"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={`${block.type}-${index}`}
              className="mt-6 text-body-lg text-muted"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={`${block.type}-${index}`} className="mt-8">
              {block.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-t border-line py-5 text-body text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 text-label font-semibold text-accent"
                  >
                    {(itemIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <aside
            key={`${block.type}-${index}`}
            className="mt-8 border-l-2 border-accent bg-accent-soft/45 px-5 py-6 sm:px-7"
          >
            <p className="text-label font-semibold uppercase text-accent">
              {block.title}
            </p>
            <p className="mt-3 text-body text-ink">{block.text}</p>
          </aside>
        );
      })}
    </div>
  );
}
