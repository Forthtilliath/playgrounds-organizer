import { createStore } from "solid-js/store";

export const [filter, setFilter] = createStore<FilterStore>({
  query: "",
  tags: [],
  type: "conjunction",

  addTagToFilter(tag: Tag) {
    setFilter("tags", (tags) => [...tags, tag]);
    // setFilter(produce((state) => state.tags.push(tag)));
  },
  removeTagToFilter(tag: Tag) {
    setFilter("tags", (tags) => tags.filter((t) => t !== tag));
    // setFilter(produce((state) => state.tags.filter((t) => t !== tag)));
  },
  setType(type: FilterStore["type"]) {
    setFilter("type", type);
  },
});

// https://www.solidjs.com/docs/latest#reconcile
