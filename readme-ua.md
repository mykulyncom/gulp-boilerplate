<div align="center">
<h1>Gulp Boilerplate</h1>
<p>Шаблон для створення статичних веб проєктів використовуючи Gulp та WebPack</p>
<img src="https://img.shields.io/github/package-json/v/mykulyncom/gulp-boilerplate?style=for-the-badge&color=blue">

<br>
Автор: <a href="https://jixindev.com" target="_blank">Сергій Микулин</a>
<br>
<br>
<a href="/readme-ua.md">English</a> | Українська
</div>

# Зміст

- [Особливості](#особливості)
- [Початок роботи](#початок-роботи)
- [Використання](#використання)
- [Структура проєкту](#структура-проєкту)
- [Внесок](#внесок)
- [Ліцензія](#ліцензія)

## Особливості

- [x] HTML:
  - [x] Компіляція Pug
  - [x] Створення компонентів `pnpm pug --add=ComponentName`
- [x] Стилі:
  - [x] Компіляція SCSS
  - [x] Автопрефікси
  - [x] Групування медіа-запитів
  - [x] Очищення і мініфікація стилів
  - [x] Видалення невикористаних стилів
  - [x] Автоматичний імпорт з компонентів `./src/pug/**/*.scss`
  - [x] Stylelint
- [x] JavaScript:
  - [x] WebPack
  - [x] Babel
  - [x] Source maps
  - [x] Автоматичний імпорт з модулів `./src/pug/**/*.js`
  - [x] ESLint
- [x] Зображення:
  - [x] Оптимізація SVG
  - [x] Конвертація зображень в WebP
  - [x] Оптимізація PNG/JPG
  - [x] Ліниве завантаження
  - [x] Автоматичне створення спрайтів
- [x] Конвертація ttf в woff2
- [x] Локальний сервер
- [x] Prettier

## Початок роботи

1. Створіть папку для проєкту

```bash
mkdir NewProject && cd NewProject
```

2. Клонуйте або завантажте цей репозиторій

```bash
git clone git@github.com:mykulyncom/gulp-boilerplate.git .; rm -rf trunk .git
```

3. Встановіть залежності

```bash
pnpm install
```

## Використання

**Розробка**

Виконайте `pnpm start`, щоб запустити сервер розробки. Це компілюватиме Sass, мініфікуватиме JavaScript, оптимізуватиме зображення та налаштує локальний сервер.

```bash
pnpm start
```

**Компіляція**

Виконайте `pnpm compile`, щоб скомпілювати всі ресурси без запуску сервера розробки.

```bash
pnpm compile
```

**Збірка для продакшену**

Виконайте `pnpm build`, щоб створити готову до випуску збірку вашого проєкту. Це мініфікує всі ресурси та підготує їх до розгортання.

```bash
pnpm build
```

**Додавання компоненту pug**

Виконайте `pnpm pug --add=ComponentName`, щоб створити новий компонент Pug з вказаною назвою.

```bash
pnpm pug --add=ComponentName
```

## Структура проєкту

```
gulp-boilerplate            # Корінний каталог
├── gulp                    # Файли Gulp
│   ├── config              # Файли конфігурації Gulp
│   └── tasks               # Завдання Gulp
├── src                     # Вихідні файли
│   ├── assets              # Ресурси
│   │   ├── fonts           # Шрифти
│   │   ├── icons           # SVG-іконки для спрайту
│   │   ├── img             # Зображення
│   │   ├── js              # Файли JavaScript
│   │   └── scss            # Файли SCSS
│   └── pug                 # Компоненти та міксіни Pug
├── .editorconfig           # Налаштування IDE
├── .eslintrc.json          # Файл конфігурації ESLint
├── .gitignore              # Файли ігнорування Git
├── .prettierrc.json        # Файл конфігурації Prettier
├── .stylelintignore        # Файли ігнорування Stylelint
├── .stylelintrc.json       # Файл конфігурації Stylelint
├── gulpfile.js             # Основний файл для Gulp
├── jsconfig.json           # Файл конфігурації JavaScript
├── LICENSE                 # Ліцензія
├── package.json            # Інформація про проєкт
├── readme-ua.md            # Документація українською
├── readme.md               # Документація
└── pnpm.lock               # Дерево залежностей
```

## Внесок

Внески вітаються! Якщо у вас є пропозиції, поліпшення або виправлення помилок, не соромтеся відкривати проблему або створювати pull-запит.

## Ліцензія

Цей проєкт поширюється під [ліцензією MIT](/LICENSE). Вільно використовуйте, змінюйте та поширюйте цей код для особистих або комерційних проєктів.
