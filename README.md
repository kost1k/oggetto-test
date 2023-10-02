# Инструкция по работе с проектом

## Окружение

Для работы с проектом рекомендуется использовать актуальную LTS версию [Node.js](https://nodejs.org/en). На текущий момент `18.16.0`.

В качестве пакетного менеджера используется [pnpm](https://pnpm.io/) версии `8.6.6`.  
[Статья](https://fruntend.com/posts/pochemu-stoit-ispolzovat-pnpm) с обзором и основными командами.

В качестве основного фреймворка используется [Nuxt](https://nuxt.com/).  
Перед началом работ рекомендуется ознакомиться с [основными концепциями](https://nuxt.com/docs/guide/concepts/auto-imports) и [отличиями](https://nuxt.com/docs/migration/overview) от 2 версии.

В качестве утилитарного CSS-фреймворка используется [Tailwind CSS](https://tailwindcss.com/).  
[Документация](https://tailwindcss.ru/) на русском.


## Установка

Перед началом работы с проектом установите зависимости
```bash
pnpm install
```


## Development

Запуск сервера разработки (http://localhost:3000)

```bash
pnpm dev
```


## Production

Сборка приложения

```bash
pnpm build
```

Локальный предпросмотр

```bash
pnpm preview
```

Для более подробной информации по развертыванию, смотреть [документацию](https://nuxt.com/docs/getting-started/deployment).


## Linting

На проекте используется eslint. Подробности о конфигурации можно посмотреть [здесь](https://github.com/antfu/eslint-config/blob/main/README.md).  
Проверка осуществляется при запуске сборки и перед коммитом. Также есть команды для ручного запуска.

Запуск линтера

```bash
pnpm lint
```

Запуск линтера с исправлением форматирования

```bash
pnpm lint:fix
```
