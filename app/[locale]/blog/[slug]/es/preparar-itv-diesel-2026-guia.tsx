import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESPrepararITVDiesel2026() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Que cambia en la ITV diesel en 2026?",
      a: "Los umbrales de opacimetro siguen siendo exigentes: 1,5&nbsp;m-1 para diesel posteriores a 2008 y 2,5&nbsp;m-1 para los mas antiguos. El control visual del FAP es obligatorio: FAP ausente o recortado significa segunda visita automatica. El AdBlue se verifica en Euro&nbsp;6, cualquier fallo SCR se penaliza. En 2026 los controles reforzados sobre los sistemas de descontaminacion toman aun mas importancia.",
    },
    {
      q: "&iquest;Como evitar una segunda visita por opacidad?",
      a: "Haga varias regeneraciones forzadas del FAP dos semanas antes: conduzca 30 minutos por autovia a 3000 rpm minimo, dos veces. Use un aditivo catalizador si hace sobre todo ciudad. Compruebe que su valvula EGR no este bloqueada. Controle las fugas de admision que falsean la mezcla.",
    },
    {
      q: "&iquest;Cuanto cuesta reparar un FAP obstruido?",
      a: "Una limpieza profesional en estacion especializada cuesta entre 200 y 400&nbsp;EUR. Una regeneracion forzada en taller se factura 80 a 150&nbsp;EUR. Un cambio completo de FAP varia entre 1000 y 2500&nbsp;EUR segun el vehiculo. La prevencion cuesta mucho menos que la intervencion curativa.",
    },
    {
      q: "&iquest;Que hacer si el coche es rechazado por AdBlue?",
      a: "Nunca conducir en modo degradado durante mucho tiempo: la centralita acaba bloqueando el arranque. Compruebe primero el sensor NOx (cambio 200 a 450&nbsp;EUR), luego el inyector AdBlue (180 a 350&nbsp;EUR). Un codigo P229F o P2BAD en el OBD2 apunta directamente a la averia. Luego haga un ciclo completo de descontaminacion antes de volver a pasar la ITV.",
    },
    {
      q: "&iquest;Los diesel antiguos siguen pasando la ITV en 2026?",
      a: "Si, pero con menor tolerancia. Los diesel Euro&nbsp;3 y Euro&nbsp;4 son objeto de un control visual de FAP mas estricto. Los Euro&nbsp;2 y anteriores se gestionan con umbrales especificos. En las ZBE el acceso esta restringido, pero la ITV en si sigue siendo accesible mientras el vehiculo respete los umbrales de opacidad y ruido.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Preparar la ITV diesel 2026: guia completa"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Guia practica"
      >
        <p>
          La ITV diesel da miedo. Los umbrales de opacidad son mas estrictos
          que en gasolina, los sistemas de descontaminacion son fragiles y
          una segunda visita por FAP puede costar hasta 2500&nbsp;EUR. Sin
          embargo, con una buena preparacion y algunas verificaciones, la
          gran mayoria de rechazos se pueden evitar. Esta guia le explica
          exactamente que hacer, cuando hacerlo y cuanto cuesta si tiene que
          pasar a la reparacion.
        </p>

        <h2>Los 5 puntos que hacen fallar una ITV diesel</h2>
        <p>
          Estadisticamente, el 60&nbsp;% de las segundas visitas diesel
          conciernen uno de estos cinco puntos: opacimetro demasiado alto,
          FAP recortado o ausente, fallo AdBlue (SCR), fuga de escape o
          sensor de presion diferencial obstruido. Los cuatro primeros son
          penalizadores, el ultimo se detecta a menudo antes de la ITV con
          un simple escaneo OBD2.
        </p>

        <h2>Opacimetro: entender el test</h2>
        <p>
          El tecnico monta un opacimetro en la salida de escape y realiza
          tres aceleraciones libres con motor caliente. El aparato mide la
          absorcion luminosa de los humos. Umbrales 2026: 1,5&nbsp;m-1 para
          diesel Euro&nbsp;5 y Euro&nbsp;6 (post-2011), 2,5&nbsp;m-1 para
          diesel antiguos. Un FAP en buen estado da tipicamente valores
          entre 0,2 y 0,8&nbsp;m-1. Mas alla de 1,2 es un warning serio.
        </p>

        <h2>Preparar el FAP antes de la ITV</h2>
        <p>
          El FAP se regenera en fase activa (pasiva a mas de 60&nbsp;km/h) y
          en fase forzada (post-inyeccion, temperatura 600 grados). Si hace
          sobre todo ciudad, el FAP no se regenera completamente y acaba
          obstruyendose. Dos semanas antes de la ITV, coja la autovia para
          dos trayectos de 30&nbsp;minutos minimo a mas de 2500&nbsp;rpm.
          Esto fuerza varios ciclos de regeneracion y limpia los holines
          acumulados. Para mas detalles, vea{" "}
          <Link href="/es/blog/preparar-itv-2026">
            la guia general ITV 2026
          </Link>
          .
        </p>

        <h2>AdBlue y SCR: la trampa de los Euro&nbsp;6</h2>
        <p>
          Los diesel Euro&nbsp;6 usan AdBlue para reducir los NOx via un
          catalizador SCR. Si el sistema falla, la centralita pasa a modo
          degradado y acaba bloqueando el arranque tras cierto numero de
          reinicios. Causas frecuentes: sensor NOx aguas abajo al final de
          vida (200 a 450&nbsp;EUR), inyector AdBlue sucio (180 a
          350&nbsp;EUR), cristalizacion del deposito en invierno o bomba
          AdBlue fatigada (350 a 600&nbsp;EUR). Un codigo{" "}
          <Link href="/es/codes/p0420">P0420</Link> asociado a P229F, P20EE
          o P2BAD es tipico. Escanee antes de pasar la ITV.
        </p>

        <h2>Fugas de escape: el silenciador en la mira</h2>
        <p>
          Una fuga antes del catalizador o del FAP falsea las medidas y
          degrada la eficacia de descontaminacion. El tecnico inspecciona
          visualmente y prueba con su opacimetro. Fugas frecuentes: colector
          (junta fatigada), flexible tras turbo (fisuras) o silenciador
          trasero (corrosion). Una pequena reparacion por soldadura cuesta
          80 a 150&nbsp;EUR. Un cambio de linea trasera completa 400 a
          900&nbsp;EUR. El Escaneo Sonoro detecta las fugas por su firma
          acustica &mdash; vea{" "}
          <Link href="/es/blog/control-preventivo-sonido-evitar-factura-cascada">
            el control preventivo por el sonido
          </Link>
          .
        </p>

        <h2>Controles visuales adicionales</h2>
        <p>
          Mas alla de la mecanica pura, el tecnico tambien verifica:
          manchas de aceite bajo el motor, estado de manguitos de turbo,
          ausencia de testigos encendidos (motor, ABS, airbag, AdBlue),
          funcionamiento de luces, estado de neumaticos, holguras en
          rotulas y silentblocks. Un prechequeo visual en cinco puntos
          cubre lo esencial en menos de cinco minutos.
        </p>

        <h2>Dos semanas antes: la checklist completa</h2>
        <p>
          Dia J-14: dos trayectos largos de autovia para regenerar el FAP.
          Dia J-10: escaneo OBD2 completo, correccion de codigos. Dia J-7:
          verificacion visual de fugas de escape y manchas de aceite. Dia
          J-5: control de neumaticos, luces, liquido limpiaparabrisas. Dia
          J-3: Escaneo Sonoro para detectar ruidos anormales. Dia J: cita
          confirmada, coche caliente al llegar, deposito AdBlue al menos a
          la mitad.
        </p>

        <h2>ZBE e ITV: dos cosas distintas</h2>
        <p>
          Muchos confunden: la ITV verifica la conformidad tecnica
          (emisiones medidas, sistemas presentes), la ZBE verifica la
          etiqueta ambiental (categoria administrativa ligada a la fecha de
          primera matriculacion). Puede pasar la ITV con un coche etiqueta
          B o C, pero no forzosamente circular en centro ciudad. La ITV no
          cambia su etiqueta.
        </p>

        <h2>Si cae la segunda visita</h2>
        <p>
          Sin panico. La segunda visita se hace en los dos meses y solo
          remide los puntos rechazados. Prioridad: identificar
          precisamente el punto bloqueante gracias al informe, corregir
          rapido y volver a pasar. Para un FAP rechazado, considere una
          limpieza profesional antes que un cambio. Para una fuga de
          escape, una soldadura dirigida suele bastar. Para un problema
          AdBlue, escanee primero. Vea tambien{" "}
          <Link href="/es/codes/p0300">el codigo P0300</Link> que acompana
          a menudo los fallos de combustion diesel.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
