import Sidebar from "../components/Sidebar/Sidebar";
import Drugs from "./Drugs";
import "../styles/admin.css";

const Admin = () => {
  return (
    //parent
    <div className="admin-page-container">
      {/*==>children*/}
      <Sidebar />
      <Drugs />
    </div>
  );
};

export default Admin;
