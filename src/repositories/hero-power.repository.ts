import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {HeroPower, HeroPowerRelations} from '../models';

export class HeroPowerRepository extends DefaultCrudRepository<
  HeroPower,
  typeof HeroPower.prototype.id,
  HeroPowerRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(HeroPower, dataSource);
  }
}
