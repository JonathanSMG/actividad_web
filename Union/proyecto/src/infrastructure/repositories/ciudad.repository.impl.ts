
import { CreateCiudadDto, CiudadDatasource, CiudadEntity, CiudadRepository, UpdateCiudadDto } from '../../domain';


export class CiudadRepositoryImpl implements CiudadRepository {

  constructor(
    private readonly datasource: CiudadDatasource,
  ) { }


  create( createCiudadDto: CreateCiudadDto ): Promise<CiudadEntity> {
    return this.datasource.create( createCiudadDto );
  }

  getAll(): Promise<CiudadEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CiudadEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCiudadDto: UpdateCiudadDto ): Promise<CiudadEntity> {
    return this.datasource.updateById( updateCiudadDto );
  }

  deleteById( id: number ): Promise<CiudadEntity> {
    return this.datasource.deleteById( id );
  }

}


