import HeadShot from "../src/assets/headshot.png"
import "./HeadLiner.css"

const HeadLiner = () => {
    return (
        <section className="headliner">
        <img className="headshot" src={HeadShot} alt="Photo of Michael Lange" />
        <h1 className="headtext">Michael Lange</h1>
        </section>
    )
}

export default HeadLiner;