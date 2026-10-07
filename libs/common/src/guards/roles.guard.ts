import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

/**
 * RolesGuard
 * Nə üçün lazımdır: İstifadəçinin rolunu (məsələn: ADMIN, USER) yoxlayaraq
 * icazəsi olmayan marşrutlara (route) girişin qarşısını almaq üçün (RBAC - Role-Based Access Control).
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    // Əgər həmin metoda heç bir rol tələbi qoyulmayıbsa, keçidə icazə verilir
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // İstifadəçinin rolu tələb olunan rollardan birinə uyğundurmu yoxlayır
    return requiredRoles.some((role) => user?.roles?.includes(role));
  }
}

