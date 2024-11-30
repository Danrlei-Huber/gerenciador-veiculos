import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veiculo } from './entity/veiculo.entity';
import { Aluguel } from './entity/aluguel.entity';
import { Usuario } from './entity/usuario.entity';
import { AluguelController } from './controller/aluguel.controller';
import { UsuarioController } from './controller/usuario.controller';
import { VeiculoController } from './controller/veiculo.controller';
import { AluguelService } from './service/aluguel.service';
import { VeiculoService } from './service/veiculo.service';
import { UsuarioService } from './service/usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([Veiculo, Usuario, Aluguel])], 
    controllers: [AluguelController, UsuarioController, VeiculoController],
    providers: [AluguelService, UsuarioService, VeiculoService],
    exports: []
})
export class GerenciadorVeiculosModule {}
