import { For } from "solid-js";
import { Card } from "~/components/Card";
import { codepens } from "~/utils/data";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-bold uppercase my-16">
        Bienvenue sur la HomePage de mon Github
      </h1>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <For each={codepens} fallback="Chargement...">
            {(codepen => <Card {...codepen} />)}
          </For>
        </div>
      </div>
    </main>
  );
}
