const Footer = () => {
  return (
    <div className="bg-blue-900 mt-16 px-4 text-blue-100 py-8">
      <div className="text-4xl text-center pb-4 font-bold">
        4<span className="text-yellow-400">ROOT</span>
      </div>
      <div className="text-center font-bold ">
        Rooted in Creativity. Built for Growth. Four Minds. One Root. Infinite
        Possibilities.
      </div>
      <div className="pt-8 pb-6 text-center font-bold">
        Designed by 4root. Built for the Future.
      </div>
      <div className="font-bold text-2xl pb-2 text-center">Quick Links</div>
      <div className="flex flex-col text-stone-200 space-y-3 items-center justify-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#works">Work</a>
        <a href="#teams">Team</a>
      </div>
      <div className="text-center font-bold pt-8">
        {" "}
        (©) 2026 4ROOT GROUP. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
