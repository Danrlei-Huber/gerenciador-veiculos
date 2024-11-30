import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Aluguel } from "../entity/aluguel.entity";
import { Repository } from "typeorm";
import { CreateAluguelDto } from "../dto/create-aluguel.dto";
import { UpdateAluguelDto } from "../dto/update-aluguel.dto";



@Injectable()
export class AluguelService {

    constructor(
        @InjectRepository(Aluguel)
        private aluguelRepository: Repository<Aluguel>,
    ) {}

    create(createAluguelDto: CreateAluguelDto): Promise<Aluguel> {
        let aluguel: Aluguel = new Aluguel(createAluguelDto);
        return this.aluguelRepository.save(aluguel);
    }

    findAll(): Promise<Aluguel[]> {
        return this.aluguelRepository.find();
    }

    findOne(idViagem: number): Promise<Aluguel> {
        return this.aluguelRepository.findOne({where: {idViagem : idViagem}});
    }

    update(idViagem: number, updateAluguelDto: UpdateAluguelDto): Promise<any> {
        return this.aluguelRepository.update(idViagem, updateAluguelDto);
    }

    remove(idViagem: number): Promise<any> {
        return this.aluguelRepository.delete(idViagem);
    }

}