import React from 'react'

const FormErrors = ({errMsg, touched}) => {
  return (
    <div>
    {
        errMsg && touched ? (<small className='text-danger'>{errMsg}</small>) : null
    }
        
    </div>
  )
}

export default FormErrors