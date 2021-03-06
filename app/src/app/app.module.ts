import { ProductAddOrderPage } from './../pages/product-add-order/product-add-order';
import { ClientUpdatePage } from './../pages/client-update/client-update';
import { CpfPipe } from './../pipes/cpf/cpf';
import { PipesModule } from './../pipes/pipes.module';
import { ClientDetailPage } from './../pages/client-detail/client-detail';
import { ClientListPage } from './../pages/client-list/client-list';
import { ProductDatailPage } from './../pages/product-datail/product-datail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenericoProvider } from '../providers/generico/generico';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { ClientesProvider } from '../providers/clientes/clientes';
import { ClientCreatePage } from '../pages/client-create/client-create';
import { CidadeEstadoProvider } from '../providers/cidade-estado/cidade-estado';
import { PedidosCreatePage } from '../pages/pedidos-create/pedidos-create';
import { PedidosListPage } from '../pages/pedidos-list/pedidos-list';
import { PedidosDetailPage } from '../pages/pedidos-detail/pedidos-detail';
import { PedidosUpdatePage } from '../pages/pedidos-update/pedidos-update';
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { ItemsProvider } from '../providers/items/items';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProductListPage,
    ProductDatailPage,
    ClientListPage,
    ClientDetailPage,
    ClientCreatePage,
    ClientUpdatePage,
    PedidosCreatePage,
    PedidosListPage,
    PedidosDetailPage,
    PedidosUpdatePage,
    ProductAddOrderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    PipesModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProductListPage,
    ProductDatailPage,
    ClientListPage,
    ClientDetailPage,
    ClientCreatePage,
    ClientUpdatePage,
    PedidosCreatePage,
    PedidosListPage,
    PedidosDetailPage,
    PedidosUpdatePage,
    ProductAddOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GenericoProvider,
    ProdutosProvider,
    ClientesProvider,
    CidadeEstadoProvider,
    PedidosProvider,
    ItemsProvider

  ]
})
export class AppModule {}
