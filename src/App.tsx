import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center border-8 border-emerald-800 font-saira font-semibold mx-8">
        <div className="mt-2 w-full border-b-8 border-emerald-800 py-5 text-center text-7xl">
          Portfolio
        </div>
        <div className="flex w-full flex-col gap-y-7 py-5 pl-5">
          <div className="">
            <div>Phone</div>
            <div>E-Mail</div>
          </div>
          <div>
            <div className="text-4xl">Languages</div>
            <div className="text-xl">English</div>
            <div className="text-xl">Thai</div>
          </div>
          <div>
            <div className="text-4xl">Liking</div>
            <div className="text-2xl">Movies</div>
            <div className="text-2xl">Coding</div>
            <div className="text-2xl">Gaming</div>
          </div>
          <div className="text-4xl absolute right-2 border-emerald-600 border-4 bg-white rounded-lg w-96 text-center">About Me
            <div className="border-t-4 border-emerald-600 bg-white text-left">
              <div>Apiwat</div>
              <div>Songnilrak</div>
              <div>
                <div className="text-2xl">Tel</div>
                <div className="text-2xl">Email</div>
                <div className="text-2xl">Address</div>
                <div className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex harum dicta sapiente aliquid, facere laborum accusamus eaque provident fugit, inventore aut modi eius at? Sit minus consectetur impedit officiis perferendis?</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <div className="text-4xl">Education</div>
            <div className="text-4xl">Experience</div>
            <div className="text-4xl">Skills</div>
            <div className="text-4xl">Worked As</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
