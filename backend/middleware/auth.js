function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Api key requerida"
    });
  }

  if (authHeader !== process.env.API_KEY) {
    return res.status(401).json({
      message: "Api key invalida"
    });
  }

  next();
}

module.exports = auth;