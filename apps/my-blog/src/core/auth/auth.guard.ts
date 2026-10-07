import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

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
