# 🏗️ Büyük Ölçekli NestJS Mimarisi (Monorepo & Multi-App Guide)

Bu proje, videodaki (**Tech Vision - How a Large Scale NestJS App Should ACTUALLY Look**) mimari prensiplere %100 sadık kalınarak hazırlanmıştır. Öğrenme sürecinizi kolaylaştırmak adına kodlar **en anlaşılır ve temiz** şekilde yazılmıştır.

---

## 🎯 1. `libs` (Libraries) Nedir ve Neden Kullanılır?

Büyük ölçekli (Large-Scale) projelerde tek bir uygulama yerine birden fazla uygulama olur. Örneğin:
* 🌐 `apps/my-blog` (Son kullanıcıların girdiğinde gördüğü blog sitesi)
* 🔐 `apps/my-admin` (Yöneticilerin kullandığı admin paneli)

Eğer `my-blog` ve `my-admin` projelerinin ikisinde de aynı **Auth Guard**, **Logger Middleware**, **User Decorator** veya **Veritabanı (Repository)** kodlarına ihtiyacınız varsa:
❌ **Yanlış Yaklaşım:** Kodları kopyalayıp her iki projenin içine ayrı ayrı yapıştırmak.  
✅ **Profesyonel Yaklaşım (`libs`):** Ortak kodları `libs/common` veya `libs/repository` içine koymak.

Böylece tek bir komutla hem `my-blog` hem `my-admin` içerisinde:
```typescript
import { ContextProvider, User } from '@app/common';
import { RepositoryService } from '@app/repository';
```
şeklinde sıfır kod tekrarı ile kütüphaneyi çağırabilirsiniz.

---

## 📖 2. Kodları Hangi Sırayla Okumalısınız? (Öğrenci Okuma Rehberi)

Projeyi ilk defa incelerken tam olarak şu sırayı takip ediniz:

```mermaid
graph TD
    A["1. apps/my-blog/src/main.ts (Giriş Noktası)"] --> B["2. apps/my-blog/src/app.module.ts (Ana Kök Modül)"]
    B --> C["3. apps/my-blog/src/core/core.module.ts (Çekirdek Sistem)"]
    C --> C1["core/user (Kullanıcı İşlemleri)"]
    C --> C2["core/auth (Giriş & Yetkilendirme)"]
    B --> D["4. Özellik Modülleri (post, comment, reaction, media, payment)"]
    B --> E["5. Ortak Kütüphaneler (libs/common & libs/repository)"]
    E --> F["6. İkinci Uygulama (apps/my-admin/src/main.ts)"]
```

### 🔹 Sıra 1: `apps/my-blog/src/main.ts`
Uygulamanın çalışmaya başladığı ilk dosyadır. `NestFactory.create(AppModule)` ile NestJS sunucusunu 3000 portunda başlatır.

### 🔹 Sıra 2: `apps/my-blog/src/app.module.ts`
Uygulamanın orkestra şefidir. İçerisinde `CoreModule`, `PostModule`, `CommentModule`, `ReactionModule`, `MediaModule`, `PaymentModule` ve `ConfigModule` gibi tüm modülleri bir araya getirir.

### 🔹 Sıra 3: `apps/my-blog/src/core/core.module.ts`
Sistemin **en temel (çekirdek)** ihtiyaçlarını gruplar.
* `core/user`: Kullanıcı verileri ve servisi.
* `core/auth`: Giriş yapma (login) ve `AuthGuard` güvenlik mekanizması.

### 🔹 Sıra 4: Özellik Modülleri (Feature Modules)
Her biri tek bir işten sorumlu bağımsız modüllerdir:
* 📝 `post/`: Blog yazıları.
* 💬 `comment/`: Yorumlar.
* ❤️ `reaction/`: Beğeniler (Like/Love).
* 🖼️ `media/`: Resim/Dosya yükleme.
* 💳 `payment/`: Ödeme alma.
* ⚙️ `config/`: Sistem ayarları.

### 🔹 Sıra 5: `libs/` (Ortak Kütüphaneler)
* `libs/common/src/`:
  * `@decorators/user.decorator.ts`: Parametre bazlı custom decorator.
  * `filters/http-exception.filter.ts`: Hata yakalama filtresi.
  * `guards/roles.guard.ts`: Rol kontrol koruyucusu.
  * `middlewares/logger.middleware.ts`: Gelen istekleri loglayan ara yazılım.
  * `providers/context.provider.ts`: İstek bağlamı sağlayıcı.
* `libs/repository/src/`: Tüm veritabanı sorgularının tutulduğu soyut katman.

### 🔹 Sıra 6: `apps/my-admin/`
Ana blog projesinden bağımsız çalışan yönetim paneli uygulaması. `libs/common` ve `libs/repository` kütüphanelerini import ederek çalışır.

---

## 💻 3. Projeyi Çalıştırma ve Komut Rehberi

Global Nest CLI yüklemeden **`npx`** ile projeyi şu komutlarla çalıştırabilirsiniz:

### 🚀 Uygulamaları Çalıştırma:
```bash
# Blog Uygulamasını Başlat (Port 3000):
npx nest start my-blog --watch

# Admin Uygulamasını Başlat:
npx nest start my-admin --watch
```

### 📦 Yeni Modül & Kütüphane Ekleme Komutları:
```bash
# Blog içine yeni bir modül eklemek için:
npx nest g module my-module --project my-blog

# Yeni bir kütüphane (lib) oluşturmak için:
npx nest g lib my-library

# Yeni bir uygulama (app) eklemek için:
npx nest g app my-new-app
```
