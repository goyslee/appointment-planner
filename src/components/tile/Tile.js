export const Tile = ({ item }) => {
  // Use Object.entries to get key-value pairs from the item object
  const itemEntries = item ? Object.entries(item) : [];

  return (
    <div className="tile-container">
      {itemEntries.map(([key, value], index) => (
        <p key={index} className={`tile ${key}`}>
          <strong>{key[0].toUpperCase() + key.slice(1)}:</strong> {value}
        </p>
      ))}
    </div>
  );
};
