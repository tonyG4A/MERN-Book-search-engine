const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://tony_g123:1Aguirre@googlebooks.q82bpsh.mongodb.net/');

module.exports = mongoose.connection;
