import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: 'users',
  },
);
export { UserSchema };

export interface User extends Document {
  name: String;
  email: String;
  password: any;
}
