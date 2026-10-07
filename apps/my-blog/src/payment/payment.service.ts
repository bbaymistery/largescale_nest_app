import { Injectable } from '@nestjs/common';

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
