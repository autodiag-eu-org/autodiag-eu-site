import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESMotorHabla() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como puede una IA oir lo que mi oido no oye?",
      a: "Un microfono de smartphone capta frecuencias mucho mas amplias que el oido humano. El oido se detiene en torno a 20&nbsp;kHz y pierde sensibilidad desde 15&nbsp;kHz, mientras que un microfono de movil moderno se mantiene lineal hasta 22&nbsp;kHz y captura tambien bajas frecuencias sutiles. Nuestro modelo SVM entrenado sobre 3963 grabaciones analiza esas bandas que tu oido no procesa.",
    },
    {
      q: "&iquest;Cual es la tasa de acierto del Escaneo Sonoro de AutoDiag EU?",
      a: "El modelo SVM alcanza 91.3&nbsp;% de precision en test, sobre 11&nbsp;clases de averias diferentes. Esta precision se calcula sobre un conjunto de test independiente. En la practica, cuando la confianza mostrada supera el 80&nbsp;%, el diagnostico es fiable.",
    },
    {
      q: "&iquest;Hace falta un dongle OBD2 para usar el Escaneo Sonoro?",
      a: "No, funciona sin dongle. Usa solo el microfono del movil. Sin embargo, si tienes un dongle ELM327 conectado, el sistema fusiona los datos OBD2 con el analisis audio para un diagnostico aun mas preciso. Es la capa 5 de nuestra pipeline.",
    },
    {
      q: "&iquest;Que tipos de averias detecta?",
      a: "Once clases de averias: golpeteo motor, tecleo, ruido de rodamiento, fuga de aire, fuga de escape, silbido turbo, ruido de correa, ruido de inyector, fallos de encendido, motor sano y ruido de distribucion. Cada clase cubre varios defectos mecanicos reales.",
    },
    {
      q: "&iquest;Reemplaza al diagnostico OBD2 clasico?",
      a: "No, lo completa. El OBD2 lee los codigos almacenados por la centralita, el Escaneo Sonoro detecta los problemas mecanicos que la centralita no ve: desgaste de rodamiento, tension de correa, juego de distribucion, estado de cojinetes. Juntos cubren el 95&nbsp;% de las averias comunes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Tu motor te habla: como la IA traduce sus ruidos en diagnostico"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Escaneo Sonoro"
      >
        <p>
          Tu motor es hablador. En cada explosion de un cilindro, en
          cada giro de cigueenal, en cada paso de correa, emite
          sonidos. Algunos son normales &mdash; el runrun regular al
          ralenti, el silbido suave del turbo al subir de presion.
          Otros son senales de alerta que tu oido simplemente no sabe
          decodificar. Un picado a 3&nbsp;kHz dos veces por vuelta, una
          resonancia a 80&nbsp;Hz al ralenti, un soplo a 12&nbsp;kHz al
          acelerar: todo eso tu cerebro lo oye, pero lo clasifica como
          &laquo;ruido de motor normal&raquo;. La IA no se deja enganar.
        </p>

        <h2>El motor como instrumento musical</h2>
        <p>
          Un motor de cuatro cilindros a 800&nbsp;rpm produce unas 26
          explosiones por segundo, es decir una frecuencia fundamental
          en torno a 26&nbsp;Hz, con armonicos hasta varios kilohercios.
          Cuando todo va bien, estos armonicos siguen un patron
          previsible. En cuanto un elemento se deteriora &mdash; un
          rodamiento que empieza a marcar, una correa que patina, un
          inyector con fuga &mdash; el espectro cambia. Aparecen nuevas
          frecuencias, otras desaparecen, el perfil temporal se modifica.
          Esa firma espectral es la que nuestra IA ha aprendido a
          reconocer.
        </p>

        <h2>3963 grabaciones, 11 clases, una verdad</h2>
        <p>
          Para entrenar el modelo hemos recogido 3963 archivos audio
          etiquetados: air leak, knock, bearing noise, belt noise,
          tick, injector noise, exhaust leak, normal engine y varias
          otras categorias. Cada grabacion fue escuchada por un humano
          para confirmar la etiqueta, luego transformada en 56
          caracteristicas numericas: 40 coeficientes MFCC
          (Mel-Frequency Cepstral Coefficients) que describen el
          timbre, mas 5 caracteristicas espectrales adicionales, mas
          algunas metricas temporales. El clasificador SVM con kernel
          RBF aprende a separar estas 11 clases en ese espacio de 56
          dimensiones.
        </p>

        <h2>&iquest;Por que un SVM y no una red neuronal?</h2>
        <p>
          La pregunta vuelve a menudo: &iquest;por que usar una maquina
          de vectores soporte en lugar de una red neuronal profunda
          como todo el mundo? La respuesta tiene tres puntos. Primero,
          el SVM funciona muy bien sobre conjuntos de datos de tamano
          medio (algunos miles de ejemplos) donde un CNN necesita
          decenas de miles. Segundo, es mucho mas rapido de entrenar y
          de inferir: una prediccion tarda 30&nbsp;milisegundos en un
          servidor estandar. Por ultimo, sus decisiones son
          interpretables: se puede remontar a las frecuencias que
          dispararon la clasificacion.
        </p>

        <h2>La pipeline en 7 capas</h2>
        <p>
          Una grabacion no pasa directamente al clasificador. Primero
          atraviesa seis etapas de preprocesamiento y fusion. Capa 1:
          verificacion de calidad (volumen suficiente, sin saturacion,
          duracion correcta). Capa 2: reduccion de ruido mediante filtro
          de Wiener para retirar el ruido de fondo. Capa 3: extraccion
          de las 56 caracteristicas. Capa 4: clasificacion por el SVM.
          Capa 5: fusion con datos OBD2 si hay dongle conectado &mdash;
          un codigo P0300 de fallos de encendido refuerza una
          prediccion &laquo;misfire&raquo;. Capa 6: interpretacion por
          Claude API que traduce el resultado bruto en consejo claro.
          Capa 7: visualizacion con codigo de color.
        </p>

        <h2>Lo que el motor dice realmente</h2>
        <p>
          Cuando lanzas un escaneo, el sistema no hace solo un
          snapshot. Graba varios segundos de motor, a distintos
          regimenes si es posible, y extrae el patron dominante. Un
          picado que ocurre dos veces por vuelta a 2000&nbsp;rpm pero
          desaparece a 3500&nbsp;rpm no es un defecto de rodamiento
          &mdash; es probablemente un juego de distribucion. Un silbido
          continuo que sube con el regimen es un turbo. Un soplo
          ritmado sobre el tiempo de escape es una fuga de colector. El
          SVM aprende estos patrones temporales gracias a los MFCC.
        </p>

        <h2>Escuchar para prevenir</h2>
        <p>
          El interes principal del Escaneo Sonoro no es constatar una
          averia &mdash; un testigo o un ruido evidente bastan. Es
          detectar el desgaste ANTES de que se convierta en rotura. Un
          rodamiento que empieza a marcar se ve desde el 5&nbsp;% de
          desgaste anormal en el espectro, mucho antes de que oigas
          nada. Escaneando tu motor una vez al mes, repites la medida y
          ves la evolucion. Si la confianza &laquo;bearing noise&raquo;
          pasa de 15 a 60&nbsp;% en tres meses, esta claro: algo
          empeora. Intervienes a 150&nbsp;EUR de reparacion en lugar
          de 2000&nbsp;EUR de rotura motor.
        </p>

        <h2>Para ir mas lejos</h2>
        <p>
          Si quieres entender en detalle que averias detecta el
          sistema, lee nuestro articulo:{" "}
          <Link href="/es/blog/11-averias-motor-detectables-analisis-sonoro">
            11 averias detectables por analisis sonoro
          </Link>
          . Para la parte cientifica &mdash; frecuencias, filtros,
          matematicas &mdash; ve{" "}
          <Link href="/es/blog/sonidos-inaudibles-ia-detecta-lo-que-oido-no-puede">
            los sonidos que el oido humano pierde
          </Link>
          . Y si ves un codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link>, el Escaneo Sonoro
          te dira cual cilindro fatiga realmente &mdash; informacion
          que OBD2 solo no siempre da.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
