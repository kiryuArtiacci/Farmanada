import React from "react";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import Sidebar from "../components/sidebar/Sidebar";

const Drugs = () => {
  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
      {/*==>children*/}
      <List className="list-container">
        <List_item
          item_name="Levofloxaxina"
          img_src="/public/pill-icon.svg"
          price="200$"
          stock="100U"
          description="Lorem ipsum"
        />
      </List>

      <Search_Bar className="search-bar" />
    </div>
  );
};

export default Drugs;
