import clsx from "clsx";

/**
 * Renders a label for a form field.
 * @param {{
 * required?:boolean;
 * label?: string}} props
 */

export function UiFieldLabel({ label, required }) {
  return (
    <label
      htmlFor="example2"
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 ",
      )}
    >
      {label}
    </label>
  );
}
