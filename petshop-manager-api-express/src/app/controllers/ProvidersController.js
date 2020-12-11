const Provider = require("../models/Provider");
const { schema, schemaRequired } = require("../validations/providerSchema");

class ProvidersController {
  async show(req, res) {
    try {
      const providers = await Provider.findAll({
        attributes: ["id", "company", "category", "email"],
      });

      return res.status(200).json(providers);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error when trying to list providers." });
    }
  }

  async index(req, res) {
    try {
      const { id } = req.params;

      const provider = await Provider.findOne({
        where: { id },
        attributes: ["id", "company", "category", "email"],
      });

      if (!provider)
        return res.status(400).json({ error: "Provider not found" });

      return res.status(200).json(provider);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error when trying to show provider." });
    }
  }

  async store(req, res) {
    try {
      const newProvider = req.body;

      if (!(await schemaRequired.isValid(newProvider))) {
        return res.status(400).json({ error: "Validations fails." });
      }

      const result = await Provider.create(newProvider);

      return res.status(201).json(result);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error when trying to create provider." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validations fails." });
      }

      const provider = await Provider.findOne({
        where: { id },
      });

      const returned = await provider.update(req.body);

      return res.status(201).json(returned);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error when trying to update provider." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const provider = await Provider.findOne({ where: { id } });

      if (!provider)
        return res.status(400).json({ error: "Provider not found." });

      await provider.destroy();

      return res.status(204);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error when trying to delete provider." });
    }
  }
}

module.exports = new ProvidersController();
