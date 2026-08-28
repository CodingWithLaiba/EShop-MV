const express = require("express");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");

const router = express.Router();

// create user
router.post("/create-user", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    // const myCloud = await cloudinary.v2.uploader.upload(avatar, {
    //   folder: "avatars",
    // });

    const user = await User.create({
      name,
      email,
      password,
      // avatar: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});


// const activationToken = createActivationToken(user);

// const activationUrl = `https://eshop-tutorial-pyri.vercel.app/activation/${activationToken}`;

//     try {
//       await sendMail({
//         email: user.email,
//         subject: "Activate your account",
//         message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
//       });
//       res.status(201).json({
//         success: true,
//         message: `please check your email:- ${user.email} to activate your account!`,
//       });
//     } catch (error) {
//       return next(new ErrorHandler(error.message, 500));
//     }
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 400));
//   }
// });

module.exports = router;
