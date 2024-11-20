import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const tableProducts = `
CREATE TABLE IF NOT EXISTS products (
id SERIAL PRIMARY KEY,
plu VARCHAR(255) UNIQUE NOT NULL,
name VARCHAR(255) NOT NULL,
shops_id INTEGER NOT NULL,
FOREIGN KEY (shops_id) REFERENCES shops(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(tableProducts, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Table products created!");
});

const tebleShops = `
CREATE TABLE IF NOT EXISTS shops (
id SERIAL PRIMARY KEY,
name VARCHAR(255) UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(tebleShops, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Table shops created!");
});

const tebleStock = `
CREATE TABLE IF NOT EXISTS stock (
id SERIAL PRIMARY KEY,
quantity_goods INTEGER NOT NULL,
quantity_goods_in_order INTEGER DEFAULT 0,
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (shops_id) REFERENCES shops(id),
product_id INTEGER UNIQUE NOT NULL,
shops_id INTEGER NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(tebleStock, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Table stock created!");
});
