import { ACTIONS } from "./CalculatorMode"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      style={{
        cursor: "pointer",
        fonSize: "2rem",
        border: "1px solid white",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        boxShadow: "none",
        color: "black",
        borderRadius: "none",
      }}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
