import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'race'}}})
export class Race extends Entity {
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
    length: 100,
    generated: 0,
    mssql: {columnName: 'race', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  race?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Race>) {
    super(data);
  }
}

export interface RaceRelations {
  // describe navigational properties here
}

export type RaceWithRelations = Race & RaceRelations;
