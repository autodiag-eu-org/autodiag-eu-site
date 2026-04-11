import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESSonidosInaudibles() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Mi telefono puede realmente captar los ultrasonidos?",
      a: "Si, en parte. La mayoria de smartphones modernos usan microfonos MEMS con respuesta lineal hasta 20-22&nbsp;kHz, y una respuesta reducida pero explotable hasta 24&nbsp;kHz. Mas alla, la respuesta cae. Para el diagnostico motor, este rango es ampliamente suficiente: la practica totalidad de las firmas de averia estan entre 50&nbsp;Hz y 16&nbsp;kHz.",
    },
    {
      q: "&iquest;El oido humano oye realmente hasta 20&nbsp;kHz?",
      a: "En teoria si, en la juventud. En la practica, el limite cae unos 1&nbsp;kHz por decada a partir de los 20 anos. A los 50, muchas personas ya no superan los 13&nbsp;kHz. Peor aun, la sensibilidad cae mucho antes del umbral: una frecuencia a 10&nbsp;kHz ya es 20&nbsp;dB menos audible que una a 1&nbsp;kHz.",
    },
    {
      q: "&iquest;Por que hablar de infrasonidos para un motor?",
      a: "Las grandes masas en rotacion &mdash; cigueenal, volante motor, embrague &mdash; producen vibraciones de muy baja frecuencia, a veces por debajo de 20&nbsp;Hz. Estos infrasonidos son imposibles de oir pero un microfono los capta. Un desequilibrio de cigueenal puede aparecer a 12-15&nbsp;Hz, una zona totalmente sorda para el oido.",
    },
    {
      q: "&iquest;Un microfono externo es mas preciso que el del telefono?",
      a: "Un microfono de medida calibrado es mas fiel, si, pero el microfono del smartphone moderno basta para el diagnostico. Lo que cuenta es que la respuesta sea repetible de una medida a otra. La IA no necesita precision absoluta, necesita coherencia para comparar sus escaneos en el tiempo.",
    },
    {
      q: "&iquest;Por que algunas averias me suenan igual?",
      a: "Porque su oido suaviza las diferencias. No descompone un ruido en frecuencias, percibe una textura global. Dos sonidos muy diferentes espectralmente pueden parecerle identicos. El clasificador SVM, en cambio, trabaja en un espacio de 56 dimensiones donde cada frecuencia tiene su peso propio.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Sonidos inaudibles: lo que la IA detecta y su oido no percibe"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Tecnologia"
      >
        <p>
          Pruebe una experiencia. Arranque su coche, dejelo al ralenti y
          escuche atentamente. Oye el motor, por supuesto, pero
          &iquest;que percibe realmente? Un ronroneo regular. Un ligero
          soplo de escape. Quizas un ventilador que se activa. Nada
          mas. Sin embargo, un microfono colocado en el mismo lugar
          capta mucho mas: unas 4000 veces mas informacion por segundo
          de la que su cerebro trata conscientemente. Esa diferencia es
          el terreno de caza de la IA.
        </p>

        <h2>El mito de los 20&nbsp;Hz &ndash; 20&nbsp;kHz</h2>
        <p>
          Se repite por todas partes que el oido humano oye de 20&nbsp;Hz
          a 20&nbsp;kHz. Tecnicamente cierto, pero enganoso. Ese rango
          solo es valido para un adulto joven sano, en silencio
          absoluto, con sonidos puros e intensos. En la vida real, la
          sensibilidad auditiva sigue la curva de Fletcher-Munson: muy
          sensible alrededor de 2-4&nbsp;kHz (la frecuencia de la voz),
          cae bruscamente en los graves (10&nbsp;dB menos a 100&nbsp;Hz)
          y en los agudos (20&nbsp;dB menos a 10&nbsp;kHz). Anada el
          ruido ambiente del habitaculo y su oido pierde la mitad de
          las firmas de averia.
        </p>

        <h2>Lo que capta un microfono de smartphone</h2>
        <p>
          Un microfono MEMS moderno, el integrado en su telefono, tiene
          una respuesta plana entre 50&nbsp;Hz y 18&nbsp;kHz, con
          extension hasta 22&nbsp;kHz. Mas alla, la respuesta cae pero
          la informacion sigue siendo parcialmente explotable hasta
          24&nbsp;kHz para una IA entrenada. En bajas frecuencias, el
          microfono baja hasta 20&nbsp;Hz, donde el oido ya solo siente
          vibraciones en el pecho. Para una IA, este rango ampliado
          significa acceso a firmas invisibles para un humano.
        </p>

        <h2>Ejemplos concretos de inaudibilidad</h2>
        <p>
          Un rodamiento de turbo que empieza a marcarse emite un pico
          espectral hacia 14-16&nbsp;kHz, muy fino y muy breve. Su
          oido, en un habitaculo con ventilador, GPS hablando y
          carretera, nunca lo percibira. El SVM, en cambio, lo
          identifica al instante. Otro caso: un piston que empieza a
          tener juego produce una firma armonica especifica hacia
          3&nbsp;kHz con una periodicidad ligada al regimen motor.
          Inaudible al ralenti para el oido, pero muy claro en los 40
          coeficientes MFCC del pipeline.
        </p>

        <h2>Los infrasonidos: el territorio oculto de los grandes defectos</h2>
        <p>
          Por debajo de 20&nbsp;Hz ya no percibe sonidos, percibe
          vibraciones. Un desequilibrio del volante motor produce una
          oscilacion a unos 12-15&nbsp;Hz que hace temblar la palanca
          de cambio pero que usted no identifica como un
          &laquo;ruido&raquo;. El microfono registra ese componente de
          baja frecuencia y el clasificador lo aisla en las
          caracteristicas espectrales. Misma logica para los defectos
          de alineacion de transmision o los soportes de motor
          fatigados.
        </p>

        <h2>&iquest;Por que 56 caracteristicas?</h2>
        <p>
          El pipeline extrae 56 valores numericos de cada grabacion: 40
          coeficientes MFCC que describen el timbre en la escala
          perceptual Mel, mas 5 caracteristicas espectrales clasicas
          (centroide, ancho de banda, rolloff, flujo, contraste
          espectral), mas algunas metricas temporales como la envolvente
          de energia o la tasa de paso por cero. Estos 56 numeros son
          la fotografia matematica del sonido, suficiente para que un
          SVM RBF alcance el 91,3&nbsp;% de precision en 11 clases.
        </p>

        <h2>Por que su cerebro le enga&ntilde;a</h2>
        <p>
          El cerebro humano hace algo que la IA no hace: ignora lo que
          juzga poco importante. Es practico a diario (si no oiria
          cada prenda rozando su piel) pero catastrofico para el
          diagnostico. Su cerebro se acostumbra al ruido de su motor
          en segundos, y al cabo de un mes de agravamiento lento ya ha
          integrado el nuevo sonido como &laquo;normal&raquo;. La IA
          tiene 3963 referencias de entrenamiento en mente y no se
          acostumbra a nada.
        </p>

        <h2>La firma no miente nunca</h2>
        <p>
          Un sonido puede parecerle anodino pero contener una firma
          abrumadora. Es todo el interes del escaneo sonoro: ofrecerle
          un oido que no se cansa, no se acostumbra y compara cada
          grabacion con un referencial estadistico. Para ir mas lejos,
          descubra{" "}
          <Link href="/es/blog/comment-fonctionne-svm-technologie-scan-sonore">
            como el SVM trata los datos internamente
          </Link>
          , o la lista completa de las{" "}
          <Link href="/es/blog/11-pannes-detectables-analyse-sonore-moteur">
            11 averias detectables
          </Link>
          . Si ve un codigo{" "}
          <Link href="/es/codes/p0325">P0325</Link>{" "}
          (circuito de sensor de picado), un escaneo sonoro confirma
          con frecuencia la presencia de un verdadero picado antes de
          que el sensor lo vea.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
