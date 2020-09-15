# npm-concepts && random-dev-excuses

Este proyecto lo hice a modo de aprender como es el proceso para publicar en npm. Incluye una pequeña app que via bash nos devuelve las excusas mas comunes utilizadas por los desarrolladores.

Necesitas una excusa? , simplemente toma tu consola y tipea _random-dev-excuses_

# Instalacion

```npm
npm install -g random-dev-excuses
```

# Uso

```bash
random-dev-excuses
```

# Teoria

## Que es npm? ( Node Package Manager )

Es un gesto de paquetes el mas popular que tiene JS donde encontraremos una gran cantidad de recursos para implementar en nuestros proyectos. Tambien vamos a poder generar nuestros propios paquetes y compartilos con la comunidad.

<https://www.npmjs.com/>

## Cuento con npm en mi maquina?

Para saber esto corremos los siguientes comandos

```
npm -v
```

```
 node -v
```

## Como actualizo npm?

```
sudo npm install npm@latest -g
```

## Como inicializo/configuro un proyecto?

```
 npm init
```

Esto nos generara un archivo package.json el cual vamos a tener una configuracion establecida, descripcion del proyecto y demas valores.

### Configuracion Rapida ( yes to all)

```
 npm init -y
```

### Configuraciones Globales

```
 npm set init.author.email "murgosilvana@gmail.com"
```

```
 npm set init.author.name "silnose"
```

```
npm set init.license "MIT"
```

---

## Dependencias

### **Tipos**

Recursos que vamos a utilizar dentro de nuestros proyectos. Todos van a coexisitir en /node_modules

- **_Desarrollo_** (devDependencies)

_Dependencias requeridas por el desarrollador pero no necesarias para el funcionamiento de la aplicacion_

```
npm install date-fns --save-dev
```

```
 npm i date-fns -D
```

- **_Produccion_** (dependencies)

_Dependencias requeridas para el correcto funcionamiento del la app_

```
 npm install moment
```

```
 npm install moment --save
```

```
 npm i moment -S
```

- **_Global_**

Dependencias globales utilizadas

```
 sudo npm install -g nodemon
```

###### Como saber que paquetes tengo instalados globalmente?

```
 npm list -g --depth 0
```

- **_Opcional_** (optionalDependencies)

_Dependencias opcionales como bien dice su nombre, si fallan npm no nos indicara error_

```
npm install chalk --save-optional
```

```
 npm i chalk -O
```

### **Instalacion**

- **_Simulacion_** (amague de instalar dependencias)

_Dependencias que emularan ser instaladas pero no!, solo queremos ver el output de la instalacion_

```
 npm install react --dry-run
```

- **_Forzado_**

_Instalar la ultima version desde los servidores de npm_

```
 npm install webpack -f
```

- **_Versiones_**

_Instalar una version espesifica_

> npm install json-server@0.15.0
> npm i json-server@0.15.0

### **Actualizacion**

- **_Que depedencias tengo desactualizadas?_**

```
 npm outdate -dd
```

- **_Como actualizo las dependencias de mi proyecto?_**

```
npm update //segun la version
```

```
npm install json-server@latest // actualizar a la ultima ultima!
```

### **Eliminar**

```
npm uninstall json-server // elimandolo tb del archivo package.json
```

```
npm uninstall json-server --no-save // eliminarlo pero conservarlo en package.json
```

---

## Package.lock

- **_Versionado_**

![](https://static.platzi.com/media/user_upload/wheelbarrel-no-tilde-caret-white-bg-w1000-72ca1a72-4c7f-4abe-8482-425c01a72f89.jpg)

- "^" : Actualizaciones "minor" y "patch"
- "~" : Actualizaciones patch
- "<" : Versión menor a la indicada.
- "<=" : Versión menor o igual a la indicada.
- ">" : Versión mayor a la indicada.
- ">=" : Versión mayor o igual a la indicada.
- " " : Version exacta

A partir de la version 5 de npm nos encontramos con el archivo **package-lock.json** que nos da una "foto/imagen" de las configuraciones de nuestro proyecto que versiones tenemos que dependencias etc...

---

## Scrips

Comandos que podemos establecer para ejecutar desde la consola

---

## Issues

- Ver mas detalle del error:

```
--dd // verbose
```

- Limpiar la cache

```
npm cache clean --force
```

```
npm cache verify
```

- Reinstalar dependencias

```
rm -rf node_modules
```

```
npm install
```

O tambien podemos usar una dependencia

```
sudo npm install -g rimraf
```

```
rimraf node_modules
```

```
npm install
```

---

## Seguridad / Auditoria

Debemos revisar y validar que nuestra aplicacion se encuentra sin potenciales vulnerabilidades y esto npm nos los permite validar

```
npm audit
```

```
npm update <pak> --depth n
```

OR ( automatico)

```
npm audit fix
```

---

## Publicar en NPM

1- Emular proyecto global de forma local y testeamos

```
sudo npm link
```

OR

```
sudo npm install <project_path>
```

2- Nos logueamos en npm

```
npm adduser
```

```
npm adduser
```

```
npm publish
```

---

## Actualizar en NPM

```
npm version patch/minor/major
```

---

## Tools

- Visual studio extensions

Name: npm
Id: eg2.vscode-npm-script
Description: This extension supports running npm scripts defined in the package.json file and validating the installed modules against the dependencies defined in the package.json.
Version: 0.3.13
Publisher: egamma
VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script>

- Seguridad

https://snyk.io/ find and fix vulnerabilities in open source libraries and containers.

```

```
