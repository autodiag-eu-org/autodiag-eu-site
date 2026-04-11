import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESRuidoSuspension() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como saber si es el amortiguador o el silemblock?",
      a: "El amortiguador da un ruido mate, grave, con rebote residual tras el bache. El silemblock da un chasquido seco y corto, sin rebote. El Escaneo Sonoro separa estas dos firmas gracias al analisis de la envolvente temporal sobre 138 caracteristicas.",
    },
    {
      q: "&iquest;Es fiable la prueba manual de rebote?",
      a: "Parcialmente. Detecta los amortiguadores totalmente muertos pero falla en el 50-70&nbsp;% de desgaste, que es sin embargo la causa principal de perdida de agarre en carretera mojada. El analisis sonoro rodando es notablemente mas sensible.",
    },
    {
      q: "&iquest;Pueden unos amortiguadores gastados provocar desgaste del neumatico?",
      a: "Si, y es incluso la primera etapa del efecto cascada. Un amortiguador fatigado deja rebotar la rueda, el neumatico se desgasta en sierra (cupping), y la adherencia se desploma. El mismo neumatico gastado acaba desalineando la geometria, que arruina la cremallera.",
    },
    {
      q: "&iquest;Cuando hay que sustituir los amortiguadores por pares?",
      a: "Siempre por eje. Cambiar un solo lado crea un desequilibrio de amortiguacion que inclina el vehiculo al frenar. El presupuesto real de un amortiguador pasa asi de 180 euros unitario a 350-450 euros por eje.",
    },
    {
      q: "&iquest;Cuantos kilometros dura un amortiguador moderno?",
      a: "Entre 80&nbsp;000 y 150&nbsp;000 km segun el tipo de carretera y el peso del vehiculo. Un familiar cargado desgasta sus amortiguadores traseros mucho mas rapido que una berlina en solitario. Un escaneo anual basta para detectar el inicio de fatiga.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Ruido de suspension: como la IA identifica el amortiguador fatigado"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          El amortiguador es uno de los elementos mas enganosos de su
          coche. Se desgasta tan progresivamente que no se siente nada.
          Un dia conduce un coche que se pega a la carretera como un
          carril, un ano despues una pieza que rebota como un colchon
          &mdash; y juraria que nada ha cambiado. El Escaneo Sonoro, en
          cambio, ve la inflexion desde el primer escaneo comparado al
          anterior.
        </p>

        <h2>Por que el oido no basta</h2>
        <p>
          Un amortiguador sano aplasta un bache en un solo movimiento.
          Un amortiguador al 60&nbsp;% de desgaste deja pasar un rebote
          residual de unos pocos milimetros de amplitud &mdash;
          imperceptible al oido, pero que se traduce en una perdida de
          apoyo medible en carretera mojada. El analisis espectral del
          audio de habitaculo captura este rebote residual como una
          firma caracteristica alrededor de 8-15 Hz combinada con un
          transitorio a 200-400 Hz (el tope que rebota en su
          alojamiento).
        </p>

        <h2>Las tres familias de ruido de suspension</h2>
        <p>
          Primera familia: el chasquido seco en bache. Silemblock
          fatigado, bieleta de barra estabilizadora con juego, o
          cazoleta de amortiguador flambeada. Firma: impulso corto, de
          banda ancha, sin cola.
        </p>
        <p>
          Segunda familia: el &laquo;floc&raquo; de rebote. Amortiguador
          que pierde aceite, o valvula interna gastada. Firma: impulso
          seguido de una resonancia de baja frecuencia que dura 150 a
          300 milisegundos. Es exactamente lo que el SVM detecta mejor.
        </p>
        <p>
          Tercera familia: el chirrido en curva. Cazoleta superior de
          amortiguador con rodamiento agarrotado, o muelle que roza su
          espira superior contra su cazoleta. Firma: ruido continuo
          modulado por el angulo de giro.
        </p>

        <h2>Protocolo de escaneo rodando</h2>
        <p>
          Para un diagnostico fiable, busque una carretera con algunas
          juntas de calzada o badenes, ruede entre 30 y 60 km/h, y
          grabe treinta segundos. La IA analiza cada ventana audio
          independientemente, lo que le permite localizar los ruidos
          respecto a los impactos. Un chasquido que llega
          sistematicamente tras un bache es sospechoso.
        </p>

        <h2>El efecto cascada neumatico-geometria-cremallera</h2>
        <p>
          Esta es la secuencia que veo mas a menudo en taller. Un
          amortiguador fatigado desde hace dieciocho meses. El conductor
          no se da cuenta. Los neumaticos empiezan a marcar un cupping
          irregular. Al cabo de un ano mas, uno de los neumaticos
          delanteros hay que cambiarlo cuando le quedan 20&nbsp;000 km
          menos de lo previsto &mdash; primer sobrecoste: 180 euros. La
          geometria esta entonces falseada por el angulo de caida
          dinamico modificado por el rebote. La cremallera toma juego
          en seis meses: 800 euros suplementarios. Total final:
          1&nbsp;380 euros en vez de los 350 euros de amortiguadores de
          origen. El Escaneo Sonoro corta esta cascada en la raiz al
          detectar el inicio del desgaste.
        </p>

        <h2>SVM 7 clases y 75,05&nbsp;%: que significa concretamente</h2>
        <p>
          Nuestro modelo de habitaculo separa siete categorias: freno,
          suspension, rodamiento, direccion, climatizacion, neumatico y
          silencio de referencia. En un conjunto de prueba
          independiente, alcanza el 75,05&nbsp;% de precision. Es menos
          que el 91,3&nbsp;% del escaneo motor, y no es casualidad: los
          ruidos de habitaculo son mas variados, mas breves, mas
          mezclados con el trafico exterior. Pero 75&nbsp;% sigue
          estando muy por encima del oido humano en condiciones reales,
          sobre todo cuando el conductor se ha habituado a los sonidos
          de su propio vehiculo.
        </p>

        <h2>Cuando el escaneo salva de verdad</h2>
        <p>
          El caso mas frecuente: un conductor que escanea su coche dos
          semanas antes de la ITV y descubre una puntuacion
          &laquo;suspension&raquo; al 62&nbsp;%. Manda revisar, el
          amortiguador delantero izquierdo pierde. Reparacion 350
          euros, ITV pasada sin problema. Si hubiera llegado el dia de
          la ITV, rechazo inmediato, mas una segunda visita a pagar,
          mas el riesgo de que el neumatico tambien haya que
          cambiarlo.
        </p>

        <h2>Para ir mas lejos</h2>
        <p>
          Continue la lectura con el articulo sobre el{" "}
          <Link href="/es/blog/usure-invisible-composant-fatigue-endommage-autre">
            desgaste invisible y el efecto cascada
          </Link>
          {" "}y el{" "}
          <Link href="/es/blog/bruit-roulement-roue-detecter-usure-avant-ct">
            rodamiento de rueda antes de la ITV
          </Link>
          . Para los codigos OBD2 que pueden aparecer en paralelo a
          una suspension muerta, vea nuestra pagina{" "}
          <Link href="/es/codes/p0325">P0325</Link>
          {" "}: un sensor de picado puede ser perturbado por vibraciones
          de suspension demasiado fuertes.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
