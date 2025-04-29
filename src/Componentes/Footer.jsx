import "./Footer.css"

const Footer = ({otros}) => {
    return(
        <div className="Foot">
            <p>Numero de {otros}</p>
            <a href="https://github.com/Chaza25/" target="_blank">
            <img src="./src/assets/github_dark.svg" alt="GitHub" />GitHub
            </a>
        </div>
    )
}

export default Footer