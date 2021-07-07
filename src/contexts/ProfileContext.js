import React, { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const [profile, setProfile] = useState([])
  const [data, setData] = useState([]);

  const fetchData = () =>{
     return  fetch(`https://api.hatchways.io/assessment/students`)
  }

  const handleSearchName =(val) =>{
    if (val === '') return data
    let searchData  = profile.filter(data =>  data.firstName.toLowerCase().includes(val.toLowerCase()) ||
       data.lastName.toLowerCase().includes(val.toLowerCase()))
       setProfile(searchData)
    }
  const  handleSearchTag =(val) =>{}

  const handleAddTags = (tag) =>{
  let profiles = [...profile]
  let tagProfile = profiles.find(data=> +data.id === +tag.id);
  tagProfile.tags= tagProfile.tags || []
  tagProfile.tags.push(tag)
  setProfile(profiles)
}
const randomId = () =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  useEffect(() => {
    fetchData()
    .then(res => res.json())
    .then(data =>  data && setProfile(data.students))
  }, []);

  return (
    <ProfileContext.Provider value={{ profile,randomId, handleSearchName, handleSearchTag, handleAddTags }}>
      {props.children}
    </ProfileContext.Provider>
  );
}
 
export default ProfileContextProvider;