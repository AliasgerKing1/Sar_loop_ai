import React from 'react'

const Password = ({placeholder , name, change, blur,classes}) => {
  return (
    <div>
         <input
                      name={name}
                      type="password"
                      placeholder={placeholder}
                      className={classes}
                      onChange={change}
                      onBlur={blur}
                    />
    </div>
  )
}

export default Password