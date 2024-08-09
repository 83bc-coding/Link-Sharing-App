const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
 
    },
    password: {
      type: String,
      required: true,
   
    },
    firstName: {
      type: String,
     
    },
    lastName: {
      type: String,
     
    },
    avatar: {
      type: String,
      default: "/avatar/default_avatar.jpeg.png"
    },
    links: [{
      id: String,
      platform: String,
      link: String
    }],
    refreshToken: {
      type: String
    },
    passwordChangedAt: Date,
    passwordResetToken: {
      type: String,
      select: false
    },
    passwordResetExpires: Date
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.isPasswordMatched = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;