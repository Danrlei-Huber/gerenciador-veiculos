import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aluguel } from './aluguel.entity';


@Entity('veiculo')
export class Veiculo {
    @PrimaryGeneratedColumn({ name: 'veiculo_id' })
    veiculoId: number;

    @Column({ type: 'varchar' })
    marca: string;

    @Column({ type: 'varchar' })
    modelos: string;

    @Column({ type: 'int'  })
    quilometragem: number;

    @Column({ type: 'int', name: 'media_avaliacoes', nullable: true })
    mediaAvaliacoes: number;

    @Column({ type: 'int' })
    ano: number;

    @Column({ type: 'varchar', nullable: true, unique: true })
    placa: string;

    @Column({ type: 'int', nullable: true  })
    qtdAvaliacoes: number;

    @OneToMany(() => Aluguel, (aluguel) => aluguel.veiculo)
    alugueis: Aluguel[];

    constructor(data?: Partial<Veiculo>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
