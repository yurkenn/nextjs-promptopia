const { Schema, model, models } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username must be between 8 and 20 characters long and can only contain letters, numbers, underscores and dots',
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', UserSchema);

export default User;
