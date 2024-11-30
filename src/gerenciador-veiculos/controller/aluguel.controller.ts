import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AluguelService } from "../service/aluguel.service";
import { Aluguel } from "../entity/aluguel.entity";
import { CreateAluguelDto } from "../dto/create-aluguel.dto";
import { UpdateAluguelDto } from "../dto/update-aluguel.dto";


@Controller('aluguel')
export class AluguelController {

    constructor(private readonly aluguelService: AluguelService) {}

    @Post()
    create(@Body() createAluguelDto: CreateAluguelDto): Promise<Aluguel> {
        return this.aluguelService.create(createAluguelDto);
    }
  
    @Get()
    findAll(): Promise<Aluguel[]> {
        return this.aluguelService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Aluguel> {
        return this.aluguelService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateAluguelDto: UpdateAluguelDto): Promise<any> {
        return this.aluguelService.update(id, updateAluguelDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<any> {
        return this.aluguelService.remove(id);
    }
    
}