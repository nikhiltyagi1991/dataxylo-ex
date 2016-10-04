At backend:
1. nodejs -- server side scripting
2. express -- framework for better management
3. mongodb -- for storing databases
4. moongoose -- for link between server and database.
5. gridfs-stream -- for writing files in mongodb

At Frontend:
1. jade -- templating engine
2. jquery -- for client-side scripting

How to run:
Pre-Requisites:
Up and running mongodb on localhost:27017

Open terminal and run following commands:
1. git clone
2. npm install
3. npm start

Open browser and go to http://localhost:3000/

Explaination:
The program creates a database dataxylo in mongodb and stores text in feature1/2 collections.
Files are stored in feature(1/2)bucket.files and feature(1/2)bucket.chunks collections.