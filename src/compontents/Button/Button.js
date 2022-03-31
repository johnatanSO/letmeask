import React from 'react'

import '../../styles/button.css'

function Button(props) {
  return (
    <button className="button" {...props} />
  )
}

export default Button