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
import {Colour} from '../models';
import {ColourRepository} from '../repositories';

export class ColourController {
  constructor(
    @repository(ColourRepository)
    public colourRepository : ColourRepository,
  ) {}

  @post('/colours')
  @response(200, {
    description: 'Colour model instance',
    content: {'application/json': {schema: getModelSchemaRef(Colour)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colour, {
            title: 'NewColour',
            
          }),
        },
      },
    })
    colour: Colour,
  ): Promise<Colour> {
    return this.colourRepository.create(colour);
  }

  @get('/colours/count')
  @response(200, {
    description: 'Colour model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Colour) where?: Where<Colour>,
  ): Promise<Count> {
    return this.colourRepository.count(where);
  }

  @get('/colours')
  @response(200, {
    description: 'Array of Colour model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Colour, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Colour) filter?: Filter<Colour>,
  ): Promise<Colour[]> {
    return this.colourRepository.find(filter);
  }

  @patch('/colours')
  @response(200, {
    description: 'Colour PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colour, {partial: true}),
        },
      },
    })
    colour: Colour,
    @param.where(Colour) where?: Where<Colour>,
  ): Promise<Count> {
    return this.colourRepository.updateAll(colour, where);
  }

  @get('/colours/{id}')
  @response(200, {
    description: 'Colour model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Colour, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Colour, {exclude: 'where'}) filter?: FilterExcludingWhere<Colour>
  ): Promise<Colour> {
    return this.colourRepository.findById(id, filter);
  }

  @patch('/colours/{id}')
  @response(204, {
    description: 'Colour PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colour, {partial: true}),
        },
      },
    })
    colour: Colour,
  ): Promise<void> {
    await this.colourRepository.updateById(id, colour);
  }

  @put('/colours/{id}')
  @response(204, {
    description: 'Colour PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() colour: Colour,
  ): Promise<void> {
    await this.colourRepository.replaceById(id, colour);
  }

  @del('/colours/{id}')
  @response(204, {
    description: 'Colour DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.colourRepository.deleteById(id);
  }
}
