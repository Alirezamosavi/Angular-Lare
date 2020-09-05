import { title } from "process";

export interface Task {
    id : number;
    title : string
}


// An interface is a TypeScript artifact, it is not part of ECMAScript. 
//   An interface is a way to define a contract on a function with respect to the arguments and their type. 
//   Along with functions, an interface can also be used with a Class as well to define custom types. 