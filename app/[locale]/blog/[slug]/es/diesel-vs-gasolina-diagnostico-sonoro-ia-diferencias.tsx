import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESDieselVsGasolinaSon() {
  const faq: FaqItem[] = [
    {
      q: "Mi diesel suena mucho al ralenti, &iquest;es normal?",
      a: "Si, hasta cierto punto. Los diesel producen naturalmente un claqueo caracteristico debido a la combustion por compresion, sobre todo en frio. Ese ruido es mas marcado en inyeccion directa common rail moderna. Se vuelve anormal cuando aumenta, cuando toma tono metalico mas agudo o cuando persiste incluso tras chauffe completa.",
    },
    {
      q: "&iquest;La IA diferencia entre ruido normal de diesel y una averia?",
      a: "Si, precisamente por eso incluimos varios cientos de grabaciones diesel en el dataset. El modelo aprende que ese claqueo base es la norma para un diesel sano y no lo clasifica como knock. Solo reacciona a las desviaciones sobre esa norma.",
    },
    {
      q: "&iquest;Un motor gasolina muy silencioso puede esconder una averia?",
      a: "Si, absolutamente. Los motores gasolina modernos son tan silenciosos que los principios de averias mecanicas pasan por debajo del umbral de percepcion humana. Un rodamiento que empieza a marcar puede ser inaudible durante meses. El Escaneo Sonoro es particularmente util en motores gasolina por esa razon: compensa el silencio relativo de la mecanica con un analisis fino de armonicos sutiles.",
    },
    {
      q: "&iquest;Las frecuencias detectadas son diferentes segun el carburante?",
      a: "Si. El diesel concentra su energia en bajas frecuencias (50-400&nbsp;Hz) por el alto ratio de compresion y el ruido de combustion. La gasolina se extiende hacia medias y altas (200&nbsp;Hz - 3&nbsp;kHz). El SVM aprende estas firmas distintas y las clasifica correctamente en ambos casos gracias a los 40 coeficientes MFCC que separan eficazmente los dos perfiles.",
    },
    {
      q: "&iquest;Y los hibridos o GLP bicombustible?",
      a: "Los hibridos son caso particular: escanea siempre el motor termico en marcha, no en modo electrico. La bicombustion GLP puede modificar ligeramente la firma por combustion mas limpia y lenta, pero el modelo se mantiene fiable en la mayoria de casos. Recogemos activamente datos adicionales para esas motorizaciones.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Diesel vs gasolina: por que su diagnostico sonoro es diferente"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          Un motor diesel y uno de gasolina no suenan igual, y no es
          una simple cuestion de ambiente. Funcionan con principios de
          combustion fundamentalmente distintos, lo que produce firmas
          acusticas en las antipodas una de la otra. Para un
          diagnostico sonoro fiable es esencial que el modelo sepa con
          que tipo de motor trata y aplique los criterios correctos.
          Es exactamente lo que el SVM ha aprendido durante su
          entrenamiento.
        </p>

        <h2>Dos principios de combustion, dos firmas</h2>
        <p>
          Un motor gasolina enciende su mezcla con una chispa, en un
          espacio cerrado donde aire y carburante ya estan mezclados.
          La combustion es relativamente progresiva, lo que da un ruido
          mas liso con componente mecanico dominante. Un diesel, al
          contrario, inyecta el carburante en aire muy fuertemente
          comprimido (14:1 a 22:1 contra 8:1 a 11:1 en gasolina). La
          autoignicion del carburante produce un pico de presion
          rapido, casi explosivo, que genera un ruido de combustion
          muy marcado. Eso es lo que da al diesel su caracter
          &laquo;claqueante&raquo; tipico.
        </p>

        <h2>Las frecuencias dominantes</h2>
        <p>
          En un escaneo de motor diesel, la energia espectral se
          concentra entre 50 y 400&nbsp;Hz, con armonicos marcados
          hasta 2&nbsp;kHz. Los MFCC reflejan esa concentracion en
          bajas frecuencias. En motor gasolina, la energia esta mas
          extendida, con componentes significativas de 200&nbsp;Hz
          hasta 3-4&nbsp;kHz. Esta diferencia de distribucion
          espectral es tan marcada que un humano casi puede adivinar
          el tipo de motor al oido. El SVM lo sabe con certeza desde
          los primeros coeficientes MFCC.
        </p>

        <h2>Lo que el diesel esconde</h2>
        <p>
          El ruido de combustion diesel es tan presente que enmascara
          muchas firmas de averias. Un principio de golpeteo de biela
          en diesel es dificil de oir porque se funde con el ruido
          normal del motor. Aqui es donde el Escaneo Sonoro mas aporta:
          separa matematicamente la firma de la combustion normal de
          la de la averia, incluso cuando comparten parcialmente la
          misma banda de frecuencia. En diesel, las desviaciones mas
          significativas a vigilar son el knock por encima del ruido
          base, los inyectores que toman juego y los rodamientos de
          cigueenal.
        </p>

        <h2>Lo que la gasolina deja oir</h2>
        <p>
          Siendo la gasolina mucho mas silenciosa, los principios de
          averia suelen ser audibles antes para un humano &mdash; pero
          tambien mas confusos. Un silbido leve puede ser un turbo,
          una fuga de admision, una correa de accesorios o incluso
          una fuga de colector. La IA es particularmente util en
          estos motores para decidir rapido entre varios candidatos.
          Las clases mas utiles en gasolina son air leak, turbo
          whistle, belt noise y misfire.
        </p>

        <h2>Las averias exclusivas de un tipo de motor</h2>
        <p>
          Ciertas averias son exclusivas de un tipo. El claqueo de
          inyector common rail es especifico del diesel y de ciertos
          motores de inyeccion directa gasolina recientes. La
          detonacion (preignition) es casi exclusivamente gasolina. El
          fallo turbo por ensuciamiento FAP es diesel. El fenomeno
          LSPI (low-speed preignition) es especifico de ciertos
          motores gasolina turbo de inyeccion directa. Nuestro modelo
          conoce estas especificidades y adapta los umbrales segun el
          contexto declarado por el usuario.
        </p>

        <h2>Los codigos OBD2 que cambian de significado</h2>
        <p>
          Un mismo codigo no tiene siempre la misma implicacion en
          diesel y gasolina. El codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link> de fallos de
          encendido existe en diesel pero indica mas bien un problema
          de inyeccion o compresion, no de bujias. El codigo{" "}
          <Link href="/es/codes/p0420">P0420</Link> de eficiencia de
          catalizador es diferente en diesel (DPF/SCR) y gasolina
          (tres vias). La capa 5 de fusion OBD2 tiene en cuenta esas
          diferencias al enriquecer la prediccion audio.
        </p>

        <h2>Precision comparada</h2>
        <p>
          Sobre el set de test, la precision media del modelo es del
          91.3&nbsp;%. Detallada por tipo de motor, es de unos
          92&nbsp;% en gasolina y 90&nbsp;% en diesel. La diferencia
          es leve y se explica por la dificultad intrinseca de
          detectar anomalias en un motor ya ruidoso. Compensamos esa
          dificultad recogiendo progresivamente mas datos diesel con
          etiquetas finas. Para ir mas lejos, consulta{" "}
          <Link href="/es/blog/como-funciona-svm-tecnologia-escaneo-sonoro">
            la tecnologia detras del Escaneo Sonoro
          </Link>{" "}
          y nuestro articulo sobre{" "}
          <Link href="/es/blog/golpeteo-motor-causas-diagnostico-ia">
            el golpeteo motor
          </Link>
          . Un codigo <Link href="/es/codes/p0128">P0128</Link> en un
          diesel tambien puede sesgar el escaneo via un ventilador que
          gira anormalmente.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
