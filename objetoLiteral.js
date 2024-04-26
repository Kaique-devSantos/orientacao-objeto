const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = { 
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
   criarCurso(){
    console.log('curso criado!');
   }
}

//user.exibirInfos();

// const exibir = user.exibirInfos ;
// exibir();

const exibir = function() {
    console.log(this.nome);
}

//bind() para ligar (bind) o valor de this a um determinado contexto que passamos no parametro
const exibirNome = exibir.bind(user);
//  exibirNome();
// exibir();

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();