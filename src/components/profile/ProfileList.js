import React, { useContext } from 'react'
import ProfileDetails from './ProfileDetails'
import {ProfileContext} from '../../contexts/ProfileContext'

const ProfileList = () => {
    const {profile} = useContext(ProfileContext)
    return (
      <div className="card-body">
        {profile.length > 0 ? (
          profile.map((item) => {
            let { id } = item;
            let tagList = item.tags || [];
            return (
              <ProfileDetails key={id} profiles={item} tagList={tagList} />
            );
          })
        ) : (
          <div className="no-data">No data Available!</div>
        )}
      </div>
    );
}

export default ProfileList
