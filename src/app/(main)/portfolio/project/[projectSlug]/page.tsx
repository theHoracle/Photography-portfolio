import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ThumbsGallery from "@/components/ThumbsGallery";
import { getSingleProject } from "@/hooks/get-projects";

interface ProjectPageProps {
    params: {
        projectSlug: string;
    }
}

const ProjectPage = async ({params}: ProjectPageProps) => {
    const { projectSlug } = params
    const project = await getSingleProject(projectSlug)
     
    console.log()
    return <div className="min-h-[calc(100lvh-80px)]">
            {(projectSlug && project) && <section>
            <MaxWidthWrapper>
                <div className="flex flex-col">
                <h1 className="text-3xl font-bold">{project?.title}</h1>
                <p>{project?.description}</p>
                <div>
                {
                    project?.imgs &&
                   <ThumbsGallery images={project?.imgs} /> 
                }
                </div>
                </div>
            </MaxWidthWrapper>
        </section>}
    </div>
}

export default ProjectPage;