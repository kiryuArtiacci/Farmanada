import { EllipsisVertical } from "lucide-react";



const List_User = ({
  item_name,
  img_src,
  description,
  price ,
  stock,
  DeleteOnClick,
  ChangeOnClick
}) => {
  return (
    <span className="container-a" >
        <div className="w-20 h-20 overflow-hidden rounded-full shadow-md">
            <img src={img_src}  className="w-full h-full object-cover " />
        </div>

      <h2 className="item-name">{item_name}</h2>
      <p className="item-description">{description}</p>
      <h3 className="item-stock">{stock}</h3>
      <h3 className="item-price">{price}</h3>
        <button onClick={DeleteOnClick} class="mr-0 rounded-full bg-neutral-50 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-opacity-50 ...">
          <img src='/src/assets/delete.svg'  className="w-5 rounded-full   " />
        </button>
        <button onClick={ChangeOnClick} class=" mr-5 rounded-full bg-neutral-50 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-opacity-50 ...">
          <img src='/src/assets/Edit.svg'  className="w-5    " />
        </button>

    </span>
  );
};

export default List_User ;


