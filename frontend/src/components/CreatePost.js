import { useFormik } from "formik"
import Yup from "yup"

function CreatePost() {
	const formik = useFormik({
		initialValues: {
			postLocation: "",
			postId: 0,
		},
		onSubmit: values => {
			alert()
		},
	})
	return (
		//containter div that will also contain the for
		<div>Create Post</div>
	)
}

export default CreatePost
