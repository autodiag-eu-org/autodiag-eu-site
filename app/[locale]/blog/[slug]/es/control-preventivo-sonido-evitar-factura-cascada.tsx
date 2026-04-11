import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESControlPreventivoSonido() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cuando hay que escanear antes de la ITV?",
      a: "Idealmente dos semanas antes de la fecha de la ITV. Te deja tiempo para ir al taller, pedir una pieza si hace falta y rehacer el escaneo para verificar la reparacion. Mas tarde, te ves atrapado por el tiempo y obligado a aceptar un presupuesto urgente.",
    },
    {
      q: "&iquest;Que paises cubre este protocolo?",
      a: "Espana (ITV), Francia (CT), Alemania (TUeV), Portugal (IPO), Suiza (MFK), Reino Unido (MOT). Los puntos de control varian, pero las piezas mecanicas fundamentales son identicas y el escaneo sonoro funciona en todas partes.",
    },
    {
      q: "&iquest;Cuanto cuesta una reinspeccion de media?",
      a: "Entre 35 y 90&nbsp;EUR segun pais y centro. A eso se suman 150 a 400&nbsp;EUR de reparacion urgente (tarifas mas altas con 48&nbsp;h para repasar). Un escaneo preventivo a cero euros evita esa doble dosis.",
    },
    {
      q: "&iquest;El escaneo detecta los puntos de rechazo electricos?",
      a: "Indirectamente. Un alumbrado fallido no tiene firma audio, pero una bomba de asistencia al frenado agonizando o un motor de ventilador forzando si. Es complementario a un control visual rapido.",
    },
    {
      q: "&iquest;Que hacer si el escaneo detecta un problema a ultima hora?",
      a: "Llama a un mecanico de confianza con los resultados del escaneo. Puede priorizar tu vehiculo si sabe exactamente que pieza mirar. Sin escaneo empieza con un diagnostico a ciegas que tarda mas y cuesta mas.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Control preventivo sonoro: evitar la factura en cascada antes de la ITV"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Prevencion"
      >
        <p>
          La ITV se vive a menudo como una loteria. Llegas al centro,
          cruzas los dedos, esperas pasar. Si te rechazan, pagas doble: la
          reinspeccion y una reparacion urgente mas cara que si hubieses
          tenido tiempo de comparar. Pero con un escaneo sonoro bien hecho
          dos semanas antes, la practica totalidad de las malas sorpresas
          desaparece. Aqui el metodo completo.
        </p>

        <h2>&iquest;Por que dos semanas antes?</h2>
        <p>
          Dos semanas es el plazo optimo por tres razones. Primero, bastante
          pronto para dejarte pedir presupuesto a dos o tres talleres sin
          urgencia. Segundo, bastante tarde para que el escaneo sea
          representativo del estado el dia de la ITV. Tercero, deja tiempo
          para pedir una pieza original o aftermarket de calidad, en vez de
          aceptar la primera disponible.
        </p>

        <h2>La lista de escaneos antes de la ITV</h2>
        <p>
          Aqui las cinco grabaciones que recomiendo, todas en condiciones
          reales porque los ruidos de fatiga no salen al ralenti.
        </p>
        <p>
          Primer escaneo: treinta segundos en marcha a 80&nbsp;km/h en
          llano. Objetivo: rodamientos, neumaticos en dientes de sierra,
          silbidos aerodinamicos. Segundo escaneo: treinta segundos en una
          carretera con baches entre 40 y 60&nbsp;km/h. Objetivo:
          suspensiones, silentblocks, bieletas. Tercer escaneo: diez
          segundos de maniobras en parking con volante a tope. Objetivo:
          juntas homocineticas, rotulas de direccion, bomba hidraulica de
          asistencia. Cuarto escaneo: tres frenadas suaves sucesivas entre
          60 y 30&nbsp;km/h. Objetivo: pastillas, discos, pinzas que se
          pegan. Quinto escaneo: subida de regimen de 1000 a
          4000&nbsp;rpm parado. Objetivo: motor, correas, distribucion,
          turbo.
        </p>

        <h2>Leer los resultados inteligentemente</h2>
        <p>
          El SVM habitaculo da un porcentaje de confianza por cada una de
          las 7 clases. Asi interpretarlo concretamente. Bajo 30&nbsp;%,
          ignorar: ruido de fondo. Entre 30 y 55&nbsp;%, vigilar: rehacer
          un escaneo una semana despues. Entre 55 y 75&nbsp;%, verificar:
          pedir al mecanico que mire ese punto concreto. Por encima de
          75&nbsp;%, actuar ya: la pieza esta probablemente ya con defecto
          significativo.
        </p>

        <h2>El calculo economico del escaneo preventivo</h2>
        <p>
          Hagamos cuentas. Un escaneo preventivo cuesta cero euros con la
          app AutoDiag EU. Una reinspeccion en Espana cuesta 45&nbsp;EUR.
          Una reparacion urgente se factura de media un 20 a 30&nbsp;%
          mas cara que una planificada. Si evitas una reinspeccion y
          haces tu reparacion tranquilo, ahorras entre 100 y 150&nbsp;EUR
          por ciclo ITV. A lo largo de la vida de un coche (diez ITVs de
          media), son 1000 a 1500&nbsp;EUR no gastados. Solo en
          prevencion.
        </p>

        <h2>Los paises y sus especificidades</h2>
        <p>
          En Espana la ITV controla suspension, frenado, direccion,
          emisiones. En Alemania el TUeV es mas estricto con la corrosion
          y el chasis. En Reino Unido el MOT vigila especialmente emisiones
          e iluminacion. En Portugal la IPO sigue las normas europeas con
          foco en emisiones. El escaneo sonoro es util en los cinco casos
          porque las piezas mecanicas son universales.
        </p>

        <h2>El caso concreto de un escaneo que salvo una ITV</h2>
        <p>
          Un ejemplo tipico. Un usuario beta escanea diez dias antes de la
          ITV. Clase &laquo;direccion&raquo; al 68&nbsp;%. Consulta a su
          mecanico habitual, que confirma una rotula de direccion con
          holgura. Reparacion: 130&nbsp;EUR, pieza pedida e instalada al
          dia siguiente. El dia de la ITV, todo pasa, cero puntos. Sin el
          escaneo, dos escenarios posibles: o la ITV detecta la rotula y
          sale en urgencia para reparar en la semana (factura 180&nbsp;EUR
          mas reinspeccion 45&nbsp;EUR), o la ITV no la detecta y la
          rotula parte tres meses despues en una rotonda (accidente
          evitado por poco, franquicia y reparacion completa del tren
          delantero, 1500&nbsp;EUR y mas).
        </p>

        <h2>Para profundizar</h2>
        <p>
          Esta estrategia de prevencion tambien se detalla en nuestro
          articulo{" "}
          <Link href="/es/blog/desgaste-invisible-pieza-cansada-dana-otra">
            sobre el desgaste invisible y el efecto cascada
          </Link>
          . Para el detalle de los ruidos objetivo, ve{" "}
          <Link href="/es/blog/7-ruidos-habitaculo-nunca-ignorar">
            los 7 ruidos que nunca hay que ignorar
          </Link>
          . Y si un codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link>{" "}
          aparece durante tu preparacion, trata con prioridad los fallos de
          encendido.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
