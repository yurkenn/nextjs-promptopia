import { Schema, model, models } from 'mongoose';

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Please provide a prompt.'],
    maxlength: [300, 'Prompt cannot be more than 300 characters.'],
  },
  tag: {
    type: String,
    required: [true, 'Please provide a tag.'],
    maxlength: [20, 'Tag cannot be more than 20 characters.'],
  },
});

const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt;
