import { tags } from "~/utils/data";

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

    addTagToFilter: (tag: Tag) => void;
    removeTagToFilter: (tag: Tag) => void;
    setType: (type: FilterType) => void;
  };
}

export {};
