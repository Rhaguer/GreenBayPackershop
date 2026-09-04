# Green & Gold Field Shop

Tienda demo independiente inspirada en la jerarquía de una tienda deportiva: aviso promocional, navegación por categorías, hero, catálogo, oferta, búsqueda, filtros, favoritos, bolsa interactiva y checkout simulado.

Incluye marcas de Green Bay Packers a solicitud del responsable del proyecto, quien confirmó contar con autorización de uso. Antes de cualquier publicación comercial, valida y conserva la autorización aplicable. Para verla localmente, abre `index.html` en un navegador.

## Acceso local de demostración

Al abrir la tienda se crea en ese navegador una cuenta local de administrador: `admin@packers.local`. La contraseña inicial es `GoPackers!2026`. Las credenciales se almacenan sólo en el `localStorage` del navegador, con hash de contraseña, y no son una solución de autenticación para producción.

## Android APK demo

El proyecto incluye un contenedor Capacitor para Android. Genera una APK de depuración instalable con `npm install` y `npm run android:apk`. El resultado queda en `android/app/build/outputs/apk/debug/app-debug.apk`.

La APK usa el mismo catálogo y almacenamiento local del prototipo. Está firmada con la clave de depuración de Android para instalarla y probarla; para Google Play se requiere crear y resguardar una clave de firma de producción propia.
