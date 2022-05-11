const EstoqueRepository = require("../db/repositories/estoqueRepository");

class EstoqueService{
    estoqueRepository = new EstoqueRepository();
    async list(name){
        return await this.estoqueRepository.list(name);
    }

    async create(product){
        return await this.estoqueRepository.create(product);
    }

    async updateByName(productName, product){
        const estoqueExiste = await this.estoqueRepository.getByName(productName);
        if(!estoqueExiste){
            throw new Error('Nao existe um product com esse nome.');
        }
        await this.estoqueRepository.update(productName,product);

        return await this.estoqueRepository.getByName(productName);
    }

    async deleteById(productId){
        const estoqueExiste = await this.estoqueRepository.getById(productId);
        if(!estoqueExiste){
            throw new Error('Nao existe um product com esse id.');
        }
        await this.estoqueRepository.deleteById(productId);
    }

}
module.exports = EstoqueService;