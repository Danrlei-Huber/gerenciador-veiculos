import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controler';
import { GerenciadorVeiculosModule } from './gerenciador-veiculos/gerenciador-veiculos.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, GerenciadorVeiculosModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
