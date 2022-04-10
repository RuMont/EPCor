import React from 'react';

const TextInput = ({ label, name, className, ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className={`form-input`}
      />
    </div>
  );
};

export default TextInput;
