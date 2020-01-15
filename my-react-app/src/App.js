import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    users:[],
    followers:[]
  };
  }

  componentDidMount(){
  axios.get("https://api.github.com/users/Adammonast")
  .then(response =>{
    this.setState({
      users: [response.data]
    });
    console.log('user res',response.data);
  })
  .catch(error=>{
    console.log("error msg",error);
  })

  const followers = ["debauchery1st", "anamonteiro430", "acarrillo3", "PHONGdotTech", "KonstadinosAngelis"
  ];

  followers.map(followers => {
    axios.get(`https://api.github.com/users/${followers}`)
  .then(response =>{
    this.setState({
      followers: [response.data]
    });
    console.log('Follower res', response.data);
  })
  .catch(error=>{
    console.log("error follower msg", error);
  })
  })
  }
  
  render(){
    return (
      <div className="App">
          <h1>Github User Card</h1>
          <div className = "user-cont">
            <UserCard users = {this.state.users}/>
          </div>
          <div className = "followers">
            <h1>Followers Card</h1>
            <FollowerCard followers = {this.state.followers}/>
          </div>
      </div>
    );
  };
}

export default App;