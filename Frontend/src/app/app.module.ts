import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ScannerPage } from '../pages/scanner/scanner';
import { StorePage } from '../pages/store/store';
import { ReceiptsPage } from '../pages/receipts/receipts';
import { ReceiptPage } from '../pages/receipt/receipt'
import { TabsPage } from '../pages/tabs/tabs';
import { PaymentPage } from '../pages/payment/payment';
import { CheckoutPage } from '../pages/checkout/checkout';
import { SuccessPage } from '../pages/success/success';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScannerPage,
    StorePage,
    ReceiptsPage,
    ReceiptPage,
    TabsPage,
    PaymentPage,
    CheckoutPage,
    SuccessPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScannerPage,
    StorePage,
    ReceiptsPage,
    ReceiptPage,
    TabsPage,
    PaymentPage,
    CheckoutPage,
    SuccessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
