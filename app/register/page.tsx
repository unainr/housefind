import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import React from "react";


const Resgister =  () => {
	return (
		<RegisterForm/>
	);
};

export default Resgister;

export const metadata: Metadata = {
	title: "Register",
	description: "Create an account or log in to access your personalized dashboard, save your favorite listings, and receive tailored recommendations. Join the HouseFind community and find your perfect home today.",
  };