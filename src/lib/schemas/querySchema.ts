import { z } from "zod";
import { tags } from "../data/tags";

export const paramsSchema = z.object({
  type: z.enum(["conjunction", "disjunction"]).default("conjunction"),
  tag: z.array(z.enum(tags)).default([]).or(z.enum(tags)),
  query: z.string().default(""),
});
