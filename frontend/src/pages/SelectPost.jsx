import SelectExistingPost from "../components/SelectExistingPost"
import CreatePost from "../components/SelectExistingPost"

//this will be the page that allows you to choose or create a post
function SelectPost() {
	return (
		<div className='flex justify-center items-center m-5'>
			<SelectExistingPost />
		</div>
	)
}

export default SelectPost
