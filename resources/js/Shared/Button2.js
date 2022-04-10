import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, children, id }) => {
    return (
        <button
            className="w-full bg-cyan-600 hover:bg-cyan-500 rounded p-2 text-slate-100 outline-none focus:shadow-lg focus:shadow-cyan-600/50 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
            id={id}
            type={!type ? "button" : type}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    id: PropTypes.string
}

export default Button