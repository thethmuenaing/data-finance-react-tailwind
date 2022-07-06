import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

function App() {
	return (
		<div className="text-white">
			<Header />
			<Hero />
			<Analytics />
			<Newsletter />
			<Cards />
			<Footer />
		</div>
	);
}

export default App;
