import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Home = () => {
    const nombre = "Agustin Chazarreta Cruz";
    const titulo = "Tecnico Universitario en Programacion";
    const secundaria = "Colegio Ntra. Señora de la Consolacion";
    const sobre_mi = "Soy estudiante y me gusta mucho el futbol";
    const tecnologiasYhabilidades = ["phyton , java "];
    const otros = "Celular: 3865 636206";
    return (
    <>
        <div className="text-center">
        <Header nombre={nombre} />
        <Main
            titulo={titulo}
            nombre={nombre}
            secundaria={secundaria}
            Algo_de_mi={sobre_mi}
            Tecnologia_y_Habilidades={tecnologiasYhabilidades}
        />
        <Footer otros={otros} />
        </div>
    </>
    );
};
export default Home;
