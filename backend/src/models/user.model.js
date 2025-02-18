import mongoose, { Schema } from 'mongoose'

const useSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true  
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudnary url
            required: true,
        }, 
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    },
    {
        timestamps: true
    }

)

export const User = mongoose.model("User", useSchema)