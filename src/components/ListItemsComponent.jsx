import { RowItemComponent } from "./RowItemComponent";

export const ListItemsComponent = ({ title, items }) => {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product, price, quantity }) => (
            <RowItemComponent
              key={product}
              product={product}
              price={price}
              quantity={quantity}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
