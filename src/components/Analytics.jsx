import React from "react";

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-5">
			<div className="max-w-[1240px] mx-auto">
				<div className="grid md:grid-cols-2">
					<img
						className="w-[500px] mx-auto my-4"
						src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg"
						alt="laptop.jpg"
					/>
					<div className="flex flex-col justify-center space-y-3">
						<h1 className="text-[#00df9a] font-bold">
							DATA ANALYTICS DASHBOARD
						</h1>
						<h1 className="text-black md:text-4xl sm:text-3xl text-2xl font-bold">
							Manage Data Analytics Centrally
						</h1>
						<p className="text-black">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
							tenetur explicabo distinctio commodi alias, reprehenderit debitis
							iste quasi rerum maiores quaerat officiis voluptates sed
							architecto vitae quisquam provident itaque nobis.
						</p>
						<button className="bg-black text-[#00df9a] font-medium w-[200px] mx-auto md:mx-0 rounded-md py-3 ">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
