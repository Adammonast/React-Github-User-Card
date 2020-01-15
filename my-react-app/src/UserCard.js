import React from "react";

const UserCard = (props)=>{
  console.log('user props', props);
    return (
      <div className = "user-cards">
        {props.users.map(user => (
          <div key = {user.id} className = "user">
            <img width = "200" src = {user.avatar_url} alt = "user avi"/>
            <h5>Github Username: {user.login}</h5>
            <a href = {user.html_url} alt = "user page link">Profile</a>
            <p>Biography: {user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
          </div>
        ))}
  </div>
      
  )
      
}
      
export default UserCard;