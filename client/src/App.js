import SideBar from "./components/SideBar/SideBar";
// import TodaysPatients from "./components/TodaysPatients/TodaysPatients";
import NewAppt from "./components/NewAppt/NewAppt";
import ApptConsult from "./components/ApptConsult/ApptConsult";

function App() {
  return (
    <div className="container">
      <div class="side-bar-container">
        <SideBar />
      </div>
      <div class="sub-container">
        <div class="top-container">
          <div class="top-left-container">
            <NewAppt />
          </div>
          <ApptConsult />
        </div>
        <div class="bottom-container">hello world</div>
      </div>
    </div>
  );
}

export default App;
