import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Race, RaceRelations} from '../models';

export class RaceRepository extends DefaultCrudRepository<
  Race,
  typeof Race.prototype.id,
  RaceRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Race, dataSource);
  }
}
