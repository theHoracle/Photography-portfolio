import prisma from "@/utils/prisma"
import { NextResponse } from "next/server";

// get all  reviews
export const GET = async () => {
    try {
        const review = await prisma.review.findMany();
        console.log("review: ", review)
        return NextResponse.json({review}, {status: 200})
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "AN ERROR OCCURRED!"}, {status: 500})
    }
} 