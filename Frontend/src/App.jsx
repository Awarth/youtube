import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header className="sticky top-0 h-[4.5rem]" />
      <div className="main w-full h-full flex">
        <Sidebar className="sticky left-0 z-30 h-[calc(100vh-4.5rem)]" />
        <div className="text-[#ECDBBA] w-full overflow-y-auto  p-4 h-[calc(100vh-4.5rem)]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
