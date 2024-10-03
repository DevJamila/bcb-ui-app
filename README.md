# bcb-ui-app
This is the frontend application for Big Chat Brasil project. It is made with React and Next.js.

When accessing the frontend app you can login using any of this emails:
* fulano@mail.com
* ciclana@mail.com
* beltrano@mail.com
* maria@mail.com

The password for any of those is:

` senha123 `

## Build and Run

### 1. Build Application

To build the application use the npm command:

` npm install `

### 2. Build docker image

You can build a docker image for this app only, or build all the stack with docker-compose following the steps in [BCB-INFRA](https://github.com/DevJamila/bcb-infra) repository.

Build the docker image with a tag name

` docker build -t bcb-ui-app `

### 3. Run with Docker

Also you can run all the stack with [docker-compose](https://github.com/DevJamila/bcb-infra/blob/main/docker-compose.yaml)
or run the app container exposing the 3000 port

` docker run -d --name bcb-ui-app -p 3000:3000 bcb-ui-app `

## Access the frontend

[http://localhost:3000](http://localhost:3000)