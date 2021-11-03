import React from 'react'

const Alert = ({ alertType, children }) => {
  return (
    <span key={alert.id} className={`alert alert-${alertType}`}>
      {children}
    </span>
  )
}

Alert.defaultProps = {
  alertType: 'info',
}

export default Alert
