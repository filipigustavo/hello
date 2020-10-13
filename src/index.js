import React, { useEffect } from 'react'

export const Hello = ({ consoleMsg }) => {
  useEffect(() => {
    window.console.log(consoleMsg)
  }, [consoleMsg])
  return (<div>Hello, everyone!</div>)
}
