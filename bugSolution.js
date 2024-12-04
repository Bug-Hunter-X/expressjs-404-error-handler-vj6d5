const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user with id userId ...
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});