# poo-i-exercicio
# Exercício 1
Configure um servidor Express conectado a um banco de dados SQLite3. <br>
O único endpoint necessário para esse exercício é o GET /ping.

Crie também a tabela e a classe da entidade a seguir.

## Videos
Será a única entidade da aplicação e deve possuir:
- uma id
- um título
- uma duração em segundos
- a data de upload

### Banco de dados
Você deve decidir os tipos de dados para cada coluna e também se precisa de alguma restrição.
- use o padrão snake_case para nomear as colunas

### Classe
Você deve decidir os tipos de dados para cada atributo e encapsulá-los.
- use o padrão camelCase para nomear os atributos e métodos
- lembre-se de implementar os getters e setters

# Exercício 2

Implemente os endpoints GET /videos e POST /videos utilizando classes como visto em aula. <br>
Caso o processo ainda esteja confuso, implemente primeiro sem o uso da classe e depois refatore.
# Exercício 3
Implemente os endpoints PUT /videos/:id e DELETE videos/:id utilizando classes.