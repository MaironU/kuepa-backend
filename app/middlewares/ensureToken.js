function ensureToken(req, res, next){
  const bearerHeader = req.headers.authorization;

  if(typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(" ").pop()
      req.token = bearerToken;
      next();
      return;
  }else {
      res.sendStatus(403);
  }
}

module.exports = ensureToken;
