import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarItem } from "../components/Sidebar/Sidebar";
import List from "../components/List/List";

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon="/public/house-icon.svg" text="HOME" alert="Null" />
        <SidebarItem
          icon="/public/dashboard-icon.svg"
          text="DASHBOARD"
          alert="Null"
        />
        <SidebarItem
          icon="/public/employeer-icon.svg"
          text="EMPLOYEERS"
          alert="Null"
        />
        <SidebarItem icon="/public/pill-icon.svg" text="DRUGS" alert="Null" />
        <SidebarItem
          icon="/public/warehouse-icon.svg"
          text="SUCURSALS"
          alert="Null"
        />
        <SidebarItem
          icon="/public/shopping-cart-icon.svg"
          text="PURCHASES"
          alert="Null"
        />
        <SidebarItem
          icon="/public/microscope-icon.svg"
          text="LABS/PROVIDERS"
          alert="Null"
        />
      </Sidebar>
    </div>
  );
};

export default Admin;
