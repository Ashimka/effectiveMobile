import StockService from "../services/StockService.js";

class StoskController {
  async create(req, res, next) {
    try {
      const { product_id, shops_id, quantity_goods, quantity_goods_in_order } =
        req.body;

      const result = await StockService.create({
        product_id,
        shops_id,
        quantity_goods,
        quantity_goods_in_order,
      });

      res.status(201).json(result.rows[0]);
    } catch (err) {
      next(err);
    }
  }

  async increment(req, res, next) {
    try {
      const { product_id, shops_id, quantity_goods, quantity_goods_in_order } =
        req.body;

      const result = await StockService.increment({
        quantity_goods,
        quantity_goods_in_order,
        product_id,
        shops_id,
      });

      res.status(200).json(result.rows[0]);
    } catch (err) {
      next(err);
    }
  }
  async decrement(req, res, next) {
    try {
      const { product_id, shops_id, quantity_goods, quantity_goods_in_order } =
        req.body;

      const result = await StockService.decrement({
        quantity_goods,
        quantity_goods_in_order,
        product_id,
        shops_id,
      });

      res.status(200).json(result.rows[0]);
    } catch (err) {
      next(err);
    }
  }

  async filter(req, res, next) {
    try {
      const {
        plu,
        shops_id,
        goodsMinCount,
        goodsMaxCount,
        orderMinCount,
        orderMaxCount,
      } = req.query;

      const result = await StockService.filter({
        plu,
        shops_id,
        goodsMinCount,
        goodsMaxCount,
        orderMinCount,
        orderMaxCount,
      });

      res.status(200).json(result.rows);
    } catch (err) {
      next(err);
    }
  }
}

export default new StoskController();
