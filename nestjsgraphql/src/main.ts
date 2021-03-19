import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'
import { Logger } from '@nestjs/common'

const port = Number(process.env.PORT)
async function Backend() {
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  Logger.log(`Server running on port: ${port}`)
  Logger.log(`Link: ${await app.getUrl()}`)
}
Backend()
