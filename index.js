import User from "./User.js";
import Docente from "./docente.js";
import Admin from "./Admin.js";


// const novoUser = new User('Mariana', 'm@m.com', '2021-01-01');

// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
// console.log(novoAdmin.nome)
// novoAdmin.nome = 'José';
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme', 'g@g.com', '2021-01-01');
console.log(novoDocente.exibirInfos())

// console.log(novoAdmin.nome)

// console.log(novoUser.#montaObjUser()); não acessivel fora da class User

// novoUser.#nome = 'Marcia';