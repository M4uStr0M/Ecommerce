
import mongoose from "mongoose";
import { string, trim } from "zod";

export type UserRole = "user" | "admin"

const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
   
    state: {
        type: String,
        required: true,
        trim: true
    }, postalCode: {
        type: String,
        required: true,
        trim: true
    },
    isDefault: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: false
})



const userSchema = new mongoose.Schema({
    clerkUserId : {
        type : string,
        required : true,
        trim: true,
         unique : true,
         index : true
    },
name : {
    type : String,
    required : false
},
email : {
    type : String,
    required : true,
    unique : true
},
role : {
    type : String,
    enum : ['admin', 'user'],
     default : "user"
},
points : {
    type : Number,
    default : 0,
    min : 0
},
address : {
    type : [addressSchema],
    default : []
}
}, {
    timestamps : true
})


export const userModel = mongoose.model("User", userSchema)