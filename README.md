# TypeScript
@Felipalds
## O que é o TypeScript?
Typescript é um superset para JavaScript, que acrescenta a tipagem, as interfaces e muitas outras coisas.
- Tipagens (types) fortes
- Usar em: projetos de escala e projetos open-source (documentação)
- É convertido para Javascript no final, então o ganho não é em performance, mas sim em produtividade e desenvolvimento, muito disso pela tipagem, que obriga o projeto a ser "documentado"

## Vantagens
- Facilidade na leitura do código e na busca por features das bibliotecas
- Autocomplete
- Segurança de código
- Menos preocupação com código

## Início do desenvolvimento
```yarn init -y``` <br>
Vamos instalar o TypeScript, e é tão simples quanto: <br>
```yarn add -D typescript``` (instalar typescript como dependência do projeto)
- yarn add express

- As bibliotecas que forem adicionadas ao projeto nem sempre vêm com tipagem para o Typescript, portanto devemos adicioná-las, usando yarn add @types/express -D
- -D significa que é uma dependência de desenvolvimento, ou seja, não irá afetar a produção.

## Features:
- import lib from 'lib'

## Compilação
- Node por si só não entende Typescript, então devemos transpilar para Js
- ao instalar a dependência "typescript", é instalado junto, na pasta './node_modules/bin', o *tsc*, que é o typescript converter. Ele que vai transformar .ts -> .js
- yarn tsc index.ts
- pode ser que aconteça um erro de "export default", para isso basta mudar a forma de importação do express para: import * as express from 'express'
- node src/index.js para rodar o servidor

## TSconfig
- yarn tsc --config
- é um arquivo de configurações para o desenvolvimento em Typescript. Ao ter este arquivo instalado, provavelmente não acontecerá mais o erro de "export default"
- *yarn tsc* apenas
- "outDir" -> Onde o código transpilado irá parar. Coloque uma pasta caso queira que o Javascript seja separado do Typescript (boa prática)

## Fluxo de desenvolvimento
- yarn add ts-node-dev -D
- crie um script de desenvolvimento:
- ts-node-dev --respawn --transpile-only src/index.ts (nodemon para TS)

## Typescript em si
- Tipagem pode ser inferida pelo próprio Typescript de forma automática
- function getUsername(): string { }  -> definimos a tipagem de RETORNO para uma função
- quando você precisa criar uma tipagem para algum parâmetro ou variável, pode criar uma *interface*
- interface INomeInterface {
    name: string;
    email: string;
    nao_obrigatorio ?: Array<string>;
    nao_obrigatorio_2 ?: string[];
}