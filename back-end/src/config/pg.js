import pkg from "pg"

const { Pool } = pkg;

const db = new Pool({
    user: '**',
    host: 'localhost',
    database: '**',
    password: '**',
    port: 5432,
})

export default db;