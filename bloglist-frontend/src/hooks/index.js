import { useState } from "react"

export const useField = type => {
  // highlighl-line
  const [value, setValue] = useState("")

  const onChange = event => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue("")
  }

  const spread = () => {
    return { value, onChange, type }
  }
  return {
    type,
    value,
    onChange,
    reset,
    spread
  }
}
