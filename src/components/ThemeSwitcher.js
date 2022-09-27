import React, { useState } from 'react'

export default function ThemeSwitcher() {
  const [icon, setIcon] = useState(false)
  function toggle() {
    setIcon(!icon)
  }
  return (
    <>
      <button onClick={toggle}>{icon ? 'ON' : 'OFF'}</button>
    </>
  )
}
