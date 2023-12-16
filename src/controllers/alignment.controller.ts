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
import {Alignment} from '../models';
import {AlignmentRepository} from '../repositories';

export class AlignmentController {
  constructor(
    @repository(AlignmentRepository)
    public alignmentRepository : AlignmentRepository,
  ) {}

  @post('/alignments')
  @response(200, {
    description: 'Alignment model instance',
    content: {'application/json': {schema: getModelSchemaRef(Alignment)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alignment, {
            title: 'NewAlignment',
            
          }),
        },
      },
    })
    alignment: Alignment,
  ): Promise<Alignment> {
    return this.alignmentRepository.create(alignment);
  }

  @get('/alignments/count')
  @response(200, {
    description: 'Alignment model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Alignment) where?: Where<Alignment>,
  ): Promise<Count> {
    return this.alignmentRepository.count(where);
  }

  @get('/alignments')
  @response(200, {
    description: 'Array of Alignment model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Alignment, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Alignment) filter?: Filter<Alignment>,
  ): Promise<Alignment[]> {
    return this.alignmentRepository.find(filter);
  }

  @patch('/alignments')
  @response(200, {
    description: 'Alignment PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alignment, {partial: true}),
        },
      },
    })
    alignment: Alignment,
    @param.where(Alignment) where?: Where<Alignment>,
  ): Promise<Count> {
    return this.alignmentRepository.updateAll(alignment, where);
  }

  @get('/alignments/{id}')
  @response(200, {
    description: 'Alignment model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Alignment, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Alignment, {exclude: 'where'}) filter?: FilterExcludingWhere<Alignment>
  ): Promise<Alignment> {
    return this.alignmentRepository.findById(id, filter);
  }

  @patch('/alignments/{id}')
  @response(204, {
    description: 'Alignment PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alignment, {partial: true}),
        },
      },
    })
    alignment: Alignment,
  ): Promise<void> {
    await this.alignmentRepository.updateById(id, alignment);
  }

  @put('/alignments/{id}')
  @response(204, {
    description: 'Alignment PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() alignment: Alignment,
  ): Promise<void> {
    await this.alignmentRepository.replaceById(id, alignment);
  }

  @del('/alignments/{id}')
  @response(204, {
    description: 'Alignment DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.alignmentRepository.deleteById(id);
  }
}
