
import * as Yup from "yup"


export const contactSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Message is required ")
})
