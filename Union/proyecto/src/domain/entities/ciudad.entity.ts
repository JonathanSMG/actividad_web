

export class CiudadEntity {

  constructor(
    public id: number,
    public ciudad: string,
  ) {}


  public static fromObject( object: {[key: string]: any} ): CiudadEntity {
    const { id, ciudad} = object;
    if ( !id ) throw 'ciudad is required';
    if ( !ciudad ) throw 'ciudad is required';

      return new CiudadEntity(id, ciudad)
  }

}


