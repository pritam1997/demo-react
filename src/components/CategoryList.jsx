import React from "react";
import "./CategoryList.css";

function CategoryList({ categories, onEditCategory, onDeleteCategory }) {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <button onClick={() => onEditCategory(category)}>Edit</button>
                <button onClick={() => onDeleteCategory(category.id)}>
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

export default CategoryList;
