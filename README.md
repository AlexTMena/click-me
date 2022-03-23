# Click Me App

## Description

-   Click the button and the counter will increment
-   Counter will reset everyday at midnight

## App Setup

-   Clone Project

```
   git clone git@github.com:AlexTMena/click-me.git
```

-   Install packages and dependencies

```
   cd click-me
   composer install
   npm install
```

-   Create Env file

```
cp .env.example .env
```

-   Generate App Key

```
php artisan key:generate
```

-   Setup database by changing values in `.env` file

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```

-   Migrate tables

```
php artisan migrate
```

-   Run Application

```
php artisan serve
```

_Note: App will run on <http://localhost:8000>_

-   To automatically compile changes in resources in development

```
npm run watch
```

## To Run Tests

-   To run test type the following in root directory

```
   composer test
```

## Notable Endpoints

_Note: `api.php` was utilized for api routes_

| Endpoint      | Method |                Body |               Description               |
| ------------- | :----: | ------------------: | :-------------------------------------: |
| `/api/clicks` | `GET`  |                     |   returns number of clicks for today    |
| `/api/clicks` | `POST` | `{ count: integer}` | returns the update resources for clicks |
