import { tags } from "~/utils/data";


declare global {
  type Tag = (typeof tags)[number];

  type Codepen = {
    id: number;
    tags: UniqueArray<Tag[]>;
    src: string;
    title: string;
  };

  type FilterStore = {
    tags: Tag[],
    type: 'conjunction' | 'disjunction'
  }
}

export {};
