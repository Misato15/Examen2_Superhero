import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Gender, GenderRelations} from '../models';

export class GenderRepository extends DefaultCrudRepository<
  Gender,
  typeof Gender.prototype.id,
  GenderRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Gender, dataSource);
  }
}
