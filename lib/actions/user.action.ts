"use server"

import User from "@/database/user.model";
import { connectdatabase } from "../mongoose"

export async function getUserById(params:any) {
    try {
        connectdatabase();
        const {userId} = params;
        const user = await User.findOne({clerkId:userId})
        return user;
    } catch (error) {
        console.log("user not found",error)
    }
}