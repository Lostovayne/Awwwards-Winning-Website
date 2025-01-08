import { useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/Button";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [hasClicked, setHasClicked] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [loadedVideos, setLoadedVideos] = useState(0);
	const nextVideoRef = useRef(null);
	const totalVideos = 4;

	const handleVideoLoaded = () => setLoadedVideos((prev) => prev + 1);
	const handleMiniVdClick = () => {
		setHasClicked(true);
		setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
	};
	const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

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
				gsap.set("#next-video", { visibility: true });
				gsap.to("#next-video", {
					transformOrigin: "center center",
					scale: 1,
					width: "100%",
					height: "100%",
					duration: 1,
					ease: "power1.inOut",
					onStart: () => nextVideoRef.current.play()
				});
				gsap.from("#current-video", {
					transformOrigin: "center center",
					scale: 0,
					duration: 1.5,
					ease: "power1.inOut"
				});
			}
		},
		{ dependencies: [currentIndex], revertOnUpdate: true }
	);

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			<div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
				<div>
					<div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
						<div
							onClick={handleMiniVdClick}
							className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
							<video
								src={getVideoSrc((currentIndex % totalVideos) + 1)}
								ref={nextVideoRef}
								loop
								id="current-video"
								muted
								autoPlay
								className="size-64 origin-center scale-150 object-cover object-center"
								onLoadedData={handleVideoLoaded}
							/>
						</div>
					</div>
					<video
						src={getVideoSrc(currentIndex)}
						ref={nextVideoRef}
						loop
						muted
						autoPlay
						id="next-video"
						className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
						onLoadedData={handleVideoLoaded}
					/>

					<video
						src={getVideoSrc(currentIndex === totalVideos + 1 ? 1 : currentIndex)}
						autoPlay
						loop
						muted
						className="absolute size-full object-cover object-center"
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
