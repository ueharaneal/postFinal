import { useEffect, useState } from "react"
function AdminPage() {
	const [selectedUser, setSelectedUser] = useState(null)
	return (
		<div className='flex flex-col my-5 justify-center items-center gap-y-4 bg-background'>
			<h1 className='font-bold '>Admin Page</h1>
			<div className='flex flex-col'>
				This container will be for the post information
				<select>Select a post</select>
			</div>

			<div className='flex flex-col'>
				<h2 className='font-bold'>Users</h2>
				<select>Select a user</select>
				This will also be a list of all the users This container will be all
				of the users information
				<div>
					<h2>Email</h2>
				</div>
				<div>
					<h2>Name</h2>
				</div>
				<div>
					<h2>Password</h2>
				</div>
			</div>
		</div>
	)
}

export default AdminPage
