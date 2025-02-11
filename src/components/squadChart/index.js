import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import Dropdown from "./Dropdown";
import Table from "./Table";
import shoppedList from "../../data/UserData";

function SquadChart() {
  // State to keep track of the selected category from the dropdown
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State to keep track of the filtered items based on the selected category
  const [filteredItems, setFilteredItems] = useState([]);

  // useEffect hook to update filteredItems whenever selectedCategory changes
  useEffect(() => {
    // Get all items from all categories
    const allItems = shoppedList.categories.flatMap(
      (category) => category.items
    );

    // Filter items based on the selected category
    const filteredItems =
      selectedCategory === "All"
        ? allItems
        : allItems.filter((item) => {
            const category = shoppedList.categories.find(
              (cat) => cat.name === selectedCategory
            );
            return (
              category &&
              category.items.some((catItem) => catItem.id === item.id)
            );
          });

    // Update the state with the filtered items
    setFilteredItems(filteredItems);
  }, [selectedCategory]);

  // Sort the filtered items by the number of items sold
  const sortedItems = [...filteredItems].sort((a, b) => b.sold - a.sold);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ECharts with Tailwind CSS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          {/* Pass the filtered items to the PieChart component */}
          <PieChart data={filteredItems} />
        </div>
        <div className="md:col-span-1">
          {/* Pass the category options and the setSelectedCategory function to the Dropdown component */}
          <Dropdown
            options={["All", ...shoppedList.categories.map((cat) => cat.name)]}
            onChange={setSelectedCategory}
          />
          {/* Pass the sorted items to the Table component */}
          <Table data={sortedItems} />
        </div>
      </div>
    </div>
  );
}

export default SquadChart;
