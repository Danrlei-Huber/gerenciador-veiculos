import { IsInt, IsString, IsOptional, IsDate, IsPositive } from 'class-validator';

export class UpdateAluguelDto {
    @IsString()
    @IsOptional()
    nomeUsuario?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    idUsuario?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    veiculoId?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    quilometragemRodada?: number;

    @IsDate()
    @IsOptional()
    dataSaida?: Date;

    @IsDate()
    @IsOptional()
    dataChegada?: Date;

    @IsInt()
    @IsPositive()
    @IsOptional()
    avaliacao?: number;
    
}
