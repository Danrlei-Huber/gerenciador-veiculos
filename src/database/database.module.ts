import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Torna o ConfigModule acessível em toda a aplicação
        }),
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: `postgresql://${configService.get('DB_USERNAME')}:${configService.get('DB_PASSWORD')}@${configService.get('DB_HOST')}:${configService.get('DB_PORT')}/${configService.get('DB_DATABASE')}`,
                autoLoadEntities: true,
                synchronize: true, 
                logging: false,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
