import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private sqlite : SQLite) { 
    this.sqlite.create({
      name:'datos.db',
      location:'default'
    }).then((db:SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO (MAIL VARCHAR(75),CONTRASEÑA VARCHAR(30))',[]).then(()=> {
       console.log(' KG:TABLA CREADA OK');
      }).catch( e=> {
        console.log('KG:TABLA NOK');
      })
    }).catch( e=> {
      console.log('BASE DE DATOS NOK');
    })
  }
  
  almacenarUsuario(correo: any, contrasena: any){
    this.sqlite.create({
      name:'datos.db',
      location:'default'
    }).then((db:SQLiteObject) => {
      db.executeSql('INSERT INTO USUARIO VALUES(?,?)',[correo,contrasena]).then(()=> {
       console.log(' KG:USUARIO ALMCENADO OK');
      }).catch( e=> {
        console.log('KG:USUARIO NO ALMACENADO');
      })
    }).catch( e=> {
      console.log('BASE DE DATOS NOK');
    })

  }
  
  validarCorreo(correo: any,){
   return this.sqlite.create({
      name:'datos.db',
      location:'default'
    }).then((db:SQLiteObject) => {
      return db.executeSql('SELECT COUNT(MAIL) AS CANTIDAD FROM USUARIO WHERE MAIL=?',[correo]).then((data)=> {

        if(data.rows.item(0).CANTIDAD == 0){
          return false;
        }
 
        return true;


      }).catch( e=> {
        return true;
      })
    }).catch( e=> {
      return true;
    })
}

}

