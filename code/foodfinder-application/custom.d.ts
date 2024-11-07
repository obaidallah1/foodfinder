import mongoose from "mongoose";
import { DefaultSession } from "next-auth";
declare global {
    var mongoose: mongoose;
}
declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }
}

export interface LocationType {
    address: string;
    street: string;
    zipcode: string;
    borough: string;
    cuisine: string;
    grade: string;
    name: string;
    on_wishlist: string[];
    location_id: string;
}