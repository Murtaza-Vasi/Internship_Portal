import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token
    console.log(token)
    if (!token)
      return res.status(401).json({ errorMessage: "Unauthorized" })

    const verified = jwt.verify(token, process.env.JWT_SECRET)

    req.user = verified.user
    req.token = token

    next()

  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }

};

export default auth