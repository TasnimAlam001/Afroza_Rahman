
const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start p-16 pt-28 ">
      {/* About Me Text */}
      <div className="-mr-1 mt-9 text-center lg:text-left opacity-75 text-white bg-gradient-to-r from-[#1d1d20] to-[#1e1d53] h-[360px] p-5 rounded-lg">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">HELLO, </h1>
        <h2 className="text-5xl lg:text-6xl font-bold mb-4"><span className="text-3xl">I AM</span> Afroza Rahman</h2>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6">WEB DEVELOPER</h3>
        <p className="text-lg lg:text-xl mb-6">
          I am a Web Developer. My expertise includes JavaScript, React.js, Node.js, HTML and CSS. I excel in adaptability, teamwork, and team leadership and have excellent communication abilities.
        </p>
      </div>

      {/* Image */} 
      <div>
        <img
          src="p4.jpg"
          alt="Afroza Rahman"
          className="w-[800px] h-[430px] rounded-lg object-cover shadow-lg opacity-75"
        />
      </div>
    </div>
  );
};

export default AboutMe;
