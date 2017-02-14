# Graphcool-Ionic-Instagram-Clone
A Instagram clone made with Ionic Framework 2 and Graph.cool backend.

## Requirements

* Install Ionic Framework (https://ionicframework.com/getting-started/)
* Gett a Grap.cool Account (https://www.graph.cool/docs/quickstart/)
* Clone this repository
* Install Cordova Plugings
* Change the variables with your own Graph.cool endpoints

### How to install Ionic Framework

You can start an Ionic project in around 3 minutes. To install Ionic Framework on your computer you first need to install "Node.js". A guid how to install Node.js you can find here: https://nodejs.org/en/download/package-manager/. After that just type in the following commands and you are ready to go. If you need a more detailed overview visit the offical Ionic Framework website and documentation (https://ionicframework.com/getting-started/)

**Installation**

* npm install -g cordova ionic


### How to get a Graph.cool Account

This project uses the Graph.cool backend. Graph.cool is using the power of the GraphQL query language to power their backend. It's fast, reliable and easy to set up. If you haven't heard of GraphQL you should visit their website first (LinK: http://graphql.org/learn/). GraphQL was developed by Facebook Inc. and is the successor of REST. If you want to see what the future looks like just use GraphQL to build your next API. And if you don't want to reinvent the wheel all the time use the awesome Backend-as-a-Service from Graph.cool.

**Registration**

This registartion at Graph.cool is really easy. Just go over to https://console.graph.cool/signup and type in your personal information. You can also login via your Google or GitHub Account. After that you need to define a Model.

**New project**

1. Create a new project and name it InstaGraphQL.
2. The User and Data model are already created for you, but you need some more models.
3. For our example we need a model which is called "Image". Add the model "Image" to your Graph.cool project
4. Add to your model "Image" the attribute field "picture" with the type "File"
5. Add some mode attribute fields to your model. It's not needed, but you can play with it later.
6. Finish! You are ready to go.

### How to clone this project

Tu run this project you need to download it first. Just run "git clone https://github.com/lockeyo/Graphcool-Ionic-Instagram-Clone" or download it via a normal http download. To install all packages which are needed for the project run "npm install".

### How to install Cordova Plugings

To run this app you need a couple of Cordova plugins. I have made a quick shell script (pluginInstall.sh). If you don't want to run my shell script just add these Cordova plugins to your Ionic project.

* cordova-plugin-camera
* cordova-plugin-compat
* cordova-plugin-console
* cordova-plugin-device
* cordova-plugin-file
* cordova-plugin-file-transfer
* cordova-plugin-filepath
* cordova-plugin-http
* cordova-plugin-splashscreen
* cordova-plugin-statusbar
* cordova-plugin-whitelist

To run my script. Just open your terminal and go to the base directory of this repository. There you should run 'sh pluginInstall.sh'. After this command has run through all the plugins for this project should be installed.

### Change the client and the camera upload file

**client.ts**

To get data from your client you have to edit the file "src/app/client.ts". Just copy the endpoint from the Graph.cool backend and paste it to the client.ts file.

**camera.ts**

To make the upload work you have to edit the file "src/pages/camera/camera.ts". Just copy the file endpoint form the backend and paste it to the camera.ts file to the variable "urlTo".

## Issues

If you run into any problem, just make an issue and I'll try to solve it or ofer you guidance to solve the issue yourself.

## Contribution

All contribution are welcome. Just make a PR and tell me what you want to archive with your code changes.

## Licence

MIT: http://anthony.mit-license.org
