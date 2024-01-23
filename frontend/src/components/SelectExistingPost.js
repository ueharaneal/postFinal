import { useFormik } from "formik"
import Yup from "yup"

//we need to fetch the post location from the server

function SelectExistingPost() {
	const formik = useFormik({
		initialValues: {
			postLocation: "",
			postId: 0,
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 3))
		},
		validate: values => {
			let errors = {}
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
		<div className='flex flex-col justify-center items-center w-5/6 '>
			<h1 className='font-bold text-3xl'>Select a Post</h1>
			<form
				onSubmit={formik.handleSubmit}
				className='flex flex-col items-center justify-center gap-y-1 text-left w-3/6'
			>
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
					<span className='text-red-600'>
						{formik.errors.postLocation}
					</span>
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
					<span className='text-red-600'>{formik.errors.postId}</span>
				) : null}
				<button
					type='submit'
					className='bg-[#27374D] text-[#DDE6ED] rounded-full p-4 m-2'
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default SelectExistingPost
