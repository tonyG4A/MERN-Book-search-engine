const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://txtony9:1Aguirre@googlebooks.q82bpsh.mongodb.net/');

module.exports = mongoose.connection;
