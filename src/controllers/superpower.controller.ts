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
import {Superpower} from '../models';
import {SuperpowerRepository} from '../repositories';

export class SuperpowerController {
  constructor(
    @repository(SuperpowerRepository)
    public superpowerRepository : SuperpowerRepository,
  ) {}

  @post('/superpowers')
  @response(200, {
    description: 'Superpower model instance',
    content: {'application/json': {schema: getModelSchemaRef(Superpower)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Superpower, {
            title: 'NewSuperpower',
            
          }),
        },
      },
    })
    superpower: Superpower,
  ): Promise<Superpower> {
    return this.superpowerRepository.create(superpower);
  }

  @get('/superpowers/count')
  @response(200, {
    description: 'Superpower model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Superpower) where?: Where<Superpower>,
  ): Promise<Count> {
    return this.superpowerRepository.count(where);
  }

  @get('/superpowers')
  @response(200, {
    description: 'Array of Superpower model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Superpower, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Superpower) filter?: Filter<Superpower>,
  ): Promise<Superpower[]> {
    return this.superpowerRepository.find(filter);
  }

  @patch('/superpowers')
  @response(200, {
    description: 'Superpower PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Superpower, {partial: true}),
        },
      },
    })
    superpower: Superpower,
    @param.where(Superpower) where?: Where<Superpower>,
  ): Promise<Count> {
    return this.superpowerRepository.updateAll(superpower, where);
  }

  @get('/superpowers/{id}')
  @response(200, {
    description: 'Superpower model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Superpower, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Superpower, {exclude: 'where'}) filter?: FilterExcludingWhere<Superpower>
  ): Promise<Superpower> {
    return this.superpowerRepository.findById(id, filter);
  }

  @patch('/superpowers/{id}')
  @response(204, {
    description: 'Superpower PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Superpower, {partial: true}),
        },
      },
    })
    superpower: Superpower,
  ): Promise<void> {
    await this.superpowerRepository.updateById(id, superpower);
  }

  @put('/superpowers/{id}')
  @response(204, {
    description: 'Superpower PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() superpower: Superpower,
  ): Promise<void> {
    await this.superpowerRepository.replaceById(id, superpower);
  }

  @del('/superpowers/{id}')
  @response(204, {
    description: 'Superpower DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.superpowerRepository.deleteById(id);
  }
}
