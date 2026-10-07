import { Injectable } from '@nestjs/common';

/*
PaymentService
Nə üçün lazımdır: Ödənişlərlə bağlı biznes məntiqini emal etmək üçün. Məsələn, ödənişi emal etmək,
əməliyyatı qeydə almaq və nəticəni qaytarmaq.`PaymentController` bu servisin metodlarından istifadə edir.
*/
@Injectable()
export class PaymentService {
  processPayment(amount: number) {
    return {
      status: 'SUCCESS',
      transactionId: 'TXN-' + Math.floor(Math.random() * 1000000),
      amount,
    };
  }
}
