## Instalación

Creamos la carpeta donde vayamos a poner el proyecto y entramos en ella.

Clonamos el repositorio del proyecto dentro de nuestra carpeta
```sh
git clone https://github.com/RuMont/tfg.git .
```

Instalamos dependencias de composer
```sh
composer install
```

Instalamos dependencias de node.js
```sh
npm install
```

Hacemos un build de los cambios que hay para cachearlos
```sh
npm run dev
```

Instalamos dusk para poder generar el token
```sh
php artisan dusk:install
```

Generamos el token de la api
```sh
composer gen-token
```

En este punto hay que crear la base de datos en el XAMPP, la base de datos se debe de llamar como ponga en el .env; se puede cambiar.

Migramos las tablas
```sh
php artisan migrate
```

Metemos los datos por defecto en las tablas
```sh
php artisan db:seed
```

Lanzamos el servidor
```sh
php artisan serve
```
<hr>

Si queremos tocar tailwind o react debemos poner el siguiente comando
```sh
npm run watch
```