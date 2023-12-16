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
import {Attribute} from '../models';
import {AttributeRepository} from '../repositories';

export class AttributeController {
  constructor(
    @repository(AttributeRepository)
    public attributeRepository : AttributeRepository,
  ) {}

  @post('/attributes')
  @response(200, {
    description: 'Attribute model instance',
    content: {'application/json': {schema: getModelSchemaRef(Attribute)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attribute, {
            title: 'NewAttribute',
            
          }),
        },
      },
    })
    attribute: Attribute,
  ): Promise<Attribute> {
    return this.attributeRepository.create(attribute);
  }

  @get('/attributes/count')
  @response(200, {
    description: 'Attribute model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Attribute) where?: Where<Attribute>,
  ): Promise<Count> {
    return this.attributeRepository.count(where);
  }

  @get('/attributes')
  @response(200, {
    description: 'Array of Attribute model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Attribute, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Attribute) filter?: Filter<Attribute>,
  ): Promise<Attribute[]> {
    return this.attributeRepository.find(filter);
  }

  @patch('/attributes')
  @response(200, {
    description: 'Attribute PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attribute, {partial: true}),
        },
      },
    })
    attribute: Attribute,
    @param.where(Attribute) where?: Where<Attribute>,
  ): Promise<Count> {
    return this.attributeRepository.updateAll(attribute, where);
  }

  @get('/attributes/{id}')
  @response(200, {
    description: 'Attribute model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Attribute, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Attribute, {exclude: 'where'}) filter?: FilterExcludingWhere<Attribute>
  ): Promise<Attribute> {
    return this.attributeRepository.findById(id, filter);
  }

  @patch('/attributes/{id}')
  @response(204, {
    description: 'Attribute PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attribute, {partial: true}),
        },
      },
    })
    attribute: Attribute,
  ): Promise<void> {
    await this.attributeRepository.updateById(id, attribute);
  }

  @put('/attributes/{id}')
  @response(204, {
    description: 'Attribute PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() attribute: Attribute,
  ): Promise<void> {
    await this.attributeRepository.replaceById(id, attribute);
  }

  @del('/attributes/{id}')
  @response(204, {
    description: 'Attribute DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.attributeRepository.deleteById(id);
  }
}
