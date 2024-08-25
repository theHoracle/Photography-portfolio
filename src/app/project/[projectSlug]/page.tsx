"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ThumbsGallery from "@/components/ThumbsGallery";
import { useGetSingleProject } from "@/hooks/get-projects";
import { Project } from "@prisma/client";

interface ProjectPageProps {
    params: {
        projectSlug: string;
    }
}

const ProjectPage = ({params}: ProjectPageProps) => {
    const { projectSlug } = params
    const {data, isSuccess} = useGetSingleProject(projectSlug)
     const project: Project = data?.project
    console.log(data)
    return <div className="min-h-[calc(100lvh-80px)]">
        {isSuccess &&
            <section>
            <MaxWidthWrapper>
                <div className="flex flex-col">

                <h1 className="text-3xl font-bold">{project?.title}</h1>
                <p>{project?.description}</p>
                <div>
                   <ThumbsGallery images={project.imgs} /> 
                </div>
                </div>
            </MaxWidthWrapper>
        </section>
        }

    </div>
}

export default ProjectPage;