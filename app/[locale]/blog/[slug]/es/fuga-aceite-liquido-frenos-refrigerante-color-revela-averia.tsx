import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESFugaColorRevela() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Por que los liquidos del coche tienen colores diferentes?",
      a: "Cada liquido tiene funcion especifica y quimica adaptada, lo que da coloraciones naturales o anadidas. El aceite motor se pone marron por oxidacion, el refrigerante se colorea a proposito para ser identificable y detectar fugas, el liquido de frenos es casi transparente para mantenerse quimicamente neutro. Son indices valiosos para el diagnostico.",
    },
    {
      q: "&iquest;Una fuga rojo cereza siempre es de transmision automatica?",
      a: "Casi siempre. La transmision automatica usa ATF (Automatic Transmission Fluid) rojo cereza cuando es nuevo. La direccion asistida a veces comparte ese color pero mas ambar. La posicion bajo el vehiculo decide: caja&nbsp;= centro, direccion&nbsp;= cerca de la cremallera.",
    },
    {
      q: "Mi refrigerante se vuelve marron, &iquest;es grave?",
      a: "Si. Un refrigerante que tira a marron esta contaminado por depositos de oxido interno (radiador, bloque motor) o mezclado con aceite si una junta de culata empieza a ceder. En todo caso es una alerta: purgar rapido e inspeccion profunda.",
    },
    {
      q: "&iquest;El liquido de frenos transparente puede estar igualmente mal?",
      a: "Si, totalmente. El liquido de frenos nuevo es transparente a amarillo paja, pero absorbe humedad con el tiempo y se oscurece progresivamente. Un liquido marron oscuro ha perdido sus propiedades y debe cambiarse, aunque no haya fuga visible.",
    },
    {
      q: "&iquest;El limpiaparabrisas azul puede confundirse con otro liquido?",
      a: "Raramente. El azul franco del limpiaparabrisas es muy distintivo. Algunos anticongelantes son tambien azules pero mas oscuros y densos. En caso de duda, la posicion de la mancha decide: una fuga de limpiaparabrisas esta cerca del deposito delantero o bajo el maletero (modelos con surtidores traseros).",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Fuga de aceite, liquido de frenos o refrigerante: el color revela la averia"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico visual"
      >
        <p>
          Cada liquido en tu coche tiene su historia quimica. Esas
          historias se leen en el color, la textura y el olor. Un buen
          mecanico identifica una fuga en tres segundos solo con mirar
          la mancha. La Vision IA de AutoDiag&nbsp;EU ha aprendido el
          mismo lenguaje, estudiando miles de imagenes anotadas. En
          este articulo te muestro el catalogo completo, por que cada
          liquido tiene ese color y lo que una fuga te dice realmente
          sobre la salud de tu vehiculo.
        </p>

        <h2>El aceite motor: la memoria del tiempo</h2>
        <p>
          Recien sacado del bidon, el aceite motor es dorado, casi ambar,
          con transparencia marcada. Tras mil kilometros en el motor
          empieza a oscurecer: residuos de combustion, particulas de
          carbono, rastros de desgaste metalico le dan poco a poco ese
          tono marron-negro caracteristico. Una fuga de aceite es casi
          siempre marron en el suelo, con viscosidad media: se extiende
          lento y deja una aureola grasa. Posicion casi siempre bajo el
          bloque motor o carter. Coste tipico: junta del carter 80 a
          180&nbsp;EUR, retenedor de cigueenal lado distribucion 250 a
          450&nbsp;EUR, junta de tapa de balancines 120 a 220&nbsp;EUR.
        </p>

        <h2>El refrigerante: el camaleon coloreado</h2>
        <p>
          Las formulaciones varian segun constructor y edad. Los viejos
          IAT son verdes fluor, aun usados en viejos Peugeot o Citroen.
          Los OAT son naranja o rosa: G12+ rosa de Volkswagen, Dex-Cool
          naranja de General Motors. Los HOAT mezclan ambos: amarillo o
          turquesa. Cada color senala una quimica diferente, y mezclar
          dos familias causa gelificacion que destruye el circuito. La
          Vision IA reconoce el color, identifica el grupo y te avisa si
          hay incoherencia con tu modelo. La fluidez es baja (casi como
          agua), el olor ligeramente dulce. Posicion tipica: delante del
          motor o bajo el radiador.
        </p>

        <h2>El liquido de frenos: el transparente mortal</h2>
        <p>
          Una fuga de liquido de frenos es la unica que ordena parada
          inmediata del vehiculo. Nuevo, es transparente a amarillo
          paja, muy fluido, olor algo quimico. Usado, se oscurece hacia
          marron porque absorbe humedad (es higroscopico, es su
          funcion). Una fuga esta cerca de una rueda (bombin o pinza),
          bajo el cilindro maestro en el vano motor, o a lo largo de una
          canalizacion. El riesgo: perdida de presion del circuito y
          perdida progresiva de frenado. Coste: de 40&nbsp;EUR por una
          simple purga a 300&nbsp;EUR por una pinza entera. La Vision IA
          detecta el tono casi transparente y lo clasifica como alerta
          critica automaticamente. Si identifica liquido de frenos, la
          recomendacion es siempre: no rodar, remolque.
        </p>

        <h2>La transmision automatica: el rojo que se vuelve marron</h2>
        <p>
          El ATF es rojo cereza cuando es nuevo, especialmente para ser
          reconocible. Contaminado, usado o sobrecalentado, se oscurece
          hacia un marron rojizo poco apetecible. El olor se vuelve
          quemado &mdash; senal clara de que tu convertidor de par ha
          sobrecalentado. Una fuga de ATF es rara pero severa: caja que
          patina, cambios lentos, tirones. Coste: junta de caja 300 a
          600&nbsp;EUR, cambio de aceite 150 a 250&nbsp;EUR, caja
          completa 2500 a 4500&nbsp;EUR. Ver tambien como el{" "}
          <Link href="/es/blog/autodiag-vs-taller-ahorros">
            diagnostico autonomo se compara al taller
          </Link>
          .
        </p>

        <h2>La direccion asistida: el rojo ambar discreto</h2>
        <p>
          Algunos vehiculos (BMW, Mercedes, Renault antiguos) usan
          direccion asistida hidraulica con fluido rojo ambar. Mas claro
          que el ATF, mas denso que el liquido de frenos. Una fuga esta
          bajo la cremallera o cerca de la bomba. Notas la fuga en el
          volante: direccion pesada, chirrido al girar a tope. Coste:
          120 a 280&nbsp;EUR por una junta, 400 a 900&nbsp;EUR por una
          cremallera. La Vision IA lo distingue del ATF por la posicion:
          cremallera para direccion, centro para caja.
        </p>

        <h2>Los otros: limpiaparabrisas, GLP, AdBlue</h2>
        <p>
          El limpiaparabrisas es azul claro o rosa segun temporada, muy
          fluido, olor citrico o alcoholico. Inofensivo salvo para tu
          bolsillo si el deposito golpea algo. El AdBlue, en diesel
          Euro 6, es transparente pero deja rastros blancos al secar
          (es urea). Una fuga de AdBlue provoca el{" "}
          <Link href="/es/codes/p0300">
            codigo P0300 y a veces un P0420
          </Link>{" "}
          cuando el catalizador SCR pierde eficiencia. El GLP fuga en
          fase gaseosa y no es visible en el suelo &mdash; la Vision IA
          no lo detecta, hace falta un detector olfativo o un control
          en taller.
        </p>

        <h2>El protocolo de la duda</h2>
        <p>
          Cuando dudas entre dos liquidos, la Vision IA usa un arbol de
          decision. Primera pregunta: &iquest;color dominante?
          Marron-negro&nbsp;= aceite casi seguro. Rojo&nbsp;= ATF o
          direccion. Verde/naranja/rosa&nbsp;= refrigerante casi seguro.
          Transparente&nbsp;= frenos o limpiaparabrisas. Segunda
          pregunta: &iquest;donde esta la mancha bajo el vehiculo?
          Centro&nbsp;= caja o direccion. Bloque&nbsp;= motor.
          Rueda&nbsp;= frenos. Delante abajo&nbsp;= radiador. Tercera
          pregunta: &iquest;cuanto lleva parado? Ese dato calcula el
          caudal. Las tres respuestas convergen en un diagnostico con
          indice de confianza. Por encima del 85&nbsp;% la IA afirma.
          Entre 60 y 85&nbsp;% propone dos hipotesis y pide precisar
          (olor, textura). Por debajo del 60&nbsp;% te orienta
          directamente al taller. Para completar, lee tambien{" "}
          <Link href="/es/blog/vision-ia-detectar-fugas-bajo-coche-movil">
            deteccion de fugas bajo el coche
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
