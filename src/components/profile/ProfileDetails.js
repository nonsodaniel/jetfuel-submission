import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext';

const ProfileDetails = ({profiles, tagList}) => {
    const {id, firstName, lastName, email, pic, company, grades, skill} = profiles || {};
    const {handleAddTags} = useContext(ProfileContext)
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
         e.preventDefault();
        setTag(e.target.value)
    }
    const handleToggle = () =>{
        setToggle(!toggle)
    }
    const avg = () => {
     let grade = grades && grades.length &&
        (grades.reduce((a, b) => +a + +b) / grades.length).toString()
        return grade && grade.length > 5 ? grade.slice(0, 5) : grade
    };
    return (
      <div className="row" data-testid="profile_details">
        <div className="content">
          <div className="img-wrap">
            <img src={pic} alt={firstName + "Profile"} />
          </div>
          <div className="details-wrap">
            <h1>
              {firstName && firstName.toUpperCase()} {lastName && lastName.toUpperCase()}
            </h1>

            <div className="details-InnerWrap">
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>Skill: {skill}</p>
              <p>
                Average: {avg()}%
              </p>
              {toggle && (
                <div className="test-score-wrap">
                  {grades && grades.length &&
                    grades.map((grade, i) => {
                      return (
                        <div className="test-score" key={i}>
                          <span className="test__title">Test {i}</span>
                          <span className="test__score">{grade}%</span>
                        </div>
                      );
                    })}
                </div>
              )}
              <div className="tags" id={id}>
                {tagList && tagList.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag.tagName}
                  </span>
                ))}
              </div>
              <div className="add-tag">
                <input
                  type="text"
                  className="add__tag"
                  placeholder="Add a tag"
                  id={id}
                  onChange={changeTag}
                  value={tag}
                  onKeyPress={handleSubmit}
                />
              </div>
            </div>
          </div>
          <div className="icon-wrap">
            <span className="pointer" id={id} onClick={handleToggle}>
              <i className={toggle ? "fas fa-minus" : "fas fa-plus"}></i>
            </span>
          </div>
        </div>
      </div>
    );
}

export default ProfileDetails
