const LocalRepository = require("../db/repositories/localRepository");

class LocalService{
    localRepository = new LocalRepository();
    async list(name){
        return await this.localRepository.list(name);
    }

    async create(produto){
        return await this.localRepository.create(produto);
    }

    async updateByName(productoName, produto){
        const localExiste = await this.localRepository.getByName(productoName);
        if(!localExiste){
            throw new Error('Nao existe um produto com esse nome.');
        }
        await this.localRepository.update(productoName,produto);

        return await this.localRepository.getByName(productoName);
    }

    async deleteById(produtoId){
        const localExiste = await this.localRepository.getById(produtoId);
        if(!localExiste){
            throw new Error('Nao existe um produto com esse id.');
        }
        await this.localRepository.deleteById(produtoId);
    }

}
module.exports = LocalService;