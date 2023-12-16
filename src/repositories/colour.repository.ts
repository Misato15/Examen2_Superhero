import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Colour, ColourRelations} from '../models';

export class ColourRepository extends DefaultCrudRepository<
  Colour,
  typeof Colour.prototype.id,
  ColourRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Colour, dataSource);
  }
}
