import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESGolpeteoDireccion() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Un golpeteo de direccion es peligroso?",
      a: "Si, potencialmente. Una rotula que cede en movimiento libera la rueda de su eje de giro y vuelve incontrolable el vehiculo. Es uno de los pocos fallos que pueden provocar un accidente inmediato sin previo aviso.",
    },
    {
      q: "&iquest;Como distinguir junta homocinetica, rotula y cremallera de oido?",
      a: "Junta homocinetica: clic-clic-clic rapido al girar a tope a baja velocidad (aparcamiento). Rotula: &laquo;toc&raquo; seco al pasar un bache o al frenar. Cremalleta: golpeteo mate en el volante en linea recta sobre carretera bacheada. Las tres tienen firmas espectrales bien diferenciadas que la IA aisla con 138 caracteristicas.",
    },
    {
      q: "&iquest;Puedo conducir unos dias con una rotula que golpea?",
      a: "Hay que evitarlo. Una rotula anunciadora puede durar dos meses o ceder manana, no hay modo fiable de saberlo. La reparacion cuesta 90 a 180 euros, el accidente potencial cuesta infinitamente mas.",
    },
    {
      q: "&iquest;Se puede reparar una cremallera o hay que sustituirla?",
      a: "En la mayoria de modelos europeos modernos es un intercambio estandar. Solo algunos vehiculos de coleccion o industriales conservan cremalleras desmontables. Presupuesto tipico: 600 a 1200 euros montada.",
    },
    {
      q: "&iquest;Funciona el Escaneo Sonoro girando el volante parado?",
      a: "Si para detectar juntas homocineticas, menos para rotulas que necesitan carga dinamica. El mejor protocolo es un escaneo mixto: diez segundos parado girando el volante a tope, luego treinta segundos rodando en carretera variada.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Golpeteo en la direccion: &iquest;rotula, cremallera o junta homocinetica?"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Seguridad"
      >
        <p>
          De todos los ruidos que un coche puede producir, los que vienen
          de la direccion son los que me tomo mas en serio. No porque
          sean los mas frecuentes, sino porque anuncian piezas que, al
          ceder, hacen incontrolable el vehiculo. Veamos como identificar
          con precision la fuente gracias al Escaneo Sonoro y a un poco
          de oido guiado.
        </p>

        <h2>La junta homocinetica de transmision</h2>
        <p>
          Si oye un &laquo;clic-clic-clic&raquo; rapido al girar a tope
          maniobrando en un aparcamiento, es un guardapolvo de palier
          roto. La grasa se ha escapado, el agua y el polvo han entrado,
          las bolas del tripode se desgastan y crean ese ruido de
          carraca. Al principio no molesta: la transmision aguanta miles
          de kilometros. Al cabo de un tiempo, las bolas se desintegran y
          la transmision rompe en seco. Coste de un guardapolvo solo: 80
          euros montado. Coste de una transmision completa: 450 a 900
          euros segun el vehiculo.
        </p>

        <h2>La rotula de direccion</h2>
        <p>
          La rotula es la pieza que une la cremallera a la mangueta de la
          rueda. Su juego se manifiesta por un &laquo;toc&raquo; seco y
          corto, generalmente al pasar un empalme de calzada o al soltar
          un bache. Particularidad: el ruido tambien se siente en el
          volante, como un pequeno tope que pasa. La firma espectral es
          un impulso muy corto, de banda ancha, con un pico hacia
          600-1200 Hz. El SVM de habitaculo la reconoce como clase
          &laquo;direccion&raquo; con confianza tipicamente alta cuando
          la pieza esta realmente gastada.
        </p>

        <h2>La cremallera que toma juego</h2>
        <p>
          Mas sutil, la cremallera desgasta su engranaje interno.
          Sintomas: ligera vibracion en el volante a 80-90 km/h en
          carretera bacheada, golpeteo mate al girar de golpe, y a veces
          un pequeno juego perceptible al mover el volante de derecha a
          izquierda con el motor apagado. La cremallera toma su juego
          progresivamente a lo largo de decenas de miles de kilometros, y
          es exactamente la situacion en la que la adaptacion auditiva
          del conductor hace mas dano: no se da cuenta hasta que el juego
          se vuelve enorme.
        </p>

        <h2>El efecto cascada del sistema de direccion</h2>
        <p>
          Una junta homocinetica gastada acaba rompiendose: el coche no
          rueda, grua 150 euros, transmision 700 euros, mas
          eventualmente un silemblock de caja deformado por el impacto,
          sume 200 euros. Una rotula desgastada fuerza a la cremallera a
          compensar el juego, lo que desgasta mas rapido su pinon: seis
          meses de rotula golpeando pueden transformar una reparacion
          de 120 euros en factura de 900. Y una cremallera con juego
          fatiga a las rotulas a su vez &mdash; el feedback mecanico gira
          en bucle hasta que todo hay que cambiarlo al mismo tiempo.
        </p>

        <h2>El protocolo de escaneo de direccion</h2>
        <p>
          Para un escaneo eficaz recomiendo una secuencia en tres
          tiempos. Primero tres rotaciones de volante a tope parado, con
          motor en marcha: detecta juntas homocineticas y cazoletas de
          amortiguador. Luego treinta segundos rodando a baja velocidad
          en carretera ligeramente bacheada con dos o tres maniobras de
          aparcamiento: detecta las rotulas. Finalmente treinta segundos
          en linea recta a 90 km/h en carretera variada: detecta la
          cremallera y los rodamientos de columna. Una sola grabacion
          continua basta.
        </p>

        <h2>SVM y escucha objetiva</h2>
        <p>
          El modelo SVM de 7 clases, muestreado a 16 kHz, es capaz de
          separar las tres fuentes en el 75&nbsp;% de los casos. Cuando
          la confianza &laquo;direccion&raquo; sale al 70&nbsp;% o mas,
          hay que actuar. Cuando esta al 30-50&nbsp;%, vigilar en el
          siguiente escaneo. Lo mas util sigue siendo la comparacion
          longitudinal: si la confianza sube de un mes a otro, es la
          senal de alarma objetiva que su oido, habituado al ruido, no
          le dara jamas.
        </p>

        <h2>Para ir mas lejos</h2>
        <p>
          Lea tambien nuestro articulo sobre el{" "}
          <Link href="/es/blog/bruit-suspension-ia-identifie-amortisseur">
            ruido de suspension
          </Link>{" "}
          (a menudo confundido con la direccion) y sobre el{" "}
          <Link href="/es/blog/bruit-roulement-roue-detecter-usure-avant-ct">
            rodamiento de rueda
          </Link>{" "}
          (que puede imitar una rotula). Para un problema electrico de
          direccion asistida, un codigo{" "}
          <Link href="/es/codes/p0171">P0171</Link>{" "}
          junto con una bomba hidraulica ruidosa puede orientar hacia
          una entrada de aire motor que falsea el ralenti.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
