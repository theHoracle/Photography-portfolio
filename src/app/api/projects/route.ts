import prisma from "@/utils/prisma"
import { NextResponse } from "next/server";

// get all prev projects
export const GET = async () => {
    try {
        const projects = await prisma.project.findMany();
        
        return NextResponse.json({projects}, {status: 200})
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "AN ERROR OCCURRED!"}, {status: 500})
    }
} 


// add new project
export const POST = async (req: Request) => {
    try {
        const {title, description, slug, imgs, serviceSlug} = await req.json();
        const work = await prisma.project.create({
            data: {
                title,
                description,
                slug,
                imgs,
                serviceSlug,
            }
        })
        return NextResponse.json({work}, {status: 200})
    } catch (error) {
        NextResponse.json({message: error}, {status: 500})
    }
}