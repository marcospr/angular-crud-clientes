import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteService } from './cliente.service';
import { DialogconfirmService } from './dialogconfirm.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListaComponent,
    ClienteDetalheComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    DialogconfirmService,
    Location
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
