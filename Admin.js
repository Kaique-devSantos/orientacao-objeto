import User from "./User.js";


export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin' , ativo = true) {
        super(nome, email, nascimento, role , ativo )
    }
    criarCurso(nomeDoCurso, vagas){
        return `curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}


// metodo criado abaixo foi um teste para verificar se os atributos estão acesseveis fora da class
// nomeAdmin() {
//     return `${this.nome}`
// }


const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.criarCurso('JS', 20)); 
