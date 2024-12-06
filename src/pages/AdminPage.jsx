import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import Modal from "../components/Modal";
import "./AdminPage.css";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
    setIsProductModalOpen(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddCategory = (category) => {
    setCategories([...categories, { ...category, id: Date.now().toString() }]);
    setIsCategoryModalOpen(false);
  };

  const handleUpdateCategory = (updatedCategory) => {
    setCategories(
      categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
    setEditingCategory(null);
    setIsCategoryModalOpen(false);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="admin-portal">
      <h1>Admin Portal</h1>

      <div className="section">
        <h2>Products</h2>
        <button onClick={() => setIsProductModalOpen(true)}>Add Product</button>
        <ProductList
          products={products}
          categories={categories}
          onEdit={(product) => {
            setEditingProduct(product);
            setIsProductModalOpen(true);
          }}
          onDelete={handleDeleteProduct}
        />
      </div>

      <div className="section">
        <h2>Categories</h2>
        <button onClick={() => setIsCategoryModalOpen(true)}>
          Add Category
        </button>
        <CategoryList
          categories={categories}
          onEdit={(category) => {
            setEditingCategory(category);
            setIsCategoryModalOpen(true);
          }}
          onDelete={handleDeleteCategory}
        />
      </div>

      {/* Product Modal */}
      <Modal
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setEditingProduct(null);
        }}
        title={editingProduct ? "Edit Product" : "Add Product"}
      >
        <ProductForm
          categories={categories}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
        />
      </Modal>

      {/* Category Modal */}
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={() => {
          setIsCategoryModalOpen(false);
          setEditingCategory(null);
        }}
        title={editingCategory ? "Edit Category" : "Add Category"}
      >
        <CategoryForm
          onAddCategory={handleAddCategory}
          onUpdateCategory={handleUpdateCategory}
          editingCategory={editingCategory}
          setEditingCategory={setEditingCategory}
        />
      </Modal>
    </div>
  );
}

export default AdminPage;
