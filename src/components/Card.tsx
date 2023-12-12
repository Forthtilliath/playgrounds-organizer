import { ExternalLink } from "./ExternalLink";
import { For } from "solid-js";
import { CardBadge } from "./CardBadge";
import { endpoint, pathImage } from "~/lib/data/app";

export function Card(props: Playground) {
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article class="overflow-hidden rounded-lg shadow-card hover:shadow-card-xl transition-shadow">
        <div class="overflow-hidden">
          <ExternalLink href={`${endpoint}/${props.src}`}>
            <img
              alt="Placeholder"
              class="block h-auto w-full hover:scale-110 transform transition-transform duration-200 aspect-[96/47] object-cover"
              src={`${pathImage}/${props.id}.png`}
            />
          </ExternalLink>
        </div>

        <header class="leading-tight p-2 md:p-4 text-left">
          <h2 class="text-lg w-full">
            <ExternalLink
              class="no-underline hover:underline text-black dark:text-slate-200 truncate block"
              href={`${endpoint}/${props.src}`}
            >
              {props.title}
            </ExternalLink>
          </h2>
        </header>

        <footer class="flex items-center flex-wrap gap-1 leading-none p-2 md:p-4">
          <For each={props.tags}>{(tag) => <CardBadge tag={tag} />}</For>
        </footer>
      </article>
    </div>
  );
}
