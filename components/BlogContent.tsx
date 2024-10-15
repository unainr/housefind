import React from "react";

const BlogContent = () => {
	const blogPosts = [
		{
			id: 1,
			title: "How to Find a Good Real Estate Agent",
			description:
				"Finding a good real estate agent can make a big difference in your home-buying or selling experience. Here's a simple guide to help you choose the right one",
			date: "2024-09-15",
			image: "/images/blog3.jpg",
		},
		{
			id: 2,
			title: "15 Ways to Negotiate Your Lease Price",
			description:
				"Negotiating your lease price can save you money and potentially get you better terms. Here are 15 tips to help you negotiate effectively.",
			date: "2024-09-10",
			image: "/images/blog2.jpg",
		},
		{
			id: 3,
			title: "Houses Designed by Interior Experts",
			description:
				"Interior experts can transform your house into a beautiful, functional, and personalized living space. Here are some key features of houses designed by interior experts.",
			date: "2024-09-05",
			image: "/images/blog1.jpg",
		},
	];

	return (
		<>
			{blogPosts.map((post) => (
  <li
    key={post.id}
    className="relative flex flex-col justify-between  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1"
  >
    <div className="relative w-full aspect-video overflow-hidden rounded-t-xl group">
      <img
        className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
        src={post.image}
        alt={post.title}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="text-2xl font-extrabold text-white drop-shadow-lg group-hover:text-violet-400 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="font-medium text-sm text-gray-300 group-hover:text-violet-300 transition-colors duration-300">
          {post.date}
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-4 p-6 bg-gradient-to-b">
      <p className=" font-light text-md line-clamp-2 transition-colors duration-300 group-hover:text-gray-900">
        {post.description}
      </p>
     
    </div>
  </li>
))}

		</>
	);
};

export default BlogContent;
