import ProductService from "../services/ProductService.js";

class ProductController {
  async create(req, res, next) {
    try {
      const { plu, name, shops_id } = req.body;

      const result = await ProductService.create({ plu, name, shops_id });
      res.status(201).json(result.rows[0]);
    } catch (err) {
      next(err);
    }
  }

  async filter(req, res, next) {
    try {
      const { name, plu } = req.query;
      const result = await ProductService.filter({ plu, name });

      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Товар не найден" });
      }

      res.status(200).json(result.rows);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductController();
