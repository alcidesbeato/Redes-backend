const LocalRepository = require("../db/repositories/produtosRepository");

class LocalService{
    localRepository = new LocalRepository();
    async list(name){
        return await this.localRepository.list(name);
    }

    async create(producto){
        return await this.localRepository.create(producto);
    }

    async updateByName(productoName, producto){
        const localExiste = await this.localRepository.getByName(productoName);
        if(!localExiste){
            throw new Error('Nao existe um producto com esse nome.');
        }
        await this.localRepository.update(productoName,producto);

        return await this.localRepository.getByName(productoName);
    }

    async deleteById(productoId){
        const localExiste = await this.localRepository.getById(productoId);
        if(!localExiste){
            throw new Error('Nao existe um producto com esse id.');
        }
        await this.localRepository.deleteById(productoId);
    }

}
module.exports = LocalService;