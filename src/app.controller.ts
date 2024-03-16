import { AppController } from './app.module';
import { Module } from "@nestjs/common";

@Module({
    controllers: [AppController],
})
export class AppModule {}
