import { Button } from "@/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [hasClicked, setHasClicked] = useState(false);

	const [isLoading, setIsLoading] = useState(true);
	const [loadedVideos, setLoadedVideos] = useState(0);

	const nextVideoRef = useRef(null);
	const totalVideos = 4;

	const handleVideoLoaded = () => setLoadedVideos((prev) => prev + 1);

	useEffect(() => {
		if (loadedVideos === totalVideos - 1) {
			setIsLoading(false);
		}
	}, [loadedVideos]);

	const handleMiniVdClick = () => {
		setHasClicked(true);
		setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
	};

	/**
	 * Utiliza GSAP para animar los videos cuando se hace clic en el video miniatura.
	 * Si hasClicked es verdadero, se configura el video siguiente para ser visible,
	 * se escala al tamaño completo y se reproduce. El video actual se reduce de escala.
	 *
	 * @param {boolean} hasClicked - Indica si se ha hecho clic en el video miniatura.
	 * @param {React.RefObject} nextVideoRef - Referencia al video siguiente.
	 */
	useGSAP(
		() => {
			if (hasClicked) {
				gsap.set("#next-video", { visibility: "visible" });
				gsap.to("#next-video", {
					transformOrigin: "center center",
					scale: 1,
					width: "100%",
					height: "100%",
					duration: 0.8,
					ease: "power1.inOut",
					onStart: () => nextVideoRef.current.play()
				});
				gsap.from("#current-video", {
					transformOrigin: "center center",
					scale: 0,
					duration: 2,
					ease: "power1.inOut"
				});
			}
		},
		{ dependencies: [currentIndex], revertOnUpdate: true }
	);

	useGSAP(() => {
		gsap.set("#video-frame", {
			clipPath: "polygon(35% 10%, 60% 4%, 90% 90%, 20% 80%)",
			borderRadius: "0 0 5% 5%"
		});
		gsap.from("#video-frame", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			borderRadius: "0 0 0 0",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#video-frame",
				start: "center center",
				end: "bottom top",
				scrub: true
			}
		});
	});

	const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			{isLoading && (
				<div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden">
					<div className="three-body">
						<div className="three-body__dot" />
						<div className="three-body__dot" />
						<div className="three-body__dot" />
					</div>
				</div>
			)}

			<div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
				<div>
					<div className="mask-clip-path absolute-center absolute  z-50 size-52 cursor-pointer overflow-hidden rounded-lg">
						<div
							id="mini-video"
							onClick={handleMiniVdClick}
							className="origin-center aspect-square  max-sm:mt-16 size-20 md:size-64  md:scale-50 md:hover:scale-110 md:opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in">
							<video
								id="current-video"
								ref={nextVideoRef}
								src={getVideoSrc((currentIndex % totalVideos) + 1)}
								loop
								muted
								// autoPlay
								className="size-20 md:size-64 origin-center md:scale-150  max-sm:border md:border-black max-sm:shadow-lg  rounded-lg  object-cover object-center"
								onLoadedData={handleVideoLoaded}
							/>
						</div>
					</div>

					<video
						ref={nextVideoRef}
						src={getVideoSrc(currentIndex)}
						loop
						muted
						// autoPlay
						id="next-video"
						className="absolute-center  invisible absolute z-20 size-64 object-cover object-center"
						onLoadedData={handleVideoLoaded}
					/>

					<video
						src={getVideoSrc(1)}
						autoPlay
						loop
						muted
						className="absolute left-0 top-0 size-full object-cover object-center"
						onLoadedData={handleVideoLoaded}
					/>
				</div>

				<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
					G<b>A</b>MING
				</h1>

				<div className="absolute left-0 top-0 z-40 size-full">
					<div className="mt-24 px-5 sm:px-10">
						<h1 className="special-font  hero-heading text-blue-100">
							redefi<b>n</b>e
						</h1>
						<p className="mb-5 max-w-64 font-robert-regular text-blue-100 text-base xl:text-xl ">
							Enter the Metagame Layer <br /> Unleash the Play Economy
						</p>
						<Button
							id="watch-trailer"
							title="Watch Trailer"
							leftIcon={<TiLocationArrow />}
							containerClass="!bg-yellow-300 flex-center gap-1"
						/>
					</div>
				</div>
			</div>

			<h1 className="special-font  hero-heading absolute bottom-5 right-5  text-black">
				G<b>A</b>MING
			</h1>
		</div>
	);
};

export default Hero;
