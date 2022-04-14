import React from "react";
import { useParams } from "react-router-dom";
import ProjectsMenu from "../../Components/ProjectsMenu";

const ProjectsContainer = () => {
    let projSlug= useParams();
    return(
        <div><ProjectsMenu data = {projSlug}/></div>
    )
}

export default ProjectsContainer;