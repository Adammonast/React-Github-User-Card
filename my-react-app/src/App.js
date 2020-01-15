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
    axios
    .get("https://api.github.com/users/Adammonast")
    .then(response => {
      this.setState({
      users: [response.data]
    });

    const data = response.data;
    return data;

    // console.log('response data: ',response.data);

    })

    .then(response => {
      console.log("response 2: ", response)
      axios
      .get(`${response.followers_url}`)
      .then(response =>{
        console.log('Follower response data: ', response.data);
        this.setState({
        followers: [...response.data]
      });

    })
    
    // followers_url.map(followers => {
    //   axios
    //   .get(`${users.data.followers_url}`)
    //   .then(response =>{
    //     console.log('Follower response data: ', response.data);
    //     this.setState({
    //     followers: [response.data]
    //   });

    .catch(error=>{
      console.log("error follower msg", error);
    })
    })

    .catch(error=>{
      console.log("error msg",error);
    })

    // const followers = ["debauchery1st", "anamonteiro430", "acarrillo3", "PHONGdotTech", "KonstadinosAngelis"
    // ];

    // followers_url.map(followers => {
    //   axios
    //   .get(`${users.data.followers_url}`)
    //   .then(response =>{
    //     console.log('Follower response data: ', response.data);
    //     this.setState({
    //     followers: [response.data]
    //   });

    // })

    // .catch(error=>{
    //   console.log("error follower msg", error);
    // })
  // })
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