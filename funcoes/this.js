const pessoa = {
    saudacao: "Bom dia",
    fala() {
        console.log(this.saudacao);
    }
}
pessoa.fala()