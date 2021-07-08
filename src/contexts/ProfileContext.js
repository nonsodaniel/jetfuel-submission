import React, { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const [profile, setProfile] = useState([])
  const [searchNameVal, setSearchNameVal] = useState("");

  const fetchData = () =>{
     return  fetch(`https://api.hatchways.io/assessment/students`)
  }

  const filterName = (profile, val) => {
    let searchData =
      val === ""
        ? profile
        : profile.filter((data) => {
            data.firstName.toLowerCase().includes(val.toLowerCase()) ||
              data.lastName.toLowerCase().includes(val.toLowerCase());
          });
    return searchData;
  };
  const  handleSearchTag =(val) =>{}

  const handleAddTags = (tag) =>{
    let profiles = [...profile];
    let tagProfile = profiles.find((data) => +data.id === +tag.id);
    tagProfile.tags = tagProfile.tags || [];
    tagProfile.tags.push(tag);
    setProfile(profiles);
  }

  useEffect(() => {
    fetchData()
    .then(res => res.json())
    .then(data =>  data && setProfile(data.students))
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile: filterName(profile, searchNameVal),
        setSearchNameVal,
        handleSearchTag,
        handleAddTags,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
}
 
export default ProfileContextProvider;