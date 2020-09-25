import React, { Component } from "react";
import Hero from '../components/Hero';
import "../App.css"
import Content from '../components/Content';
import { ReactComponent as Css } from "../skills/css.svg";
import { ReactComponent as Html } from "../skills/html.svg";
import { ReactComponent as Js } from "../skills/js.svg";
import { ReactComponent as ReactJs } from "../skills/react.svg";
import { ReactComponent as Wp } from "../skills/wordpress.svg";
import { ReactComponent as Python } from "../skills/python.svg";
import { ReactComponent as Ruby } from "../skills/ruby.svg";
import { ReactComponent as Node } from "../skills/nodejs.svg";
import { ReactComponent as Mongodb } from "../skills/mongodb.svg";
import { ReactComponent as Git } from "../skills/git.svg";
function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>I recently graduated high school in 2019 and was driven to go directly into a career I love.</p>

            <p> I was previously a Google Data Center Technician repairing servers and learning things on the spot.</p>

            <p> After my position, I went directly to a coding Bootcamp called General Assembly where I learned the MERN Stack in 3 months.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

            <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>
           
            <div className="ProjectContainerSkills">
          <div className="projectDescriptionAbout projectPhone">
            <h1 className="currentSkills">Current Skills</h1>
            <div className="flex">
              <Css />
              <Html />
              <Js />
              <ReactJs />
              <Wp />
              <Python />
              <Ruby />
              <Node className="nodejs" />
              <Mongodb />
              <Git />
            </div>
          </div>
        </div> </Content>
       
        </div>
    );

}

export default AboutPage;