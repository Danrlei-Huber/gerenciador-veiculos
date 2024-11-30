import { IsInt, IsString, IsOptional, IsDate, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateAluguelDto {
    @IsString()
    @IsNotEmpty()
    nomeUsuario: string;

    @IsInt()
    @IsPositive()
    idUsuario: number;

    @IsInt()
    @IsPositive()
    veiculoId: number;

    @IsInt()
    @IsPositive()
    quilometragemRodada: number;

    @IsDate()
    dataSaida: Date;

    @IsDate()
    dataChegada: Date;

    @IsInt()
    @IsOptional()
    @IsPositive()
    avaliacao?: number;
    
}
