import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimateTitle from "./AnimateTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=450 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true
			}
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100%",
			height: "100%",
			borderRadius: 0
		});
	});

	return (
		<div id="about" className="min-h-screen w-dvw">
			<div className="relative mb-8  mt-36 flex flex-col items-center gap-5">
				<h2 className="font-general text-sm uppercase md:text-[10px]">Welcome to Zentry</h2>
				<AnimateTitle
					title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
					containerClass={"mt-5 !text-black text-center"}
				/>
				<div className="about-subtext">
					<p className="text-black">The Metagame begins-your life, now an epic MMORPG</p>
					<div>
						<p className="text-gray-500/80">
							Zentry is the unified play layer that bridges players, agentic AI, and blockchains, creating a
							new era of gaming.
						</p>
					</div>
				</div>
			</div>

			<div className="h-lvh md:h-dvh w-full" id="clip">
				<div className="mask-clip-path about-image overflow-clip">
					<img src="img/about.webp" alt="Background" className="absolute inset-0  size-full object-cover " />
				</div>
			</div>
		</div>
	);
};

export default About;
