import React from 'react'

const CheckBox = ({id, classes, name}) => {
  return (
    <div>
                            <input
                      type="checkbox"
                      className={classes}
                      name = {name}
                      id={id}
                    />
    </div>
  )
}

export default CheckBox