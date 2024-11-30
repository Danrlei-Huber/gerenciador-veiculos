import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aluguel } from './aluguel.entity';


@Entity('veiculo')
export class Veiculo {
    @PrimaryGeneratedColumn({ name: 'veiculo_id' })
    veiculoId: number;

    @Column({ type: 'varchar', nullable: true  })
    marca: string;

    @Column({ type: 'varchar', nullable: true  })
    modelos: string;

    @Column({ type: 'int', nullable: true  })
    quilometragem: number;

    @Column({ type: 'int', name: 'media_avaliacoes', nullable: true })
    mediaAvaliacoes: number;

    @Column({ type: 'int', nullable: true  })
    ano: number;

    @Column({ type: 'varchar', nullable: true  })
    placa: string;

    @OneToMany(() => Aluguel, (aluguel) => aluguel.veiculo)
    alugueis: Aluguel[];

    constructor(data?: Partial<Veiculo>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
