import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Race} from '../models';
import {RaceRepository} from '../repositories';

export class RaceController {
  constructor(
    @repository(RaceRepository)
    public raceRepository : RaceRepository,
  ) {}

  @post('/races')
  @response(200, {
    description: 'Race model instance',
    content: {'application/json': {schema: getModelSchemaRef(Race)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Race, {
            title: 'NewRace',
            
          }),
        },
      },
    })
    race: Race,
  ): Promise<Race> {
    return this.raceRepository.create(race);
  }

  @get('/races/count')
  @response(200, {
    description: 'Race model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Race) where?: Where<Race>,
  ): Promise<Count> {
    return this.raceRepository.count(where);
  }

  @get('/races')
  @response(200, {
    description: 'Array of Race model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Race, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Race) filter?: Filter<Race>,
  ): Promise<Race[]> {
    return this.raceRepository.find(filter);
  }

  @patch('/races')
  @response(200, {
    description: 'Race PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Race, {partial: true}),
        },
      },
    })
    race: Race,
    @param.where(Race) where?: Where<Race>,
  ): Promise<Count> {
    return this.raceRepository.updateAll(race, where);
  }

  @get('/races/{id}')
  @response(200, {
    description: 'Race model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Race, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Race, {exclude: 'where'}) filter?: FilterExcludingWhere<Race>
  ): Promise<Race> {
    return this.raceRepository.findById(id, filter);
  }

  @patch('/races/{id}')
  @response(204, {
    description: 'Race PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Race, {partial: true}),
        },
      },
    })
    race: Race,
  ): Promise<void> {
    await this.raceRepository.updateById(id, race);
  }

  @put('/races/{id}')
  @response(204, {
    description: 'Race PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() race: Race,
  ): Promise<void> {
    await this.raceRepository.replaceById(id, race);
  }

  @del('/races/{id}')
  @response(204, {
    description: 'Race DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.raceRepository.deleteById(id);
  }
}
