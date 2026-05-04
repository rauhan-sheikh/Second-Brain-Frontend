import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface InputProp {
  label?: string;
  placeholder?: string;
  reference?: React.RefObject<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
  >;
  type?:
    | "text"
    | "textarea"
    | "select"
    | "password"
    | "number"
    | "email"
    | "date";
  value?: string | number;
  options?: Option[];
  className?: string;
}

export function Input({
  label,
  placeholder,
  reference,
  type = "text",
  value,
  options = [],
  className = "",
}: InputProp) {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="mb-2 font-semibold">{label}</label>}
      {type === "textarea" ? (
        <textarea
          ref={reference as React.RefObject<HTMLTextAreaElement>}
          placeholder={placeholder}
          defaultValue={value as string}
          className="p-2 border border-gray-300 rounded placeholder-gray-400"
        />
      ) : type === "select" ? (
        <select
          ref={reference as React.RefObject<HTMLSelectElement>}
          defaultValue={value as string | number}
          className="p-2 border border-gray-300 rounded placeholder-gray-400"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          ref={reference as React.RefObject<HTMLInputElement>}
          type={type}
          placeholder={placeholder}
          defaultValue={value as string | number}
          className="p-2 border border-gray-300 rounded placeholder-gray-400"
        />
      )}
    </div>
  );
}
