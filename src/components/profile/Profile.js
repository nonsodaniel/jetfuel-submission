import React from 'react'
import ProfileSearch from './ProfileSearch'
import '../assets/css/profile.css'
import ProfileList from './ProfileList'

const Profile = () => {
    return (
        <div className="container">
             <div className="card">
                 <ProfileSearch />
                 <ProfileList />
             </div>
        </div>
    )
}

export default Profile
