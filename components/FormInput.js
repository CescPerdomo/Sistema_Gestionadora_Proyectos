// components/FormInput.js
"use client";

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  name,
  placeholder = "",
  required = false
}) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

