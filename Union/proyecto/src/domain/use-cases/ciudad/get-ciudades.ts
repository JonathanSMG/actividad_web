
import { CiudadEntity } from '../../entities/ciudad.entity';
import { CiudadRepository } from '../../repositories/ciudad.repository';

export interface GetCiudadeUseCase {
  execute(): Promise<CiudadEntity[]>
}


export class GetCiudades implements GetCiudadeUseCase {
  
  constructor(
    private readonly repository: CiudadRepository,
  ) {}
  
  execute(): Promise<CiudadEntity[]> {
    return this.repository.getAll();
  }

}

