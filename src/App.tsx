import "./App.css";

function App() {
  return (
    <>
      <div className="mx-8 flex flex-col items-center border-8 border-emerald-800 font-saira font-semibold">
        <div className="mt-2 w-full border-b-8 border-emerald-800 py-5 text-center text-7xl text-emerald-600">
          Portfolio
        </div>
        <div className="flex w-full flex-col gap-y-7 py-5 pl-5 text-emerald-600">
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
          <div className="absolute right-2 w-2/6 rounded-lg border-4 border-emerald-600 bg-white text-center text-4xl">
            About Me
            <div className="border-t-4 border-emerald-600 bg-emerald-500 text-left text-white">
              <div className="ml-3 mt-4">Apiwat</div>
              <div className="ml-3 mb-1">Songnilrak</div>
              <div>
                <div className="text-2xl ml-3">
                  <i className="uil uil-phone">(+66)85-363-3779</i>
                </div>
                <div className="text-2xl ml-3">
                  <i className="uil uil-envelope-alt">arm_apiwat@outlook.com</i>
                </div>
                <div className="text-2xl ml-3">
                  <i className="uil uil-location-point mb-3">
                    44/9 M.4 Bangyor Samutprakarn 10130
                  </i>
                </div>
                <div className="text-base ml-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  harum dicta sapiente aliquid, facere laborum accusamus eaque
                  provident fugit, inventore aut modi eius at? Sit minus
                  consectetur impedit officiis perferendis?
                </div>
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
