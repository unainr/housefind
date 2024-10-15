"use client";
import { login } from "@/actions/user";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MainForm = () => {
    const router = useRouter();
	return (
		<form
			action={async (formData) => {
				const email = formData.get("email") as string;
				const password = formData.get("password") as string;
				// if (!email || !password) toast.error("Please Provide all Fields");
				const toastid = toast.loading("Logging in");
				const error = await login(email, password);
				if (!error){
                    toast.success("Login Successfull", {
						id: toastid,
					});
                    router.push("/")


                }
					
				else {
					toast.error(String(error), {
						id: toastid,
					});

                    
				}
			}}>
			<div className="grid w-full items-center gap-4">
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
						placeholder="*********"
					/>
				</div>
				<Button type="submit" className="w-1/3 mx-auto" variant="default">
					Login
				</Button>
			</div>
		</form>
	);
};

export default MainForm;
