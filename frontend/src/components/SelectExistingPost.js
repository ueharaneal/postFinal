import {useEffect, useState} from 'react'
import { useFormik } from "formik"
import Yup from "yup"


//we need to fetch the post location from the server


function SelectExistingPost() {
	//set useState 
	const[selectedPost, setSelectedPost] = useState([])
	const[post, setPost] = useState(["Newport Beach"])


	///call postLocation api and Duration times. 
	
	useEffect(()=>{
		axios.get("api/postData")
		.then((response)=>{
			setPost(response)
		})
		.catch((error)=>{
			console.error("error fetching data", error)
		})
	})
	//duration time later 
	const postLocationContent = post.map(location =>{
		return <option key={post.id} value={post.name} label={post.name} />
	})
	const formik = useFormik({
		initialValues: {
			postLocation: "",
			postDuration: "",
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 3))
		},
		validate: values => {
			let errors = {}
			if (!values.postLocation) {
				errors.postLocation = "Post Location is required"
			}
			if (!values.postDuration) {
				errors.postDuration = "Post duration is required"
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
				<label htmlFor='postLocation' className='font-medium text-lg'>
					Post Location
				</label>
				<select
					name='postLocation'
					id='postLocation'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.postLocation}
				>
					<option value='' label='Select a Post Location' />
					{postLocationContent}
				</select>
				{formik.touched.postLocation && formik.errors.postLocation ? (
					<span className='text-red-600'>
						{formik.errors.postLocation}
					</span>
				) : null}

				<label htmlFor='postDuration' className='font-medium text-lg'>
					Duration
				</label>
				<select
					name='postDuration'
					id='postDuration'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.postDuration}
				>
					<option value='' label='Choose a Duration'></option>
					<option value='10' label='10 minutes'></option>
				</select>
				{formik.touched.postDuration && formik.errors.postDuration ? (
					<span className='text-red-600'>
						{formik.errors.postDuration}
					</span>
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
