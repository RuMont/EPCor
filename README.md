## Instalación

Crear la carpeta donde vayamos a poner el proyecto.

```sh
git clone https://github.com/RuMont/tfg.git .
```

```sh
composer install
```

```sh
npm install
```

```sh
npm run dev
```

```sh
cp .env.example .env
```

```sh
php artisan key:generate
```

En este punto hay que crear la base de datos en el XAMPP, la base de datos se debe de llamar como ponga en el .env; se puede cambiar.

```sh
php artisan migrate
```

```sh
php artisan db:seed
```

```sh
php artisan serve
```
