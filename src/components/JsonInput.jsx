import './JsonInput.css'

function JsonInput({ value, onChange }) {
  return (
    <div className="json-input-root panel panel--left">
      <p className="panel__label">Paste or type JSON data</p>

      <div className="json-textarea-wrapper">
        <textarea
          className="json-textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`{
  "name": "John",
  "age": 30
}`}
          spellCheck={false}
        />
        <button
          className="json-clear-btn"
          onClick={() => onChange('')}
          type="button"
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default JsonInput
