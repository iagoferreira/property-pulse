import {Schema, model, models, Document, Model} from "mongoose"

export interface IUser extends Document {
  email: string;
  username: string;
  image?: string;
  bookmarks: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  image: {
    type: String
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property'
    }
  ]
}, {
  timestamps: true
});

const User: Model<IUser> = models.User || model<IUser>("User", userSchema);

export default User;
