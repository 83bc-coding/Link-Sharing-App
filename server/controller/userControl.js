const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refrechToken");


const createUser = asyncHandler(async (req, res) => {
    const {email} = req.body
    
     const g = await User.findOne({email:email})
    if(!g){
    
       const newUser = await User.create(req.body);
       const refreshToken = await generateRefreshToken(newUser._id);
       const updateuser = await User.findByIdAndUpdate(
         newUser.id,
           {
             refreshToken: refreshToken,
           },
           { new: true }
         );
   
        res.json(updateuser);
   }else{   res.json("User Already Exists")
  
    
   
   }
   
   })
   const updateUser = asyncHandler(async (req, res) => {
    const { _id, firstName, lastName, avatar } = req.body.user;
  
    const user = await User.findById(_id);
  
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.avatar = avatar;
  
      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  });
       //    const userUpdate = await User.findByIdAndUpdate(
    //     user._id,{
    //       firstName:firstName,
    //       lastName:lastName,
    //       avatar:avatar
    //     }
    //     ,
        

    //    );
    //    res.json(userUpdate)

    //   }else{
    //     res.json("User Not Found")      }
 
    
   

   const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
if(findUser && (await findUser.isPasswordMatched(password))){
          const refreshToken = await generateRefreshToken(findUser._id);
            const updateuser = await User.findByIdAndUpdate(
                findUser.id,
                {
                  refreshToken: refreshToken,
                },
                { new: true }
              );
              res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    maxAge: 72 * 60 * 60 * 1000,
                  });  res.json({
                        _id: findUser?._id,
                        firstName: findUser?.firstName,
                        lastName: findUser?.lastName,
                         email: findUser?.email,
                         avatar:findUser?.avatar,
                        token: generateToken(findUser?._id),
                      });

}  else {
      throw new Error("Invalid Credentials");
    }



  });
  


 

  exports.createUser = createUser;
  exports.loginUserCtrl = loginUserCtrl;
  exports.updateUser = updateUser;