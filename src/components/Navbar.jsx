function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar__title">JSON TREE VISUALIZER</div>
      <div className="navbar__actions">
        <label className="toggle">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={onToggleTheme}
            aria-label="Toggle dark mode"
          />
          <span className="toggle__label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar


