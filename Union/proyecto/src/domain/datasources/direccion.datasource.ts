import { CreateDireccionDto, UpdateDireccionDto } from '../dtos';
import { DireccionEntity } from '../entities/direccion.entity';

export abstract class DireccionDatasource {

  abstract create(createDireccionDto: CreateDireccionDto): Promise<DireccionEntity>;

  abstract getAll(): Promise<DireccionEntity[]>;

  abstract findById(id: number): Promise<DireccionEntity>;
  abstract updateById(updateDireccionDto: UpdateDireccionDto): Promise<DireccionEntity>;
  abstract deleteById(id: number): Promise<DireccionEntity>;

}
