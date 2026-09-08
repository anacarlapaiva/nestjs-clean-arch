import { Module } from '@nestjs/common'
import { EnvConfigService } from './env-config.service.js'

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule {}
