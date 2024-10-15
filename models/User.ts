import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: { type: String},
	lastName: { type: String },
	email: { type: String },
	password: { type: String, select: false },
	role: { type: String, default: "user" },
	image: { type: String },
	authProviderId: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
