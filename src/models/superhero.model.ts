import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'superhero'}}})
export class Superhero extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  id: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 200,
    generated: 0,
    mssql: {columnName: 'superhero_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  superheroName?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 200,
    generated: 0,
    mssql: {columnName: 'full_name', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  fullName?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'gender_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  genderId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'eye_colour_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  eyeColourId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'hair_colour_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  hairColourId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'skin_colour_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  skinColourId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'race_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  raceId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'publisher_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  publisherId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'alignment_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  alignmentId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'height_cm', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  heightCm?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'weight_kg', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  weightKg?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Superhero>) {
    super(data);
  }
}

export interface SuperheroRelations {
  // describe navigational properties here
}

export type SuperheroWithRelations = Superhero & SuperheroRelations;
