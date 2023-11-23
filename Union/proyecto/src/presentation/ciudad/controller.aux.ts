// DDD
import { Request, Response } from 'express';
import { CreateCiudadDto, UpdateCiudadDto } from '../../domain/dtos';
import { CiudadRepository } from '../../domain';


export class CiudadesController {

  //* DI
  constructor(
    private readonly ciudadRepository: CiudadRepository,
  ) { }


  public getCiudades = async ( req: Request, res: Response ) => {
    const ciudades = await this.ciudadRepository.getAll();
    return res.json( ciudades );
  };

  public getCiudadById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const ciudad = await this.ciudadRepository.findById( id );
      res.json( ciudad );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCiudad = async ( req: Request, res: Response ) => {
    const [ error, createCiudadDto ] = CreateCiudadDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const ciudad = await this.ciudadRepository.create( createCiudadDto! );
    res.json( ciudad );

  };

  public updateCiudad = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCiudadDto ] = UpdateCiudadDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCiudad = await this.ciudadRepository.updateById( updateCiudadDto! );
    return res.json( updatedCiudad );

  };


  public deleteCiudad = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedciudad = await this.ciudadRepository.deleteById( id );
    res.json( deletedciudad );

  };



}