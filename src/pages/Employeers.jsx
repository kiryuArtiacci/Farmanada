import React from "react";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";

const Drugs = () => {
  return (
    //parent
    <div className="admin-page-container">
      {/*==>children*/}
      <List className="list-container">
        <List_item
          item_name="Julio Suarez"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
        <List_item
          item_name="Loratadina"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
        <List_item
          item_name="Levofloxaxina"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
        <List_item
          item_name="Levofloxaxina"
          img_src="/public/pill-icon.svg"
          description="Lorem ipsum"
        />
      </List>
    </div>
  );
};
