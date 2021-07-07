import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext';

const ProfileDetails = ({profiles, tagList}) => {
    const {id, firstName, lastName, email, pic, company, grades, skill} = profiles;
    const {randomId, handleAddTags} = useContext(ProfileContext)
    const [tag, setTag] = useState('');
    const [toggle, setToggle] = useState(false);
 

    const handleSubmit = (e) =>{
        if(e.key === "Enter"){
            let obj = {
                id: e.target.id,
                tagName: tag
            }
            handleAddTags(obj)
            setTag('')
        }
    }
    const changeTag = (e) =>{
        e.stopPropagation(); 
    e.preventDefault();
     setTag(e.target.value)
    }
    const handleToggle = (e) =>{
        e.stopPropagation(); 
        setToggle(!toggle)
    }
    return (

        <div className="row">
         <div className="content">
          <div className="img-wrap">
              <img src={pic} alt={firstName + 'Profile'}/>
          </div>
          <div className="details-wrap">
              <h1>{firstName} {lastName}</h1>  
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>Skill: {skill}</p>
              <p>Average: 88.75%</p>
              {
                  toggle && <div className="test-score-wrap">
                    {
                       grades.length ? (
                           grades.map((grade, i) =>{
                               return(
                                  <div className="test-score" key={new Date()}>
                                  <span className="test__title">Test {i}</span>
                                  <span className="test__score">{grade}%</span>
                              </div>
                               )
                           })
                       ) : null 
                    }
                </div>
                 
              }
              <div className="tags" id={id}>
                  {
                      tagList.map((tag, i )=>   <span key={i} className="tag">{tag.tagName}</span>)
                  }
             </div>
             <div className="add-tag">
                <input type="text" className="add__tag" placeholder="Add a tag"
                onChange={changeTag} value={tag}  onKeyPress={handleSubmit}
                />
    </div>
          </div>
          <div className="icon-wrap"><span className="pointer" id= {id} onClick={handleToggle}><i className="fas fa-plus"></i></span></div>
         </div>
     </div>
    )
}

export default ProfileDetails
