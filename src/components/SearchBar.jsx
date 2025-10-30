import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-root">
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search keys or values..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
