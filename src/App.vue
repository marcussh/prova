<template>
  <div>
    <h2>Cadastro</h2>
    <form @submit.prevent="cadastrar()">
      <label for="nome">Nome</label>
      <input v-validate data-vv-rules="required" id="nome" data-vv-as="Nome" name="nome" type="text" v-model="dados.nome">
      <span v-show="errors.has('nome')">{{ errors.first('nome') }}</span>
      



      <label for="telefone">Telefone</label>
      <input id="telefone" name="telefone" v-validate data-vv-rules="required" type="text" v-model="dados.telefone">
      <span v-show="errors.has('telefone')">{{ errors.first('telefone') }}</span>
      <!--
      <label for="como_conheceu">Como nos conheceu?</label>
      <select v-model="selected">
      <option disabled value="">Escolha um item</option>
      <option>TV</option>
      <option>Internet</option>
      <option>Outros</option>
      </select>

      <label for="rede_social">Possui rede social?</label>
      <input type="radio" id="sim" value="Sim" >
      <label for="sim">Sim</label>

      <input type="radio" id="nao" value="Não">
      <label for="nao">Não</label>
      

      <label for="quais">Quais?</label>
      <input type="checkbox" id="facebook">
      <label for="facebook">Facebook</label>

      <input type="checkbox" id="linkedin">
      <label for="linkedin">LinkedIn</label>
      
      <input type="checkbox" id="twitter">
      <label for="twitter">Twitter</label>
  -->
      <button type="submit">Cadastrar</button>

    </form>
  </div> 
</template>

<script>

import Dados from './domain/dados/Dados';
export default {
  

  data(){
    return {
      dados: new Dados()
    }
  },

  methods: {
    cadastrar() {

      this.$validator
      .validateAll()
      .then(success => {
        if (success){
         this.$http.post('http://localhost:3000/bd', this.dados)
      .then(() => this.dados = new Dados(), err => console.log(err));
        }
      });

     

      console.log(this.dados.nome);
      console.log(this.dados.telefone);


      this.dados = new Dados();

    }
  }
}
</script>

<style scoped>
</style>
