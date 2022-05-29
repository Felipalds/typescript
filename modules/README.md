# Modules in TypeScript
- Modules is from ECMAScript 2015
- Modules are executed within their own scope, not in the global scope

## Exporting functions
<code>
    export function name(){

    }

    import { name } from 'pwd'
</code>

## Exporting many functions
<code>
    export { f1, f2 };

    export {f1 as fn};
</code>