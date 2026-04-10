import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESTestigoMotorQueHacer() {
  const faq: FaqItem[] = [
    {
      q: "El testigo del motor esta encendido, puedo seguir conduciendo?",
      a: "Si el testigo es naranja fijo, puedes seguir conduciendo con precaucion y hacer un diagnostico pronto. Si parpadea, conduce despacio hasta un taller: suele indicar fallos de encendido que pueden destruir el catalizador en pocos kilometros. Si es rojo (temperatura, presion de aceite), detente inmediatamente.",
    },
    {
      q: "Cuanto cuesta leer un codigo de averia en un taller en Espana?",
      a: "En Espana, la lectura de un codigo en un taller cuesta entre 25 y 60 EUR, y hasta 90 EUR en concesionarios oficiales. Con un adaptador ELM327 (desde 20 EUR) y la app AutoDiag EU, lees tus codigos gratis y las veces que quieras.",
    },
    {
      q: "Borrar el codigo hace desaparecer el problema?",
      a: "No. Borrar apaga el testigo temporalmente, pero si la causa no se corrige, el codigo volvera en 50 a 200 km. Peor aun: justo antes de la ITV, borrar los codigos pone los monitores de preparacion en estado 'no listo', lo que el inspector detecta al instante.",
    },
    {
      q: "El testigo del motor puede apagarse solo?",
      a: "Si, en algunos casos. Si el problema era puntual (por ejemplo un tapon de deposito mal cerrado con codigo P0442), el testigo se apaga tras varios ciclos de arranque una vez resuelto. Pero no cuentes con ello: la mayoria de codigos requieren intervencion.",
    },
    {
      q: "Cuales son los codigos mas comunes cuando se enciende el testigo?",
      a: "Los mas frecuentes en coches europeos son P0420 (eficacia catalizador), P0171 (mezcla pobre), P0300 (fallos de encendido), P0442 (fuga EVAP pequena) y P0128 (termostato). Juntos, representan cerca del 60 por ciento de los testigos encendidos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="es"
        title="Testigo del motor encendido: que hacer?"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={8}
        category="Guia practica"
      >
        <p>
          Acaba de encenderse en tu salpicadero un pequeno testigo naranja
          con forma de motor. Te preguntas si debes parar inmediatamente,
          llamar a una grua o seguir conduciendo. Respira: en el 90 por
          ciento de los casos, ese testigo no significa que tu coche se vaya
          a averiar en cinco minutos. Pero hay que hacerle caso. Aqui tienes
          exactamente lo que debes hacer, paso a paso.
        </p>

        <h2>1. Observa el color y el comportamiento del testigo</h2>
        <p>
          Lo primero util es el estado del propio testigo. Puede tener tres
          formas: naranja fijo, naranja parpadeante o rojo. Cada una tiene
          un significado muy diferente.
        </p>
        <p>
          <strong>Naranja fijo:</strong> es el caso mas comun. La centralita
          del motor ha detectado una anomalia, pero no es critica. Puedes
          conducir con normalidad, terminar tu trayecto, volver a casa. Pero
          en los proximos dias, haz un diagnostico para entender el problema.
          Cuanto mas esperes, mas caro puede salir.
        </p>
        <p>
          <strong>Naranja parpadeante:</strong> la cosa se pone seria. El
          parpadeo indica casi siempre fallos de encendido importantes. En
          cada fallo, combustible sin quemar llega al escape y
          sobrecalienta el catalizador. En pocas decenas de kilometros,
          puedes fundir literalmente tu catalizador, convirtiendo una
          reparacion de 70 EUR (bujias) en una factura de 1400 EUR. Conduce
          despacio, evita acelerones fuertes y llega a un taller rapido.
        </p>
        <p>
          <strong>Testigo rojo:</strong> parar. Ya sea temperatura del
          motor, presion de aceite o bateria, un testigo rojo significa un
          problema inmediato que puede destruir tu motor si sigues. Para en
          cuanto puedas con seguridad, apaga el contacto y llama a
          asistencia.
        </p>

        <h2>2. Lee el codigo de averia</h2>
        <p>
          Un testigo del motor encendido es como una notificacion del
          movil: te dice que hay algo, pero no que. Para saberlo realmente,
          hay que leer los codigos de averia almacenados en la centralita.
          Estan estandarizados: empiezan por una letra (P para motor, C
          para chasis, B para carroceria, U para red) seguida de cuatro
          cifras. Un codigo P0420 significa siempre lo mismo, ya sea en un
          SEAT, un Peugeot o un Ford.
        </p>
        <p>
          Opcion 1: taller. De 25 a 60 EUR solo por la lectura. Opcion 2:
          adaptador ELM327 Bluetooth (desde 20 EUR) con AutoDiag EU.
          Conectas el adaptador al puerto OBD2 (debajo del volante en la
          mayoria de coches), abres la app y en diez segundos ves todos los
          codigos activos, explicados en espanol, con causas probables y
          estimacion de costes.
        </p>

        <h2>3. Identifica la causa probable</h2>
        <p>
          Estos cinco codigos representan el 60 por ciento de los fallos
          mas comunes en Europa:
        </p>
        <ul>
          <li>
            <Link href="/es/codes/p0420">P0420 &mdash; eficacia catalizador</Link>
            : muy frecuente en coches de mas de 8 anos, ligado a la sonda
            lambda o al propio catalizador.
          </li>
          <li>
            <Link href="/es/codes/p0171">P0171 &mdash; mezcla pobre</Link>:
            a menudo una entrada de aire en el colector o un caudalimetro
            sucio.
          </li>
          <li>
            <Link href="/es/codes/p0300">P0300 &mdash; fallos de encendido</Link>
            : bujias o bobinas gastadas en la mayoria de casos.
          </li>
          <li>
            <Link href="/es/codes/p0442">P0442 &mdash; fuga EVAP pequena</Link>
            : a menudo solo el tapon del deposito mal cerrado.
          </li>
          <li>
            <Link href="/es/codes/p0128">P0128 &mdash; termostato</Link>:
            motor que no alcanza temperatura, termostato bloqueado abierto.
          </li>
        </ul>

        <h2>4. Los 5 reflejos inmediatos</h2>
        <p>
          Antes incluso de leer codigos, comprueba estas cinco cosas que
          pueden apagar un testigo sin herramientas. Primero, aprieta bien
          el tapon del deposito: un tapon mal cerrado es responsable del 20
          por ciento de los testigos encendidos en Europa. Luego verifica
          el nivel de aceite: un nivel bajo puede disparar el testigo.
          Despues el liquido refrigerante. Escucha tambien ruidos raros al
          ralenti &mdash; un silbido puede indicar entrada de aire, un
          tintineo una bujia defectuosa. Por ultimo, anota si has notado un
          cambio reciente: perdida de potencia, consumo alto, arranque
          dificil.
        </p>

        <h2>5. Cuando ir al taller?</h2>
        <p>
          Todo lo que afecta a la seguridad (frenos, direccion, airbags) o
          a sistemas anticontaminacion complejos (catalizador, FAP, valvula
          EGR averiada) merece un profesional. Pero para intervenciones
          simples &mdash; bujias, caudalimetro sucio, tapon, sensor de
          temperatura &mdash; un tutorial de YouTube y un juego de llaves
          bastan. El error clasico es pagar 250 EUR en el taller por una
          intervencion de 25 EUR de pieza y 15 minutos de trabajo. AutoDiag
          EU te ayuda a distinguir.
        </p>

        <h2>6. Como evitar que vuelva a pasar</h2>
        <p>
          La mejor manera de no ver el testigo encendido es el mantenimiento
          preventivo. Respeta los intervalos de cambio de aceite, cambia
          bujias cada 60&thinsp;000 km, limpia el caudalimetro una vez al
          ano, y sobre todo: usa combustible de calidad. Un diagnostico
          mensual con AutoDiag EU dura dos minutos y permite detectar
          problemillas antes de que se vuelvan grandes. Tambien te evita
          sorpresas en la ITV: desde 2010, un testigo del motor encendido
          es causa directa de rechazo.
        </p>

        <h2>En resumen</h2>
        <p>
          Un testigo encendido no es una condena. Mira su color, lee el
          codigo, identifica la causa y actua en consecuencia. Con AutoDiag
          EU y un adaptador de 20 EUR, tienes un diagnostico profesional en
          el bolsillo. Ahorras 50 EUR cada visita al taller por una simple
          lectura, y conduces sabiendo exactamente que pasa bajo el capo.
        </p>
      </ArticleLayout>
    </>
  );
}
