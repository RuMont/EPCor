import React from 'react';
// import cx from 'classnames';

const LoadingButton = ({ className, children, ...props }) => {
  // const classNames = cx(
  //   'flex items-center',
  //   'focus:outline-none',
  //   {
  //     'pointer-events-none bg-opacity-75 select-none': loading
  //   },
  //   className
  // );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default LoadingButton;
