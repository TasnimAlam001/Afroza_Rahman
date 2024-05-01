
export default function Navbar() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center mt-4">
      <ul className="menu bg-gradient-to-r from-[#1d1d20] to-[#1e1d53] lg:menu-horizontal rounded-box">
        <li>
          <a>
            <img className="h-5 w-5" src="L4.png" alt="" />
            About Me
          </a>
        </li>
        <li>
          <a>
            <img className="h-5 w-5" src="skills.webp" alt="" />
            Skills
          </a>
        </li>
        <li>
          <a>
            <img className="h-5 w-5" src="project.webp" alt="" />
            Projects
          </a>
        </li>
        <li>
          <a>
            <img className="h-5 w-5" src="connect.png" alt="" />
            Contact
          </a>
        </li>
        
      </ul>
    </div>
  );
}
