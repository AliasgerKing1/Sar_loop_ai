import React from 'react'

const Email = ({placeholder , name, change, blur, classes,value}) => {
  return (
    <div>
                            <input
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      type="email"
                      value={value}
                      onChange={change}
                      onBlur={blur}
                    />
    </div>
  )
}

export default Email