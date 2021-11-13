import React from 'react'
import ProfileNav from './ProfileNav'

const ProfilePage = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-auto">
					<ProfileNav />
				</div>
				<div className="col">
					Профиль
				</div>
			</div>
		</div>
	)
}

export default ProfilePage