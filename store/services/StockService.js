import { pool } from "../config/db.js";

class StockService {
  async create({
    product_id,
    shops_id,
    quantity_goods,
    quantity_goods_in_order,
  }) {
    return await pool.query(
      "INSERT INTO stock (product_id, shops_id, quantity_goods, quantity_goods_in_order) VALUES ((SELECT id FROM products WHERE id = $1), (SELECT id FROM shops WHERE id = $2), $3, $4) RETURNING *;",
      [product_id, shops_id, quantity_goods, quantity_goods_in_order]
    );
  }

  async increment({
    quantity_goods,
    quantity_goods_in_order,
    product_id,
    shops_id,
  }) {
    return await pool.query(
      "UPDATE stock SET quantity_goods = COALESCE($1, 0) + quantity_goods, quantity_goods_in_order = COALESCE($2, 0) + quantity_goods_in_order WHERE product_id = $3 AND shops_id = $4 RETURNING *",
      [quantity_goods, quantity_goods_in_order, product_id, shops_id]
    );
  }
  async decrement({
    quantity_goods,
    quantity_goods_in_order,
    product_id,
    shops_id,
  }) {
    return await pool.query(
      "UPDATE stock SET quantity_goods = quantity_goods - COALESCE($1, 0), quantity_goods_in_order = quantity_goods_in_order - COALESCE($2, 0) WHERE product_id = $3 AND shops_id = $4 RETURNING *",
      [quantity_goods, quantity_goods_in_order, product_id, shops_id]
    );
  }

  async filter({
    plu,
    shops_id,
    goodsMinCount,
    goodsMaxCount,
    orderMinCount,
    orderMaxCount,
  }) {
    return await pool.query(
      "SELECT stock.id, products.plu, products.name, stock.quantity_goods, stock.quantity_goods_in_order, shops.name AS shops FROM stock JOIN products ON stock.product_id = products.id JOIN shops ON stock.shops_id = shops.id WHERE (products.plu = $1 OR $1 IS NULL) AND (stock.shops_id = $2 OR $2 IS NULL) AND (stock.quantity_goods >= $3 AND stock.quantity_goods <= $4 OR ($3 IS NULL AND $4 IS NULL)) AND (stock.quantity_goods_in_order >= $5 AND stock.quantity_goods_in_order <= $6 OR ($5 IS NULL AND $6 IS NULL))",
      [
        plu,
        shops_id,
        goodsMinCount,
        goodsMaxCount,
        orderMinCount,
        orderMaxCount,
      ]
    );
  }
}

export default new StockService();
