# TypeScript
@Felipalds
## O que é o TypeScript?
Typescript é um superset para JavaScript, que acrescenta a tipagem, as interfaces e muitas outras coisas.
- Tipagens (types) fortes
- Usar em: projetos de escala e projetos open-source (documentação)
- É convertido para JavaScript no final, então o ganho não é em performance, mas sim em produtividade e desenvolvimento, muito disso pela tipagem, que obriga o projeto a ser "documentado"

## Vantagens
- Facilidade na leitura do código e na busca por features das bibliotecas
- Autocomplete
- Segurança de código
- Menos preocupação com código

## Início do desenvolvimento
```yarn init -y``` <br><br>
```yarn add -D typescript``` (instalar typescript como dependência do projeto)<br>
```yarn add express```

- As bibliotecas que forem adicionadas ao projeto nem sempre vêm com sua tipagem documentada para o TypeScript por padrão, portanto devemos adicioná-las, usando <br>
```yarn add @types/express -D```
- -D significa que é uma dependência de desenvolvimento, ou seja, não irá afetar o ambiente de produção

## Features:
Uma das maneiras novas para se importar bibliotecas é 100% compatível com o TypeScript: <br>
- ```import lib from 'lib'```

## Compilação
- O Node por si só não entende TypeScript, então devemos transpilar nosso código .ts para .js
- ao instalar a dependência "typescript", é instalado junto, na pasta './node_modules/bin', o *tsc*, que é o typescript converter. Ele que vai realizar essa transpilação
- ```yarn tsc index.ts```
- ```node src/index.js```

## TSconfig
<a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" target="_blank">Ver documentação oficial</a><br>
- ```yarn tsc --config```
- É um arquivo .json de configurações para o desenvolvimento em TypeScript. Possui várias flags para ajudar no desenvolvimento
- *outDir* -> onde o código transpilado irá parar. Coloque uma pasta caso queira que o Javascript seja separado do TypeScript (boa prática)
- *lib* ->  são as bibliotecas padrão disponíveis no projeto, por exemplo, em projetos web, terá a biblioteca "dom".

## Fluxo de desenvolvimento
- ```yarn add ts-node-dev -D```
- crie um script de desenvolvimento:
- ts-node-dev --respawn --transpile-only src/index.ts (nodemon para TS)

## TypeScript em si
- Tipagem pode ser inferida pelo próprio Typescript de forma automática
- ```function getUsername(): string { }```  -> definimos a tipagem de RETORNO para uma função
- quando você precisa criar uma tipagem para algum parâmetro ou variável, pode criar uma *interface*<br>
```
interface INomeInterface {
    name: string;
    email: string;
    nao_obrigatorio ?: Array<string>;
    nao_obrigatorio_2 ?: string[];
}
```