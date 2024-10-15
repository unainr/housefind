"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import  { CredentialsSignin } from "next-auth";
import { signIn, signOut } from "@/auth";


const register = async (formData: FormData) => {
	const firstName = formData.get("firstname") as string;

	const lastName = formData.get("lastname") as string;

	const email = formData.get("email") as string;

	const password = formData.get("password") as string;

	if (!firstName || !lastName || !email || !password) {
		throw new Error("All fields are required");
	}

	await connectDB();

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		throw new Error("user already exists");
	}

	const hashedpassword = await hash(password,12);

	await User.create({ firstName, lastName, email, password:hashedpassword });

	console.log("user created successfully ");
	redirect("/login");
};

// login action

const login = async(email: string, password: string) =>{

	try {
		await signIn("credentials", {
		  redirect: false,
		  callbackUrl: "/",
		  email,
		  password,
		});
	  } catch (error) {
		const someError = error as CredentialsSignin;
		return someError.cause;
	  }
	  redirect("/");


}

const signOutAction  = async(formData: FormData) =>{

	await signOut();

}

export { register , login,signOutAction};


