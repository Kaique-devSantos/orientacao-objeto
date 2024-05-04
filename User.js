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
    //get foi utilizado para possibilitar leitura da propriedade fora da class
    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }

    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('Formato não valido')
        }
        this.#nome = novoNome

    }

    // #montaObjUser() {
    //     return  ({
    //        nome: this.#nome,
    //        nascimento: this.#nascimento,
    //        role: this.#role,
    //        ativo: this.ativo,
    //     })
    // }

    exibirInfos(){
        // const objUser = this.#montaObjUser()
        return `${this.nome}, ${this.email}, ${this.ativo}, ${this.role}`
    }
}

// const novoUser = new User('juliana', 'j@j.com', '2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos()); 
// console.log(User.prototype.isPrototypeOf(novoUser));

