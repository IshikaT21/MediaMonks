# MediaMonks

1. Connect to MongoDB using this URI: 
   mongodb://localhost:27017/keyvaluestore
   
2. Go to this repositories location using: cd "websockets" / filePath in your local.
3. Inside this folder run "nodemon" to start the server.
4. Create a websocket request with postman and enter this url: 
   ws://localhost:8080 
   Click on connect and client messages will be sent.
5. For sending messages from websocket server add json data in the Messages section in postman(data.json file is attached in this repo you can copy that and 
   paste it in Messages section)
   Click on send.
6. The sent Message will be saved in DB in Messages Collection.
7. For http GET api response add import data.json file in your MongoDB KeyValue collection.
8. Go to postman and enter this URL:
   http://localhost:3000/api/Ishika
   Click on send and you can see the value as response.
