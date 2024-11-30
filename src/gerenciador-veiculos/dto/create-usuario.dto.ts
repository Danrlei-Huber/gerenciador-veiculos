import { IsInt, IsString, IsNotEmpty, IsOptional, IsDate, Matches } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nomeUsuario: string;

    @IsString()
    @IsNotEmpty()
    endereco: string;

    @IsString()
    @Matches(/^\d{11}$/, { message: 'CPF must be 11 digits' })
    @IsNotEmpty()
    cpf: string;
}
