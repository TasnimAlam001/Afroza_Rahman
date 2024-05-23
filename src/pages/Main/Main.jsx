import AboutMe from "../AboutMe/AboutMe";
import MyProjects from "../MyProjects/MyProjects";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";


const Main = () => {
    return (
        <div className="px-14">
            <Navbar/>
            <AboutMe/>
            <div className="divider pt-8 ">My Skills</div>
            <Skills/>
            <div className="divider pt-8 ">My Skills</div>
            <MyProjects/>
        </div>
    );
};

export default Main;