const Team = () => {
  return (
    <section id="teams">
      <div className="text-center text-blue-100 bg-blue-900">
        <div className="pt-10 text-sky-400 font-meduim text-2xl"> Our Team</div>
        <div className="text-2xl pt-4 font-medium pb-4 px-6">
          Meet The Root Behind 4Root
        </div>
        <div className="pb-8 sm:px-16">
          Four individuals. Different strengths. One shared mission — building
          creative solutions that make brands stand out.
        </div>

        <div className="grid grid-cols-2 px-4 pb-8 gap-3 ">
          <div className="py-6 shadow-xl shadow-sky-500/50 border-2 space-y-2  rounded-3xl border-white p-8">
            <p className="font-bold">Lead Developer</p>
            <p>Casper</p>
          </div>
          <div className="py-6 space-y-2 shadow-xl shadow-sky-500/50  border-2 rounded-3xl border-white p-8">
            <p className="font-bold">Graphic Designer</p>
            <p>Skido</p>
          </div>
          <div className="py-6 space-y-2 shadow-xl shadow-sky-500/50  border-2 rounded-3xl border-white p-8">
            <p className="font-bold">Graphics Designer</p>
            <p>Alfie</p>
          </div>
          <div className="py-6 space-y-2 shadow-xl shadow-sky-500/50 border-2 rounded-3xl border-white p-8">
            <p className="font-bold">Video editorr</p>
            <p>Dice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
