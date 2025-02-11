import React, { useState } from "react";
import shoppedList from "../../data/UserData";
import "../../index.css"; // Ensure Tailwind CSS is imported

function DropdownTable() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Get items based on the selected category
  const selectedItems =
    selectedCategory === "All"
      ? shoppedList.categories.flatMap((category) => category.items)
      : shoppedList.categories.find(
          (category) => category.name === selectedCategory
        ).items;

  console.log("selectedItems", selectedItems);
  console.log("selectedCategory", selectedCategory);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Shopped List</h1>
      <div className="mb-3">
        <label
          htmlFor="categorySelect"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select Category
        </label>
        <select
          id="categorySelect"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="All">All</option>
          {shoppedList.categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sold
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {selectedItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${item.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DropdownTable;
