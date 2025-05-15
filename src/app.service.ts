import { Injectable } from '@nestjs/common';

export interface Aluno {
  id: string
  name: string,
  surname: string,
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private alunos: Aluno[] = [
    {
      id: '1',
      name: 'Ana',
      surname: 'Laressa',
    },
    {
      id: '2',
      name: 'Lucas',
      surname: 'Pedro',
    },
    {
      id: '3',
      name: 'Antonio',
      surname: 'Mateus',
    }
  ]

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAlunoUnico(id: string): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.id === id);
  }
}

  

