import React from "react";
import "./ProductList.css";

function ProductList({ products, categories, onEditProduct, onDeleteProduct }) {
  const getCategoryName = (categoryId) =>
    categories.find((category) => category.id === categoryId)?.name ||
    "Uncategorized";

  return (
    <div className="product-list">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{getCategoryName(product.categoryId)}</td>
              <td>
                <button onClick={() => onEditProduct(product)}>Edit</button>
                <button onClick={() => onDeleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
