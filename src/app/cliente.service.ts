import { Injectable } from '@angular/core';

import { Cliente } from './model/cliente';
import { Response } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // app é a pasta de onde fizermos a chamada
   // clientes é o nome da variável na classe InMemoryDataService
   private clientesUrl = 'http://localhost:8081/cliente';

   private headers: HttpHeaders  = new HttpHeaders ({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient ) { }

  getClientes(): Promise<Cliente[]> {
    return this.http.get(this.clientesUrl)
      .toPromise()
      .then(response => {
          console.log(response as Cliente[]);
          return response as Cliente[];
      })
      .catch(this.trataErro);
  }



  getCliente(id: number): Promise<Cliente> {
    return this.getClientes()
      .then((clientes: Cliente[]) => clientes.find(cliente => cliente.id === id));
  }

  create(cliente: Cliente): Promise<Cliente> {
    return this.http.post(this.clientesUrl, JSON.stringify(cliente), { headers: this.headers })
      .toPromise()
       .then((response) => {
         console.log(response);
         return response as Cliente;
     })
      .catch(this.trataErro);
  }

  update(cliente: Cliente): Promise<Cliente> {
    const url = `${this.clientesUrl}/${cliente.id}`;
    return this.http
    .put(url, JSON.stringify(cliente), {headers: this.headers})
    .toPromise()
    .then(( ) => cliente as Cliente)
    .catch(this.trataErro);
  }

  delete(cliente: Cliente): Promise<Cliente> {
    const url = `${this.clientesUrl}/${cliente.id}`; // app/cliente/:id
    return this.http
    .delete(url, {headers: this.headers})
    .toPromise()
    .then(() => cliente as Cliente)
    .catch(this.trataErro);
  }

  private trataErro(err: any): Promise<any> {
    return Promise.reject('Erro: ' || err.message || err);
  }
}
