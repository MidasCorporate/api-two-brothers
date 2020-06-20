import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }

  // mongo() {
  //   this.mongoConnection = mongoose.connect(
  //     'mongodb://localhost:27017/twobrothers',
  //     {
  //       useNewUrlParser: true,
  //       useFindAndModify: true,
  //       useUnifiedTopology: true,
  //     }
  //   );
  // }
}

export default new Database();
