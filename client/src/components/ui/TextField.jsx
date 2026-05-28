import './TextField.css';

export default function TextField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  required = false,
}) {
  return (
    <label className="text-field" htmlFor={id}>
      <span className="text-field__label">{label}</span>
      <input
        id={id}
        className="text-field__input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}
