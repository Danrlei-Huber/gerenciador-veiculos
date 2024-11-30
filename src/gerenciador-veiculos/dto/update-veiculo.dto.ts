import { IsInt, IsString, IsOptional, IsPositive, Min, Max } from 'class-validator';

export class UpdateVeiculoDto {
    @IsString()
    @IsOptional()
    marca?: string;

    @IsString()
    @IsOptional()
    modelos?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    quilometragem?: number;

    @IsInt()
    @Min(0)
    @Max(5)
    @IsOptional()
    mediaAvaliacoes?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    ano?: number;

    @IsString()
    @IsOptional()
    placa?: string;
    
}
