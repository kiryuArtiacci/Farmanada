import { EllipsisVertical } from "lucide-react";

const List_item = ({
  item_id,
  item_name,
  img_src,
  description,
  price = null,
  stock = null,
}) => {
  return (
    <span className="container-a">
      <img src={img_src} alt={item_name} className="item-icon" />

      <h2 className="item-name">{item_id}</h2>
      <h2 className="item-name">{item_name}</h2>
      <p className="item-description">{description}</p>
      <h3 className="item-stock">{stock}</h3>
      <h3 className="item-price">{price}</h3>

      <EllipsisVertical />
    </span>
  );
};

export default List_item;
