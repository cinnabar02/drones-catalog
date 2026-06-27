# Drones Catalog

Каталог украинских и российских дронов. Фронтенд на Svelte + TypeScript, бэкенд на Hono, база данных PostgreSQL (Neon) через Prisma.

## Стек

- **Frontend:** Svelte 5, TypeScript, Vite
- **Backend:** Hono, TypeScript, tsx
- **БД:** PostgreSQL (Neon), Prisma ORM

## Структура проекта

```
drones-catalog/
  frontend/   # Svelte приложение
  backend/    # Hono API сервер
  bot/        # (в разработке)
```

## Запуск

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Открыть: http://localhost:5173

### Backend

```bash
cd backend
npm install
npx prisma generate
npx tsx index.ts
```

API работает на: http://localhost:3000

## Переменные окружения

Создать файл `backend/.env`:

```
DATABASE_URL="postgresql://..."
```

## Prisma

Применить миграции:

```bash
cd backend
npx prisma migrate dev --name <название>
```

Сгенерировать клиент после изменения схемы:

```bash
npx prisma generate
```

## API

| Метод | Путь      | Описание          |
|-------|-----------|-------------------|
| GET   | /drones   | Получить все дроны |