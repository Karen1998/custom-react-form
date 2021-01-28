import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.targe.value);
  }

  return {
    value,
    onChange
  }
}

export default useInput
