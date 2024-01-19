import { useFormik } from "formik"
import Yup from "yup"

function CreatePost() {
	const formik = useFormik({
		initialValues: {
			userName: "",
			email: "",
			postLocation: "",
			postId: 0,
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 3))
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
			if (!values.userName) {
				errors.userName = "Username is required"
			}
			if (!values.postLocation) {
				errors.postLocation = "Post Location is required"
			}
			if (!values.postId) {
				errors.postId = "Post id is required"
			}
			return errors
		},
	})
	return (
		//containter div that will also contain the for
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor='email'>Email: </label>
				<input
					name='email'
					id='email'
					type='email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				></input>
				{formik.touched.email && formik.errors.email ? (
					<div>{formik.errors.email}</div>
				) : null}

				<label htmlFor='username'>Username: </label>
				<input
					name='userName'
					id='userName'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.userName}
				></input>
				{formik.touched.userName && formik.errors.userName ? (
					<span>{formik.errors.userName}</span>
				) : null}

				<label htmlFor='postLocation'>Post Location</label>
				<input
					name='postLocation'
					id='postLocation'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.postLocation}
				></input>
				{formik.touched.postLocation && formik.errors.postLocation ? (
					<span>{formik.errors.postLocation}</span>
				) : null}

				<label htmlFor='postId'>Post ID</label>
				<input
					name='postId'
					id='postId'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.onBlur}
					value={formik.values.postId}
				></input>
				{formik.touched.postId && formik.errors.postId ? (
					<span>{formik.errors.postId}</span>
				) : null}
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default CreatePost
