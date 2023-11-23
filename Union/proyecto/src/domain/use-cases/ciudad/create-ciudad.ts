
import { CreateCiudadDto } from '../../dtos';
import { CiudadEntity } from '../../entities/ciudad.entity';
import { CiudadRepository } from '../../repositories/ciudad.repository';

export interface CreateCiudadUseCase {
  execute( dto: CreateCiudadDto ): Promise<CiudadEntity>
}

// ctrl+ shift + l
export class CreateCiudad implements CreateCiudadUseCase {
  
  constructor(
    private readonly repository: CiudadRepository,
  ) {}
  
  execute( dto: CreateCiudadDto ): Promise<CiudadEntity> {
    return this.repository.create(dto);
  }

}

