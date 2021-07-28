const httpError = (res, err) => {
  console.log(err)
  res.status(500)
  res.json({error: err})
}

module.exports = { httpError }
