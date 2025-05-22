import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Coffee, CoffeeService } from './coffee.service';


@Controller()
export class CoffeeController {
    constructor(private readonly CoffeeService: CoffeeService ) {}

    @Post('/coffee-create')
    createAlunos(@Body() coffee : Coffee) {
    return this.CoffeeService.createCoffee(coffee);
  }

    @Get('/coffees')
    getAlunos(): Coffee[] {
    return this.CoffeeService.getCoffees();
  }

    @Get('/coffees/:id/detalhes')
    getAlunoUnico(@Param('id') id: string) {
    return this.CoffeeService.getCoffeeUnico(id)
  }
}

  