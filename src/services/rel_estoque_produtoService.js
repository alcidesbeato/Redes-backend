const Rel_estoque_produtoRepository = require("../db/repositories/rel_local_produtoRepository");

class rel_estoque_produtoService{
    rel_estoque_produtoRepository = new Rel_estoque_produtoRepository();
    async list(name){
        return await this.rel_estoque_produtoRepository.list(name);
    }

    async create(product){
        return await this.rel_estoque_produtoRepository.create(product);
    }

    async updateByName(productName, product){
        const productsExiste = await this.rel_estoque_produtoRepository.getByName(productName);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse nome.');
        }
        await this.rel_estoque_produtoRepository.update(productName,product);

        return await this.rel_estoque_produtoRepository.getByName(productName);
    }

    async deleteById(productId){
        const productsExiste = await this.rel_estoque_produtoRepository.getById(productId);
        if(!productsExiste){
            throw new Error('Nao existe um product com esse id.');
        }
        await this.rel_estoque_produtoRepository.deleteById(productId);
    }

}
module.exports = rel_estoque_produtoService;