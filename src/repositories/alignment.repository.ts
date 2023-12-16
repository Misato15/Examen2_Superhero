import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Alignment, AlignmentRelations} from '../models';

export class AlignmentRepository extends DefaultCrudRepository<
  Alignment,
  typeof Alignment.prototype.id,
  AlignmentRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Alignment, dataSource);
  }
}
