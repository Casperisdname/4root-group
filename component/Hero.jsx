const Hero = () => {
  return (
    <section id="home" className="pt-12 text-center">
      <div className="text-2xl  ">
        Where{" "}
        <span className="text-3xl font-bold px-2 ">
          Innovation Takes Root
        </span>{" "}
      </div>
      <div className="pt-2 text-md px-8 pb-12">
        4root is a creative digital agency founded by four friends whose journey
        began in school united by passion, experience, and a shared vision to
        build impactful digital solutions.
      </div>
      <div className="pb-8">
        {" "}
        <button className="py-4 rounded-2xl px-16 text-blue-100 font-bold bg-blue-900">
          Work With us
        </button>
      </div>

      <button className="py-4 px-12 rounded-2xl bg-yellow-400">
        View Our Projects
      </button>
    </section>
  );
};

export default Hero;
