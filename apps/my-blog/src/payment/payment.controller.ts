import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service.js';

/*
PaymentController
Nə üçün lazımdır: Ödənişlərlə bağlı HTTP sorğularını (`POST /payment/checkout`) emal etmək
və bu əməliyyatları `PaymentService` vasitəsilə idarə etmək üçün nəzərdə tutulub.
*/
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post('checkout')
  checkout(@Body('amount') amount: number) {
    return this.paymentService.processPayment(amount || 100);
  }
}
