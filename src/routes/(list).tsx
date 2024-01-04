import { For, Show } from "solid-js";
import { Card } from "~/components/Card";
import { Sidebar } from "~/components/Sidebar";
import { asArray } from "~/helpers/methods";
import { playgrounds } from "~/lib/data/playgrounds";
import { useSerializedSearchParams } from "~/lib/hooks/useSerializedSearchParams";
import { paramsSchema } from "~/lib/schemas/querySchema";
import { filterStore } from "~/lib/stores/filterStore";

export default function Home() {
  const { get: getSearchParams } = useSerializedSearchParams(paramsSchema);
  filterStore.setType(getSearchParams("type"));
  filterStore.setTags(asArray<Tag>(getSearchParams("tag")));

  const filteredPlaygrounds = () =>
    playgrounds.filter((p) => {
      if (filterStore.type === "conjunction") {
        return filterStore.tags.every((tag) => p.tags.includes(tag));
      }
      if (filterStore.type === "disjunction") {
        return filterStore.tags.some((tag) => p.tags.includes(tag));
      }
    });

  return (
    <main class="container text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 dark:text-sky-300 font-bold uppercase my-16">
        Bienvenue sur mon organiseur de Playgrounds
      </h1>

      <Sidebar />

      <Show when={filterStore.tags}>
        <div class="mt-4">
          <For each={filterStore.tags}>{(tag) => <Badge label={tag} />}</For>
        </div>
      </Show>

      <div class="my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <For
            each={filteredPlaygrounds()}
            fallback={<div class="mx-auto text-slate-100">Aucun résultat</div>}
          >
            {(codepen) => <Card {...codepen} />}
          </For>
        </div>
      </div>
    </main>
  );
}

type BadgeProps = { label: Tag };
function Badge({ label }: BadgeProps) {
  const searchParams = useSerializedSearchParams(paramsSchema, {
    replace: true,
  });
  const handleRemoveTag = (tag: Tag) => {
    filterStore.removeTag(tag);
    searchParams.set("tag", filterStore.tags);
  };

  return (
    <span
      id="badge-dismiss-default"
      class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
    >
      {label}
      <button
        type="button"
        class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
        data-dismiss-target="#badge-dismiss-default"
        aria-label="Remove"
        onClick={() => handleRemoveTag(label)}
        // onClick={() => filterStore.removeTag(label)}
      >
        <svg
          class="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
  );
}
