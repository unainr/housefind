"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkToggle from "./DarkToggle";
import SignOut from "./SignOut";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainNavbar = ({ session }: { session: any }) => {
	const [state, setState] = useState(false);
	const pathname = usePathname(); // Get the current path

	// Define your navigation items
	const navigation = [
		{ title: "Home", path: "/" },
		{ title: "About", path: "/about" },
		{ title: "Property", path: "/property" },
	];

	useEffect(() => {
		document.onclick = (e) => {
			const target = e.target as any;
			if (!target.closest(".menu-btn")) setState(false);
		};
		
	}, []);

	// Function to check if the current path matches the navigation path
	const isActive = (path: string) => pathname === path;

	return (
		<nav
			className={`bg-white dark:bg-black  border-b  sticky top-0 backdrop-blur  z-30 scroll-p-16 ${
				state
					? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
					: ""
			}`}>
			<div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
				<div className="flex items-center justify-between py-1 md:block">
					<Link href="/">
						<img
							src="/images/logo2.png"
							width={94}
							height={50}
							alt="house find"
						/>
					</Link>
					<div className="md:hidden">
						<button
							className="menu-btn text-gray-500 hover:text-gray-800"
							onClick={() => setState(!state)}>
							{state ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
						state ? "block" : "hidden"
					} `}>
					<ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
						{navigation.map((item, idx) => {
							return (
								<li
									key={idx}
									className={`${
										isActive(item.path)
											? "text-violet-600 font-semibold"
											: " hover:text-violet-900"
									}`}>
									<Link href={item.path}>{item.title}</Link>
								</li>
							);
						})}
					</ul>
					<div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
						{!session ? (
							<>
								<Link
									href="/login"
									className={`${
										isActive("/login")
											? "text-violet-600 font-semibold"
											: " hover:text-violet-900"
									}`}>
									Log in
								</Link>
								<Link
									href="/register"
									className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-violet-800 hover:bg-violet-900 active:bg-violet-700 rounded-full md:inline-flex">
									Sign Up
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-5 h-5">
										<path
											fillRule="evenodd"
											d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</>
						) : (
							<>
								<DropdownMenu>
									<DropdownMenuTrigger>Account</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<SignOut />
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						)}
						<div className="hidden sm:block">
							<DarkToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MainNavbar;
