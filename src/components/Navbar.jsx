import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { Button } from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
	const navContainerRef = useRef(null);
	const audioElementRef = useRef(null);
	// const audioHoverRef = useRef(new Audio("/audio/ui.mp3"));

	const [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const [isIndicatorActive, setIsIndicatorActive] = useState(false);
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const toggleAudioIndicator = () => {
		setIsAudioPlaying((prevState) => !prevState);
		setIsIndicatorActive((prevState) => !prevState);
	};

	useEffect(() => {
		if (isAudioPlaying) {
			audioElementRef.current.play();
		} else {
			audioElementRef.current.pause();
		}
	}, [isAudioPlaying]);

	const { y: currentScrollY } = useWindowScroll();

	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavbarVisible(true);
			navContainerRef.current.classList.remove("floating-nav");
		} else if (currentScrollY > lastScrollY) {
			setIsNavbarVisible(false);
			navContainerRef.current.classList.add("floating-nav");
		} else if (currentScrollY < lastScrollY) {
			setIsNavbarVisible(true);
			navContainerRef.current.classList.add("floating-nav");
		}

		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavbarVisible ? 0 : -100,
			opacity: isNavbarVisible ? 1 : 0,
			duration: 0.2
		});
	}, [isNavbarVisible]);

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 h-16 top-4 z-50 border-none transition-all duration-700 sm:inset-x-6">
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-between p-4">
					<div className="flex items-center gap-7">
						<img src="/img/logo.png" alt="logo" className="w-10" />
						<Button
							id="product-button"
							title="Products"
							rightIcon={<TiLocationArrow />}
							containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
						/>
					</div>

					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((item) => (
								<a key={item} href={`/${item.toLowerCase()}`} className="nav-hover-btn">
									{item}
								</a>
							))}
						</div>

						<button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
							<audio className="hidden" ref={audioElementRef} src="/audio/loop.mp3" loop />
							{[1, 2, 3, 4].map((bar) => (
								<div
									className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
									key={bar}
									style={{ animationDelay: `${bar * 0.1}s` }}
								/>
							))}
						</button>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
