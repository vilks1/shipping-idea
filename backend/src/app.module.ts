import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './features/feature.module';

@Module({
  imports: [CoreModule, FeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
