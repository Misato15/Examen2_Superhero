import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {HeroAttribute, HeroAttributeRelations} from '../models';

export class HeroAttributeRepository extends DefaultCrudRepository<
  HeroAttribute,
  typeof HeroAttribute.prototype.id,
  HeroAttributeRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(HeroAttribute, dataSource);
  }
}
