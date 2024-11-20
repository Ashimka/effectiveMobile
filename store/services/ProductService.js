import { pool } from "../config/db.js";

class ProductService {
  async create({ plu, name, shops_id }) {
    return await pool.query(
      "INSERT INTO products (plu, name, shops_id) VALUES ($1, $2, $3) RETURNING *",
      [plu, name, shops_id]
    );
  }

  async filter({ plu, name }) {
    return await pool.query(
      "SELECT * FROM products WHERE  plu LIKE $1 OR name = $2",
      [plu, name]
    );
  }
}

export default new ProductService();
