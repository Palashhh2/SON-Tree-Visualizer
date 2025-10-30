import './Navbar.css'

function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="app-title">JSON TREE VISUALIZER</div>
      <button className="theme-btn" onClick={onToggleTheme}>
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  )
}

export default Navbar
