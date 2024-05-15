import {cx} from "class-variance-authority";

import {Heading} from "@/common/heading";
import {Section} from "@/common/layout";
import {fragmentOn} from ".basehub/schema";
import {headingFragment} from "@/lib/basehub/fragments";

export const testimonialsGridFragment = fragmentOn("TestimonialsGridComponent", {
  heading: headingFragment,
  testimonialsGridList: {
    items: {
      author: {
        _id: true,
        _title: true,
        image: {
          url: true,
          alt: true,
        },
        company: {
          _title: true,
        },
        role: true,
      },
      quote: true,
    },
  },
});

type TestimonialsGrid = fragmentOn.infer<typeof testimonialsGridFragment>;

export function TestimonialsGrid({
  testimonialsGridList,
  heading: {title, ...heading},
}: TestimonialsGrid) {
  return (
    <Section>
      <Heading {...heading}>
        <h4>{title}</h4>
      </Heading>
      <div className="relative grid grid-cols-1 place-items-center gap-8 self-stretch md:grid-cols-3">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-surface-primary/90 via-transparent to-surface-primary/90 dark:from-dark-surface-primary/95 dark:via-transparent dark:to-dark-surface-primary/95" />
        {testimonialsGridList.items.map(({author, quote}, i) => (
          <article
            key={author._id}
            className={cx(
              "flex flex-1 shrink-0 snap-mandatory snap-center flex-col rounded-xl border border-border dark:border-dark-border",
              {
                "hidden md:block": i > 3,
              },
            )}
          >
            <div className="flex items-start border-b border-border p-5 dark:border-dark-border">
              <blockquote className="text-pretty text-base font-light text-text-secondary dark:text-dark-text-secondary md:text-lg">
                {quote}
              </blockquote>
            </div>
            <div className="flex items-center px-4 py-3">
              <div className="flex flex-1 flex-col gap-0.5">
                <h5 className="text-xs font-medium text-text-tertiary dark:text-dark-text-tertiary md:text-sm">
                  {author._title}
                </h5>
                <p className="text-pretty text-xs text-text-tertiary dark:text-dark-text-tertiary md:text-sm">
                  {author.role}, {author.company._title}
                </p>
              </div>
              <div className="px-4">
                <figure className="aspect-square rounded-full bg-neutral-200 p-0.5">
                  <img
                    alt="Alexandra Nguyen"
                    className="size-6 rounded-full"
                    src="https://api.dicebear.com/8.x/adventurer/svg"
                  />
                </figure>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
