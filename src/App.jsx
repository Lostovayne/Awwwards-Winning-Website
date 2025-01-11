import Hero from "@/components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {
	return (
		<>
			<main className="relative min-h-screen w-dvw overflow-x-clip">
				<Navbar />
				<Hero />
				<About />
				<Features />
			</main>
		</>
	);
}

export default App;
