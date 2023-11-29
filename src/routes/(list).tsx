import { For } from "solid-js";
import { Card } from "~/components/Card";
import { Sidebar } from "~/components/Sidebar";
import { codepens } from "~/utils/data";

export default function Home() {
  return (
    <main class="container text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 dark:text-sky-300 font-bold uppercase my-16">
        Bienvenue sur mon organiseur de Playgrounds
      </h1>

      <Sidebar />

      <div class="my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <For each={codepens} fallback="Chargement...">
            {(codepen) => <Card {...codepen} />}
          </For>
        </div>
      </div>
    </main>
  );
}
