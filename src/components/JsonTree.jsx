import { useState } from 'react'

function JsonTree({ data, query }) {
  const lowerQuery = query.trim().toLowerCase()

  function matches(value) {
    if (!lowerQuery) return true
    try {
      const text = typeof value === 'string' ? value : JSON.stringify(value)
      return text.toLowerCase().includes(lowerQuery)
    } catch {
      return false
    }
  }

  function Node({ k, v, path }) {
    const [open, setOpen] = useState(true)
    const isObject = v && typeof v === 'object'
    const show = matches(v) || (isObject && Object.values(v).some(matches))
    if (!show) return null

    if (!isObject) {
      return (
        <div className="tree__item">
          <span className="tree__key">{k}:</span> <span className="tree__value">{String(v)}</span>
        </div>
      )
    }

    const entries = Array.isArray(v) ? v.map((val, idx) => [idx, val]) : Object.entries(v)
    return (
      <div className="tree__branch">
        <button className="tree__toggle" onClick={() => setOpen(!open)} aria-label="toggle">
          {open ? '▾' : '▸'}
        </button>
        <span className="tree__key">{k}</span>
        {open && (
          <div className="tree__children">
            {entries.map(([ck, cv]) => (
              <Node key={String(ck)} k={ck} v={cv} path={[...path, ck]} />
            ))}
          </div>
        )}
      </div>
    )
  }

  if (data == null || data === '') {
    return <div className="tree tree--empty">No data</div>
  }
  const rootIsObject = typeof data === 'object' && data !== null
  if (!rootIsObject) {
    return (
      <div className="tree">
        <Node k="value" v={data} path={['value']} />
      </div>
    )
  }
  const rootEntries = Array.isArray(data)
    ? data.map((val, idx) => [idx, val])
    : Object.entries(data)

  return (
    <div className="tree">
      {rootEntries.map(([k, v]) => (
        <Node key={String(k)} k={k} v={v} path={[k]} />
      ))}
    </div>
  )
}

export default JsonTree


