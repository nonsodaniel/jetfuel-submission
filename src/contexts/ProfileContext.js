import React, { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
  const [profile, setProfile] = useState([])
  const [searchNameVal, setSearchNameVal] = useState("");
  const [searchTagVal, setSearchTagVal] = useState("");

  const fetchData = () =>{
     return  fetch(`https://api.hatchways.io/assessment/students`)
  }

const filterName = (profile, val) => {
  return val === ""
    ? profile
    : profile.filter((data) => {
      let { firstName, lastName } = data;
      return (
        firstName.toLowerCase().includes(val.toLowerCase()) ||
        lastName.toLowerCase().includes(val.toLowerCase())
      );
      });
};
const filterTag = (profile, val) => {
  return val === ""
    ? profile
    : profile.filter((data) => {
        if (data.tags && data.tags.length) {
          return data.tags.some(tag => 
            tag.tagName.toLowerCase().includes(val.toLowerCase())
            );
        }
        return false
      });
};
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

let displayProfiles = React.useMemo(() => {
  let filteredByName = filterName(profile, searchNameVal)
 return filterTag(filteredByName, searchTagVal)

}, [
  profile,
  searchNameVal,
  searchTagVal,
]);

  return (
    <ProfileContext.Provider
      value={{
        profile: displayProfiles,
        setSearchNameVal,
        setSearchTagVal,
        handleAddTags,
        
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
}
 
export default ProfileContextProvider;