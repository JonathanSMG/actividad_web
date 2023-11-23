



export class DireccionEntity {

    constructor(
      public id: number,
      public readonly CI: number,
      public readonly id_ciudad: number,
      public readonly id_referencia: number,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): DireccionEntity {
      const { id, CI, id_ciudad, id_referencia} = object;
      if ( !id ) throw 'Id is required';
      if ( !CI ) throw 'description is required';
      if ( !id_ciudad ) throw 'price is required';
      if ( !id_referencia ) throw 'price is required';

        return new DireccionEntity(id, CI, id_ciudad, id_referencia)
    }
  
  }
  
  
  