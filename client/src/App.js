import SideBar from "./components/SideBar/SideBar";
import TodaysPatients from "./components/TodaysPatients/TodaysPatients";
import NewAppt from "./components/NewAppt/NewAppt";
import ApptConsult from "./components/ApptConsult/ApptConsult";

function App() {
  return (
    <div className="container">
      <SideBar />
      <div class="top-container">
        <NewAppt />
        <ApptConsult />
      </div>
      {/* <TodaysPatients /> */}
    </div>
  );
}

export default App;
