import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import SearchbarSucursal from "../components/Search_Bar/SearchbarSucursal";
import Sidebar from "../components/sidebar/Sidebar";

const Sucursals = () => {
  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
      {/*==>children*/}
      <List className="list-container">
        <h1 className="title">Sucursals: </h1>
        <List_item
          item_name="Sede Alta vista"
          img_src="/public/pill-icon.svg"
          description="Direccion"
        />
      </List>

      <SearchbarSucursal />
    </div>
  );
};

export default Sucursals;
