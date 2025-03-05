import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";

const Admin = () => {
  return (
    //parent
    <div className="admin-page-container">
      {/*==>children*/}
      <Sidebar />

      <List className="list-container">
        <List_item
          item_name="Levofloxaxina"
          img_src="/public/pill-icon.svg"
          price="200$"
          stock="100U"
          description="Lorem ipsum"
        />
      </List>
    </div>
  );
};

export default Admin;
