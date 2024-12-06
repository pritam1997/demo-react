import React, { useState, useEffect } from "react";
import "./CategoryForm.css";

function CategoryForm({
  onAddCategory,
  onUpdateCategory,
  editingCategory,
  setEditingCategory,
}) {
  const [formData, setFormData] = useState({ name: "" });

  useEffect(() => {
    if (editingCategory) setFormData(editingCategory);
    else setFormData({ name: "" });
  }, [editingCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert("Category name is required");
      return;
    }
    if (editingCategory) {
      onUpdateCategory({ ...editingCategory, ...formData });
    } else {
      onAddCategory(formData);
    }
    setFormData({ name: "" });
  };

  return (
    <form className="category-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Category Name"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">
        {editingCategory ? "Update" : "Add"} Category
      </button>
      {editingCategory && (
        <button type="button" onClick={() => setEditingCategory(null)}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default CategoryForm;
