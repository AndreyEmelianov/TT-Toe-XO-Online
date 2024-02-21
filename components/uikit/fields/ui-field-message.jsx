import clsx from "clsx";

/**
 * @param {{
 *   helperText: string,    // The helper text.
 *   errorText: string,     // The error text.
 * }} props
 * @returns {JSX.Element|null}
 */

export function UiFieldMessage({ helperText, errorText }) {
  const isError = !!errorText;
  const messageText = errorText || helperText;

  return (
    <p
      className={clsx(
        "mt-1 text-sm",
        isError ? "text-orange-600" : "text-slate-500",
      )}
    >
      {messageText}
    </p>
  );
}
