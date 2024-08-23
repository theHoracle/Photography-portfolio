import prisma from "@/utils/prisma"
import { NextResponse } from "next/server";

// get all  services
export const GET = async () => {
    try {
        const services = await prisma.services.findMany();
        console.log("service: ", services)
        return NextResponse.json({services}, {status: 200})
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "AN ERROR OCCURRED!"}, {status: 500})
    }
} 