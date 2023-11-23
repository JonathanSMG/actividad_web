import { Router } from 'express';
import { CiudadesController } from './controller';
import { CiudadDatasourceImpl } from '../../infrastructure/datasource/ciudad.datasource.impl';
import { CiudadRepositoryImpl } from '../../infrastructure/repositories/ciudad.repository.impl';

export class CiudadRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new CiudadDatasourceImpl();
    const ciudadRepository = new CiudadRepositoryImpl( datasource );
    const ciudadController = new CiudadesController(ciudadRepository);

    router.get('/', ciudadController.getCiudades );
    router.get('/:id', ciudadController.getCiudadById );
    
    router.post('/', ciudadController.createCiudad );
    router.put('/:id', ciudadController.updateCiudad );
    router.delete('/:id', ciudadController.deleteCiudad );


    return router;
  }
}
