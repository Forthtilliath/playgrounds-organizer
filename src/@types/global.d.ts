import { tags } from "~/utils/data";

type Tags = (typeof tags)[number];

declare global {
  type Codepen = {
    id: number;
    tags: UniqueArray<Tags[]>;
    src: string;
    title: string;
  };
}

export {};
