import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Attribute, AttributeRelations} from '../models';

export class AttributeRepository extends DefaultCrudRepository<
  Attribute,
  typeof Attribute.prototype.id,
  AttributeRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Attribute, dataSource);
  }
}
