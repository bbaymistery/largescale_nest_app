import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * @User() Dekoratoru
 * Nə üçün lazımdır: Controller metodlarında daxil olmuş istifadəçini (req.user)
 * və ya istifadəçinin konkret bir sahəsini (məsələn: @User('id')) rahatlıqla əldə etmək üçün.
 */
export const User = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    // Əgər spesifik sahə istənilibsə (məs: @User('email')), həmin sahəni qaytarır
    return data ? user?.[data] : user;
  },
);
