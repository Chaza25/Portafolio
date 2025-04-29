import { useState } from "react";
import "./Main.css";

const Main = ({ informacion }) => {
  const [mostrar, setMostrar] = useState(false);

  const mostrarTodo = () => {
    setMostrar(!mostrar);
  };
  return (
    <div className="container">
      <div className="card">
        <div>Nombre completo</div>
        <h2>{informacion.nombre}</h2>

        <div>Titulo en curso</div>
        <h2>{informacion.titulo}</h2>

        <div>Secundaria</div>
        <h2>{informacion.secundaria}</h2>

        <div>Actualidad</div>
        <h3>{informacion.Algo_de_mi}</h3>
        <h1>Tecnologia y Habilidades</h1>

        <button className="boton" onClick={mostrarTodo}>
          Mostrar mas/Ocultar
        </button>
        {mostrar && (
            <ul>
              {informacion.tecnologiasYhabilidades.map((len, index) => (
                <li key={index}>{len}</li>
              ))}
            </ul>
            
        )}
      </div>
    </div>
  );
};

export default Main;
