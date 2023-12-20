import { NavigateOptions, Params } from "@solidjs/router";
import { useSearchParams } from "solid-start";
import { ZodRawShape, z } from "zod";

const DEFAULT_SEPARATOR = "|";

type Primitive = string | number | boolean;
type SerializedParams = Record<string, Primitive | Primitive[]>;

/**
 * This code defines a function called useSerializedSearchParams that generates
 * a function comment for a given function body. It takes in two parameters: a
 * schema object for validating search parameters and an options object for
 * navigating the search parameters. The function returns an object with three
 * functions: ``get``, ``set``, and ``getAll``.
 *
 * The ``get`` function retrieves a specific search parameter value based on a
 * given key.
 *
 * The ``set`` function updates a search parameter value based on a  given key.
 *
 * The ``getAll`` function retrieves all the search parameter values. The code
 * also includes helper functions serializeParams and deserializeParams for
 * converting search parameter values to and from strings.
 *
 *
 * @param {z.ZodObject<T>} schema - the schema object for validating the search parameters
 * @param {Partial<NavigateOptions<unknown>> | undefined} options - the options object for navigating the search parameters
 * @return An object containing the functions `get`, `set`, and `getAll`
 *
 *
 * @example
 * const schema = z.object({
 *   a: z.coerce.boolean(),
 *   b: z.array(z.coerce.number()),
 *   c: z.array(z.string()),
 *   d: z.coerce.number(),
 * });
 *
 * // URL: http://localhost:3000/?a=true&b=1|2|3&c=ccc|ppp&d=123
 *
 * const { get, set, getAll } = useSerializedSearchParams(schema, options);
 * get("a"); // true
 * get("b"); // [1, 2, 3]
 * set("a", false); // URL: http://localhost:3000/?a=false&b=1|2|3&c=ccc|ppp&d=123
 * get("a"); // false
 * getAll(); // { a: false, b: [1, 2, 3], c: ['ccc', 'ppp'], d: 123 }
 */
export function useSerializedSearchParams<T extends ZodRawShape>(
  schema: z.ZodObject<T>,
  options?: Partial<NavigateOptions<unknown>> | undefined
) {
  type SearchParams = z.infer<typeof schema>;
  const [searchParams, setSearchParams] = useSearchParams<SearchParams>();
  const deserializedParams = () => deserializeParams(searchParams);

  /**
   * Sets a key-value pair in the search parameters.
   *
   * @param {string} key - The key of the parameter.
   * @param {T | T[]} value - The value of the parameter. Can be a single value or an array of values.
   */
  function set<T extends string | number | boolean>(
    key: string,
    value: T | T[]
  ) {
    setSearchParams(serializeParams({ [key]: value }), options);
  }

  // value to string (SET)
  function serializeParams(
    params: SerializedParams = {},
    joinChar = DEFAULT_SEPARATOR
  ): Params {
    const serializedParams: Params = {};

    for (const [key, value] of Object.entries(params)) {
      serializedParams[key] = Array.isArray(value)
        ? value.join(joinChar)
        : value.toString();
    }

    return serializedParams;
  }

  /**
   * Retrieves the value associated with the specified key from the search parameters object.
   *
   * @param {keyof SearchParams} key - The key whose value should be retrieved.
   * @return The value associated with the specified key.
   */
  function get<K extends keyof SearchParams>(key: K): SearchParams[K] {
    return deserializedParams()[key];
  }

  // string to value (GET)
  function deserializeParams(
    params: Params,
    joinChar = DEFAULT_SEPARATOR
  ): SearchParams {
    const deserializedParams: SerializedParams = {};

    for (const [key, value] of Object.entries<string>(params)) {
      deserializedParams[key] = value.includes(joinChar)
        ? value.split(joinChar)
        : value;
    }

    return schema.parse(deserializedParams);
  }

  return {
    get,
    set,
    getAll: deserializedParams,
  };
}
