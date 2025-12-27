"use client";

import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

interface CountUpWrapperProps {
	start: number;
	end: number;
	duration: number;
}

export default function CountUpWrapper({ start, end, duration }: CountUpWrapperProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setIsVisible(true);
					setHasAnimated(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [hasAnimated]);

	return (
		<span ref={ref}>
			{isVisible ? (
				<CountUp start={start} end={end} duration={duration} />
			) : (
				start
			)}
		</span>
	);
}
