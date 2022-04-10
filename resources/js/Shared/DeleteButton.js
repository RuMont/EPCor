import React from 'react';
import PropTypes from 'prop-types';

export default function DeleteButton({ onDelete, children }) {
  return (
    <button
      className="text-red-600 focus:outline-none hover:underline"
      tabIndex="-1"
      type="button"
      onClick={onDelete}
    >
      {children}
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node
}
