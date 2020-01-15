import React from "react";

const FollowerCard= (props)=>{
console.log('follower props', props);
return (
        <div className = "follower-cards">
            {props.followers.map(follower => (
                <div key = {follower.id} className = "followers">
                    <img width = "200" src = {follower.avatar_url} alt = "user avi"/>
                    <h5>Github Username: {follower.login}</h5>
                    <a href = {follower.html_url} alt = "user page link">Profile</a>
                    <p>Company: {follower.company}</p>
                    <p>Biography: {follower.bio}</p>
                    <p>Followers: {follower.followers}</p>
                    <p>Following: {follower.following}</p>
                </div>
            ))}
        </div>
        
    )
}
        
export default FollowerCard;