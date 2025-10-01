import express from 'express';
import config from './config.js';

const app = express();

// Serve SEB config at root path
app.get('/', (req, res) => {
  // Set proper Content-Type and headers for SEB config
  res.set('Content-Type', 'application/x-plist');
  res.set('Content-Disposition', 'attachment; filename="config.seb"');
  res.send(config);
});

// Add this new route to serve the same content at /config.seb path
app.get('/config.seb', (req, res) => {
  res.set('Content-Type', 'application/x-plist');
  res.set('Content-Disposition', 'attachment; filename="config.seb"');
  res.send(config);
});

// Use PORT environment variable for Render compatibility
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

