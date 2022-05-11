import React from 'react';
import MainMenuItem from './MainMenuItem';
import PropTypes from 'prop-types';

export default function MainMenu ({ className }) {
  return (
    <div className={className}>
      <MainMenuItem text="Tablero" link="/dashboard" icon="dashboard" />
      <MainMenuItem text="Buscador" link="/tool" icon="book" />
      <MainMenuItem text="F.A.Q" link="/faqs" icon="printer" />
    </div>
  );
};

MainMenu.propTypes = {
  className: PropTypes.string
}
