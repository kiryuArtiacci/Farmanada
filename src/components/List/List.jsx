import React from "react";
import "./List.css";
import List_item from "./List_item";

const List = ({ children }) => {
  return <div className="list-container">{children}</div>;
};

export default List;
