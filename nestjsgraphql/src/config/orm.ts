import * as path from 'path'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const options: TypeOrmModuleOptions = {
  type: `mysql`,
  host: `localhost`,
  port: 3306,
  username: `root`,
  password: `12345678`,
  database: `nestjsgraphql`,
  entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
  autoLoadEntities: true,
  synchronize: true,
}

module.exports = options
