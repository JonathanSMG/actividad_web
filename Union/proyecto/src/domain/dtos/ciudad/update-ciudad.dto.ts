export class UpdateCiudadDto {
    private constructor(
      public readonly id: number,
      public readonly ciudad?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.ciudad !== undefined) returnObj.ciudad = this.ciudad;  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCiudadDto?] {

      const {id,ciudad } = props;
  
      if ((id == undefined && ciudad === undefined)) {
        return [
          'El ID de la ciudad debe ser un número válido y al menos una propiedad debe proporcionarse',
          undefined
        ];
      }
  
      return [undefined, new UpdateCiudadDto(id, ciudad)];
    }
  }
  