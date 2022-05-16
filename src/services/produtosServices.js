const ProdutosRepository = require("../db/repositories/produtosRepository");

class ProdutosService{
   produtosRepository = new ProdutosRepository();
   
    async list(name){
        return await this.produtosRepository.list(name);
    }

    async create(produto){
        return await this.produtosRepository.create(produto);
    }

    async update(produtoId, produto){
        const produtoExiste = await this.produtosRepository.getId(produtoId);
        if(!produtoExiste){
            throw new Error('nao existe um produto com esse nome');
        }
        const sponse = await this.produtosRepository.update(produtoId,produto);
        console.log('response', response);
        return await this.produtosRepository.getId(produtoId);
    }

}
module.exports = ProdutosService;