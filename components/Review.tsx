"use client"
import { useState } from "react"

const Review = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        {
            avatar: "/images/re3.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
        },
        {
            avatar: "/images/re2.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum."
        },
        {
            avatar: "/images/re1.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati "
        },
    ]
  return (
    <section className="py-14 ">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-violet-600 font-semibold text-lg sm:text-xl pb-6">
                What people are saying
            </h3>
            <ul>
                {testimonials.map((item, idx) => (
                    currentTestimonial === idx ? (
                        <li key={idx} className="transition-opacity duration-500 ease-in-out">
                            <figure className="flex flex-col items-center">
                                <blockquote className="text-center">
                                    <p className=" text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed italic">
                                        “{item.quote}“
                                    </p>
                                </blockquote>
                                <div className="mt-6 text-center">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover mx-auto rounded-full shadow-lg border-4 "
                                    />
                                    <div className="mt-4">
                                        <span className="block  font-semibold text-lg">
                                            {item.name}
                                        </span>
                                        <span className="block  text-sm mt-0.5">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </figure>
                        </li>
                    ) : null
                ))}
            </ul>
        </div>
        {/* Navigation dots */}
        <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((item, idx) => (
                <button
                    key={idx}
                    className={`w-4 h-4 rounded-full ring-2 ring-offset-2 focus:outline-none focus:ring-indigo-600 ${
                        currentTestimonial === idx ? 'bg-violet-600' : 'bg-gray-300'
                    } hover:bg-indigo-500 transition-colors duration-300`}
                    onClick={() => setCurrentTestimonial(idx)}
                ></button>
            ))}
        </div>
    </div>
</section>

  )
}

export default Review



