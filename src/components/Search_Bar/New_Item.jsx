const New_Item = () => {
  return (
    <div>
      <form action="drugs" className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">New item</h2>
        </div>
        <input
          type="text"
          placeholder="Item name"
          className="form-item"
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="form-item"
          required
        />
        <input
          type="submit"
          placeholder="Aceptar"
          className="form-item"
          required
        />
      </form>
    </div>
  );
};

export default New_Item;
