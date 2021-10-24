import React from 'react';

interface Projectlist {
    [key : string] : ProjectItems
} 

interface ProjectItems {
    status : string,
    description : string,
    logo : string
}

interface Props {
    projectlist : Projectlist
}

const projectCard = (props: Props) => {
    const projectList: any = [];
    for (const projectName in props.projectlist) {
        projectList.push({
            name: projectName,
            status : props.projectlist[projectName].status,
            description : props.projectlist[projectName].description,
            logo : props.projectlist[projectName].logo
        })
    }

    return (
       <>
       <h3 className='text-center mb-5'>Our Projects</h3>
       <div className='row'>
        {
            projectList.map((project:any) => {
                const statusClass = 'project-status ' + project.status;
                return <div className='col-6 project-card' key ={project.name}>
                    {/* <div className='project-card'> */}
                        <img src={project.logo} alt="" />
                        <h5>{project.name}</h5>
                        {/* <span className={statusClass}>{project.status}</span> */}
                        <div className={statusClass}><span>{project.status}</span></div>
                        <p className='mb-0'>{project.description}</p>
                    {/* </div> */}
                </div>
            })
        }
       </div>
       </> 
    );
}

export default projectCard;
