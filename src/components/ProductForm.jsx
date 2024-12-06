import React, { useState, useEffect } from "react";
import "./ProductForm.css";

function ProductForm({
  categories,
  onAddProduct,
  onUpdateProduct,
  editingProduct,
  setEditingProduct,
}) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: "",
  });

  useEffect(() => {
    if (editingProduct) setFormData(editingProduct);
    else setFormData({ name: "", price: "", categoryId: "" });
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.categoryId) {
      alert("All fields are required!");
      return;
    }
    if (editingProduct) {
      onUpdateProduct({ ...editingProduct, ...formData });
    } else {
      onAddProduct(formData);
    }
    setFormData({ name: "", price: "", categoryId: "" });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <select
        name="categoryId"
        value={formData.categoryId}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">{editingProduct ? "Update" : "Add"} Product</button>
      {editingProduct && (
        <button type="button" onClick={() => setEditingProduct(null)}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default ProductForm;
