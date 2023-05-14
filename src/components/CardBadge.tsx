import { ExternalLink } from "./ExternalLink";

type Props = {
    tag:string
};

export function CardBadge(props: Props) {
  return (
    <ExternalLink
      class="flex items-center no-underline hover:underline text-black"
      href={"" + props.tag.toLowerCase()}
    >
      <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {props.tag}
      </span>
    </ExternalLink>
  );
}
