import React from 'react';
import '../index.css';
import gh from "../assets/gh.png";
import tasker from "../assets/tasker.png";
import carcar from "../assets/carcar.png";

function Projects() {
  return (
<div class="container">
  <h1>Projects</h1>
  <div class="row">
    <div class="col-12">
		<table class="table table-image">
		  <thead>
		    <tr>
		      <th scope="col"><h1>Title</h1></th>
		      <th scope="col"><h1>Image</h1></th>
		      <th scope="col"><h1>Description</h1></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
        <th scope="row"><h2>
            Gold'n Hours</h2></th>
		      <td class="w-25">
            <a target="_blank" href="https://squad-core.gitlab.io/goldn-hours/">
			      <img src={gh} className="img-fluid img-thumbnail projects" alt="Sheep"/>
            </a>
		      </td>
		      <td>
          -The first map based social media application geared toward the professional.
<br />-Visitors of the site can view "pins" created by users all over the world and see where the picture was taken with the weather and lighting, wind, and crowd conditions
<br />-You can navigate from pins to see either more posts from that location or more posts from that user
<br />-You can search for all users and filter them by name
<br />-You can search for photos filtered by location
<br />-Visitors of the site can sign up, create "pins", and depict the weather in their posts.</td>
		    </tr>
		    <tr>
		      <th scope="row"><h2>
            CarCar</h2></th>
		      <td class="w-25">
            <a target="_blank" href="https://github.com/thwhtstrt/CarCar">
			      <img src={carcar} className="img-fluid img-thumbnail projects" alt="Sheep"/>
            </a>
		      </td>
		      <td>CarCar is a web application that is designed to manage an automobile dealership by monitoring the inventory, sales, and services. This application is run in docker with all dependencies. The three microservices use Restful Api in the back end that is used to display and interact with the front end. Both sales and services possess an Automobile value object which are created and updated through our poller which requests and retrieves Automobile data from the inventory microservice. We chose to design the application with a modern feeling, using bootstrap in order to unify the appearance of the project.</td>
		    </tr>
        <tr>
		      <th scope="row"><h2>
            Tasker</h2></th>
		      <td class="w-25">
            <a target="_blank" href="https://github.com/thwhtstrt/Tasker">
			      <img src={tasker} className="img-fluid img-thumbnail projects" alt="Sheep"/>
            </a>
		      </td>
		      <td>Bootstrap Grid 4 Tutorial and Examples</td>
		    </tr>
		  </tbody>
		</table>
    </div>
  </div>
</div>
  );
}

export default Projects;
