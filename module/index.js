import { vet } from "./function.js"; // quando é export deve usar { }
import soma from "./somatudo.js"; // deve usar o export default


vet.forEach(element => console.log(element));
console.log(soma(vet));
