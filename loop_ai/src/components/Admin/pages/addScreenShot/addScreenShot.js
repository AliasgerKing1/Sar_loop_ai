import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from "formik"

import screenShotSchema from '../../../../Scehmas/screenShotSchema';
import Text from "../../../../shared/Inputtypes/Text"

import {AlertDanger} from "../../../../shared/Alerts/Alerts"
import FormErrors from '../../../../shared/FormError/FormError';

import { DoLogin } from '../../../../services/Adminauthservice/Adminauthservice';

import { addPhoto } from '../../../../services/ScreenShotService/ScreenShotService'

import Header from "../../shared/Header/Header"
import Footer from "../../../../shared/Footer/Footer"
import ThemeSetting from "../../shared/ThemeSetting/themeSetting"
import AppMenu from "../../shared/AppMenu/AppMenu"
import RemoveNotification from "../../shared/RemoveNotification/RemoveNotification"

const initialValues = {
    company : "",
    description : "",
    featured : "",
    quality : "",
    category : "",
    upload_date : "",
    image : ""
}
const AddScreenShot = () => {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
  
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (inputValue.trim() !== "") {
            setItems([...items, inputValue.trim()]);
            setInputValue("");
          }
        }
      };
      
    let [showSpinner, setShowSpinner] = useState(false);
  const [files, setFiles] = useState([]);
  const [data, setdata] = useState();
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let Image = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    }
    
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
   initialValues : initialValues,
   validationSchema : screenShotSchema,
   onSubmit: (values) => {
    setShowSpinner(true);
    values.upload_date = Date().now();
    // values.keyword = [...items]; // Add items to the keyword property
    // console.log('values after:', values);
    // console.log('items:', items);
setdata(values)
  }
})
let addImg = () => {
        let form = new FormData();
        files.forEach((file) => {
          form.append('files', file);
        });
        form.append("data",JSON.stringify(values))
            addPhoto(form).then(result=> {
if(result.data ) {
    setTimeout(function() {
        navigate("/admin/dashboard")
      }, 2000); // 2000 milliseconds = 2 seconds
      
}
            })
    }
    
  return (
    <>
    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">

    <Header/>

<RemoveNotification/>

<AppMenu/>
        <div className="vertical-overlay"></div>

        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Add ScreenShot</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#">Projects</a></li>
                                        <li className="breadcrumb-item active">Add ScreenShot</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}
<form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="project-company-input">Company Name</label>
                                        <Text name={"company"} placeholder={"Enter Company Name"} id="project-company-input" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.company && touched.company ? "is-invalid" : "")}/>
<FormErrors errMsg={errors.company} touched={touched.company} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Project Description</label>
                                        <textarea name="description" onChange={handleChange} onBlur={handleBlur} className={"form-control " + (errors.description && touched.description ? "is-invalid" : "")} id="" cols="30" rows="10" placeholder='Enter Description'></textarea>
                                        <FormErrors errMsg={errors.description} touched={touched.description} />
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mb-3 mb-lg-0">
                                                <label htmlFor="choices-priority-input" className="form-label">Featured</label>
                                                <select className={"form-select " + (errors.featured && touched.featured ? "is-invalid" : "")} name="featured" onChange={handleChange} onBlur={handleBlur} data-choices data-choices-search-false id="choices-priority-input">
                                                    <option value="">Select</option>
                                                    <option value="mainpage">Main Page</option>
                                                    <option value="subpages">Sub pages</option>
                                                    <option value="lesspriority">Less Priority</option>
                                                </select>
                                                <FormErrors errMsg={errors.featured} touched={touched.featured} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card body --> */}
                            </div>
                            {/* <!-- end card --> */}

                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Attached files</h5>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <p className="text-muted">Add Attached files here.</p>
                                        {/* style={errors.image && touched.image ? {border: '2px dashed #fa896b'} : {}} */}
                                        <div className="dropzone dz-clickable">
                                            <div className="row">
                                                <div className="col-md-4 offset-md-4">
                                                <input type="file" multiple onChange={Image} />
                                            <div className="dz-message needsclick">
                                                <div className="mb-3 ms-5 ps-5">
                                                    <i className="display-4 text-muted ri-upload-cloud-2-fill"></i>
                                                </div>

                                                <h5>Drop files here or click to upload.</h5>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <FormErrors errMsg={errors.image} touched={touched.image} /> */}

                                        <ul className="list-unstyled mb-0" id="dropzone-preview">
                                            
                                        </ul>
                                        {/* <!-- end dropzon-preview --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card --> */}
                            <div className="text-end mb-4">
                                <button type="reset" className="btn btn-danger w-sm me-2">Reset</button>
                                <button type='button' className="btn btn-secondary w-sm me-2">Draft</button>
                                <button type="submit" className="btn btn-success w-sm" onClick={addImg}>Upload</button>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Inspiration</h5>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <label htmlFor="choices-privacy-status-input" className="form-label">Design Quality</label>
                                        <select className={"form-select " + (errors.quality && touched.quality ? "is-invalid" : "")} name="quality" onChange={handleChange} onBlur={handleBlur} data-choices data-choices-search-false id="choices-privacy-status-input">
                                            <option value="">Selected</option>
                                            <option value="complex,&,high,number,of,pages">Complex & High number of pages</option>
                                            <option value="complex,&,low,number,of,pages">Complex & Low number of pages</option>
                                            <option value="simple,&,low,number,of,pages">Simple & Low number of pages</option>
                                            <option value="simple,&,high,number,of,pages">Simple & igh number of pages</option>
                                        </select>
                                        <FormErrors errMsg={errors.quality} touched={touched.quality} />
                                    </div>
                                </div>
                                {/* <!-- end card body --> */}
                            </div>
                            {/* <!-- end card --> */}

                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Tags</h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="choices-categories-input" className="form-label">Categories</label>
                                        <select className={"form-select " + (errors.category && touched.category ? "is-invalid" : "")} name="category" onChange={handleChange} onBlur={handleBlur} data-choices data-choices-search-false id="choices-categories-input">
                                            <option value="">Select</option>
                                            <option value="designing">Designing</option>
                                            <option value="development">Development</option>
                                            <option value="student">Student</option>
                                        </select>
                                        <FormErrors errMsg={errors.category} touched={touched.category} />
                                    </div>
 {/* name="keyword" 
       + (errors.keyword && touched.keyword ? "is-invalid" : "")}
        
      */}
                                        {/* <label htmlFor="choices-text-input" className="form-label">Keyword</label>
    <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false">
      <div className="choices__inner">
      <input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyPress={handleKeyPress}
  placeholder={"Enter Keywords"}
  id="choices-text-input"
  onBlur={handleBlur}
  className="form-control choices__input"
/>

        <div className="choices__list choices__list--multiple">
          {items.map((item, index) => (
            <div
              key={index}
              className="choices__item choices__item--selectable"
              data-item=""
              data-id={index + 1}
              data-value={item}
              data-custom-properties="[object Object]"
              aria-selected="true"
              data-deletable=""
            >
              {item}
              <button
                type="button"
                className="choices__button"
                aria-label={`Remove item: '${item}'`}
                data-button=""
                onClick={() => setItems(items.filter((_, i) => i !== index))}
              >
                Remove item
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="choices__list choices__list--dropdown" aria-expanded="false">
        <div className="choices__item choices__item--choice">Press Enter to add <b>"{inputValue}"</b></div>
      </div>
    </div>
    <FormErrors errMsg={errors.keyword} touched={touched.keyword} /> */}
                                </div>
                                {/* <!-- end card body --> */}
                            </div>
                            {/* <!-- end card --> */}

                            {/* <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Members</h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="choices-lead-input" className="form-label">Team Lead</label>
                                        <select className="form-select" data-choices data-choices-search-false id="choices-lead-input">
                                            <option value="Brent Gonzalez" selected>Brent Gonzalez</option>
                                            <option value="Darline Williams">Darline Williams</option>
                                            <option value="Sylvia Wright">Sylvia Wright</option>
                                            <option value="Ellen Smith">Ellen Smith</option>
                                            <option value="Jeffrey Salazar">Jeffrey Salazar</option>
                                            <option value="Mark Williams">Mark Williams</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="form-label">Team Members</label>
                                        <div className="avatar-group">
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Brent Gonzalez">
                                                <div className="avatar-xs">
                                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </a>
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Sylvia Wright">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title rounded-circle bg-secondary">
                                                        S
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Ellen Smith">
                                                <div className="avatar-xs">
                                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </a>
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                                <div className="avatar-xs" data-bs-toggle="modal" data-bs-target="#inviteMembersModal">
                                                    <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                        +
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <!-- end card body --> */}
                            {/* </div> */}
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    </form>
                    {/* <!-- end row --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}


    {/* <!-- Modal --> */}
    <div className="modal fade" id="inviteMembersModal" tabIndex="-1" aria-labelledby="inviteMembersModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header p-3 ps-4 bg-soft-success">
                    <h5 className="modal-title" id="inviteMembersModalLabel">Members</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4">
                    <div className="search-box mb-3">
                        <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
                        <i className="ri-search-line search-icon"></i>
                    </div>

                    <div className="mb-4 d-flex align-items-center">
                        <div className="me-2">
                            <h5 className="mb-0 fs-13">Members :</h5>
                        </div>
                        <div className="avatar-group justify-content-center">
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Brent Gonzalez">
                                <div className="avatar-xs">
                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid" />
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Sylvia Wright">
                                <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-secondary">
                                        S
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Ellen Smith">
                                <div className="avatar-xs">
                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mx-n4 px-4" data-simplebar style={{maxHeight: '225px'}}>
                        <div className="vstack gap-3">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Nancy Martino</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                </div>
                            </div>
                            {/* <!-- end member item --> */}
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <div className="avatar-title bg-soft-danger text-danger rounded-circle">
                                        HB
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Henry Baird</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                </div>
                            </div>
                            {/* <!-- end member item --> */}
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Frank Hook</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                </div>
                            </div>
                            {/* <!-- end member item --> */}
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Jennifer Carter</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                </div>
                            {/* </div>
                            <!-- end member item --> */}
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <div className="avatar-title bg-soft-success text-success rounded-circle">
                                        AC
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Alexis Clarke</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                </div>
                            </div>
                            {/* <!-- end member item --> */}
                            {/* <div className="d-flex align-items-center"> */}
                                <div className="avatar-xs flex-shrink-0 me-3">
                                    <img src="/assets/images/users/avatar-7.jpg" alt="" className="img-fluid rounded-circle" />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Joseph Parker</a></h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                </div>
                            </div>
                            {/* <!-- end member item --> */}
                        </div>
                        {/* <!-- end list --> */}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light w-xs" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-success w-xs">Invite</button>
                </div>
            </div>
            {/* <!-- end modal-content --> */}
        </div>
        {/* <!-- modal-dialog --> */}
    </div>
    {/* <!-- end modal --> */}



    {/* <!--start back-to-top--> */}
    <button  className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/* <!--end back-to-top-->

    <!--preloader-->
    <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
    <ThemeSetting/>
    </>
  )
}

export default AddScreenShot