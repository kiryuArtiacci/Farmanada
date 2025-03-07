import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Sidebar from "../components/sidebar/Sidebar";
import Search_Bar from "../components/Search_Bar/Search_Bar";
const Employeers = () => {
  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />

      {/*==>children*/}
      <List className="list-container">
        <h1 className="title">Employeers: </h1>
        <List_item
          item_name="Julio Suarez"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
        <List_item
          item_name="Ernesto Balbas"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
        <List_item
          item_name="Heirismar Marcano"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
        <List_item
          item_name="Rebecca Meyerowitz"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
      </List>
      <Search_Bar />
    </div>
  );
};

export default Employeers;
