import Jeopardy from "../src/assets/Jeopardy.jpg";
import iMeme from "../src/assets/iMeme.jpg"
import SpaceShipBuilder from "../src/assets/SpaceShipBuilder.jpg"
const Projects = () => {
    return (
        
        <section>
            <h3>Projects</h3>
            <h5><a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/Jeopardy_Version_1.0/index.html" target="_blank">Jeopardy Clone</a></h5>
            <p>A html, css and JavaScript application that allows the user to play Jeopardy.</p>
            <img src={Jeopardy} alt="" />
            <h5><a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/iMeme/index.html" target="_blank">iMeme</a></h5>
            <p>An HTML, CSS, and JavaScript application that allows users to create and customize their own memes.</p>
            <img src={iMeme} alt="" />
            <h5><a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/ReactSpaceShipFinal8-9-26/index.html" target="_blank">SpaceShipBuilder (In Progress)</a></h5>
            <p>A React application that allows future space commanders to create and decommission spacecraft, then transport passengers from Earth to other planets in the solar system.</p>
            <img src={SpaceShipBuilder} alt="" />
        </section>
        
    )
}

export default Projects;