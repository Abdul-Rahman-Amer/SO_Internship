# A NOTE FROM ME!!
#### Hello! My name is Abdulrahman Amer but feel free to call me Rocky! I am happy to share this with you. I have created the UI and refer to some additional things I did to stand out towards the end of the read me. I have been coding for a while but dominantly in startup settings. I graduated flatiron in October in the Data Science cohort; but I picked up a lot of these skills at my last start up, which committed wage theft after I graduated flatiron and quit my jobs to join the team. Given my experience this Internship seemed like a great fit as I transition into a long term role and I am so grateful for this opportunity.

#### Before Flatiron I have already built my first Nueral Network to assist the real estate brokerage I was working with at the time all from trial and error and the desire to build. I am really eager to learn and am excited for a chance at this internship. I am a jazz trombonist, pianist, and drummer as well and have a few years of real estate experience so my ability to improvise, communicate with people, and story tell compliments my technical background. Some fun facts about me are I am a twin, and my mom had 3 sets of twins! The other is I won my first grammy award in the Latin-Jazz category when I became a new member of Arturo O' Farrill's Afro Latin Jazz Orchestra at 19 years old.

#### I love that I was able to do this assignment because I feel my inner composer coming out and I really am starting to see different programming languages as instruments. I listed the extra credit here in case you have any questions about what is going on.

#### I have a lot to learn but learning is my passion and I am eager to learn from you!

## Extra Credit:

1) Adding Hover to the form Fields. 
2) Adding Error Handling so that if there is a missing field on submit there is a flash message saying to complete all forms essentially. Do give it a shot! 
3) Creating a Flask endpoint to handle the request. This is not in production but the logic was developed where onSubmit, the json response will be sent to flask and injected into the database. 
4) A simple Python Script to pull all emails from the database and email them all a mass message. 

## Execution Time:
#### This took about 2 hours to complete. It is now 1:05 am as I type this and I clocked in around 10:30pm with a break to eat snack and take a walk.

# Set Up

Install Node.js: npm is distributed with Node.js, so first we need to install Node.js. Visit the official Node.js website at https://nodejs.org and download the installer for your operating system. Follow the installation instructions specific to your OS.

## Installation
For API integration run the command:

```bash
 npm install axios
```

For the API built in Flask:

```bash
pip install Flask
```

## Running the App
cd into "internship" and run the following:

```bash
npm start
```

## Execution

The Objective was to recreate the Figma Design and on form submit, remove the background image and render a background color of choice.




# NEXT STEPS
Hosting the UI and the Flask Server as well as a database and establishing appropriate conns. Reverse proxy such as NGINX needed as a reverse proxy to handle the requests. On Submit of the Form, the React app will ping the Flask API which will then store all incoming data. Once this is in place, email all clients. In the cloud this can be accomplished by 

Deployment can be executed in the cloud. The NGINX will be in the same instance as the flask app and set to listen to events from the domain pointing to the react app. The choice of SQL depends and is flexible but creating a DB instance and making sure to link that in the Flask API will also be a part of that journey. 

After all is deployed, Communicating with the Client and understanding more about there next launch and how they may need assistance in terms of client acquisition and gearing up for q3 with updated features in the UI or in the backend for admins (potentially developing a CRM with all the data that was collected from the landing page inside of the flask app) 
