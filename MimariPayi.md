# 📂 Projenizde Oluşturulan Mimari Yapı

```text
largeScaleNstJsApp/
├── apps/
│   ├── my-blog/                          # 🌐 Ana Blog Uygulaması
│   │   └── src/
│   │       ├── core/                     # 🔐 Çekirdek (Core) Modüller Katmanı
│   │       │   ├── auth/                 # AuthController, AuthService, AuthGuard, AuthModule
│   │       │   ├── user/                 # UserController, UserService, UserModule
│   │       │   └── core.module.ts        # CoreModule (User & Auth bir arada)
│   │       ├── post/                     # 📝 PostModule, PostController, PostService
│   │       ├── comment/                  # 💬 CommentModule, CommentController, CommentService
│   │       ├── reaction/                 # ❤️ ReactionModule, ReactionController, ReactionService
│   │       ├── media/                    # 🖼️ MediaModule, MediaController, MediaService
│   │       ├── payment/                  # 💳 PaymentModule, PaymentController, PaymentService
│   │       ├── config/                   # ⚙️ ConfigModule, ConfigService
│   │       ├── app.module.ts             # Tüm modüllerin toplandığı Kök Modül
│   │       └── main.ts                   # Uygulama Başlangıç Noktası
│   │
│   └── my-admin/                         # 🛠️ İkinci Uygulama (Admin Paneli)
│       └── src/
│           ├── my-admin.module.ts        # @app/common ve @app/repository kullanan admin modülü
│           └── main.ts
│
└── libs/                                 # 📦 Ortak Kütüphaneler (Shared Libraries)
    ├── common/                           # Ortak Yardımcılar Katmanı
    │   └── src/
    │       ├── decorators/               # user.decorator.ts
    │       ├── filters/                  # http-exception.filter.ts
    │       ├── guards/                   # roles.guard.ts
    │       ├── middlewares/              # logger.middleware.ts
    │       ├── providers/                # context.provider.ts
    │       └── index.ts                  # @app/common export dosyası
    │
    └── repository/                       # Veritabanı Soyutlama Katmanı
        └── src/
            ├── repository.service.ts
            └── repository.module.ts
```

---

## 🎙️ Sesli Mesajlarınızdaki Soruların Yanıtları

### 1. `libs` (Libraries) Nedir ve Niye Ekliyoruz?
Monorepo mimarisinde aynı proje klasörü içerisinde birden fazla uygulama yer alır (Örn: `my-blog` ve `my-admin`).

Hem blog uygulamasında hem de admin uygulamasında **Auth Guard**, **Kullanıcı Decorator'ı**, **Logger Middleware** veya **Veritabanı işlemleri (Repository)** kullanılır.
* **`libs` kullanılmazsa:** Bu kodları kopyalayıp her iki projenin içine ayrı ayrı yapıştırmanız gerekir (Kötü yöntem).
* **`libs` kullanılırsa:** Ortak olan tüm kodlar `libs/common` ve `libs/repository` klasörlerine konur. Hem `my-blog` hem `my-admin` sadece `import { ... } from '@app/common'` yazarak bu kodları sıfır kod tekrarı ile kullanır!

---

### 2. Bir Öğrenci Olarak Kodları Hangi Sırayla Okumalısınız?

`README.md` ve `MimariPayi.md` dosyalarınızdaki sıralama şu şekildedir:

1. 🚀 **`apps/my-blog/src/main.ts`** *(Sunucuyu başlatan dosya)*
2. 🎼 **`apps/my-blog/src/app.module.ts`** *(Tüm modülleri birleştiren orkestra şefi)*
3. 🔐 **`apps/my-blog/src/core/core.module.ts`** *(Sistemin bel kemiği olan Auth ve User modülleri)*
4. 🧱 **Özellik Modülleri:** `post`, `comment`, `reaction`, `media`, `payment`, `config`
5. 📦 **Ortak Kütüphaneler:** `libs/common` ve `libs/repository`
6. 🛠️ **İkinci Uygulama:** `apps/my-admin`

---

## 💻 Uygulamaları Çalıştırma Komutları

```bash
# Blog Uygulamasını Çalıştır:
npx nest start my-blog --watch

# Admin Uygulamasını Çalıştır:
npx nest start my-admin --watch
```
