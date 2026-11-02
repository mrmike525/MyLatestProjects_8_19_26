import "./Links.css"
const Links = ({ toggleShow }) => {
    const border = style={border: "2px solid red"}
    return (
        <>
            <nav className="navbar" >
                <ul>
              <li onMouseOver={()=>toggleShow()}><a href="" target="_blank">HELP!</a></li>
               <li><a href="" target="_blank">ME!!</a></li>
               <li><a href="" target="_blank">PLEASE!!!</a></li>
            </ul>
            </nav>
        </>
    )
}

export default Links;