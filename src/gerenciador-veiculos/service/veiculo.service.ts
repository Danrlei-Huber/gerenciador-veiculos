import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Veiculo } from "../entity/veiculo.entity";
import { Repository } from "typeorm";
import { CreateVeiculoDto } from "../dto/create-veiculo.dto";
import { UpdateVeiculoDto } from "../dto/update-veiculo.dto";


@Injectable()
export class VeiculoService {

constructor(
    @InjectRepository(Veiculo)
    private veiculoRepository: Repository<Veiculo>,
    ) {}

    async create(createVeiculoDto: CreateVeiculoDto): Promise<Veiculo> {
        const ehVeiculoRegistrado: Veiculo | null= await this.veiculoRepository.findOne({where : {placa: createVeiculoDto?.placa}});
        if (ehVeiculoRegistrado) {
            throw new HttpException('Veículo já registrado com essa placa.', HttpStatus.BAD_REQUEST);
        }
        const veiculo: Veiculo = new Veiculo(createVeiculoDto);
        return this.veiculoRepository.save(veiculo);
    }

    async findAll(): Promise<Veiculo[] | { msg: string ; data: Veiculo[]; }> {
        const veiculosList: Veiculo[] = await this.veiculoRepository.find();
        if (veiculosList.length == 0){
            return {msg: 'lista vazia', data: veiculosList}
        }
        return {msg: 'lista obtida', data: veiculosList}
    }

    async findOne(veiculoId: number): Promise<Veiculo | { msg: string ; data: Veiculo; }>  {
        const veiculo: Veiculo = await this.veiculoRepository.findOne({where : {veiculoId: veiculoId}});
        if (!veiculo){
            return {msg: 'lista vazia', data: veiculo}
        }
        return {msg: 'Item obtido', data: veiculo}
    }

    async update(veiculoId: number, updateVeiculoDto: UpdateVeiculoDto): Promise<any> {
        const veiculoExistente: Veiculo = await this.veiculoRepository.findOne({where : {veiculoId: veiculoId}});
        if (!veiculoExistente){
            throw new HttpException('não há veiculo com esse id', HttpStatus.BAD_REQUEST);
        }
        return this.veiculoRepository.update(veiculoId, updateVeiculoDto);
    }

    async remove(veiculoId: number): Promise<any> {
        const veiculoExistente: Veiculo = await this.veiculoRepository.findOne({where : {veiculoId: veiculoId}});
        if (!veiculoExistente){
            throw new HttpException('não há veiculo com esse id', HttpStatus.BAD_REQUEST);
        }
        return this.veiculoRepository.delete(veiculoId);
    }

}