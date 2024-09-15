import "./App.css";
import profileImage from "/ProfileProject.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center border-8 border-emerald-800 font-saira font-semibold">
        <div className="mt-2 w-full border-b-8 border-emerald-800 py-5 text-center text-7xl text-emerald-600">
          Portfolio
        </div>
        <div className="flex w-full flex-col gap-y-7 text-emerald-600">
          <div className="grid h-auto w-[200px] place-self-center">
            <img src={profileImage} alt="" />
          </div>
          <div className="w-auto overflow-hidden rounded-3xl border-4 border-emerald-600 bg-white text-center text-4xl">
            About Me
            <div className="border-t-4 border-emerald-600 bg-emerald-500 pb-3 pl-3 text-left text-2xl text-white">
              <div className="mt-3">Apiwat</div>
              <div className="mb-1">Songnilrak</div>
              <div>
                <div className="text-1xl">
                  <i className="uil uil-phone"></i> (+66)85-363-3779
                </div>
                <div className="text-1xl">
                  <i className="uil uil-envelope-alt"></i>{" "}
                  arm_apiwat@outlook.com
                </div>
                <div className="text-1xl">
                  <i className="uil uil-location-point mb-3"></i> 44/9 M.4
                  Bangyor Samutprakarn 10130
                </div>
                <div className="text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  harum dicta sapiente aliquid, facere laborum accusamus eaque
                  provident fugit, inventore aut modi eius at? Sit minus
                  consectetur impedit officiis perferendis?
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 pl-2 pt-0">
            <div>
              <div className="text-4xl">Languages</div>
              <div>English</div>
              <div>Thai</div>
            </div>
            <div>
              <div className="text-4xl">Liking</div>
              <div>Movies</div>
              <div>Coding</div>
              <div>Gaming</div>
            </div>

            <div>
              <div className="text-4xl">Education</div>
              <div className="border-emerald-600 border-t-2 bg-emerald-500 rounded-full text-black w-36 text-center">Junior Highschool</div>
              <div className="border-emerald-600 border-t-2 bg-emerald-500 rounded-full text-black w-36 text-center">Commercial College</div>
              <div className="border-emerald-600 border-t-2 bg-emerald-500 rounded-full text-black w-28 text-center">University</div>
              <div className="w-7 h-auto bg-black"></div>
            </div>
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
