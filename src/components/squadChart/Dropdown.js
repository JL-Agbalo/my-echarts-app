import React from "react";

const Dropdown = ({ options, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
