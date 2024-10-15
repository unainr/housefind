import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
	fullName: { type: String},
	email: { type: String },
    phone:{type:BigInt},
    date:{type:String},
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const Owner = mongoose.models?.Owner || mongoose.model("Owner", ownerSchema);
