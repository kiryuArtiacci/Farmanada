import { useState } from "react";

const New_Item = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, quantity);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">New item</h2>
        </div>
        <input
          type="text"
          placeholder="Item name"
          className="form-item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="form-item"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input type="submit" value="Aceptar" className="submit-button" />
      </form>
    </div>
  );
};

export default New_Item;
