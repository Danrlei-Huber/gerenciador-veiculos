import { IsInt, IsString, IsNotEmpty, IsOptional, IsPositive, Min, Max } from 'class-validator';

export class CreateVeiculoDto {
    @IsString()
    @IsNotEmpty()
    marca: string;

    @IsString()
    @IsNotEmpty()
    modelos: string;

    @IsInt()
    @IsPositive()
    quilometragem: number;

    @IsInt()
    @Min(0)
    @Max(5)
    @IsOptional()
    media_avaliacoes?: number;

    @IsInt()
    @IsPositive()
    ano: number;

    @IsString()
    @IsNotEmpty()
    placa: string;
}
