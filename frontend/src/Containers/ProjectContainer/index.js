import React from "react";
import { useParams } from "react-router-dom";
import ProjectsMenu from "../../Components/ProjectsMenu";
import Sidebar from "../../Components/Sidebar";

const ProjectsContainer = () => {
    let projSlug= useParams();
    return(
        <div>
            <ProjectsMenu data = {projSlug}/>
            <Sidebar/>
        </div>
    )
}

export default ProjectsContainer;