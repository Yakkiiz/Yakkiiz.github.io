import "./App.css";

function App() {
  return (
    <>
      <div className="flex-col flex items-center border-8 border-emerald-800 font-saira font-semibold">
        <div className="w-full text-center py-5 mt-2 border-b-8 border-emerald-800 text-7xl">
          Portfolio
        </div>
        <div className="w-full my-5 ms-10">
          <div className="mb-6">
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
          <div>aboutMe</div>
          <div>education</div>
          <div>experience</div>
          <div>skill</div>
          <div>workedAs</div>
        </div>
      </div>
    </>
  );
}

export default App;
