import React, { useState } from "react";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  const categoryOptions = [
    "Beauty products",
    "Hair and makeup",
    "Snacks",
    "Clothings",
    "Restaurant",
    "Entertainment",
    "Accessories",
    "Services",
    "Others",
  ];

  return (
    <div className="mx-16 mt-2">
      <p className="text-[16px] font-semibold">Business category</p>
      <div className="flex items-center">
        <label htmlFor="category"></label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          placeholder="e.g makeup and beauty"
          className="border rounded-lg border-gray-300 p-2 w-full"
        >
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Category;
