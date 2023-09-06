export default function Header({ filter, handleFilter }) {
  return (
    <header className="header">
      <span className="hide-filter" onClick={handleFilter}>
        {filter ? 'Hide Filter' : 'Show Filter'}
      </span>
      <h1>Sneakers</h1>
    </header>
  );
}
