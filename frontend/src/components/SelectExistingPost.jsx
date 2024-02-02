import {useEffect, useState} from 'react'
import { useFormik } from "formik"
import axios from 'axios'


//we need to fetch the post location from the server


function SelectExistingPost() {
	//set useState 
	const[selectedPost, setSelectedPost] = useState([])
	const[posts, setPosts] = useState(["Newport Beach"])


	///call postLocation api and Duration times. 
	
	useEffect(()=>{
		axios.get("/postData")
		.then((response)=>{
			setPosts(response.data)
		})
		.catch((error)=>{
			console.error("error fetching data", error)
		})
	})
	//duration time later 
	const postLocationContent = posts.map((post) =>{
		return <option key={post._id} value={post.postName} label={post.postName} />
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
		<div className='flex flex-col justify-center items-center w-5/6 gap-y-7'>
			<h1 className='font-bold text-3xl'>Select a Post</h1>
			<form
				onSubmit={formik.handleSubmit}
				className='flex flex-col items-center justify-center gap-y-4 text-left w-3/6'
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
					className='select select-primary w-full max-w-xs'
				>
					<option disabled selected value='' label='Select a Post Location' />
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
					className='select select-primary w-full max-w-xs'
				>
					<option disabled selected key="" value='' label='Choose a Duration'></option>
					<option  key="2" value='10' label='10 minutes'></option>
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
