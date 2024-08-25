import prisma from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"

interface Params {
    projectSlug :string
}
export const GET = async (req: NextRequest, {params}: {params: Params}) => {
    const { projectSlug } = params

    try {
        const project = await prisma.project.findUnique({
            where: {
                slug: projectSlug
            }
        })
        return NextResponse.json({project}, {status: 200})
    } catch (error) {
        return NextResponse.json({
            error: error, 
        }, {status: 500})
    }
}