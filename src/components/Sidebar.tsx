import { For, createSignal } from "solid-js";
import { tags } from "~/utils/data";

export function Sidebar() {
  const [open, setOpen] = createSignal(true);

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
        class="fixed top-0 left-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        classList={{ "translate-x-0": open() }}
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Filtres
        </h5>
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

        <div class="mt-3">
          <p class="text-base font-semibold text-gray-500 dark:text-gray-400">
            Les projets doivent :
          </p>
          <div class="mt-2 flex flex-col gap-2">
            <label>
              <input type="radio" name="type-tag" checked />
              <span class="text-slate-200 text-base pl-2 cursor-pointer">
                avoir tous les tags
              </span>
            </label>
            <label>
              <input type="radio" name="type-tag" />
              <span class="text-slate-200 text-base pl-2 cursor-pointer">
                avoir au moins un tag
              </span>
            </label>
          </div>
        </div>

        <div class="py-4 overflow-y-auto">
          <p class="text-base font-semibold text-gray-500 dark:text-gray-400">
            Sélectionner les tags :
          </p>
          <ul class="space-y-2 font-medium mt-2">
            <For each={tags}>
              {(tag) => (
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">{tag}</span>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </>
  );
}
