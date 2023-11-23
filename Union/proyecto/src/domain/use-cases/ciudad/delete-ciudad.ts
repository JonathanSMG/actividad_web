
import { CiudadEntity } from '../../entities/ciudad.entity';
import { CiudadRepository } from '../../repositories/ciudad.repository';

export interface DeleteCiudadUseCase {
  execute( id: number ): Promise<CiudadEntity>
}

export class DeleteCiudad implements DeleteCiudadUseCase {
  
  constructor(
    private readonly repository: CiudadRepository,
  ) {}
  
  execute( id: number ): Promise<CiudadEntity> {
    return this.repository.deleteById(id);
  }

}

