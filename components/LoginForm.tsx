import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";
import MainForm from "./MainForm";



const LoginForm = async () => {
	
	const session = await getSession();
	const user = session?.user;
	if(user) redirect('/'); 
	   
	
	console.log(session);
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Login To Myshop</CardDescription>
				</CardHeader>
				<CardContent>
					<MainForm/>
					<div className="my-4 space-y-2">

					<AuthProviders/>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					
					<p>
						Don't have an account? <Link href={"/register"}>Register</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default LoginForm;
