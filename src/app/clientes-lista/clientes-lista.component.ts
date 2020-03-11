import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Cliente } from './../model/cliente';
import { ClienteService } from '../cliente.service';
import { DialogconfirmService } from '../dialogconfirm.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private dialogconfirmService: DialogconfirmService, private location: Location
    ) {}

  ngOnInit(): void {
    this.clienteService.getClientes()
      .then((clientes: Cliente[]) => {
        this.clientes = clientes;
      }).catch(err => console.log(err));

    // this.clientes = this.clienteService.getClientes();
  }

  onDelete(cliente: Cliente): void {
    this.dialogconfirmService.confirm('Deseja excluir o cliente ' + cliente.nome + ' ?')
      .then((podeDeletar: boolean) => {
        if (podeDeletar) {
          this.clienteService
            .delete(cliente)
            .then(() => {
             // this.clientes = this.clientes.filter((c: Cliente) => c.id !== cliente.id);
              this.location.back();
            }).catch(err => {
              console.log(err);
            });
        }
      });
  }

}
