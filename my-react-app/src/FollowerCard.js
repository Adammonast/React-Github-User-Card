import React from "react";
// import {useState} from "react";


const FollowerCard= (props)=>{
    console.log('passdown', props.followers);
return (
        <div className = "follower-cards">
            {props.followers.map(follower => (
                <div key = {follower.id} className = "followers">
                    <img width = "200" src = {follower.avatar_url} alt = "user avi"/>
                    <h5>Github Username: {follower.login}</h5>
                    <a href = {follower.html_url} alt = "user page link">Profile</a>
                </div>
            ))}
        </div>
        
    )
}
        
export default FollowerCard;