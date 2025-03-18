"use client";

export default function FormInput({
  label,
  type = "text", //para efecto de pruebas se dejara 'text' pero puede ser 'email' o 'password' 
  value,
  onChange,
  placeholder = "",
  required = false,
  name,
}) {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
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
