import prisma from "@/utils/prisma"
import { NextResponse } from "next/server";

// get all prev projects
export const GET = async () => {
    try {
        const works = await prisma.work.findMany();
        console.log("Works: ", works)
        return NextResponse.json({works}, {status: 200})
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "AN ERROR OCCURRED!"}, {status: 500})
    }
} 


// add new project
export const POST = async (req: Request) => {
    try {
        const {title, description, slug, thumbnail, imgs, serviceSlug} = await req.json();
        const work = await prisma.work.create({
            data: {
                title,
                description,
                slug,
                thumbnail,
                imgs,
                serviceSlug,
            }
        })
        return NextResponse.json({work}, {status: 200})
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "AN ERROR OCCURRED!"}, {status: 500})
    }
}