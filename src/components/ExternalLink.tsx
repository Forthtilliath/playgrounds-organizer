import { ParentProps } from "solid-js";

type Props = {
  href: string;
  class?: string;
};

export function ExternalLink(props: ParentProps<Props>) {
  return (
    <a
      href={props.href}
      class={props.class}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </a>
  );
}
