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
import {HeroAttribute} from '../models';
import {HeroAttributeRepository} from '../repositories';

export class HeroAttributeController {
  constructor(
    @repository(HeroAttributeRepository)
    public heroAttributeRepository : HeroAttributeRepository,
  ) {}

  @post('/hero-attributes')
  @response(200, {
    description: 'HeroAttribute model instance',
    content: {'application/json': {schema: getModelSchemaRef(HeroAttribute)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroAttribute, {
            title: 'NewHeroAttribute',
            exclude: ['id'],
          }),
        },
      },
    })
    heroAttribute: Omit<HeroAttribute, 'id'>,
  ): Promise<HeroAttribute> {
    return this.heroAttributeRepository.create(heroAttribute);
  }

  @get('/hero-attributes/count')
  @response(200, {
    description: 'HeroAttribute model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HeroAttribute) where?: Where<HeroAttribute>,
  ): Promise<Count> {
    return this.heroAttributeRepository.count(where);
  }

  @get('/hero-attributes')
  @response(200, {
    description: 'Array of HeroAttribute model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HeroAttribute, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HeroAttribute) filter?: Filter<HeroAttribute>,
  ): Promise<HeroAttribute[]> {
    return this.heroAttributeRepository.find(filter);
  }

  @patch('/hero-attributes')
  @response(200, {
    description: 'HeroAttribute PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroAttribute, {partial: true}),
        },
      },
    })
    heroAttribute: HeroAttribute,
    @param.where(HeroAttribute) where?: Where<HeroAttribute>,
  ): Promise<Count> {
    return this.heroAttributeRepository.updateAll(heroAttribute, where);
  }

  @get('/hero-attributes/{id}')
  @response(200, {
    description: 'HeroAttribute model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HeroAttribute, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HeroAttribute, {exclude: 'where'}) filter?: FilterExcludingWhere<HeroAttribute>
  ): Promise<HeroAttribute> {
    return this.heroAttributeRepository.findById(id, filter);
  }

  @patch('/hero-attributes/{id}')
  @response(204, {
    description: 'HeroAttribute PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroAttribute, {partial: true}),
        },
      },
    })
    heroAttribute: HeroAttribute,
  ): Promise<void> {
    await this.heroAttributeRepository.updateById(id, heroAttribute);
  }

  @put('/hero-attributes/{id}')
  @response(204, {
    description: 'HeroAttribute PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() heroAttribute: HeroAttribute,
  ): Promise<void> {
    await this.heroAttributeRepository.replaceById(id, heroAttribute);
  }

  @del('/hero-attributes/{id}')
  @response(204, {
    description: 'HeroAttribute DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.heroAttributeRepository.deleteById(id);
  }
}
