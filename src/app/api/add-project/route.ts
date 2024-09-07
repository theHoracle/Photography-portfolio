import { verifyToken } from "@/firebase/verifyToken";
import prisma from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    const authHeader = req.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({message: 'Authorization token missing or invalid'}, {status: 401})
    }
    try {
        const idToken = authHeader.split(' ')[1]; 
        const verified = await verifyToken(idToken)
        if(!verified) {
            throw new Error('Invalid token')
        }
        const body = await req.json()
        const { description, title, slug, imgs, serviceSlug } = body

        if (!description || !title || !slug || !imgs || !serviceSlug) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
          }

        console.log(body)
        const newProject = await prisma.project.create({
            data: {
                description,
                slug,
                title,
                imgs,
                serviceSlug,   
            }
        })
        return NextResponse.json(newProject, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Error creating project: ', error}, {status: 500})
    }
}