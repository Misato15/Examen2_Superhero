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
import {Superhero} from '../models';
import {SuperheroRepository} from '../repositories';

export class SuperheroController {
  constructor(
    @repository(SuperheroRepository)
    public superheroRepository : SuperheroRepository,
  ) {}

  @post('/superheroes')
  @response(200, {
    description: 'Superhero model instance',
    content: {'application/json': {schema: getModelSchemaRef(Superhero)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Superhero, {
            title: 'NewSuperhero',
            
          }),
        },
      },
    })
    superhero: Superhero,
  ): Promise<Superhero> {
    return this.superheroRepository.create(superhero);
  }

  @get('/superheroes/count')
  @response(200, {
    description: 'Superhero model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Superhero) where?: Where<Superhero>,
  ): Promise<Count> {
    return this.superheroRepository.count(where);
  }

  @get('/superheroes')
  @response(200, {
    description: 'Array of Superhero model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Superhero, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Superhero) filter?: Filter<Superhero>,
  ): Promise<Superhero[]> {
    return this.superheroRepository.find(filter);
  }

  @patch('/superheroes')
  @response(200, {
    description: 'Superhero PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Superhero, {partial: true}),
        },
      },
    })
    superhero: Superhero,
    @param.where(Superhero) where?: Where<Superhero>,
  ): Promise<Count> {
    return this.superheroRepository.updateAll(superhero, where);
  }

  @get('/superheroes/{id}')
  @response(200, {
    description: 'Superhero model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Superhero, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Superhero, {exclude: 'where'}) filter?: FilterExcludingWhere<Superhero>
  ): Promise<Superhero> {
    return this.superheroRepository.findById(id, filter);
  }

  @patch('/superheroes/{id}')
  @response(204, {
    description: 'Superhero PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Superhero, {partial: true}),
        },
      },
    })
    superhero: Superhero,
  ): Promise<void> {
    await this.superheroRepository.updateById(id, superhero);
  }

  @put('/superheroes/{id}')
  @response(204, {
    description: 'Superhero PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() superhero: Superhero,
  ): Promise<void> {
    await this.superheroRepository.replaceById(id, superhero);
  }

  @del('/superheroes/{id}')
  @response(204, {
    description: 'Superhero DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.superheroRepository.deleteById(id);
  }
}
