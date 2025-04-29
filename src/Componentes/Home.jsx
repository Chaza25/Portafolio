import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Home = () => {
    const informacion = {
    nombre: "Agustin Chazarreta Cruz",
    titulo: "Tecnico Universitario en Programacion",
    secundaria: "Colegio Ntra. Señora de la Consolacion",
    sobre_mi: "Soy estudiante de progracion y me gusta mucho el futbol",
    tecnologiasYhabilidades: ["HTML 5, CSS3, PYTHON, JAVA, JAVASCRIPT, PHP, REACT, MYSQL "],
    otros: "Celular: 3865 636206",
    };
    return (
        <div className="text-center">
        <Header nombre={informacion.nombre} />
        <Main informacion={informacion} />
        <Footer otros={informacion.otros} />
        </div>
    );
};
export default Home;
