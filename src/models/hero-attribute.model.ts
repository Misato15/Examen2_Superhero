import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'hero_attribute'}}
})
export class HeroAttribute extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: false},
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  id?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'hero_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  heroId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'attribute_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  attributeId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'attribute_value', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  attributeValue?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HeroAttribute>) {
    super(data);
  }
}

export interface HeroAttributeRelations {
  // describe navigational properties here
}

export type HeroAttributeWithRelations = HeroAttribute & HeroAttributeRelations;
