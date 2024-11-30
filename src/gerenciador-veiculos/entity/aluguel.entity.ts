import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Veiculo } from './veiculo.entity';
import { Usuario } from './usuario.entity';

@Entity('aluguel')
export class Aluguel { 
    @PrimaryGeneratedColumn({ name: 'id_viagem' })
    idViagem: number;

    @Column({ type: 'varchar', name: 'nome_usuario', nullable: true  })
    nomeUsuario: string;

    @Column({ type: 'int', name: 'id_usuario', nullable: true  })
    idUsuario: number;

    @Column({ type: 'int', name: 'veiculo_id', nullable: true  })
    veiculoId: number;

    @Column({ type: 'int', name: 'quilometragem_rodada', nullable: true })
    quilometragemRodada: number;

    @Column({ type: 'timestamp', name: 'data_saida', nullable: true  })
    dataSaida: Date;

    @Column({ type: 'timestamp', name: 'data_chegada', nullable: true  })
    dataChegada: Date;

    @Column({ type: 'int', nullable: true })
    avaliacao: number;

    @ManyToOne(() => Veiculo, (veiculo) => veiculo.alugueis)
    @JoinColumn({ name: 'veiculo_id' })
    veiculo: Veiculo;

    @ManyToOne(() => Usuario, (usuario) => usuario.alugueis)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    constructor(data?: Partial<Aluguel>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}


