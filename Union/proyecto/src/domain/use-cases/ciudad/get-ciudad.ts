
import { CiudadEntity } from '../../entities/ciudad.entity';
import { CiudadRepository } from '../../repositories/ciudad.repository';

export interface GetCiudadUseCase {
  execute( id: number ): Promise<CiudadEntity>
}


export class GetCiudad implements GetCiudadUseCase {
  
  constructor(
    private readonly repository: CiudadRepository,
  ) {}
  
  execute( id: number ): Promise<CiudadEntity> {
    return this.repository.findById(id);
  }

}

