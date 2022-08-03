import { useState } from 'react'

export default ({ onSelect }) => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false)

  const handleDropdownClick = () => setAreOptionsVisible((visible) => !visible)

  const handleOptionSelection = (option: string) => {
    onSelect(option)
    setAreOptionsVisible(false)
  }

  return {
    areOptionsVisible,
    handleDropdownClick,
    handleOptionSelection,
  }
}
