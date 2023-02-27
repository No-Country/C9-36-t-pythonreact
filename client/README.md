# No-Country C9-36-t-pythonreact

Configuracion creada por Cristian
{ \**update
*Actualmente trabajando en el login/register con validaciones desde el front
\*Instalado router v6 y configuradas las primeras rutas de navegacion
Instaladas las siguientes dependencias, -> react-router-dom, formik, yup, react-icons

\*\*update 9/02
Creada la configuracion base para login en firebase
Creada la configuracion base para register en firebase
Creada la configuracion para el contexto de usario

\*\*update 11/02
Configurado el login/register email contraseña y login/register con google
Configurada la ruta protegida del dashboard, solamente puede acceder un usario logueado
Configurado el forget-pasword para resetar la contraseña con email
Configurado el login usando Facebook

\*\*Update 12/02
Trabajando en la base de datos con Firestore
Configuraciones

- Si el usuario esta logueado pero no registrado se lo redirige a RegisterUser
- Si el usuario esta logueado y registrado se lo redirige a Dashboard

\*\* Update 14/2
Se instalo prettier prettier-plugin-tailwindcss para mantener ordernadas las clases de tailwind
Se configuro el AuthProvider para diferenciar de un usuario logueado a uno no registrado
Se crearon las configuraciones de perfil en el componente RegisterProfile para poder empezar a cargar datos de un usuario nuevo
Se creo la opcion para que el usuario pueda subir su foto de perfil
Se creo el formulario registerNewUser para que el usuario pueda cargar todos sus datos (faltan las validaciones )
Se creo el la vista de usuario y se maqueto segun el figma

\*\* Update 15/2 Se corrigieron errores del firebase
Se termino de configurar el profileView para ver la vista de usuario completa
Estado actual: El usuario puede loguearse en la app / registrarse, con mail y contraseña, facebook, o google, completar todos los datos de su perfil, cargar su foto y puede visualizar su perfil completo

\*\* Update 16/02 Se trabajo en la factorizacion de componentes y funciones.
Se comenzo a maquetar la carga del perfil segun el figma, estado actual, falta terminar

\*\* Update 20/02
Se trabajo en la carga de perfil segun el figma,
El usuario puede cargar sus datos y quedan guardados en la base de datos
\*\* Update 21/02
Se trabajo en el componente modalTecnologias el usuario puede elegir entre 3 tecnologias distintas que quedaran guardas en la base de datos y se podran filtrar en la vista de perfiles publicos
\*\* Update 22/02
Se termino de maquetar el componente profileregister por figma en la version mobile
\*\* Update 23/02
Se trabajo en el componente dashboard, se pueden ver los perfiles de los usuarios registrados y filtrar por categorias, frontend, backend, uxui designer.
Se trabajo en la vista de perfil de usuario y se puede ver la imagen de perfil en miñatura.
Junto a la imagen en miñatura se puede ver el nombre de usuario

\*\* Update 24/02
Se trabajo en el componente registernewprofile en la version desktop, se maqueto todo el componente de nuevo segun el figa

\*\* Update 25/02
Se comenzo con la optimizacion del codigo, factorizacion y componetiacion de componentes para mejorar la legibilidad del codigo

\*\* Update 26/02
Se creo la ruta de error 404 y su respectivo componente
Se agrego el boton return home al componente error 404
Se creo el componente Loading para mostrar un spinner mientras se carga la informacion

\*\* Update 27/02
Se trabajo en la vista de perfil de usuario, se maqueto segun el figma, se crearon iconos dinamicos de contacto,
Si el usuario cargo sus datos de contacto son botones que te linkean, si no son imagenes simples que no linkean
Se realizo la configuracion de rutas Landing > Home > Login/Register
Se maqueto segun el figma el componente Login Desktop
Se maqueto segun el figma el componente Register Desktop
Se maqueto segun el figma el componente RegisterEmail Desktop
}
