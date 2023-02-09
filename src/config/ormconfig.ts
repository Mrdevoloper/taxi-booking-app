import path from 'path'
import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: 'postgres',
    username: "asror",
    host: 'localhost',
    port: 5432,
    password: 'hello',
    database: "oopway",
    dropSchema: false,
    synchronize: true,
    entities: [path.join(__dirname, "..", "entities", "*.entity.{js,ts}")],
});

export default dataSource