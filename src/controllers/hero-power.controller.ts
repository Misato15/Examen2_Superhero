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
import {HeroPower} from '../models';
import {HeroPowerRepository} from '../repositories';

export class HeroPowerController {
  constructor(
    @repository(HeroPowerRepository)
    public heroPowerRepository : HeroPowerRepository,
  ) {}

  @post('/hero-powers')
  @response(200, {
    description: 'HeroPower model instance',
    content: {'application/json': {schema: getModelSchemaRef(HeroPower)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroPower, {
            title: 'NewHeroPower',
            exclude: ['id'],
          }),
        },
      },
    })
    heroPower: Omit<HeroPower, 'id'>,
  ): Promise<HeroPower> {
    return this.heroPowerRepository.create(heroPower);
  }

  @get('/hero-powers/count')
  @response(200, {
    description: 'HeroPower model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HeroPower) where?: Where<HeroPower>,
  ): Promise<Count> {
    return this.heroPowerRepository.count(where);
  }

  @get('/hero-powers')
  @response(200, {
    description: 'Array of HeroPower model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HeroPower, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HeroPower) filter?: Filter<HeroPower>,
  ): Promise<HeroPower[]> {
    return this.heroPowerRepository.find(filter);
  }

  @patch('/hero-powers')
  @response(200, {
    description: 'HeroPower PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroPower, {partial: true}),
        },
      },
    })
    heroPower: HeroPower,
    @param.where(HeroPower) where?: Where<HeroPower>,
  ): Promise<Count> {
    return this.heroPowerRepository.updateAll(heroPower, where);
  }

  @get('/hero-powers/{id}')
  @response(200, {
    description: 'HeroPower model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HeroPower, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HeroPower, {exclude: 'where'}) filter?: FilterExcludingWhere<HeroPower>
  ): Promise<HeroPower> {
    return this.heroPowerRepository.findById(id, filter);
  }

  @patch('/hero-powers/{id}')
  @response(204, {
    description: 'HeroPower PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroPower, {partial: true}),
        },
      },
    })
    heroPower: HeroPower,
  ): Promise<void> {
    await this.heroPowerRepository.updateById(id, heroPower);
  }

  @put('/hero-powers/{id}')
  @response(204, {
    description: 'HeroPower PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() heroPower: HeroPower,
  ): Promise<void> {
    await this.heroPowerRepository.replaceById(id, heroPower);
  }

  @del('/hero-powers/{id}')
  @response(204, {
    description: 'HeroPower DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.heroPowerRepository.deleteById(id);
  }
}
