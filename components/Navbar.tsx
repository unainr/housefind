
import React from "react";
import MainNavbar from "./MainNavbar";
import { getSession } from "@/lib/getSession";

const Navbar =  async () => {
	
	const session = await getSession();
	

	
	return (
		<>
		<MainNavbar session={session}/>
		</>
	);
};

export default Navbar;
