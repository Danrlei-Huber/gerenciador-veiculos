import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../service/usuario.service";
import { Usuario } from "../entity/usuario.entity";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.usuarioService.create(createUsuarioDto);
    }
  
    @Get()
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Usuario> {
        return this.usuarioService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateUsuarioDto: any): Promise<any> {
        return this.usuarioService.update(id, updateUsuarioDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<any> {
        return this.usuarioService.remove(id);
    }

}