"use server";

import connectDB from "@/lib/db";
import { Owner } from "@/models/Owner";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^[0-9]{11}$/.test(phone);

const schedule = async (formData:FormData) =>{
	const fullName = formData.get("fullname") as string;
	const email = formData.get("email") as string;
	const phone = formData.get("phone") as string;
	const date = formData.get("date") as string;

try{

    if (!fullName || !phone || !email || !date) {
        throw new Error("All fields are required.", { cause: "ValidationError" });
	}
    if (!isValidEmail(email)) {
        throw new Error("Invalid email format.", { cause: "InvalidEmail" });
    }

    if (!isValidPhone(phone)) {
        throw new Error("Invalid phone number format.", { cause: "InvalidPhone" });
    }
	await connectDB();
    
    await Owner.create({ fullName, email, phone, date});
    return { success: true, message: "Your request has been submitted successfully" };
    
    console.log("user created successfully ");
}catch(error: any){

    return { success: false, message: error.message, cause: error.cause || "UnknownError" };

}
}

export { schedule};