function GenerateButton({ onClick, disabled }) {
  return (
    <button className="generate" onClick={onClick} disabled={disabled}>
      Generate Tree
    </button>
  )
}

export default GenerateButton


