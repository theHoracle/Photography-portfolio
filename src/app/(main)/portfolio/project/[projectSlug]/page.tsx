import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PortfolioSlides from "@/components/PortfolioSlides";
import { ProjectGallery } from "@/components/project-gallery";
import { getProjects, getSingleProject } from "@/hooks/get-projects";

interface ProjectPageProps {
    params: {
        projectSlug: string;
    }
}

const ProjectPage = async ({params}: ProjectPageProps) => {
    const { projectSlug } = params
    const project = await getSingleProject(projectSlug)
    const projects = await getProjects()
     
    return <div className="min-h-[calc(100lvh-80px)]">
            {(projectSlug && project) && 
            <section>
            <MaxWidthWrapper>
             <div className="flex flex-col ">
             <ProjectGallery images={project.imgs} titleSlug={project.slug} desc={project.description} title={project.title}/>
                <hr className="border-2 border-accent" />
             <PortfolioSlides title="Explore other projects" slides={projects}/>
             </div>
            </MaxWidthWrapper>
        </section>}
    </div>
}

export default ProjectPage;