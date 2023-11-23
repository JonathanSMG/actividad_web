import { Request, Response } from 'express';
import { CreateDireccionDto, UpdateDireccionDto } from '../../domain/dtos';
import { CreateDireccion, DeleteDireccion, GetDireccion, GetDirecciones, DireccionRepository, UpdateDireccion } from '../../domain';

export class DireccionesController {

  //* DI
  constructor(
    private readonly direccionRepository: DireccionRepository,
  ) { }

  public getDirecciones = (req: Request, res: Response) => {
    new GetDirecciones(this.direccionRepository)
      .execute()
      .then(direcciones => res.json(direcciones))
      .catch(error => res.status(400).json({ error }));
  };

  public getDireccionById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetDireccion(this.direccionRepository)
      .execute(id)
      .then(direccion => res.json(direccion))
      .catch(error => res.status(400).json({ error }));
  };

  public createDireccion = (req: Request, res: Response) => {
    const [error, createDireccionDto] = CreateDireccionDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateDireccion(this.direccionRepository)
      .execute(createDireccionDto!)
      .then(direccion => res.json(direccion))
      .catch(error => res.status(400).json({ error }));
  };

  public updateDireccion = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateDireccionDto] = UpdateDireccionDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateDireccion(this.direccionRepository)
      .execute(updateDireccionDto!)
      .then(direccion => res.json(direccion))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteDireccion = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteDireccion(this.direccionRepository)
      .execute(id)
      .then(direccion => res.json(direccion))
      .catch(error => res.status(400).json({ error }));
  };
}
