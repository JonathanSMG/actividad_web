import { Router } from 'express';


import { CiudadRoutes,  } from './ciudad/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    router.use('/api/ciudad', CiudadRoutes.routes );
    return router;
  }


}
