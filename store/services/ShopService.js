import { pool } from "../config/db.js";

class ShopService {
  async create({ name }) {
    return await pool.query(
      "INSERT INTO shops (name) VALUES ($1) RETURNING *",
      [name]
    );
  }
}

export default new ShopService();
