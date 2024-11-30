
# 🚀 Auto RIA Project

**Auto RIA Project** - це додаток, розроблений для сервісу продажу автомобілів, створення як власних оголошень по продажу автомобілів, так і для створення власного автосалона.  Проект побудований на базі NestJS із використанням PostgreSQL, Redis та AWS S3.

---

## 📖 Зміст

1. [Особливості](#особливості)
2. [Технології](#технології)
3. [Встановлення](#встановлення)
4. [Запуск проекту](#запуск-проекту)
5. [Конфігурація](#конфігурація)
6. [Архітектура](#архітектура)
7. [API Документація](#api-документація)
8. [Контакти](#контакти)

---

## 🛠 Особливості

- Управління користувачами, оголошеннями та автосалонами.
- Зберігання зображень у AWS S3.
- Аутентифікація та авторизація через JWT.
- Підтримка ролей (GUEST, USER, ADMIN, SUPER-ADMIN).
- Підтримка системи Permission.
- Пошук і фільтрація по даних.
- Статистика оголошень.
- Кешування запитів та данних через Redis.
- Реляційна база даних (PostgreSQL).
- Реалізація кронів через Schedule.
- Реалізація розсилки листів через Mailer.

---

## 💻 Технології

- **Back-End**: [NestJS](https://nestjs.com)
- **Database**: PostgreSQL
- **Caching**: Redis
- **Storage**: AWS S3
- **Local Storage**: MinIO
- **Authentication**: JWT
- **Докеризація**: Docker & Docker Compose

---

## 🛠 Встановлення

> Перед тим, як почати, переконайтесь, що у вас встановлені наступні інструменти:
> - [Node.js](https://nodejs.org/) (версія ≥ 18)
> - [Docker](https://www.docker.com/)
> - [Docker Compose](https://docs.docker.com/compose/)

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/AskaSlip/nest-project
   ```

2. Встановіть залежності:

   ```bash
   npm install
   ```

3. Налаштуйте `.env` файл. Дані для налаштування знаходяться в `.env.example` Приклад:

   ```env
   POSTGRES_USER=user
   POSTGRES_PASSWORD=password
   POSTGRES_DB=auto-ria-project
   POSTGRES_PORT=5432

   REDIS_PORT=6379
   REDIS_PASSWORD=redispass

   AWS_S3_ACCESS_KEY=your-access-key
   AWS_S3_SECRET_KEY=your-secret-key
   AWS_S3_BUCKET_NAME=your-bucket-name
   AWS_S3_REGION=eu-north-1
   ```

---

## 🚀 Запуск проекту

1. **Запуск з Docker:**

   Виконайте команду для запуску всіх необхідних сервісів:

   ```bash
   start:docker:local (from package.json)
   ```

   Це запустить:
    - PostgreSQL
    - Redis
    - MinIO (для локального зберігання зображень)


2. **Локальний запуск:**

   ```bash
   start:dev (from package.json)
   ```
   
3. **Генерація бази даних:**

   ```bash
   migration:run (from package.json)
   ```


---

## ⚙️ Конфігурація

- **AWS S3**:
  Зображення зберігаються у S3. Переконайтесь, що ваш бакет створений, налаштований User та його Policy.

- **Redis**:
  Використовується для кешування конвертації валют та токенів.

- **PostgreSQL**:
  Створіть базу даних перед запуском.

---

## 🏛 Архітектура

- **Controllers**: Обробляють HTTP-запити.
- **Services**: Логіка бізнес-процесів.
- **Repositories**: Взаємодія з базою даних.
- **Guards**: Обробляють аутентифікацію та авторизацію.
- **Helpers**: Утиліти та логіка, що повторюється.
- **Assets**: Для статичних файлів
- **Config**: Налаштування проекту.
- **Enums**: Переліки проекту.
- **Interfaces**: Інтерфейси проекту.
- **Decorators**: Декоратори проекту.
- **Filters**: Фільтри проекту.
- **Templates**: Шаблони листів.
- **Migrations**: Міграції бази даних.
- **Tasks**: Крони та Schedule.
- **DTO**: Об'єкти передачі даних.
- **Entities**: Сутності бази даних.

---

## 📚 API Документація

> Використовується [Swagger](https://swagger.io/).

- Документація доступна за адресою: `http://${APP_HOST}:${APP_PORT}/api/docs`.
- Доступ до документації можна налаштувати через введення даних в `.env`.

---

## 📩 Контакти

Розробник: **AnkaSlip**   

GitHub: [AskaSlip](https://github.com/AskaSlip)

Telegram: [AskaSlip](https://t.me/askavaren)

---

## 📌 Підказки

- Для локального зберігання зображень можна налаштувати MinIO як заміну AWS S3.

