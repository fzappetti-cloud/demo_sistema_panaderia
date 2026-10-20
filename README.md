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
