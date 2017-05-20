const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.load();
mongoose.connect(process.env.MLAB_SECRET_KEY);