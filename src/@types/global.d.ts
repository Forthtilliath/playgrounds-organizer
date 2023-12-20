import { tags } from "~/lib/data/tags";

declare global {
  type Tag = (typeof tags)[number];

  type Playground = {
    id: number;
    tags: UniqueArray<Tag[]>;
    src: string;
    title: string;
  };

  type FilterType = "conjunction" | "disjunction";

  type FilterStore = {
    query: string;
    tags: Tag[];
    type: FilterType;

    addTag: (tag: Tag) => void;
    removeTag: (tag: Tag) => void;
    toggleTag: (tag: Tag) => void;
    setTags: (tags: Tag[]) => void;
    setType: (type: FilterType) => void;
  };
}

export {};
