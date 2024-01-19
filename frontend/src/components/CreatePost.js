import { useFormik } from "formik"
import Yup from "yup"

function CreatePost() {
	const formik = useFormik({
		initialValues: {
			postLocation: "",
			postId: 0,
			userName: "",
			email: "",
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
		validate: values => {
			let errors = {}
			if (!values.email) {
				errors.email = "Email is required"
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			) {
				errors.email = "Email is invalid"
			}
			if (!values.postLocation) {
				errors.postLocation = "Post Location is required"
			}
			if (!values.postId) {
				errors.postId = "Post id is required"
			}
		},
	})
	return (
		//containter div that will also contain the for
		<div>C</div>
	)
}

export default CreatePost
