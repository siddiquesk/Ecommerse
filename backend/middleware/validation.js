const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    if (err.errors) {
      const messages = err.errors.map(e => e.message);
      return res.status(400).json({ msg: messages });
    }
    next(err);
  }
};

module.exports = validate;


