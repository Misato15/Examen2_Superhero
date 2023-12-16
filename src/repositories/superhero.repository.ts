import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Superhero, SuperheroRelations} from '../models';

export class SuperheroRepository extends DefaultCrudRepository<
  Superhero,
  typeof Superhero.prototype.id,
  SuperheroRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Superhero, dataSource);
  }
}
