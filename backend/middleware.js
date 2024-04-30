const isLogined = (req, res, next) => {
  if (!req.user) {
    return res.status(400).json({ message: "You must be logged in First." });
  }
  // console.log(req.user)
  next();
  // If the user is authenticated, proceed to the next middleware or route handler
};

module.exports = { isLogined };
