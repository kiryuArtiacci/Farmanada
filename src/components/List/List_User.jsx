import { EllipsisVertical } from "lucide-react";



const List_User = ({
  item_name,
  img_src,
  description,
  price = null,
  stock = null,
}) => {
  return (
    <span className="container-a">
        <div className="w-20 h-20 overflow-hidden rounded-full shadow-md">
            <img src={img_src}  className="w-full h-full object-cover " />
        </div>

      <h2 className="item-name">{item_name}</h2>
      <p className="item-description">{description}</p>
      <h3 className="item-stock">{stock}</h3>
      <h3 className="item-price">{price}</h3>

      <EllipsisVertical />
    </span>
  );
};

export default List_User ;


