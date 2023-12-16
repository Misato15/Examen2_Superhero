import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'publisher'}}})
export class Publisher extends Entity {
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
    length: 50,
    generated: 0,
    mssql: {columnName: 'publisher_name', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  publisherName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Publisher>) {
    super(data);
  }
}

export interface PublisherRelations {
  // describe navigational properties here
}

export type PublisherWithRelations = Publisher & PublisherRelations;
