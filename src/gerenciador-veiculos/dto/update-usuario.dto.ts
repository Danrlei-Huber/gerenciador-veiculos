import { IsString, IsOptional, Matches } from 'class-validator';

export class UpdateUsuarioDto {
    @IsString()
    @IsOptional()
    nomeUsuario?: string;

    @IsString()
    @IsOptional()
    endereco?: string;

    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF must be 11 digits' })
    @IsOptional()
    cpf?: string;
}
