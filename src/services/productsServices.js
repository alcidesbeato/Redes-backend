const UsuariosRepository = require("../db/repositories/productsRepository");

class UsuariosService{
   usuariosRepository = new UsuariosRepository();
    async list(name){
        return await this.usuariosRepository.list(name);
    }

    async create(usuario){
        return await this.usuariosRepository.create(usuario);
    }

    async updateByName(usuarioName, usuario){
        const usuariosExiste = await this.usuariosRepository.getByName(usuarioName);
        if(!usuariosExiste){
            throw new Error('nao existe um usuario com esse nome');
        }
        await this.usuariosRepository.update(usuarioName,usuario);

        return await this.usuariosRepository.getByName(usuarioName);
    }

    async deleteById(usuarioId){
        const usuariosExiste = await this.usuariosRepository.getById(usuarioId);
        if(!usuariosExiste){
            throw new Error('nao existe um usuario com esse id');
        }
        await this.usuariosRepository.deleteById(usuarioId);
    }

}
module.exports = UsuariosService;