import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleES11AveriasSonoras() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Por que 11 clases y no mas?",
      a: "Porque es el numero de clases para las que tenemos suficientes datos etiquetados (minimo 250 grabaciones por clase) para entrenar un modelo SVM fiable. Por debajo de ese umbral, el riesgo de falsos positivos es muy alto. Anadimos una clase cada vez que el dataset alcanza el minimo.",
    },
    {
      q: "&iquest;El escaneo puede confundir dos averias?",
      a: "Si, es el limite natural de cualquier clasificador. Un ruido de rodamiento de baja frecuencia puede confundirse con juego de biela en un 8&nbsp;% de los casos. Por eso el sistema muestra siempre una confianza: por debajo del 60&nbsp;%, el resultado se marca &laquo;a vigilar&raquo; y se recomienda un segundo escaneo.",
    },
    {
      q: "&iquest;Cual es la averia mas facil de detectar?",
      a: "Las fugas de aire de admision (air leak) tienen la mejor precision, en torno al 96&nbsp;%. El silbido agudo y continuo es muy distinto de los otros sonidos del motor. Al contrario, los fallos de encendido (misfire) son mas dificiles con 87&nbsp;% porque a veces se confunden con un ralenti irregular normal en motor diesel.",
    },
    {
      q: "&iquest;Cuanto cuesta ignorar un ruido sospechoso?",
      a: "Depende de la averia. Una correa de distribucion que se rompe en motor de interferencia cuesta entre 2000 y 8000&nbsp;EUR de reparacion. Un rodamiento de cigueenal que cede destruye el motor completo, a menudo mas de 4000&nbsp;EUR. Un silbido turbo ignorado puede costar 1500&nbsp;EUR de sustitucion.",
    },
    {
      q: "&iquest;Motor frio o caliente para el escaneo?",
      a: "Ambos son utiles pero responden a preguntas distintas. En frio detectas juegos mecanicos y ruidos de arranque. En caliente a temperatura normal detectas fugas de aceite, desgastes de rodamiento calientes y estado del turbo. Ideal: hacer los dos y comparar.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="11 averias de motor detectables por analisis sonoro IA"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          Aqui tienes la lista completa de las 11 clases de averias que
          el Escaneo Sonoro AutoDiag EU sabe reconocer hoy. Cada una se
          ha entrenado sobre cientos de grabaciones reales, etiquetadas
          a mano, cubriendo motores gasolina, diesel, GLP, hibridos y
          turboalimentados. Para cada averia: la firma sonora, el riesgo
          si la ignoras y una horquilla realista de coste de reparacion
          en Europa.
        </p>

        <h2>1. Golpeteo motor (knock)</h2>
        <p>
          Un sonido metalico, descrito a menudo como &laquo;bolas en una
          caja&raquo;, que aparece bajo carga o en la reaceleracion.
          Causa comun: auto-encendido por carburante de mala calidad o
          sensor de picado defectuoso, a veces desgaste de cojinete.
          Coste: desde 40&nbsp;EUR (cambio de bujias) hasta 3500&nbsp;EUR
          (rectificado bajo motor). El escaneo distingue un golpeteo
          leve (aviso) de uno severo (parada inmediata).
        </p>

        <h2>2. Ruido de rodamiento (bearing noise)</h2>
        <p>
          Un retumbo sordo, a baja frecuencia (50-200&nbsp;Hz), que
          varia con el regimen. Indica un rodamiento de biela, cigueenal
          o arbol de levas fatigado. Coste: si se detecta pronto, 300 a
          800&nbsp;EUR de cojinetes. Si se ignora, rotura motor
          completa, 3500 a 6000&nbsp;EUR. Es la averia donde la
          deteccion precoz mas rentabilidad aporta.
        </p>

        <h2>3. Fuga de aire de admision (air leak)</h2>
        <p>
          Un silbido agudo, continuo, a menudo mas fuerte al ralenti que
          a alto regimen. Un manguito de admision fisurado, una junta
          de colector fatigada, una toma de aire en el cuerpo de
          mariposa. A menudo correlado con un codigo{" "}
          <Link href="/es/codes/p0171">P0171 &mdash; mezcla pobre</Link>.
          Coste: 15 a 200&nbsp;EUR si lo detectas pronto, frente a 400 a
          800&nbsp;EUR si la sonda lambda termina sufriendo.
        </p>

        <h2>4. Fuga de escape (exhaust leak)</h2>
        <p>
          Un soplo ritmado sobre el tiempo de explosion, a menudo mas
          fuerte en frio. Junta de colector, fisura de flexible, brida
          suelta despues del catalizador. Impacto directo sobre la
          depuracion y a menudo sobre el codigo{" "}
          <Link href="/es/codes/p0420">P0420</Link>. Coste: 80 a
          450&nbsp;EUR segun la zona.
        </p>

        <h2>5. Silbido turbo (turbo whistle)</h2>
        <p>
          Un silbido agudo que sube con la carga, diferente del simple
          ruido de compresor normal. Puede indicar juego de eje, fuga
          en la canalizacion de aire o wastegate que vibra. Coste: 200
          a 1800&nbsp;EUR segun la averia. Nunca ignorar: un turbo que
          cede puede enviar aceite a la admision y destruir el motor.
        </p>

        <h2>6. Ruido de correa (belt noise)</h2>
        <p>
          Un chirrido, a menudo en frio o con humedad. Correa de
          accesorios vitrificada, tensor fatigado, polea gripada. Coste:
          30 a 250&nbsp;EUR. Importante: una correa de accesorios que
          se rompe no es dramatico, pero la correa de distribucion
          merece categoria propia (ver clase 11).
        </p>

        <h2>7. Tecleo (tick)</h2>
        <p>
          Un tapping rapido y regular, alineado con el regimen. A menudo
          los empujadores hidraulicos (nivel de aceite bajo, aceite muy
          viejo) o un inyector sucio. Coste: un cambio de aceite con
          aceite de calidad basta en el 60&nbsp;% de los casos. Si no,
          limpieza de inyectores o cambio de empujadores.
        </p>

        <h2>8. Ruido de inyector (injector noise)</h2>
        <p>
          Un claqueo seco y rapido, concentrado arriba del motor,
          presente en diesel common rail y gasolina de inyeccion
          directa. Inyector gripado, muelle fatigado, retorno de
          inyector con fuga. Coste: 80&nbsp;EUR (limpieza) a
          2000&nbsp;EUR (juego completo en algunos motores premium).
        </p>

        <h2>9. Fallos de encendido (misfire)</h2>
        <p>
          Un latido irregular, el motor que &laquo;tropieza&raquo;.
          Firma muy proxima al codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link>. Bujias, bobinas,
          inyector muerto, fuga de compresion. Coste: 15&nbsp;EUR (una
          bujia) a 900&nbsp;EUR (junta de culata).
        </p>

        <h2>10. Motor sano (normal engine)</h2>
        <p>
          No es una averia, pero es una clase esencial: evita los falsos
          positivos. Cuando el escaneo sale &laquo;normal engine&raquo;
          con mas del 80&nbsp;% de confianza, sabes que nada visible
          esta derivando. Es un boletin de salud, no un diagnostico.
        </p>

        <h2>11. Ruido de distribucion / correa dentada</h2>
        <p>
          Un ruido diferente de las correas de accesorios: mas sordo, a
          menudo enmascarado por el resto del motor, visible sobre todo
          para la IA que aisla la firma espectral. Tensor de
          distribucion fatigado, correa que empieza a saltar dientes,
          rodillo de reenvio gripado. Es la averia mas cara de ignorar
          en motor de interferencia: 2000 a 8000&nbsp;EUR si se rompe.
          Lectura imprescindible:{" "}
          <Link href="/es/blog/correa-distribucion-desgastada-detectar-por-sonido">
            detectar una correa de distribucion desgastada por el sonido
          </Link>
          .
        </p>

        <h2>Lo que hay que recordar</h2>
        <p>
          Estas 11 clases cubren alrededor del 85&nbsp;% de las averias
          mecanicas encontradas en clientela sobre motores de menos de
          15 anos. La precision global del modelo es del 91.3&nbsp;%.
          Cuando ves una prediccion por encima del 80&nbsp;%, actua
          rapido. Entre 60 y 80&nbsp;%, haz un segundo escaneo en la
          semana para confirmar. Por debajo del 60&nbsp;%, el sistema
          se mantiene prudente y muestra &laquo;indicativo&raquo;. Para
          entender en profundidad como funciona la deteccion, lee{" "}
          <Link href="/es/blog/como-funciona-svm-tecnologia-escaneo-sonoro">
            la tecnologia detras del Escaneo Sonoro
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
