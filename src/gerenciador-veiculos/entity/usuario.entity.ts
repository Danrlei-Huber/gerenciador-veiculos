import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aluguel } from './aluguel.entity';

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ type: 'varchar', name: 'nome_usuario', nullable: true  })
    nomeUsuario: string;

    @Column({ type: 'varchar', nullable: true  })
    endereco: string;

    @Column({ type: 'varchar' , nullable: true })
    cpf: string;

    @OneToMany(() => Aluguel, (aluguel) => aluguel.usuario)
    alugueis: Aluguel[];

    constructor(data?: Partial<Usuario>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
