
# Sistema de Classificação de Herói

**Descrição do Projeto**: Este projeto tem como objetivo calcular e exibir o ranking de um herói com base no saldo de vitórias e derrotas. O sistema classifica o herói em diferentes categorias (Imortal, Lendário, Diamante, etc.) com base no número de vitórias e derrotas registradas.

## Funcionalidades

- **Cálculo do saldo de vitórias**: A diferença entre vitórias e derrotas é calculada.
- **Classificação do herói**: Com base no saldo de vitórias, o herói recebe uma classificação (Imortal, Lendário, Diamante, etc.).
- **Exibição de resultados**: O sistema exibe o número de vitórias e a classificação do herói.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para implementar a lógica de classificação e cálculo.

## Como Rodar o Projeto

Para executar esse projeto localmente, siga os passos abaixo:

### 1. Clonar o repositório

Se você ainda não fez isso, clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Instalar dependências

Este projeto não possui dependências externas, sendo um simples script em JavaScript.

### 3. Executar o código

Para rodar o código, basta abrir o arquivo `.js` em qualquer editor de texto, como Visual Studio Code, e rodá-lo no seu terminal usando o Node.js:

```bash
node nome-do-arquivo.js
```

## Como Funciona

1. O código define um número de **vitórias** e **derrotas**.
2. Ele calcula o **saldo de vitórias** com base nas vitórias e derrotas.
3. Com o saldo de vitórias, a função classifica o herói em um dos seguintes níveis:
   - **Imortal**: Se o saldo for maior ou igual a 101.
   - **Lendário**: Se o saldo for entre 91 e 100.
   - **Diamante**: Se o saldo for entre 81 e 90.
   - **Ouro**: Se o saldo for entre 51 e 80.
   - **Prata**: Se o saldo for entre 21 e 50.
   - **Bronze**: Se o saldo for entre 11 e 20.
   - **Ferro**: Se o saldo for inferior a 10.

## Exemplo de Saída

O sistema exibirá a seguinte saída no console:

```bash
O Herói tem um saldo de 100 vitórias e está no nível de Lendário
```

## Contribuindo

Se você gostaria de contribuir para esse projeto, siga os seguintes passos:

1. Faça um **fork** do repositório.
2. Crie uma nova branch para a sua feature:
   ```bash
   git checkout -b nome-da-branch
   ```
3. Faça as alterações desejadas e adicione ao seu commit:
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   ```
4. Envie a branch para o repositório remoto:
   ```bash
   git push origin nome-da-branch
   ```
5. Abra um pull request explicando suas alterações.

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## Autor

**Seu Nome** - _Descrição breve sobre você_  
[Link para o seu GitHub ou LinkedIn]
