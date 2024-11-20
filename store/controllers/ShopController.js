import ShopService from "../services/ShopService.js";

class ShopController {
  async create(req, res, next) {
    try {
      const { name } = req.body;

      const result = await ShopService.create({ name });

      res.status(201).json(result.rows[0]);
    } catch (err) {
      next(err);
    }
  }
}

export default new ShopController();
