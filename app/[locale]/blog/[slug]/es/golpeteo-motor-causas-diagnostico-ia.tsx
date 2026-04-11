import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESGolpeteoMotor() {
  const faq: FaqItem[] = [
    {
      q: "Mi motor golpea al arrancar en frio y luego desaparece, &iquest;es grave?",
      a: "No necesariamente. Un golpeteo breve en frio que desaparece en 10-30 segundos suele indicar taques hidraulicos que se represurizan. Si es diario y el nivel de aceite esta bien, simplemente anade un aceite de buena calidad en el siguiente cambio. Si el golpeteo persiste en caliente o vuelve bajo carga, es otra cosa.",
    },
    {
      q: "&iquest;Que diferencia hay entre picado y golpeteo?",
      a: "El picado (knock) es un sonido metalico agudo que llega bajo carga, a menudo descrito como canicas en una caja. Se relaciona con una combustion anormal. El golpeteo mecanico (piston slap, rod knock) es mas sordo, ritmado con la rotacion del motor, y revela una holgura mecanica real. La IA separa ambas firmas en menos de un segundo.",
    },
    {
      q: "&iquest;El codigo P0325 significa que mi motor golpea?",
      a: "No, el codigo P0325 concierne al circuito electrico del sensor de golpeteo, no al golpeteo en si. El sensor puede estar averiado sin que el motor pique, o el motor puede picar sin que el codigo se encienda si el sensor esta muerto. Un escaneo sonoro verifica la realidad del ruido independientemente del sensor.",
    },
    {
      q: "&iquest;Cuanto cuesta un motor que golpea ignorado?",
      a: "Un golpeteo de biela severo destruye el motor completo en unos cientos de kilometros. Sustitucion: 2500 a 6000&nbsp;EUR. Deteccion temprana por escaneo sonoro: cambias los cojinetes por 400 a 900&nbsp;EUR.",
    },
    {
      q: "&iquest;Puedo rodar con un ligero golpeteo?",
      a: "Hasta el taller si, despacio, sin regimenes altos. No mas alla. Cada kilometro con un golpeteo mecanico agrava el desgaste exponencialmente.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Golpeteo del motor: causas, riesgos y diagnostico por IA"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          Hay golpeteo y golpeteo. Un ruido metalico bajo el capot no
          tiene nada de excepcional &mdash; todos los motores producen
          algunos, a diversos grados. El problema es saber cuales son
          normales y cuales anuncian una reparacion de 3000&nbsp;EUR. Sin
          herramienta, incluso un mecanico experimentado puede
          equivocarse. Con el Escaneo Sonoro de AutoDiag EU obtienes una
          respuesta en menos de un minuto, con nivel de confianza
          cifrado.
        </p>

        <h2>Las tres grandes familias de golpeteo</h2>
        <p>
          Primera familia: el picado de combustion, o knock. Un sonido
          metalico agudo al pisar el acelerador, a menudo en cuesta o en
          reprise. La causa es una auto-inflamacion del combustible antes
          de la chispa de la bujia, tipicamente por indice de octano
          demasiado bajo, encendido demasiado avanzado o sensor de
          golpeteo defectuoso (codigo{" "}
          <Link href="/es/codes/p0325">P0325</Link>
          ). Segunda familia: el golpeteo mecanico, o piston slap. Un
          sonido mas sordo, sobre todo en frio, por holgura excesiva
          entre piston y camisa. Tercera familia: el golpeteo de biela,
          el mas grave. Un martilleo ritmado que signa cojinetes de biela
          gastados.
        </p>

        <h2>Lo que el oido no puede hacer</h2>
        <p>
          El oido humano tiene tres grandes defectos para este
          diagnostico. No mide la periodicidad precisa. No separa las
          frecuencias. Y se acostumbra rapido: tras tres minutos
          escuchando, tu cerebro clasifica el ruido como fondo. El SVM no
          tiene ninguno de esos defectos.
        </p>

        <h2>Como la IA marca la diferencia</h2>
        <p>
          Un golpeteo de biela tiene una firma espectral muy caracteristica:
          ataque rapido, decay exponencial, fundamental alrededor de
          200-400&nbsp;Hz con armonicos hasta 3&nbsp;kHz, y periodicidad
          rigurosamente sincronizada con la rotacion del motor dividida
          por dos. El piston slap es mas ancho en frecuencia, mas
          amortiguado, y disminuye claramente cuando el motor calienta.
          El knock de combustion es mucho mas agudo, 5-8&nbsp;kHz, y solo
          aparece bajo carga.
        </p>

        <h2>El papel del OBD2 en el diagnostico</h2>
        <p>
          Si tienes un adaptador conectado, la capa 5 del pipeline
          enriquece la prediccion con datos OBD2. Un codigo{" "}
          <Link href="/es/codes/p0325">P0325</Link>{" "}
          activo refuerza la probabilidad de que un golpeteo de combustion
          sea real. Un codigo{" "}
          <Link href="/es/codes/p0011">P0011</Link>{" "}
          sobre la distribucion variable puede enmascarar o amplificar
          ciertos golpeteos. Esta fusion aumenta la precision efectiva
          del 91,3&nbsp;% a mas del 94&nbsp;%.
        </p>

        <h2>Las causas mas frecuentes</h2>
        <p>
          Por orden de frecuencia en clientela europea: combustible de
          mala calidad (15-20&nbsp;% de los golpeteos ligeros), reglaje
          de encendido desplazado (10&nbsp;%), sensor de golpeteo muerto
          (15&nbsp;%), taques hidraulicos gastados o nivel de aceite
          bajo (25&nbsp;%), holgura de piston naciente (15&nbsp;%),
          desgaste de cojinetes (10&nbsp;%), y otros (10&nbsp;%). La
          buena noticia es que mas de la mitad de esas causas se reparan
          con menos de 200&nbsp;EUR &mdash; a condicion de cogerlas
          pronto.
        </p>

        <h2>La cascada de degradacion</h2>
        <p>
          Un motor que golpea, incluso ligeramente, no permanece en ese
          estado. La holgura mecanica crece, las particulas metalicas
          contaminan el aceite, y en seis meses pasas de una reparacion
          de 500&nbsp;EUR a un cambio de motor completo. Por eso
          insistimos tanto en la deteccion temprana.
        </p>

        <h2>Lo que hay que hacer</h2>
        <p>
          Si oyes algo, lanza un escaneo sonoro. Si el sistema indica
          knock con mas del 60&nbsp;% de confianza, contrasta con un
          escaneo en frio y otro en caliente. Si la confianza se mantiene
          alta, pasa rapido por taller, incluso sin testigo encendido.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
