import React from "react";
import { Button } from "@/components/ui/button";
import AuthProviders from "./AuthProviders";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { register } from "@/actions/user";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";


const RegisterForm = async () => {
	const session = await getSession();
	const user = session?.user;
	if(user) redirect('/');    
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Regsiter</CardTitle>
					<CardDescription>Welcome To House Find</CardDescription>
				</CardHeader>
				<CardContent>
					<form action={register}>
						
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Input
									name="firstname"
									type="text"
									id="name"
									placeholder="Enter Name"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Input
									name="lastname"
									type="text"
									id="lastname"
									placeholder="Enter Last name"
								/>
							</div>

							<div className="flex flex-col space-y-1.5">
								<Input
									id="email"
									type="email"
									name="email"
									placeholder="Enter Email"
								/>
							</div>

							<div className="flex flex-col space-y-1.5">
								<Input
									id="password"
									type="password"
									name="password"
									placeholder="Password"
								/>
							</div>
                            <Button type="submit" className="w-1/3 mx-auto" variant="default">
						Sign in
					</Button>
							
						</div>
						
					</form>
					<div className="my-4 space-y-2">

					<AuthProviders/>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col-reverse">
					<p>
						Alreay have an account? <Link href={"/login"}>Login</Link>
					</p>
					
				</CardFooter>
			</Card>
		</div>
	);
};

export default RegisterForm;
