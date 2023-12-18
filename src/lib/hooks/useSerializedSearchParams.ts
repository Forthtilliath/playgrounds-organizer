import { Params } from "@solidjs/router";
import { createEffect } from "solid-js";
import { useSearchParams } from "solid-start";
import { ZodRawShape, ZodType, z } from "zod";

// for an URL like ?plop=a|b or ?plop=a%7Cb
// https://www.youtube.com/watch?v=oZZEI23Ri6E
// https://start.solidjs.com/api/useSearchParams

// searchParams = useSearchParams();
// searchParams.get("plop");
// searchParams.set("plop", "a");

const SEPARATOR = "|";

type Primitive = string | number | boolean;
type SerializedParams = Record<string, Primitive | Primitive[]>;
// type SearchParams<T> = Record<keyof T, string>;

export function useSerializedSearchParams<T extends ZodRawShape>(
  schema: z.ZodObject<T>
) {
  type SearchParams = z.infer<typeof schema>;
  const [searchParams, setSearchParams] = useSearchParams<SearchParams>();

  createEffect(() => {
    console.log("searchParams", searchParams);
  });

  // value to string (SET)
  function serializeParams(
    params: SerializedParams = {},
    joinChar = SEPARATOR
  ): Params {
    const serializedParams: Params = {};

    for (const [key, value] of Object.entries(params)) {
      serializedParams[key] = Array.isArray(value)
        ? value.join(joinChar)
        : value.toString();
    }

    return serializedParams;
  }

  // string to value (GET)
  function deserializeParams(joinChar = SEPARATOR) {
    const deserializedParams: SerializedParams = {};

    //.map(v => z.coerce.parse(v))
    for (const [key, value] of Object.entries<string>(searchParams)) {
      deserializedParams[key] = value.includes(joinChar)
        ? value.split(joinChar)
        : value;
    }

    // console.log("deserializedParams", deserializedParams);
    return schema.parse(deserializedParams);
    // return deserializedParams as SearchParams;
  }

  function get(key: keyof SearchParams) {
    const d = deserializeParams();
    return d[key];
    // return deserializeParams(searchParams)[key];
  }

  // function getAll() {
  //   return deserializeParams(searchParams);
  // }

  function set<T extends string | number | boolean>(
    key: string,
    value: T | T[]
  ) {
    setSearchParams(serializeParams({ [key]: value }));
    // setSearchParams(serializeParams({ pouet: ["a", "b"] }));
    // setSearchParams(serializeParams({ size: [5, 4] }));
  }

  return {
    set,
    get,
    searchParams,
  };
}
