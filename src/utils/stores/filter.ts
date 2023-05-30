import { createStore, produce } from "solid-js/store";

export const [filter, setFilter] = createStore<Tag[]>([]);

export function addTagToFilter(tag: Tag) {
  setFilter(produce((f) => f.push(tag)));
}

export function removeTagToFilter(tag: Tag) {
    setFilter(f => f.filter(t => t !== tag));
}

// https://www.solidjs.com/docs/latest#reconcile