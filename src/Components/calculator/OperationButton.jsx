import { ACTIONS } from "./CalculatorMode"

export default function OperationButton({ dispatch, operation }) {
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
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  )
}
