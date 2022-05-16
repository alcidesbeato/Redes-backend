const EstoqueRepository = require("../db/repositories/estoqueRepository");

class EstoqueService{
    estoqueRepository = new EstoqueRepository();
    
    async list(name){
        return await this.estoqueRepository.list(name);
    }

    async create(estoque){
        return await this.estoqueRepository.create(estoque);
    }

    async update(estoqueId, estoque){
        const estoqueExiste = await this.estoqueRepository.get(estoqueId);
        if(!estoqueExiste){
            throw new Error('nao existe um estoque com esse nome');
        }
        await this.estoqueRepository.update(estoqueId,estoque);

        return await this.estoqueRepository.get(estoqueId);
    }

}
module.exports = EstoqueService;