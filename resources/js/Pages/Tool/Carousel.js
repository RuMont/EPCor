import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import PropTypes from 'prop-types';

/**
 * Items del carousel
 * @param {JSX.Element} children
 * @returns 
 */
export const CarouselItem = ({ children, width }) => {
	return (
		<div className="carousel-item" style={{ width: width }}>
			{children}
		</div>
	);
};

CarouselItem.propTypes = {
	children: PropTypes.node,
	width: PropTypes.string
}

/**
 * Componente del carousel
 * @param {JSX.Element} children 
 * @returns 
 */
const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	// Indices para la "paginación"
	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	// En el useEffect se establece la animación para pasar entre cartas
	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, 6000);

		return () => {
			// Se activa cuando activamos un evento que pausa el intervalo
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	// Eventos para ir hacia atrás o hacia adelante
	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1)
	});

	return (
		<div
			{...handlers}
			className="carousel"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</div>
			<div className="indicators flex flex-wrap justify-between sm:justify-start">
				<button
					className="w-5/12 sm:w-fit mt-2 mr-1 px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-50"
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}
				>
					Atrás
				</button>

				<div className="hidden md:block">
					{React.Children.map(children, (child, index) => {
						return (
							<button
								className={`${index === activeIndex ? "active" : ""} mt-2 mr-1 px-6 py-3 rounded border border-indigo-700 text-indigo-700 text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500`}
								onClick={() => {
									updateIndex(index);
								}}
							>
								{index + 1}
							</button>
						);
					})}
				</div>

				<button
					className="w-5/12 sm:w-fit mt-2 mr-1 px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}
				>
					Adelante
				</button>
			</div>
		</div>
	);
};

Carousel.propTypes = {
	children: PropTypes.node
}

export default Carousel;