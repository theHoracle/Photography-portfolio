import prisma from "@/utils/prisma"
import { NextResponse } from "next/server";

// get all prev works
export const GET = async () => {
    try {
        const works = await prisma.works.findMany();
        console.log("Works: ", works)
        return NextResponse.json({works}, {status: 200})
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "AN ERROR OCCURRED!"}, {status: 500})
    }
} 