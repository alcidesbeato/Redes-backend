const ProdutosRepository = require("../db/repositories/produtosRepository");

class ProdutosService{
   produtosRepository = new ProdutosRepository();
   
    async list(name){
        return await this.produtosRepository.list(name);
    }

    async get(id){
        return await this.produtosRepository.getId(id);
    }

    async create(produto){
        return await this.produtosRepository.create(produto);
    }

    async update(produtoId, produto){
        const produtoExiste = await this.produtosRepository.getId(produtoId);
        if(!produtoExiste){
            throw new Error('nao existe um produto com esse nome');
        }
        await this.produtosRepository.update(produtoId,produto);
        return await this.produtosRepository.getId(produtoId);
    }

}
module.exports = ProdutosService;