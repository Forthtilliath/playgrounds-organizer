import { For, Show, createEffect, createSignal } from "solid-js";
import { cn } from "~/helpers/tailwind";
import { tags } from "~/lib/data";
import { filterStore } from "~/lib/stores/filterStore";
import { DividerWithLabel } from "./utils/Divider";

const [open, setOpen] = createSignal(false);

export function Sidebar() {
  return (
    <>
      {/* Button */}
      <div class="text-center">
        <button
          class="text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
          onClick={() => setOpen((s) => !s)}
        >
          Filtrer les codepens
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="drawer-navigation"
        class="fixed top-0 left-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-slate-900"
        classList={{ "translate-x-0": open() }}
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>

        <h5
          id="drawer-navigation-label"
          class="text-lg font-semibold text-gray-500 uppercase dark:text-slate-50 mb-2"
        >
          Filtres
        </h5>

        <DividerWithLabel>Préférence</DividerWithLabel>

        <div>
          <div class="flex flex-col gap-2">
            <InputType value="conjunction" label="Inclure tous les tags" />
            <InputType value="disjunction" label="Inclure au moins un tag" />
          </div>
        </div>

        <DividerWithLabel>Liste des tags</DividerWithLabel>

        <div class="overflow-y-auto">
          <ul class="space-y-2 font-medium mt-2">
            <For each={tags}>
              {(tag) => (
                <li>
                  <label
                    class={cn(
                      "flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer transition-[background-color]",
                      {
                        "bg-sky-700 dark:hover:bg-sky-600":
                          filterStore.tags.includes(tag),
                      }
                    )}
                  >
                    <input
                      type="checkbox"
                      value={tag}
                      checked={filterStore.tags.includes(tag)}
                      onChange={() => filterStore.toggleTag(tag)}
                      class="appearance-none"
                    />
                    <span class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                      {tag}
                    </span>
                  </label>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <Show when={open()}>
        <div
          class="fixed inset-0 z-30 bg-black/70"
          onClick={() => setOpen(false)}
        />
      </Show>
    </>
  );
}

type InputTypeProps = { value: FilterType; label: string };
function InputType({ value, label }: InputTypeProps) {
  return (
    <label
      class={cn(
        "flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer transition-[background-color]",
        {
          "bg-sky-700 dark:hover:bg-sky-600": filterStore.type === value,
        }
      )}
    >
      <input
        type="radio"
        name="type-tag"
        checked={filterStore.type === value}
        onChange={() => filterStore.setType(value)}
        class="appearance-none"
      />
      <span class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
        {label}
      </span>
    </label>
  );
}