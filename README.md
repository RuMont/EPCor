## Instalación

Creamos la carpeta donde vayamos a poner el proyecto y entramos en ella.

Clonamos el repositorio del proyecto dentro de nuestra carpeta
```sh
git clone https://github.com/RuMont/tfg.git .
```

Instalamos el vendor
```sh
composer set
```

Instalamos node-modules
```sh
npm run set
```

En este punto hay que crear la base de datos en MySQL/XAMPP, la base de datos se debe de llamar como ponga en el .env; se puede cambiar.

Activamos la base de datos
```sh
composer db-up
```

Lanzamos el servidor
```sh
composer serve
```

Si queremos tocar tailwind o react debemos poner el siguiente comando en una consola aparte
```sh
npm run watch
```