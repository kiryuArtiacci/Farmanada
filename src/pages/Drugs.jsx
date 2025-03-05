import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarItem } from "../components/Sidebar/Sidebar";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";

const Drugs = () => {
  return (
    //parent
    <div className="admin-page-container">
      {/*==>children*/}
      <Sidebar>
        <SidebarItem icon="/public/house-icon.svg" text="HOME" />
        <SidebarItem icon="/public/dashboard-icon.svg" text="DASHBOARD" />
        <SidebarItem icon="/public/employeer-icon.svg" text="EMPLOYEERS" />
        <SidebarItem icon="/public/pill-icon.svg" text="DRUGS" />
        <SidebarItem icon="/public/warehouse-icon.svg" text="SUCURSALS" />
        <SidebarItem icon="/public/shopping-cart-icon.svg" text="PURCHASES" />
        <SidebarItem icon="/public/microscope-icon.svg" text="LABS/PROVIDERS" />
      </Sidebar>

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

export default Drugs;
