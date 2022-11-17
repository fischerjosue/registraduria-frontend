<template>
    <h1 class="information_tittle">Información Personal</h1>
    <div class="information">
        <h2>Nombre: <span>{{name}}</span></h2>
        <h2>Perfíl: <span>{{perfil}} </span></h2>
        <h2>Teléfono: <span>{{telefono}}</span></h2>
        <h2>Género: <span>{{genero}}</span></h2>
        <!-- <div v-if= loaded>
            <h2>Ciudad: <span>{{ciudad}}</span></h2>
        </div> -->
    </div>
  </template>
  
  <script>
  import jwt_decode from 'jwt-decode';
  import axios from 'axios';
  export default {
      data:function(){
          return{
            name: "",
            perfil: "",
            telefono: "",
            genero: "",
            loaded: true,
            ciudad:"",
            direccion:"",
            fecNac:""
          }
      },
      methods:{
            getData: async function(){
                if(localStorage.getItem("token_access")===null || localStorage.getItem("token_refresh")===null){
                    this.$emit('logOut');
                    return;
                }
                await this.verifyToken();
                let token= localStorage.getItem("token_access");
                let userId= jwt_decode(token).user_id.toString();
                console.log(userId)

                axios.get(`https://hospitalhome-be.herokuapp.com/ConsultaUsuario/${userId}`)
                .then((result)=>{
                    this.name= result.data.name;
                    this.perfil= result.data.perfil;
                    this.telefono= result.data.telefono;
                    this.genero= result.data.genero;
                }).catch((error)=>{ 
                });
            },
            verifyToken:function(){
                return axios.post("https://hospitalhome-be.herokuapp.com/refresh/",{refresh: localStorage.getItem("token_refresh")},{headers:{}})
                .then((result)=>{
                    localStorage.setItem("token_access",result.data.access);
                }).catch(()=>{
                    this.$emit('logOut');
                });
            },
            getData2: async function(){
                if(localStorage.getItem("token_access")===null || localStorage.getItem("token_refresh")===null){
                    this.$emit('logOut');
                    return;
                }
                await this.verifyToken();
                let token= localStorage.getItem("token_access");
                let pacienteId= jwt_decode(token)
                console.log(pacienteId)
                
                
            },
            verifyToken:function(){
                return axios.post("https://hospitalhome-be.herokuapp.com/refresh/",{refresh: localStorage.getItem("token_refresh")},{headers:{}})
                .then((result)=>{
                    localStorage.setItem("token_access",result.data.access);
                }).catch(()=>{
                    this.$emit('logOut');
                });
            }
        },
        created: async function(){
          this.getData();
          this.getData2();
    } 
  }
  </script>
  
  <style>

  .information {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  }

  .information_tittle {
  font-size: 50px;
  color: #000000;
  }

  .information h2 {
  font-size: 30px;
  color: #000000;
  }

  .information span {
  color: #007bff;
  font-weight: bold;
  }
  </style>