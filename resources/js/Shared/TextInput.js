import React from 'react';

const TextInput = React.forwardRef(({ label, name, className, ...props }, ref) => {
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
				ref={ref}
				{...props}
				className={`form-input`}
			/>
		</div>
	)
});

TextInput.displayName = 'TextInput';

export default TextInput;
