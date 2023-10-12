require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const http = require('http');
const socketIO = require('socket.io');
const Message = require('./models/message');

const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use('/api', routes);

app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});




io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for incoming chat messages
  socket.on('chat message', (data) => {
    console.log('Received message:', data);

    // Save the message to MongoDB
    const message = new Message({ user: data.user, text: data.message });
    message.save((err) => {
      if (err) {
        console.error('Error saving message to database:', err);
      } else {
        console.log('Message saved to the database');
      }
    });

    // Broadcast the message to all connected clients
    io.emit('chat message', data);
  });

  // Listen for user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});