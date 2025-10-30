import './GenerateButton.css'

export default function GenerateButton({ onClick, disabled }) {
  return (
    <button className="generate-btn" onClick={onClick} disabled={disabled}>
      Generate Tree
    </button>
  )
}
