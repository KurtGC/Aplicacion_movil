import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../service/dbservice.service';
import { AlertController, ToastController } from '@ionic/angular';

//import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  modeloUsuario : string ='';
  modeloContrasena: string='';

  constructor(private dbservice: DbserviceService,private alertController :AlertController,private toastController: ToastController){
    console.log('Pagina logon iniciada')
  }
  ngOnInit(){
  }

  validarInicio(){
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }

 async mostrarFormulario(){
  const alert = await this.alertController.create({
   header:'Nuevo Usuario',
    inputs:[
      {
      name:'correo',
      type:'text',
      placeholder:'Correo Elctronico'
      },
     {
      name:'contrasena',
      type:'password',
      placeholder:'Contraseña'
     },
  ],
  buttons :[
    {
    text:'Cancelar',
    role:'cancel',
    cssClass:'secondary',
    handler: () => {
      console.log('Confirm Cancel');
    }
  },{
    text:'agregar',
    handler:(data) =>{
      this.almacenarUsuario(data.correo ,data.contrasena);
    }
   }
  ]
  });
  await alert.present();
 }
 almacenarUsuario(correo: any, contrasena: any){
  this.dbservice.validarCorreo(correo).then((data)=>{
    if(!data){
      console.log('Lo guardo');
      this.dbservice.almacenarUsuario(correo,contrasena);
    }else{
      this.presentToast();
    }
  })
  this.dbservice.almacenarUsuario(correo,contrasena);
 }
 async presentToast(){
  const toast = await this.toastController.create({
    message:'Correo ya existe',
    duration: 2000,
  })
 }
}


