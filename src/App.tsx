import "./App.css";
import Css3 from "./assets/icons/Css3";
import Github from "./assets/icons/Github";
import Html5 from "./assets/icons/Html5";
import ReactIcon from "./assets/icons/React";
import TailwindCss from "./assets/icons/TailwindCss";
import VsCode from "./assets/icons/VsCode";
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
          <div className="flex flex-col gap-y-3 px-2 pt-0">
            <div>
              <div className="text-4xl">Languages</div>
              <div className="text-2xl">English</div>
              <div className="text-2xl">Thai</div>
            </div>
            <div>
              <div className="pb-2 text-4xl">Liking</div>
              <div className="flex justify-stretch gap-x-2 text-center">
                <div className="flex h-32 w-48 flex-col justify-center rounded-lg bg-emerald-600 text-white">
                  <i className="fa-solid fa-film text-5xl"></i>
                  <div className="pt-2 text-2xl">Movies</div>
                </div>
                <div className="flex h-32 w-48 flex-col justify-center rounded-lg bg-emerald-600 text-white">
                  <i className="fa-solid fa-keyboard text-5xl"></i>
                  <div className="pt-2 text-2xl">Coding</div>
                </div>
                <div className="flex h-32 w-48 flex-col justify-center rounded-lg bg-emerald-600 text-white">
                  <i className="fa-solid fa-gamepad text-5xl"></i>
                  <div className="pt-2 text-2xl">Gaming</div>
                </div>
              </div>
            </div>

            <div>
              <div className="pb-2 text-4xl">Education</div>
              <div className="w-36 rounded-full border-t-2 border-emerald-600 bg-emerald-500 text-center text-white">
                Junior Highschool
              </div>
              <div className="w-36 rounded-full border-t-2 border-emerald-600 bg-emerald-500 text-center text-white">
                Commercial College
              </div>
              <div className="w-28 rounded-full border-t-2 border-emerald-600 bg-emerald-500 text-center text-white">
                University
              </div>
              {/* <div className="h-1 w-40 bg-black"></div> */}
            </div>
            <div>
              <div className="text-4xl">Skill</div>
              <div className="flex justify-stretch gap-x-2 text-5xl">
                <div>
                  <Html5 className="h-[50px] w-auto" />
                </div>
                <div>
                  <Css3 className="h-[50px] w-auto" />
                </div>
                <div>
                  <ReactIcon className="h-[50px] w-auto" />
                </div>
                <div className="text-5xl">
                  <TailwindCss className="h-[50px] w-auto" />
                </div>
                <div>
                  <VsCode className="h-[50px] w-auto" />
                </div>
                <div>
                  <Github className="h-[50px] w-auto" />
                </div>
              </div>
            </div>
            <div className="text-4xl">
              <div className="pb-2">Worked As</div>
              <div className="text-2xl">IT Support - from 2017 to now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
