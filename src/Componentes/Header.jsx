import "./Header.css"


const Header = ({nombre}) => {
    return (
        <div className="Head">
            <h1>Nombre: {nombre}</h1>
            <h2>Presentacion de mi portfolio</h2>
        </div>
    )
}

export default Header