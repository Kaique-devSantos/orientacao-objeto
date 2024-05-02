export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    #montaObjUser() {
        return  ({
           nome: this.#nome,
           nascimento: this.#nascimento,
           role: this.#role,
           ativo: this.ativo,
        })
    }

    exibirInfos(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email},`
    }
}

// const novoUser = new User('juliana', 'j@j.com', '2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos()); 
// console.log(User.prototype.isPrototypeOf(novoUser));

