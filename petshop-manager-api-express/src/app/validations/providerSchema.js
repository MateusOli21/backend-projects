const Yup = require("yup");

const schemaRequired = Yup.object().shape({
  company: Yup.string().required(),
  category: Yup.string().required(),
  email: Yup.string().required(),
});

const schema = Yup.object().shape({
  company: Yup.string(),
  category: Yup.string().nullable(),
  email: Yup.string().nullable(),
});

module.exports = { schema, schemaRequired };
