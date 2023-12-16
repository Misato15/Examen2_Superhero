import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Superpower, SuperpowerRelations} from '../models';

export class SuperpowerRepository extends DefaultCrudRepository<
  Superpower,
  typeof Superpower.prototype.id,
  SuperpowerRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Superpower, dataSource);
  }
}
