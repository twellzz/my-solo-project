import SideBar from "./components/SideBar/SideBar";
import TodaysPatients from "./components/TodaysPatients/TodaysPatients";

function App() {
  return (
    <div className="container">
      <SideBar />
      <TodaysPatients />
    </div>
  );
}

export default App;
