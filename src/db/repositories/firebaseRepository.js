const { initializeApp } = require('firebase/app');
const {getDatabase, ref, get, set, child, update, remove} = require('firebase/database');

class Database{
    constructor(){
        const firebaseConfig = {
            apiKey: "AIzaSyALd6xjlQyDJBKrbzEnLACXnWZIvmpa4do",
            authDomain: "redesasupermercado.firebaseapp.com",
            databaseURL: "https://redesasupermercado-default-rtdb.firebaseio.com",
            projectId: "redesasupermercado",
            storageBucket: "redesasupermercado.appspot.com",
            messagingSenderId: "758574545886",
            appId: "1:758574545886:web:606cc0883042722483bb4f",
            measurementId: "G-38NEGKCEEF"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        //const analytics = getAnalytics(app);
    }

    //Transactions Index---------------------------------------------------------------
    async select_index_reposicao_estoque(){
        const db = getDatabase();
        var ret = get(child(ref(db),"IndexRepoEstoque")).then(function(snapshot){
        if(snapshot.exists()){
            return snapshot.val();
        }});
        var resul = await ret;
        return resul;
    }
        
    async update_index_reposicao_estoque(num){
        const db = getDatabase();
        update(ref(db),{
            IndexRepoEstoque: num
        }).then(function(){return true;})
        .catch(function(error){return false;});
    }


    async select_index_reposicao_prateleira(){
        const db = getDatabase();
        var ret = get(child(ref(db),"IndexRepoPrateleira")).then(function(snapshot){
        if(snapshot.exists()){
            return snapshot.val();
        }});
        var resul = await ret;
        return resul;
    }
        
    async update_index_reposicao_prateleira(num){
        const db = getDatabase();
        update(ref(db),{
            IndexRepoPrateleira : num
        }).then(function(){return true;})
        .catch(function(error){return false;});
    }

    //Insert 
    async insert_reposicao_estoque(id, produto, data, quantidade){
        const db = getDatabase();
        set(ref(db, 'ReposicaoEstoque/' + produto + '/' + id),{
            data: data,
            quantidade: quantidade
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    async insert_reposicao_prateleira(id, produto, data, quantidade){
        const db = getDatabase();
        set(ref(db, 'ReposicaoPrateleira/' + produto + '/' + id),{
            data: data,
            quantidade: quantidade
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    //Select
    async get_reposicao_estoque(){
        const db2 = ref(getDatabase());
        var ret = get(child(db2,"ReposicaoEstoque"))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        //console.log(snapshot.val());
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
    }

    async get_reposicao_estoque_by_product(product){
        const db2 = ref(getDatabase());
        var ret = get(child(db2,"ReposicaoEstoque/" + product))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        //console.log(snapshot.val());
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
    }

    async get_reposicao_prateleira(){
        const db2 = ref(getDatabase());
        var ret = get(child(db2,"ReposicaoPrateleira"))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
    }

    async get_reposicao_prateleira_by_product(product){
        const db2 = ref(getDatabase());
        var ret = get(child(db2,"ReposicaoPrateleira/" + product))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
    }
     async updateApp(body, date){
        var index = await this.select_index_reposicao_estoque();
        this.insert_reposicao_estoque(index, body.nome, date.toString(), body.quantidade);
        this.update_index_reposicao_estoque(index + 1);
     }
}
module.exports = Database;