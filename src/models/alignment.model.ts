import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'alignment'}}})
export class Alignment extends Entity {
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
    length: 10,
    generated: 0,
    mssql: {columnName: 'alignment', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  alignment?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alignment>) {
    super(data);
  }
}

export interface AlignmentRelations {
  // describe navigational properties here
}

export type AlignmentWithRelations = Alignment & AlignmentRelations;
