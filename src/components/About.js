import React from "react";

function About(props) {
  return (
    <div id="about">
      <h3>About Me</h3>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
