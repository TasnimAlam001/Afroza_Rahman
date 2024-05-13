export default function Skills() {
  return (
    <div className="flex  flex-col lg:flex-row justify-center items-center lg:items-start p-16 pt-28 ">
      <div className="w-1/3 flex justify-center h-[430px] rounded-lg object-cover shadow-lg opacity-75 bg-gradient-to-r from-[#1d1d20] to-[#1e1d53]">
        <div className="w-full z-10 grid grid-cols-3 gap-6 p-5">
          <img src="html.png" alt="HTML Logo" className="w-19 h-16" />
          <img src="css.JPG" alt="CSS Logo" className="w-19 h-16" />
          <img
            src="tailwind.png"
            alt="Tailwind CSS Logo"
            className="w-19 h-16"
          />
          <img src="js.jpg" alt="JavaScript Logo" className="w-19 h-16" />
          <img src="React.png" alt="React Logo" className="w-19 mt-3" />
          <img src="axios.jpeg" alt="Axios Logo" className="w-24 h-16" />
          <img src="express.jpg" alt="Express.js Logo" className="w-19 h-16" />
          <img src="MongoDB.png" alt="MongoDB Logo" className="w-19 h-16" />
          <img src="Firebase.jpg" alt="Firebase Logo" className="w-19 h-16" />
        </div>
      </div>

      {/* My skill Text */}
      <div className="-ml-1 w-2/3 flex flex-col justify-center mt-9  text-left opacity-75 text-white bg-gradient-to-r to-[#1d1d20] from-[#1e1d53] h-[360px] p-5 rounded-lg">
        <p className="text-lg mb-3">
          As a Web Developer, I specialize in front-end technologies such as
          JavaScript, React.js,and CSS. I also have experience with back-end
          technologies like Node.js and databases like MongoDB and Firebase.
        </p>
        <p className="text-lg mb-3">
          I`m proficient in creating responsive and visually appealing web
          applications, leveraging frameworks like Tailwind CSS for efficient
          styling. I`m also familiar with popular libraries and tools like Axios
          for making HTTP requests and Express.js for building server-side
          applications.
        </p>
        <p className="text-lg ">
          Beyond technical skills, I excel in soft skills essential for
          collaboration and project success. I`m adaptable, able to quickly
          learn new technologies and adapt to changing project requirements. I`m
          a team player, comfortable working in diverse teams and fostering a
          collaborative environment. Additionally, I`m an effective
          communicator, able to articulate technical concepts clearly to both
          technical and non-technical stakeholders.
        </p>
      </div>
    </div>
  );
}
