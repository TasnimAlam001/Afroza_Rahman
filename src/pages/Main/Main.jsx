import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";


const Main = () => {
    return (
        <div className="px-14">
            <Navbar/>
            <AboutMe/>
            <Skills/>
        </div>
    );
};

export default Main;