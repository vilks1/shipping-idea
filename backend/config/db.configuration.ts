import {DataSource, DataSourceOptions} from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_DB_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: true,
    entities: [
        'dist/**/*.entity.js'
    ],
    migrations: ['dist/src/migrations/*.js'],
    migrationsRun: true,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;