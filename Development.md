# ECharts with React and Tailwind CSS

This project demonstrates how to use ECharts with React and Tailwind CSS to create a dynamic pie chart that updates based on user selection from a dropdown menu. The project includes components for displaying a pie chart, a dropdown menu, and a table of items.

## Components

### `SquadChart`

The `SquadChart` component is the main component that manages the state and renders the `PieChart`, `Dropdown`, and `Table` components.

#### State Management

- `selectedCategory`: Keeps track of the selected category from the dropdown.
- `filteredItems`: Keeps track of the filtered items based on the selected category.

#### Effect Hook

The `useEffect` hook updates the `filteredItems` state whenever the `selectedCategory` changes.

```javascript
useEffect(() => {
  const allItems = shoppedList.categories.flatMap((category) => category.items);

  const filteredItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => {
          const category = shoppedList.categories.find(
            (cat) => cat.name === selectedCategory
          );
          return (
            category && category.items.some((catItem) => catItem.id === item.id)
          );
        });

  setFilteredItems(filteredItems);
}, [selectedCategory]);
```

The `filteredItems` are sorted by the number of items sold.

```javascript
const sortedItems = [...filteredItems].sort((a, b) => b.sold - a.sold);
```

The `PieChart`, `Dropdown`, and `Table` components are rendered with the appropriate data passed as props.

```javascript
return (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6">ECharts with Tailwind CSS</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-1">
        <PieChart data={filteredItems} />
      </div>
      <div className="md:col-span-1">
        <Dropdown
          options={["All", ...shoppedList.categories.map((cat) => cat.name)]}
          onChange={setSelectedCategory}
        />
        <Table data={sortedItems} />
      </div>
    </div>
  </div>
);
```

### `PieChart`

The `PieChart` component uses ECharts to display a pie chart of the items sold.

The chart is initialized using the `echarts.init` method.

```javascript
const chart = echarts.init(chartRef.current);
```

The chart options are defined to display the items sold by category.

```javascript
const option = {
  title: {
    text: "Items Sold by Category",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Sold",
      type: "pie",
      radius: "50%",
      data: data.map((item) => ({ value: item.sold, name: item.name })),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
chart.setOption(option);
```

### `Table`

The `Table` component displays a table of items and the number of items sold.

```javascript
const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Item</th>
          <th className="py-2">Sold</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.sold}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

### `Dropdown`

The `Dropdown` component allows the user to select a category from a dropdown menu.

```javascript
const Dropdown = ({ options, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
```

## Data

The data is stored in the `shoppedList` object, which contains categories and items.

```javascript
const shoppedList = {
  categories: [
    {
      id: 1,
      name: "Electronics",
      items: [
        { id: 101, name: "Laptop", price: 899.99, sold: 150 },
        { id: 102, name: "Smartphone", price: 699.99, sold: 200 },
        { id: 103, name: "Tablet", price: 299.99, sold: 120 },
        { id: 104, name: "Headphones", price: 199.99, sold: 180 },
        { id: 105, name: "Smartwatch", price: 149.99, sold: 160 },
      ],
    },
    // Other categories...
  ],
};
```

## How It Works

1. The `SquadChart` component initializes the state and sets up the effect hook to update the filtered items based on the selected category.
2. The `Dropdown` component allows the user to select a category, which updates the `selectedCategory` state.
3. The `useEffect` hook filters the items based on the selected category and updates the `filteredItems` state.
4. The `PieChart` component displays the filtered items in a pie chart.
5. The `Table` component displays the filtered items in a table.

This project demonstrates how to use React hooks, ECharts, and Tailwind CSS to create a dynamic and interactive data visualization.
