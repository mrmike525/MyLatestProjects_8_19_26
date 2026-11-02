import Jeopardy from "../src/assets/Jeopardy.jpg";
import iMeme from "../src/assets/iMeme.jpg"
import SpaceShipBuilder from "../src/assets/SpaceShipBuilder.jpg"
import "./Projects.css"
const Projects = () => {
    return (
        
        <section className="projects">
            <h3>Projects</h3>
            <h4><a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/Jeopardy_Version_1.0/index.html" target="_blank">Jeopardy Clone</a></h4>
            <p>A html, css and JavaScript application that allows the user to play Jeopardy.</p>
            <img className="projectpic" src={Jeopardy} alt="" />
            <h4><a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/iMeme/index.html" target="_blank">iMeme</a></h4>
            <p>An HTML, CSS, and JavaScript application that allows users to create and customize their own memes.</p>
            <img className="projectpic" src={iMeme} alt="" />
            <h4><a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/ReactSpaceShipFinal8-9-26/index.html" target="_blank">SpaceShipBuilder (In Progress)</a></h4>
            <p>A React application that allows future space commanders to create and decommission spacecraft, then transport passengers from Earth to other planets in the solar system.</p>
            <img className="projectpic" src={SpaceShipBuilder} alt="" />
        </section>
        
    )
}

export default Projects;