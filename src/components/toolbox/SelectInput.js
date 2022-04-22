import React from "react";

function SelectInput({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default SelectInput;
