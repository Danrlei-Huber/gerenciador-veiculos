import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Aluguel } from "../entity/aluguel.entity";
import { Repository } from "typeorm";
import { CreateAluguelDto } from "../dto/create-aluguel.dto";
import { UpdateAluguelDto } from "../dto/update-aluguel.dto";
import { Veiculo } from "../entity/veiculo.entity";



@Injectable()
export class AluguelService {

    constructor(
        @InjectRepository(Aluguel)
        private aluguelRepository: Repository<Aluguel>,
        @InjectRepository(Veiculo)
        private veiculoRepository: Repository<Veiculo>
    ) {}

    async create(createAluguelDto: CreateAluguelDto): Promise<string> {
        const aluguel: Aluguel = new Aluguel(createAluguelDto);
        const aluguelList: Aluguel[] = await this.aluguelRepository.find({where : {veiculoId: createAluguelDto.veiculoId}})
        let veiculo: Veiculo = await this.veiculoRepository.findOne({where: {veiculoId : createAluguelDto.veiculoId}});
        if (veiculo){
            veiculo.qtdAvaliacoes = aluguelList.length + 1;
            veiculo.mediaAvaliacoes = this.calcularNovaMedia(veiculo.mediaAvaliacoes, veiculo.qtdAvaliacoes, createAluguelDto.avaliacao);
        }
        try {
            await this.veiculoRepository.save(veiculo);
            await this.aluguelRepository.save(aluguel);
        } catch (error) {
            throw new HttpException('operacao nao realizada', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return "operacao realizada com sucesso";
    }

    findAll(): Promise<Aluguel[]> {
        return this.aluguelRepository.find();
    }

    findOne(idViagem: number): Promise<Aluguel> {
        return this.aluguelRepository.findOne({where: {idViagem : idViagem}});
    }

    async update(idViagem: number, updateAluguelDto: UpdateAluguelDto): Promise<any> {
        
        const aluguel: Aluguel = await this.aluguelRepository.findOne({where: {idViagem: idViagem}});
    
        if (!aluguel) {
            throw new HttpException('viagem nao registrada', HttpStatus.NOT_FOUND);
        }

        const {avaliacao, dataChegada, dataSaida, nomeUsuario, quilometragemRodada, veiculoId} = updateAluguelDto

        if (avaliacao) {
            const qtdAvaliacoes = await this.aluguelRepository.count({ where: { veiculoId: aluguel.veiculoId } });
            const veiculo = await this.veiculoRepository.findOne({ where: { veiculoId: aluguel.veiculoId } });
            if (veiculo) {
                veiculo.qtdAvaliacoes = qtdAvaliacoes + 1;
                veiculo.mediaAvaliacoes = this.calcularNovaMedia(veiculo.mediaAvaliacoes, qtdAvaliacoes, avaliacao);
                await this.veiculoRepository.save(veiculo);
            }
        }

        aluguel.avaliacao = avaliacao ?? aluguel.avaliacao;
        aluguel.dataChegada = dataChegada ?? aluguel.dataChegada;
        aluguel.dataSaida = dataSaida ?? aluguel.dataSaida;
        aluguel.nomeUsuario = nomeUsuario ?? aluguel.nomeUsuario;
        aluguel.quilometragemRodada = quilometragemRodada ?? aluguel.quilometragemRodada;
        aluguel.veiculoId = veiculoId ?? aluguel.veiculoId;

        await this.aluguelRepository.save(aluguel);
    
        return aluguel;
    }
    
    async remove(idViagem: number): Promise<any> {
        const aluguel: Aluguel = await this.aluguelRepository.findOne({where: {idViagem: idViagem}})
        const aluguelList: Aluguel[] = await this.aluguelRepository.find({where : {veiculoId: aluguel.veiculoId}})
        let veiculo: Veiculo = await this.veiculoRepository.findOne({where: {veiculoId : aluguel.veiculoId}});
        if (veiculo){
            veiculo.qtdAvaliacoes = aluguelList.length - 1;
            veiculo.mediaAvaliacoes = this.calcularNovaMedia(veiculo.mediaAvaliacoes, veiculo.qtdAvaliacoes, 0);
        }

        await this.aluguelRepository.delete(idViagem);
        await this.veiculoRepository.save(veiculo);

        return 'operacao realizada com sucesso';
    }

    private calcularNovaMedia(
        mediaAtual: number,
        numeroAvaliacoes: number,
        novaAvaliacao: number
      ): number {
        const somatorioAtual = mediaAtual * numeroAvaliacoes;
        const novoSomatorio = somatorioAtual + novaAvaliacao;
        const novaMedia = novoSomatorio / (numeroAvaliacoes + 1);
      
        return novaMedia;
      }

}