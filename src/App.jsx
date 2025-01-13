import Hero from "@/components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
	return (
		<>
			<main className="relative min-h-screen w-dvw overflow-x-clip">
				<Navbar />
				<Hero />
				<About />
				<Features />
				<Story />
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default App;
