const validation = (schema) => async (req, res, next) => {
  try {
    // Validate the request body using parseAsync
    const parsBody=await schema.parseAsync(req.body);
    console.log(parsBody);
    next();
  } catch (err) {
     const errMsg=err.errors.map((e)=>e.message);
    res.status(400).json({ message: errMsg });
  }
};

module.exports = validation;
