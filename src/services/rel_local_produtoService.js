const Rel_local_produtoRepository = require("../db/repositories/rel_local_produtoRepository");

class rel_local_produtoService{
    rel_local_produtoRepository = new Rel_local_produtoRepository();
    async list(name){
        return await this.rel_local_produtoRepository.list(name);
    }

    async create(product){
        return await this.rel_local_produtoRepository.create(product);
    }

    async updateByName(productName, product){
        const productsExiste = await this.rel_local_produtoRepository.getByName(productName);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse nome.');
        }
        await this.rel_local_produtoRepository.update(productName,product);

        return await this.rel_local_produtoRepository.getByName(productName);
    }

    async deleteById(productId){
        const productsExiste = await this.rel_local_produtoRepository.getById(productId);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse id.');
        }
        await this.rel_local_produtoRepository.deleteById(productId);
    }

}
module.exports = rel_local_produtoService;