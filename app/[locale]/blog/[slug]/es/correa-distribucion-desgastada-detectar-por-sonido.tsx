import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESCorreaDistribucionSonido() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;A cuantos kilometros hay que cambiar la correa de distribucion?",
      a: "Depende del modelo: entre 60&nbsp;000 y 180&nbsp;000&nbsp;km segun el fabricante, o 5 a 10 anos. Consulta el libro de mantenimiento. Algunos motores recientes llevan cadena en lugar de correa, con vida mayor pero que tambien puede fallar &mdash; y tambien tiene firma sonora.",
    },
    {
      q: "&iquest;Que es un motor de interferencia?",
      a: "Un motor en el que las valvulas y los pistones pueden encontrarse si la distribucion salta o se rompe. La mayoria de motores modernos son de interferencia. En ellos, una correa que salta dobla valvulas y a veces danna pistones, pasando la factura de 450&nbsp;EUR (cambio correa) a 2000-8000&nbsp;EUR (rectificado culata o cambio motor).",
    },
    {
      q: "&iquest;El Escaneo Sonoro puede realmente detectar una distribucion en fin de vida?",
      a: "Si, con ciertos limites. Detecta especialmente bien los signos de desgaste del tensor y del rodillo de reenvio, que producen frecuencias caracteristicas antes de la rotura. Para la correa en si, los signos son mas sutiles, pero un cambio de firma espectral por encima del 70&nbsp;% de confianza justifica una verificacion mecanica.",
    },
    {
      q: "&iquest;Cuales son los ruidos de alerta de una distribucion fatigada?",
      a: "Un gemido leve en frio, un tecleo rapido a regimen medio, un ligero silbido regular que varia con el regimen. Esos ruidos los enmascara el resto del motor, por eso el oido humano los pierde. El Escaneo Sonoro aisla su firma espectral especifica.",
    },
    {
      q: "&iquest;Cual es la diferencia entre ruido de correa de accesorios y ruido de distribucion?",
      a: "La correa de accesorios (alternador, clima, direccion) emite sonidos mas agudos, mas variados y mas audibles. La correa de distribucion esta escondida tras un carter y emite sonidos sordos, mas graves, que se mezclan con el ruido general. El SVM los separa gracias a los 40 coeficientes MFCC.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Correa de distribucion desgastada: detectarla por el sonido antes de la rotura"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevencion"
      >
        <p>
          Si tuvieras que quedarte con una sola ventaja del Escaneo
          Sonoro, seria esta: detectar una correa de distribucion en
          fin de vida antes de que salte. Porque cuando una correa
          salta en motor de interferencia &mdash; y la mayoria de
          motores modernos lo son &mdash; la factura parte de 2000&nbsp;EUR
          y sube rapido hacia 5000, 6000, incluso 8000&nbsp;EUR segun
          el numero de valvulas tocadas y el estado de los pistones.
          Al lado, un cambio preventivo cuesta entre 400 y 900&nbsp;EUR.
          La ratio es de uno a ocho en el mejor de los casos, de uno a
          veinte en el peor.
        </p>

        <h2>Por que la distribucion falla sin avisar (a los humanos)</h2>
        <p>
          La correa de distribucion esta escondida tras un carter de
          plastico, generalmente al lado izquierdo del motor visto
          desde el capo. Ese carter ahoga los sonidos, y el ruido
          residual se mezcla con el resto del motor: explosiones,
          admision, escape, ventilador. Para un oido humano, imposible
          aislar el ruido especifico de la distribucion. Por eso una
          rotura parecera siempre &laquo;repentina&raquo;. En realidad
          no lo es: los signos estaban ahi, en el espectro, desde hace
          semanas.
        </p>

        <h2>La firma espectral de una distribucion que fatiga</h2>
        <p>
          Una correa nueva tiene firma limpia: poco ruido propio,
          armonicos estables, sin picos parasitos. A medida que se
          desgasta, pasan varias cosas. El tensor, que compensa el
          alargamiento de la correa, trabaja cada vez mas, lo que
          produce un pico espectral sobre 4-6&nbsp;kHz. Los dientes de
          la correa se desgastan tambien, introduciendo armonicos pares
          ligados a la frecuencia de paso de dientes sobre los
          pinones. Por ultimo, si el rodillo de reenvio empieza a
          griparse, aparece un ruido ciclico a la frecuencia de giro
          del rodillo. Esas tres senales juntas forman una huella que
          el SVM reconoce como &laquo;belt noise&raquo; con confianza
          creciente.
        </p>

        <h2>Las 3 fases de degradacion detectables</h2>
        <p>
          Fase 1: deriva leve. La confianza &laquo;belt noise&raquo;
          pasa del 5&nbsp;% (normal) al 20-30&nbsp;%. Nada visible para
          el usuario, pero la IA ve un cambio espectral. Momento ideal
          para planificar el cambio sin estres. Fase 2: alerta amarilla.
          La confianza alcanza 50-70&nbsp;%. Hay cambio claro. Se
          recomienda verificacion por mecanico en dos semanas. Fase 3:
          alerta roja. Confianza por encima del 80&nbsp;%. Hay que
          intervenir imperativamente, el tiempo se cuenta en dias.
        </p>

        <h2>Lo que el escaneo no puede hacer</h2>
        <p>
          Seamos claros: el Escaneo Sonoro no sustituye una inspeccion
          visual de la correa. Detecta una deriva, no el estado real de
          la correa a la vista. Si tu libro de mantenimiento dice que
          toca cambiar la distribucion, cambiala, aunque el escaneo
          este tranquilo. El escaneo es una herramienta complementaria,
          no un sustituto. Su interes es avisarte entre dos revisiones
          oficiales, cuando aun estas lejos del kilometraje teorico
          pero la correa ha sufrido estres anormal.
        </p>

        <h2>Los factores que aceleran el desgaste</h2>
        <p>
          Una correa prevista para 120&nbsp;000&nbsp;km puede ceder a
          60&nbsp;000&nbsp;km en ciertos casos. Aceleradores de
          desgaste conocidos: fuga de refrigerante o aceite sobre la
          correa (el caucho se desintegra), tensor de origen debil en
          ciertos modelos, uso urbano intensivo con muchos arranques en
          frio, sobrecalentamiento motor aun puntual, o simplemente un
          cambio anterior mal hecho con piezas baratas. Si tu vehiculo
          ha sufrido alguno de estos eventos, un escaneo mensual es
          particularmente recomendable.
        </p>

        <h2>La fusion OBD2 + sonoro</h2>
        <p>
          Ciertos codigos OBD2 alertan indirectamente sobre la
          distribucion. Un codigo{" "}
          <Link href="/es/codes/p0011">P0011</Link> (distribucion
          variable admision avanzada) puede indicar correa con dientes
          saltados. Un codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link> de fallos de
          encendido generalizados puede resultar del mismo problema. La
          capa 5 del pipeline fusiona esas informaciones: cuando uno de
          estos codigos esta presente Y se detecta belt noise por
          encima del 40&nbsp;%, el sistema eleva la prioridad del
          diagnostico. Es un ejemplo concreto del valor de la fusion
          audio + OBD2.
        </p>

        <h2>El coste de una deteccion perdida</h2>
        <p>
          En los motores de interferencia mas comunes en Europa
          &mdash; Renault 1.5&nbsp;dCi, Peugeot 1.6&nbsp;HDi, VW
          1.6&nbsp;TDI, Fiat 1.3&nbsp;MultiJet, BMW N47 &mdash; la
          rotura de distribucion cuesta regularmente entre 2500 y
          5000&nbsp;EUR. En motores premium o V6 se puede pasar de
          8000&nbsp;EUR. Comparado con los 450-900&nbsp;EUR de un
          cambio preventivo. Aunque tu Escaneo Sonoro solo te avise una
          vez en la vida del vehiculo, se habra rentabilizado
          ampliamente. Para ir mas lejos, lee nuestro articulo sobre{" "}
          <Link href="/es/blog/prevenir-rotura-motor-diagnostico-sonoro-preventivo">
            el diagnostico sonoro preventivo
          </Link>{" "}
          y sobre la{" "}
          <Link href="/es/blog/11-averias-motor-detectables-analisis-sonoro">
            lista completa de las 11 averias detectables
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
