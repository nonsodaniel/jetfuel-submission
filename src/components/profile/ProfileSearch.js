import React, { useContext } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'
const ProfileSearch = () => {
    const { handleSearchName, handleSearchTag} = useContext(ProfileContext)
    const handleName =({target}) =>{
        handleSearchName(target.value)
      }
      const handleTag =({target}) =>{
        handleSearchTag(target.value)
      }
    return (
        <div className="search-wrap">
        <input type="text" className="name__search"
         placeholder="Search by name" 
         onChange={handleName}/>
        <input type="text" className="tag__search" placeholder="Search by tag" onChange={handleTag}/>
    </div>
    )
}

export default ProfileSearch
