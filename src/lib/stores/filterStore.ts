import { createStore } from "solid-js/store";

const [filter, setFilter] = createStore<FilterStore>({
  query: "",
  tags: [],
  type: "conjunction",

  addTag(tag: Tag) {
    setFilter("tags", (tags) => [...tags, tag]);
  },
  removeTag(tag: Tag) {
    setFilter("tags", (tags) => tags.filter((t) => t !== tag));
  },
  toggleTag(tag: Tag) {
    setFilter("tags", (tags) => {
      if (tags.includes(tag)) {
        return tags.filter((t) => t !== tag);
      } else {
        return [...tags, tag];
      }
    });
  },
  setTags(tags: FilterStore["tags"]) {
    setFilter("tags", tags);
  },
  setType(type: FilterStore["type"]) {
    setFilter("type", type);
  },
});

export const filterStore = filter;

// https://www.solidjs.com/docs/latest#reconcile
