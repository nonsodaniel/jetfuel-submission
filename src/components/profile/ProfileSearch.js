import React, { useContext } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'
const ProfileSearch = () => {
    const { setSearchNameVal, handleSearchTag } = useContext(ProfileContext);
    const handleName =({target}) =>{
      setSearchNameVal(target.value);
      }
      const handleTag =({target}) =>{
        handleSearchTag(target.value)
      }
    return (
      <div className="search-wrap" data-testid="profile_search">
        <input
          type="text"
          className="name__search"
          placeholder="Search by name"
          data-testid="search_name"
          aria-label="search-name"
          onChange={handleName}
        />
        <input
          type="text"
          className="tag__search"
          placeholder="Search by tag"
          data-testid="search_tag"
          onChange={handleTag}
        />
      </div>
    );
}

export default ProfileSearch
