import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="text-gray-300 max-w-[1240px] mx-auto px-5 py-16 grid lg:grid-cols-3 gap-8">
			<div>
				<h1 className="text-[#00df9a] w-full text-3xl font-bold">REACT.</h1>
				<p className="py-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum aut
					ipsa accusamus! Adipisci corrupti necessitatibus hic sit quaerat
					mollitia? Voluptates reprehenderit porro eius odit cupiditate possimus
					sit iusto ab.
				</p>
				<div className="flex justify-between items-center md:w-[75%] my-6">
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaTwitterSquare size={30} />
					<FaGithubSquare size={30} />
					<FaDribbbleSquare size={30} />
				</div>
			</div>

			<div className="lg:col-span-2 flex justify-between">
				<div>
					<h5 className="text-xl font-medium text-gray-500">Solution</h5>
					<ul>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Insights</li>
					</ul>
				</div>

				<div>
					<h6 className="font-medium text-gray-400">Support</h6>
					<ul>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guids</li>
						<li className="py-2 text-sm">API Status</li>
					</ul>
				</div>

				<div>
					<h6 className="font-medium text-gray-400">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Press</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
				</div>

				<div>
					<h6 className="font-medium text-gray-400">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Claim</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
