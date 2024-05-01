
const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start p-16 pt-28 ">
      {/* About Me Text */}
      <div className="lg:mr-16 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">HELLO, I AM</h1>
        <h2 className="text-5xl lg:text-6xl font-bold mb-4">Afroza Rahman</h2>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6">WEB DEVELOPER</h3>
        <p className="text-lg lg:text-xl mb-6">
          I am a Web Developer. My expertise includes JavaScript, React.js, Node.js, HTML and CSS. I excel in adaptability, teamwork, and team leadership and have excellent communication abilities.
        </p>
      </div>

      {/* Image */} 
      <div>
        <img
          src="profileImg.png" // Replace with the actual path to Afroza Rahman's image
          alt="Afroza Rahman"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe;