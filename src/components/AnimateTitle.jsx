import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* eslint-disable react/prop-types */

gsap.registerPlugin(ScrollTrigger);

const AnimateTitle = ({ title, containerClass }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "100 bottom", // Inicia cuando el contenedor está cerca del viewport inferior
					end: "center bottom", // Finaliza cuando el contenedor alcanza el centro del viewport
					toggleActions: "play none none none", // Se dispara cada vez que entra en el viewport
					onEnter: () => {
						// Animación solo al hacer scroll hacia abajo
						gsap.to(containerRef.current.querySelectorAll(".animated-word"), {
							opacity: 1,
							transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
							ease: "power2.inOut",
							stagger: 0.02
						});
					},
					onLeaveBack: () => {
						// Restablece la animación a su estado inicial cuando el contenedor sale del viewport
						gsap.to(containerRef.current.querySelectorAll(".animated-word"), {
							opacity: 0,
							transform: "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
							transformOrigin: "50% 50% -150px", // Restablece el transform-origin
							willChange: "opacity, transform", // Añadido a la restauración
							ease: "power2.inOut",
							stagger: 0.02
						});
					}
				}
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className={`animated-title ${containerClass}`} ref={containerRef}>
			{title.split("<br />").map((line, index) => (
				<div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
					{line.split(" ").map((word, index) => (
						<span key={index} className="animated-word" dangerouslySetInnerHTML={{ __html: word }} />
					))}
				</div>
			))}
		</div>
	);
};

export default AnimateTitle;
