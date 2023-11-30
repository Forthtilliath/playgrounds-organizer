import { ParentProps } from "solid-js";

export function Divider() {
  return <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />;
}

export function DividerWithLabel({ children }: ParentProps) {
  return (
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
        {children}
      </span>
    </div>
  );
}
