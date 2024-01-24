import "./ProjectCard.css"

export default function ProjectCard ({obj}){
    return(
        <a className="link_card" href={obj.link} target="_blank">
            <div className="proj_card">
                <div className="proj_img_container">
                    <img src={obj.image}/>
                </div>
                <div className="proj_content">
                    <h3 className="project_title">{obj.content}</h3>
                    <p className="project_desc">{obj.desc}</p>
                </div>
            </div>
        </a>
    )
}