import AboutCard from "@/components/AboutCard";
import BlogComponents from "@/components/BlogComponents";
import Review from "@/components/Review";
import React from "react";

const About = () => {
	return (
		<>
			<div className="block">
				<div className="border-t">
					<div className="bg-background">
						{/* Hero Section */}
						<div className="relative bg-gradient-to-r from-violet-600 to-slate-400 p-8 lg:p-12">
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
								Find your perfect home, where every detail is designed for your
								comfort.
							</h1>
							<p className="text-base md:text-lg text-white text-center mt-4">
								Explore homes designed to inspire, live in spaces crafted for
								life
							</p>
						</div>
					</div>
				</div>
			</div>

			<AboutCard />
			<Review />
			<BlogComponents />
		</>
	);
};

export default About;
