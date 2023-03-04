import React from 'react'

const AlertDanger = (props) => {
  return (
                                                    <div className="alert alert-danger alert-border-left alert-dismissible fade show mb-xl-0 mt-4" role="alert">
                                                    <i className="ri-error-warning-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
  )
}


const AlertPrimary = (props) => {
  return (
<div class="alert alert-primary alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-user-smile-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

const AlertSecondary = (props) => {
  return (
<div class="alert alert-secondary alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
const AlertSuccess = (props) => {
  return (
<div class="alert alert-success alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
const AlertWarning = (props) => {
  return (
<div class="alert alert-warning alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
const AlertInfo = (props) => {
  return (
<div class="alert alert-info alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
const AlertLight= (props) => {
  return (
<div class="alert alert-light alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
const AlertDark= (props) => {
  return (
<div class="alert alert-light alert-border-left alert-dismissible fade show" role="alert">
    <i class="ri-check-double-line me-3 align-middle fs-16"></i><strong>{props.msg}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}



export {AlertDanger,AlertPrimary,AlertSecondary,AlertWarning, AlertDark,AlertLight,AlertInfo,AlertSuccess}