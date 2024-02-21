/**
 * @param {{
 * label?: string,
 * className?: string,
 * helperText?: string,
 * errorText?: string
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

import clsx from "clsx";

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  ...inputProps
}) {
  return (
    <div className={className}>
      {label && (
        <label
          for="example2"
          className={clsx(
            required && "after:text-orange-600 after:content-['*']",
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5 ",
          )}
        >
          {label}
        </label>
      )}

      <input
        type="email"
        id="example2"
        required={required}
        className={clsx([
          `py-2 px-2 leading-tight outline-0 border  block w-full rounded-md
            shadow-sm  focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
          `,
          errorText
            ? `focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600 `
            : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-300 ",
        ])}
        {...inputProps}
      />

      {(helperText || errorText) && (
        <p
          class={clsx(
            "mt-1 text-sm",
            errorText ? "text-orange-600" : "text-slate-500",
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}
