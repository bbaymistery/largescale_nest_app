import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service.js';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('checkout')
  checkout(@Body('amount') amount: number) {
    return this.paymentService.processPayment(amount || 100);
  }
}
