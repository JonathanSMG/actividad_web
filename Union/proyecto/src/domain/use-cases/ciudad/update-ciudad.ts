import { UpdateCiudadDto } from '../../dtos';
import { CiudadEntity } from '../../entities/ciudad.entity';
import { CiudadRepository } from '../../repositories/ciudad.repository';



export interface UpdateCiudadUseCase {
  execute( dto: UpdateCiudadDto ): Promise<CiudadEntity>
}


export class UpdateCiudad implements UpdateCiudadUseCase {
  
  constructor(
    private readonly repository: CiudadRepository,
  ) {}
  
  execute( dto: UpdateCiudadDto ): Promise<CiudadEntity> {
    return this.repository.updateById(dto);
  }

}

