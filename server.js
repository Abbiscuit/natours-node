const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log(`DB connection successful 🎊`);
  });

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.... 🚀🚀🚀`);
});
