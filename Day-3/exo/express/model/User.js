import{shema, model} from "mongoose";
const userSchema = new schema({
email: {
type: string,
require: true,
unique: true,
},
password: string,
isAdmin: {
type: boolean,
default: false,
},
created_at: {
type: Date,
default: Date.now,
},
}};
