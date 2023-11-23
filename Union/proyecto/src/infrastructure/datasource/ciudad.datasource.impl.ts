import { prisma } from '../../data/postgres';
import { CreateCiudadDto, CiudadDatasource, CiudadEntity, UpdateCiudadDto } from '../../domain';


export class CiudadDatasourceImpl implements CiudadDatasource {


  async create( createCiudadDto: CreateCiudadDto ): Promise<CiudadEntity> {
    const fuel = await prisma.ciudad.create({
      data: createCiudadDto!
    });

    return CiudadEntity.fromObject( fuel );
  }

  async getAll(): Promise<CiudadEntity[]> {
    const ciudades = await prisma.ciudad.findMany();
    return ciudades.map( ciudad => CiudadEntity.fromObject(ciudad) );
  }

  async findById( id_ciudad: number ): Promise<CiudadEntity> {
    const ciudad = await prisma.ciudad.findFirst({
      where: { id_ciudad }
    });

    if ( !ciudad ) throw `Customer with id ${ id_ciudad } not found`;
    return CiudadEntity.fromObject(ciudad);
  }

  async updateById( UpdateCiudadDto: UpdateCiudadDto ): Promise<CiudadEntity> {
    await this.findById( UpdateCiudadDto.id );
    
    const updatedCustomer = await prisma.ciudad.update({
      where: { id_ciudad: UpdateCiudadDto.id },
      data: UpdateCiudadDto!.values
    });

    return CiudadEntity.fromObject(updatedCustomer);
  }

  async deleteById( id_ciudad: number ): Promise<CiudadEntity> {
    await this.findById( id_ciudad );
    const deleted = await prisma.ciudad.delete({
      where: { id_ciudad }
    });

    return CiudadEntity.fromObject( deleted );
  }

}