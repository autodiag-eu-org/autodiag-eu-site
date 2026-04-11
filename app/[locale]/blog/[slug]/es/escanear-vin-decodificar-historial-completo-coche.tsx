import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESEscanearVIN() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Que es un VIN y donde encontrarlo?",
      a: "El VIN (Vehicle Identification Number) es un numero unico de 17 caracteres grabado en cada vehiculo desde 1981. Se encuentra grabado en la parte baja del parabrisas lado conductor, en el marco de la puerta del conductor, bajo el capo en una placa del fabricante y en el permiso de circulacion. La Vision IA lee directamente los 17 caracteres fotografiando la placa o la gravura.",
    },
    {
      q: "&iquest;Que contiene exactamente el VIN?",
      a: "El VIN se descompone en tres secciones: WMI (3 caracteres, identifica al fabricante y el pais), VDS (6 caracteres, describe el modelo, carroceria y motorizacion), VIS (8 caracteres, incluye ano modelo, fabrica de montaje y numero de serie). Cada caracter tiene un significado preciso y no puede inventarse.",
    },
    {
      q: "&iquest;Un escaneo VIN da el historial completo del vehiculo?",
      a: "Da acceso al historial agregado por las bases europeas: declaraciones de accidentes, kilometrajes sucesivos en ITV, mantenimientos declarados en concesionarios, llamadas a revision. La profundidad depende del pais de origen y de la cooperacion de los servicios oficiales. Es incomparable con un simple escaneo de matricula.",
    },
    {
      q: "&iquest;Por que el VIN es mas fiable que la matricula para comprar?",
      a: "Porque la matricula puede reemplazarse, cambiarse, falsificarse. El VIN esta grabado en el metal, acompana al vehiculo toda su vida. Un vehiculo cuyo VIN no coincide con el permiso probablemente es robado o manipulado. Es el numero de seguridad del coche.",
    },
    {
      q: "&iquest;Hay riesgos de confidencialidad al escanear un VIN?",
      a: "Para tu propio vehiculo, ninguno. Para un vehiculo que quieres comprar, estas en tu derecho de consultar su historial &mdash; el vendedor esta incluso obligado a comunicar ciertas informaciones en Europa. AutoDiag&nbsp;EU no almacena los VIN escaneados en un perfil vinculado a tu identidad.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Escanear el VIN: decodificar el historial completo de un coche"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Compra de ocasion"
      >
        <p>
          Diecisiete caracteres. Es todo lo que hace falta para conocer
          toda la historia de un coche. El VIN (Vehicle Identification
          Number) es el verdadero ADN del vehiculo: codifica fabricante,
          fabrica, ano modelo, tipo de motor, carroceria, y cada
          ejemplar recibe un numero de serie unico. Escanear ese VIN con
          tu movil es abrir un expediente completo en dos segundos
          &mdash; y evitar, en caso de compra de ocasion, miles de euros
          de mala sorpresa.
        </p>

        <h2>La anatomia de los 17 caracteres</h2>
        <p>
          El VIN esta estandarizado mundialmente desde 1981. Los tres
          primeros caracteres forman el WMI (World Manufacturer
          Identifier): designan pais y fabricante. WDB para
          Mercedes-Benz en Alemania, VF1 para Renault en Francia, WVW
          para Volkswagen en Alemania. Los seis siguientes forman el VDS
          (Vehicle Descriptor Section): codifican modelo, carroceria,
          motorizacion y a veces el sistema de retencion. Los ocho
          ultimos forman el VIS (Vehicle Identifier Section): el decimo
          caracter es el ano modelo (A&nbsp;= 2010, B&nbsp;= 2011, etc.,
          saltando I, O, Q, U, Z), el undecimo es la fabrica de montaje,
          los seis ultimos el numero de serie unico.
        </p>

        <h2>Lo que capta el OCR Vision IA</h2>
        <p>
          El VIN esta grabado o colocado en varios puntos del coche. El
          mas accesible es la parte baja del parabrisas lado conductor,
          visible desde fuera a traves del cristal. La gravura es
          pequena, reflectante, a veces tapada por suciedad. La Vision
          IA gestiona estas condiciones: iguala la exposicion, elimina
          reflejos y lee los 17 caracteres con tolerancia a las
          confusiones clasicas (cero contra O, uno contra I). Tambien
          puede leer el VIN en la placa del fabricante bajo el capo, o
          incluso en una foto del permiso de circulacion.
        </p>

        <h2>La compra de ocasion que cambia de naturaleza</h2>
        <p>
          Escenario tipico: respondes a un anuncio de un Audi A4 Avant
          2.0 TDI de 2016, 145&nbsp;000&nbsp;km anunciados. El vendedor
          tiene facturas de mantenimiento, el coche parece limpio, todo
          parece bien. Escaneas el VIN con tu movil. La respuesta llega
          en tres segundos: el ano modelo es 2016, pero el kilometraje
          medio registrado en la ultima ITV (hace 14&nbsp;meses) era
          168&nbsp;000&nbsp;km. Conclusion: el cuentakilometros se
          rebobino 23&nbsp;000&nbsp;km. Te vas. Este fraude es el mas
          comun del mercado de segunda mano y la Vision IA lo detecta en
          tres segundos.
        </p>

        <h2>Las llamadas a revision olvidadas</h2>
        <p>
          Cada fabricante emite regularmente campanas de llamada a
          revision por defectos identificados tras la comercializacion.
          Airbag Takata, valvula EGR, bomba de alta presion, modulo ABS,
          inyectores &mdash; la lista es larga. El propietario deberia
          recibir una carta, pero con cambios de direccion, ventas
          sucesivas y cartas perdidas, muchos vehiculos ruedan con
          defectos sin corregir. El escaneo VIN consulta las bases del
          fabricante y te muestra la lista de llamadas aplicables a ese
          vehiculo preciso, con su estado. Si una esta abierta, puedes
          exigir su gestion gratuita en un concesionario antes de la
          compra.
        </p>

        <h2>El pedido de piezas sin error</h2>
        <p>
          Otro uso, menos espectacular pero muy practico: el pedido de
          piezas. Cuando pides una pastilla de freno para un SEAT Leon,
          hay a menudo tres o cuatro referencias distintas segun el tipo
          de frenos (diametro de disco), nivel de acabado, ano de
          produccion exacto. El VIN transmite esa info precisa al
          vendedor que encuentra la buena referencia a la primera. Se
          acabaron las idas y venidas al proveedor, los errores a
          30&nbsp;EUR de gastos de devolucion. Para el mantenimiento
          regular, lee tambien el articulo sobre el{" "}
          <Link href="/es/blog/prevenir-rotura-motor-diagnostico-sonoro-preventivo">
            diagnostico preventivo
          </Link>
          .
        </p>

        <h2>El seguro y los presupuestos</h2>
        <p>
          Cuando pides un presupuesto de seguro, las companias a veces
          piden solo la matricula, a veces el VIN completo. Los
          presupuestos basados en VIN son mas precisos porque tienen en
          cuenta el modelo exacto, el nivel de equipamiento y las
          eventuales modificaciones declaradas. Un escaneo VIN antes de
          hacer jugar la competencia puede variar el presupuesto entre
          10 y 25&nbsp;% en un sentido u otro. Para un presupuesto
          anual tipico de 600 a 1200&nbsp;EUR, son 60 a 300&nbsp;EUR
          anuales potencialmente ahorrados.
        </p>

        <h2>Los limites y la confidencialidad</h2>
        <p>
          El escaneo VIN no da todo. Los accidentes no declarados no
          aparecen en las bases. Las intervenciones en talleres
          independientes no siempre se registran. La profundidad del
          historial depende del pais: Espana, Francia, Alemania y
          Belgica tienen bases ITV solidas, otros paises son mas
          lagunosos. En cuanto a privacidad, AutoDiag&nbsp;EU no asocia
          el VIN escaneado a tu cuenta personal, y las consultas se
          purgan a los siete dias. Consultas, decides, olvidas. Para
          complementar con una verificacion electronica, pasa por un
          escaneo OBD2 que revela los codigos en memoria como el{" "}
          <Link href="/es/codes/p0011">P0011</Link> a menudo ligado a
          un mantenimiento descuidado de la distribucion.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
