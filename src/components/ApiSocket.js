import React, { Component } from 'react';
import { io } from "socket.io-client";

 
class ApiSocket extends Component {
  constructor() {
    super();
 
    this.state = {
      pageRanks: [],
      endpoint: "http://localhost:8080"
    };
  }
 
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("newMessage", data => {
      this.setState({
        pageRanks: data.pageRanks,
      });
 
      console.log(`Received : ${data.pageRanks}`);
    });
  }
 
  render() {
    const { pageRanks } = this.state;
 
    return (
      <div style={{ textAlign: "center" }}>
        <h2>{pageRanks}</h2>
		</div>
    )
  }
}
 
export default ApiSocket;