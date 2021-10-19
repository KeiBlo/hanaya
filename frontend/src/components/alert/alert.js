import React from 'react'

const Alert = ({alertType, children}) => {
  return (
    <div key={alert.id} className={`alert alert-${alertType}`}>
      {children}
    </div>
  )
}

Alert.defaultProps = {
  alertType: 'info',
}

export default Alert
