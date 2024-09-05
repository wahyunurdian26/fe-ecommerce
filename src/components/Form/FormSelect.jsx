import React from "react";

const FormSelect = ({ label, name, list, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="capitalize label-text"> {label}</span>
      </label>
      <select
        name={name}
        className="select select-bordered"
        defaultValue={defaultValue}
      >
        {list && list.length > 0 ? (
          list.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    </div>
  );
};

export default FormSelect;
