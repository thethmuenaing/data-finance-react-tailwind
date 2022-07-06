import React from "react";

const Newsletter = () => {
	return (
		<div className="w-full py-16 px-5">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 space-y-4">
				<div className="lg:col-span-2 space-y-4">
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
						Want tips & triks to optimize your flow?
					</h1>
					<p>Sign up to our newsletter and stay up to date.</p>
				</div>
				<div>
					<div className="flex flex-col sm:flex-row items-center justify-between w-full">
						<input
							type="email"
							placeholder="Enter Email"
							className="text-black flex w-full p-3 rounded-md font-semibold focus:outline-none"
						/>
						<button className="w-[200px] py-3 bg-[#00df9a] text-black rounded-md ml-4 my-4">
							Notify me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our
						<span className="text-[#00df9a]"> Privacy Policy.</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
