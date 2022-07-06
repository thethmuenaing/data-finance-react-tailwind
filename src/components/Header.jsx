import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="fixed w-full bg-[#000300]">
			<div className="flex items-center justify-between py-6 px-5 max-w-[1240px] mx-auto">
				<h1 className="w-full text-[#00df9a] text-3xl font-bold">REACT.</h1>

				<ul className="md:flex items-center justify-between hidden">
					<li className="px-3 cursor-pointer">Home</li>
					<li className="px-3 cursor-pointer">Company</li>
					<li className="px-3 cursor-pointer">Resources</li>
					<li className="px-3 cursor-pointer">About</li>
					<li className="px-3 cursor-pointer">Contact</li>
				</ul>
				<div onClick={handleNav} className="block md:hidden">
					{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
				<div
					className={
						nav
							? "fixed top-16 left-0 w-[50%] border-r border-r-gray-800 bg-[#000300] duration-500 ease-in-out"
							: "fixed left-[-100%] top-16 duration-1000 ease-in-out"
					}
				>
					<ul className="uppercase ">
						<li className="py-4 pl-5 border-b border-gray-600 cursor-pointer">
							Home
						</li>
						<li className="py-4 pl-5 border-b border-gray-600 cursor-pointer">
							Company
						</li>
						<li className="py-4 pl-5 border-b border-gray-600 cursor-pointer">
							Resources
						</li>
						<li className="py-4 pl-5 border-b border-gray-600 cursor-pointer">
							About
						</li>
						<li className="py-4 pl-5 cursor-pointer">Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
