import  mongoose from 'mongoose';

const { Schema } = mongoose;

// Create schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
// const User = mongoose.model('user', userSchema)
// export  {User };

const User = mongoose.model('User', userSchema);

export default User;