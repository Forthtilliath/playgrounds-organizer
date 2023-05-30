import { A } from "solid-start";

type Props = {
  tag: string;
};

export function CardBadge(props: Props) {
  return (
    <A
      class="flex items-center no-underline hover:underline text-blue-800 dark:text-blue-200"
      href={"" + props.tag.toLowerCase()}
    >
      <span class="bg-blue-100 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900">
        {props.tag}
      </span>
    </A>
  );
}
