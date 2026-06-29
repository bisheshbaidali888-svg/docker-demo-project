# Docker Demo Project - Node.js + MongoDB

This is my first Docker project where I learned how to use 
Docker containers in a real development workflow.

## What I Built
A simple User Profile web app where you can save and load 
your profile. Data is stored in MongoDB database running 
in a Docker container.

## What I Learned
- How to run containers using Docker
- How to use Docker Compose to run multiple containers
- How to write a Dockerfile to containerize my app
- How to push Docker image to Docker Hub
- How to use Docker Volumes to persist data

## Project Structure

app/
 index.html          # Frontend - User Profile page
 server.js           # Backend - Node.js + Express
 package.json        # Dependencies
 Dockerfile          # Docker image blueprint
 momgo.yaml          # Docker Compose file


## Tech Used
- Node.js + Express
- MongoDB
- Mongo Express (Database UI)
- Docker + Docker Compose
- HTML + CSS + JavaScript 

## How to Run

### Step 1: Clone the project
bash
git clone https://github.com/bisheshbaidali888-svg/docker-demo-project
cd docker-demo-project/app


### Step 2: Install dependencies
bash
npm install


### Step 3: Start MongoDB and Mongo Express
bash
docker-compose -f momgo.yaml up -d


### Step 4: Run the app
bash
node server.js


### Step 5: Open in browser
- App → http://localhost:3000
- MongoDB UI → http://localhost:8081

## Note
If you have MongoDB installed on Windows, stop it first:
bash
net stop MongoDB


## Docker Hub
My Docker image is available at:
docker pull bisheshbaidali/docker-demo:1.0