import Banner from "@/components/Banner";
import BlogComponents from "@/components/BlogComponents";
import CardHouse from "@/components/CardHouse";
import HoverCard from "@/components/HoverCard";
import Review from "@/components/Review";

export default function Home() {
	return (
		<main>
			<Banner/>
			<CardHouse/>
			<HoverCard/>
			<Review/>
			<BlogComponents/>
		</main>
	);
}
