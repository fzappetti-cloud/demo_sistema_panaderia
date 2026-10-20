# Demo · Sistema de ventas para panadería

Demo funcional (un solo archivo HTML, sin instalación) para mostrar cómo sería un sistema de ventas y control a medida para una panadería con dos locales.

## Qué muestra
- **Caja:** formulario de carga con esquema ABM. El empleado elige el producto (por nombre, código o catálogo), escribe el peso (`0,350` o `350 g`) y lo agrega al ticket. Cada línea se puede **modificar** o **eliminar**. Catálogo agrupado por tipo (Panificación, Especialidades, Bebidas, Lácteos, Almacén / varios) con imagen y búsqueda rápida. Cobro con 4 medios de pago, cálculo de vuelto y pedido de factura.
- **Cierre ciego:** el cajero declara lo contado sin ver lo esperado; el sistema compara.
- **Dueño:** ventas por hora y por día, medios de pago, empleados, productos y arqueos.
- **Stock:** descuenta con cada venta, alerta de stock bajo, transferencias entre locales y **ABM de productos** (alta, modificación con foto y precio, baja).
- **Facturación:** lista de ventas a facturar según la regla que defina la contadora.

## Importante
- Todos los datos son **de ejemplo** y se guardan solo en el navegador de quien lo abre.
- Las imágenes de los productos son dibujos provisorios; cada producto admite una foto real desde Stock > Editar.
- Mercado Pago está **simulado** y la emisión en ARCA **no existe todavía**: son etapas futuras.
- No subir a este repo datos reales de clientes, precios ni credenciales.

## Cómo verlo
Abrir `index.html` en el navegador, o activar GitHub Pages (Settings > Pages > rama `main`).

## Tema y vista
- **Tema**: Claro / Oscuro / Automático (sigue al dispositivo). Se recuerda en el navegador.
- **Vista**: Automática (responsive real), o simulación de **Celular** (390 px) y **Tablet** (820 px) para mostrar el diseño adaptable desde una computadora.

## Acceso por credenciales (3 niveles)
| Nivel | Ve y puede | Usuario / clave de ejemplo |
|---|---|---|
| Empleado | Caja y cierre ciego de su local (local fijo) | marta / marta123, lucas / lucas123, sofia / sofia123, diego / diego123 |
| Supervisor | Lo anterior + stock, transferencias y facturación (cualquier local) | supervisor / super123 |
| Admin | Todo: panel del dueño, alta de productos, reinicio de datos | admin / admin123 |

> Es una demo: los usuarios están en el navegador, sin servidor. En producción el acceso va con contraseñas cifradas y validación en el servidor.

## Cotejo de transferencias y QR
- Una venta por transferencia o QR queda **pendiente de acreditación** y aparece en el panel "Esperando acreditación", siempre a la vista junto al ticket.
- El empleado verifica en su billetera de Mercado Pago y toca **Acreditada** (opcionalmente con los últimos 4 dígitos de la operación). Se registra quién y cuándo.
- El cierre ciego avisa si quedan pendientes. El dueño puede cruzar el día contra el reporte de Mercado Pago (en la demo, con un reporte de ejemplo simulado).
- Etapa siguiente: conexión automática con la API de Mercado Pago (requiere servidor y validar el aviso de transferencias al alias).

## Tablero de precios (solo admin)
Cambio de precios por producto o por porcentaje sobre un tipo, con vista previa, historial de cambios y quién los hizo. Las ventas ya hechas conservan su precio.

## Media pantalla
Diseñado para monitores de 19": la Caja se adapta a ~680 px de ancho para trabajar con la billetera de Mercado Pago en la otra mitad. En la demo: Vista > Mitad de pantalla.
