import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// DESC     Create a new user
// ROUTE    POST /
// Access   Public

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: 'An account with this email already exists.',
      });

    // Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db
    const newUser = new User({
      username,
      email,
      passwordHash,
    });

    let user = await newUser.save();

    // Generating token
    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);

    user.tokens = user.tokens.concat({ token });
    user = await user.save();

    res
      .cookie('token', token, {
        maxAge: 90000,
        httpOnly: true,
      })
      .json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profile: user.profile,
      });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

// DESC     Login user
// ROUTE    POST /login
// Access   Public

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.matchPassword(password)) {
      let token = jwt.sign({ user: existingUser._id }, process.env.JWT_SECRET);

      res
        .cookie('token', token, {
          maxAge: 90000,
          httpOnly: true,
        })
        .json({
          _id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
          profile: existingUser.profile,
        });
    } else {
      return res
        .status(400)
        .json({ errorMessage: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

// DESC     Logout a user
// ROUTE    POST /logout
// Access   Public

export const logout = (req, res) => {
  res
    .clearCookie('token', {
      maxAge: 90000,
      httpOnly: true,
    })
    .send();
};

// For protecting private routes
export const loggedIn = (req, res) => {
  console.log(`Hello ${req.cookies.tokens}`);
  try {
    let token = req.cookies.token;
    // console.log(token);
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
};

// DESC     Update user profile
// ROUTE    POST /update-profile
// Access   Public

export const updateProfile = async (req, res) => {
  const { profile } = req.body;

  try {
    const updatedProfile = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          profile: {
            ...profile,
          },
        },
      }
    );

    console.log(updatedProfile);

    res.status(200).json({
      _id: updatedProfile._id,
      username: updatedProfile.username,
      email: updatedProfile.email,
      profile: updatedProfile.profile,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

// DESC     Get user profile
// ROUTE    GET /get-profile/:id
// ACCESS   Private

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404);
      res.send('No User with this id');
    }

    res.json({
      profile: user.profile,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
