import React from "react";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div className="flex justify-center items-center text-center py-36 max-w-[800px] h-screen mx-auto">
			<div className="space-y-9">
				<p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
				<h1 className="md:text-7xl sm:text-6xl text-5xl font-bold">
					Grow with data.
				</h1>
				<div>
					<span className="md:text-5xl sm:text-4xl text-3xl font-bold">
						Fast,flexible financing for
					</span>
					<Typed
						className="md:text-4xl sm:text-3xl text-2xl font-bold pl-4"
						strings={["BTB", "BTC", "SASS"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl font-bold text-gray-600 px-5">
					Monitor your data analytics to increase revenue for BTB, BTC, & SASS
					platforms.
				</p>
				<button className="w-[200px] bg-[#00df9a] py-3 rounded-md text-black font-medium">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
