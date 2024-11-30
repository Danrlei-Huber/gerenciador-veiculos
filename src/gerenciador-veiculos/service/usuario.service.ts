import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "../entity/usuario.entity";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";


@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
      ) {}
    
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const usuario: Usuario = new Usuario(createUsuarioDto);
        return this.usuarioRepository.save(usuario);
    }

    findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    findOne(idUsuario: number): Promise<Usuario> {
        return this.usuarioRepository.findOne({where: {idUsuario: idUsuario}});
    }

    update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto): Promise<any> {
        return this.usuarioRepository.update(idUsuario, updateUsuarioDto);
    }

    remove(idUsuario: number): Promise<any> {
        return this.usuarioRepository.delete(idUsuario);
    }

}