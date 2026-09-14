import HeadShot from "../src/assets/headshot.png"
import "./HeadLiner.css"

const HeadLiner = () => {
    return (
        <section className="headliner">
        <img src={HeadShot} alt="Photo of Michael Lange" />
        <h1>Michael Lange</h1>
        <h4><a href="mailto: mrlange892@gmail.com">mrlange892@gmail.com</a></h4>
        <h4><a href="tel: 651-347-5903">651-347-5903</a></h4>
        </section>
    )
}

export default HeadLiner;