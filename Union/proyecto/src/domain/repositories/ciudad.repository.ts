import { CreateCiudadDto, UpdateCiudadDto } from '../dtos';
import { CiudadEntity } from '../entities/ciudad.entity';


export abstract class CiudadRepository {

  abstract create( createCiudadDto: CreateCiudadDto ): Promise<CiudadEntity>;

  abstract getAll(): Promise<CiudadEntity[]>;

  abstract findById( id: number ): Promise<CiudadEntity>;
  abstract updateById( updateTodoDto: UpdateCiudadDto ): Promise<CiudadEntity>;
  abstract deleteById( id: number ): Promise<CiudadEntity>;

}