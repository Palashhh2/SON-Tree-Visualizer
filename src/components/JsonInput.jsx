function JsonInput({ value, onChange }) {
  return (
    <div className="panel panel--left">
      <p className="panel__label">Paste or type JSON data</p>
      <textarea
  value={value}
  onChange={(e) => onChange(e.target.value)}
  placeholder={`{
  "name": "John",
  "age": 30
}`}
  spellCheck={false}
/>
    </div>
  )
}

export default JsonInput


