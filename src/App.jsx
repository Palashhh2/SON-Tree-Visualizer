import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import JsonInput from './components/JsonInput.jsx'
import SearchBar from './components/SearchBar.jsx'
import JsonTree from './components/JsonTree.jsx'
import GenerateButton from './components/GenerateButton.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [rawJson, setRawJson] = useState('')
  const [treeData, setTreeData] = useState(null)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleToggleTheme = () =>
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  const handleGenerate = () => {
    setError('')
    try {
      const parsed = JSON.parse(rawJson)
      setTreeData(parsed)
    } catch (e) {
      setTreeData(null)
      setError('Invalid JSON')
    }
  }

  const isGenerateDisabled = useMemo(() => !rawJson.trim(), [rawJson])

  return (
    <div className={`app-container ${theme}`}>
      <div className="app-inner">
        <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

        <main className="main">
          <div className="left-panel">
            <JsonInput value={rawJson} onChange={setRawJson} />
          </div>

          <div className="right-panel">
            <div className="visual-top">
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <div className="tree-wrap">
              <JsonTree data={treeData} searchTerm={search} />
            </div>
            {error && <div className="error">{error}</div>}
          </div>
        </main>

        <footer className="footer">
          <GenerateButton
            onClick={handleGenerate}
            disabled={isGenerateDisabled}
          />
        </footer>
      </div>
    </div>
  )
}

export default App
