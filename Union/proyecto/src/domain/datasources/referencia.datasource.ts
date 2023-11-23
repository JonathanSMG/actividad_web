import { CreateReferenciaDto, UpdateReferenciaDto } from '../dtos';
import { ReferenciaEntity } from '../entities/referencia.entity';

export abstract class ReferenciaDatasource {

  abstract create(createReferenciaDto: CreateReferenciaDto): Promise<ReferenciaEntity>;

  abstract getAll(): Promise<ReferenciaEntity[]>;

  abstract findById(id: number): Promise<ReferenciaEntity>;
  abstract updateById(updateReferenciaDto: UpdateReferenciaDto): Promise<ReferenciaEntity>;
  abstract deleteById(id: number): Promise<ReferenciaEntity>;

}
