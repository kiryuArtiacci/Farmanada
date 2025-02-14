import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
