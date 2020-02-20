module.exports = (fn) => (req, res, next) => {
  var startAt = process.hrtime()

  res.once('end', () => {
    var diff = process.hrtime(startAt);
    var time = diff[0] * 1e3 + diff[1] * 1e-6;

    fn(req, res, time);
  });

  next();
};
