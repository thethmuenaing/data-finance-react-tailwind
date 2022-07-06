import React from "react";

const Cards = () => {
	return (
		<div className="w-full bg-white text-black py-32 px-5">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10">
				<div className="w-full shadow-2xl rounded-md p-4 flex flex-col my-6 hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] mb-4"
						src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/single.png"
						alt="/"
					/>
					<h1 className="text-2xl font-bold text-center mb-8">Single User</h1>
					<p className="text-4xl font-bold text-center mb-8">$149</p>
					<div className="text-center font-medium mb-6">
						<p className="border-b py-2 mx-8">1 Granted User</p>
						<p className="border-b py-2 mx-8">Send up 2 GB</p>
						<p className="border-b py-2 mx-8">500 GB Storage</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] mx-auto mb-10 rounded-md py-3  font-medium">
						Start Trial
					</button>
				</div>

				<div className="w-full shadow-2xl bg-gray-100 rounded-md p-4 flex flex-col my-4 md:my-0 hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] mb-4"
						src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/double.png"
						alt="/"
					/>
					<h1 className="text-2xl font-bold text-center mb-8">Single User</h1>
					<p className="text-4xl font-bold text-center mb-8">$149</p>
					<div className="text-center font-medium mb-6">
						<p className="border-b py-2 mx-8">1 Granted User</p>
						<p className="border-b py-2 mx-8">Send up 2 GB</p>
						<p className="border-b py-2 mx-8">500 GB Storage</p>
					</div>
					<button className="bg-[#000300] text-[#00df9a ] w-[200px] mx-auto my-10 rounded-md py-3 font-medium">
						Start Trial
					</button>
				</div>

				<div className="w-full shadow-2xl rounded-md p-4 flex flex-col my-4 hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] mb-4"
						src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/triple.png"
						alt="/"
					/>
					<h1 className="text-2xl font-bold text-center mb-8">Single User</h1>
					<p className="text-4xl font-bold text-center mb-8">$149</p>
					<div className="text-center font-medium mb-6">
						<p className="border-b py-2 mx-8">1 Granted User</p>
						<p className="border-b py-2 mx-8">Send up 2 GB</p>
						<p className="border-b py-2 mx-8">500 GB Storage</p>
					</div>
					<button className="bg-[#00df9a] w-[200px] mx-auto mb-10 rounded-md py-3 font-medium">
						Start Trial
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
