import * as Yup from "yup";


const screenShotSchema = Yup.object({
    company : Yup.string().required("Enter Company Name !"),
    description : Yup.string().required("Enter description !"),
    featured : Yup.string().required("Select featured type !"),
    quality : Yup.string().required("select Quality !"),
    category : Yup.string().required("Select Category !"),
    // keyword : Yup.string().min(5, "Keyword have atleast 5 character").max(70, "Keyword have maximum 50 character").required("Enter Keywords !"),
    // image : Yup.string().required("Upload images !"),
})

export default screenShotSchema