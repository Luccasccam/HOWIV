import Jogos from "../Model/Jogos";

class JogosRepository {
    #lista;
    #inscritos;
    #inscJogo;
    #jogo;

    constructor() {
        this.#lista = [];
        this.#inscritos = [];
        this.#inscJogo = [];
        this.#jogo = new Jogos();
    }

    inscrever(func) {
        let insc = [...this.#inscritos, func];
        this.#inscritos = insc;
    }

    inscreverJogo(func) {
        let insc = [... this.#inscJogo, func];
        this.#inscJogo = insc;
    }

    desinscrever(func) {
        let index = this.#inscritos.findIndex(func);
        this.#inscritos.splice(index, 1);
    }

    desinscreverJogo(func) {
        let index = this.#inscJogo.findIndex(func);
        this.#inscJogo.splice(index, 1);
    }

    notificar() {
        this.#inscritos.forEach( insc => {
            insc(this.#lista);
        })
    }

    notificarJogo() {
        this.#inscJogo.forEach( insc => {
            insc(this.#jogo);
        })
    }

    create(model) {
        model.Id = this.#lista.length + 1;
        let jogo = [...this.#lista, model];
        this.#lista = jogo;
        
        this.notificar();
    }

    list() {
        return this.#lista;
    }

    update(model) {
        let index = this.#lista.findIndex(x => x.Id == model.Id);
        console.log(model);
        this.#lista[index] = model;

        this.notificar();
    }

    handlerUpdate(model) {
        console.log(model)
        this.#jogo = model;

        this.notificarJogo();
    }

    retornaJogoEdit() {
        return this.#jogo;
    }
}

export default JogosRepository;