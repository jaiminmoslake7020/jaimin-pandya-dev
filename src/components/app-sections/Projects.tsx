import React, {useState} from 'react';
import ProjectBox, {ProjectBoxEmpty, ProjectBoxPropTypes} from './ProjectBox';
import {useWindowSize} from '@uidotdev/usehooks';
import {useScreenType} from '../../utils/utils';
import emplaceLogo  from '../../assets/images/companies/emplace.svg';
import umbracityLogo  from '../../assets/images/companies/umbracity.png';

const projects = [
    {
        projectName: "Owner Platform ",
        companyName: "Emplace Technology Inc",
        projectUrl: "https://owner.emplace.com/",
        projectTech: "React, TypeScript, Rest API, Redux",
        projectLogo: emplaceLogo,
        logoAppearance: "white-text"
    }
] as ProjectBoxPropTypes[];

const Projects = () => {

    const { width } = useWindowSize();
    const type = useScreenType( width || 0 );
    const gridSizeObject = {
        "xs": 1,
        "sm": 1,
        "md": 3,
        "lg": 3,
        "xl": 5,
        "2xl": 5,
    };

    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <section className={"section section-projects"} >
            <h1>Experience</h1>
            <div className={"section-content section-projects-content"}>
                <div className={"projects-wrapper"}>
                    {
                        showMore && projects.map((project) => <ProjectBox key={project.projectName} {...project} />)
                    }
                    {
                        !showMore && projects.filter((v, i) => i < gridSizeObject[type || "xl"]).map((project) => <ProjectBox key={project.projectName} {...project} />)
                    }
                    <ProjectBoxEmpty key={"empty"} showMore={showMore} setShowMore={(v:boolean) => {
                        setShowMore(v);
                        if (!v) {
                            const item = document.querySelector('.section.section-projects');
                            if (item) {
                                item.scrollIntoView({behavior: 'smooth'})
                            }
                        }
                    }} />
                </div>
            </div>
        </section>
    );
}

export default Projects;
