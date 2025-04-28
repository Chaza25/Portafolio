import { useState } from "react";
import "./Main.css";

const Main = ({ informacion }) => {
  const [mostrar, setMostrar] = useState(false);

  const mostrarTodo = () => {
    setMostrar(!mostrar);
  };
  return (
    <div class="container">
      <div className="card">
        <div>Mi nombre es :</div>
        <h2>{informacion.nombre}</h2>

        <div>Mi Titulo de Universidad</div>
        <h2>{informacion.titulo}</h2>

        <div>Mi Secundaria</div>
        <h2>{informacion.secundaria}</h2>

        <div>Actualidad</div>
        <h3>{informacion.Algo_de_mi}</h3>
        <h1>Tescnologia y Habilidades</h1>

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
