"use client"; // Mark the component as a client component

import React from "react";
import { Button } from "./ui/button"; 
import { signOutAction } from "@/actions/user";

const SignOut = () => {
  return (
	<form
	action={signOutAction}
  >
	<Button variant={"outline"} type="submit">Logout</Button>
  </form>
  );
};

export default SignOut;
