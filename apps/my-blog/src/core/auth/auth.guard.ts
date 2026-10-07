import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
/**
 * AuthGuard
 * Nə üçün lazımdır: İstifadəçinin autentifikasiyasını (istifadəçinin özünü təsdiqləməsini)
 * yoxlayaraq, icazəsi olmayan marşrutlara (route) girişin qarşısını almaq üçün.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Basit örnek: Header içinde 'authorization' varsa erişime izin ver
    const authHeader = request.headers['authorization'];
    return !!authHeader;
  }
}
