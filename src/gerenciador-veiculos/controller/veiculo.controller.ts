import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Veiculo } from "../entity/veiculo.entity";
import { VeiculoService } from "../service/veiculo.service";
import { CreateVeiculoDto } from "../dto/create-veiculo.dto";
import { UpdateVeiculoDto } from "../dto/update-veiculo.dto";


@Controller('veiculo')
export class VeiculoController {

    constructor(private readonly veiculoService: VeiculoService) {}

    @Post()
    create(@Body() createVeiculoDto: CreateVeiculoDto): Promise<Veiculo> {
      return this.veiculoService.create(createVeiculoDto);
    }

    @Get()
    findAll(): Promise<Veiculo[] | { msg: string ; data: Veiculo[]; }> {
      return this.veiculoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Veiculo | { msg: string ; data: Veiculo; }> {
      return this.veiculoService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateVeiculoDto: UpdateVeiculoDto): Promise<any> {
      return this.veiculoService.update(id, updateVeiculoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<any> {
      return this.veiculoService.remove(id);
    }

}