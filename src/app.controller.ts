import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Aluno, AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ) {}

  @Get('/test/aula')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/alunos')
  createAlunos(@Body() aluno : Aluno) {
    return this.appService.createAluno(aluno);
  }

  @Get('/alunos')
  getAlunos(): Aluno[] {
    return this.appService.getAlunos();
  }

  @Get('/alunos/:id')
  getAlunoUnico(@Param('id') id: string) {
    return this.appService.getAlunoUnico(id)
  }

}
