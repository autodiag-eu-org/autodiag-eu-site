import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESBateriaDebilidad() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cuanto dura una bateria de coche de media?",
      a: "Entre 4 y 7 anos para una bateria de plomo clasica en uso normal, 6 a 10 anos para una AGM de calidad. Las baterias duran cada vez menos en los coches modernos por culpa del Start/Stop y los equipamientos electronicos. En zona fria la vida cae 1 a 2 anos. En ciudad con trayectos cortos, puede reducirse a 3 anos.",
    },
    {
      q: "&iquest;Cuales son los signos de una bateria fatigada?",
      a: "Arranque lento por la manana, sobre todo con frio. Reloj y ajustes que se resetean. Faros que se debilitan con motor parado. Testigo de bateria que se enciende a veces. Corte del Start/Stop que se vuelve permanente. Ruido de rele que suena sin arrancar. La perdida progresiva de CCA es medible con un tester de 20&nbsp;EUR.",
    },
    {
      q: "&iquest;Como testear una bateria uno mismo?",
      a: "Un simple multimetro da una primera indicacion. Tension en reposo tras 2&nbsp;h de parada: debe ser superior a 12,6&nbsp;V (100&nbsp;% carga). Por debajo de 12,4&nbsp;V la bateria esta al 75&nbsp;%. Bajo 12,2&nbsp;V esta al 50&nbsp;% y ya degradada. Durante el arranque, la tension no debe bajar nunca de 10&nbsp;V. Para un test real de capacidad hace falta un tester de carga o CCA (20 a 60&nbsp;EUR).",
    },
    {
      q: "&iquest;Debo elegir plomo o AGM?",
      a: "Depende del coche. Un coche sin Start/Stop y poca electronica acepta una plomo clasica de 80 a 150&nbsp;EUR. Un coche con Start/Stop exige AGM o EFB (130 a 300&nbsp;EUR) &mdash; una plomo clasica no aguantara 18 meses. Nunca ponga una plomo clasica en un coche concebido para AGM, danaria tambien el alternador.",
    },
    {
      q: "&iquest;Se puede recuperar una bateria ya descargada?",
      a: "Si no esta muy degradada, si. Una carga lenta (amperaje bajo durante 10 horas) puede despertar una bateria que ha cogido frio o ha sido descargada por accesorio olvidado. Un cargador inteligente es indispensable. Pero si la bateria esta sulfatada (mas de 3 anos, descargada completamente varias veces), ya no hay gran cosa que hacer.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Bateria de coche: signos de debilidad antes de la averia total"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          La bateria es el componente que falla en el peor momento: un
          lunes por la manana, con frio, cuando hay que salir si o si.
          Sin embargo, una bateria casi nunca muere bruscamente. Da
          senales previas, a veces durante meses. Saber reconocerlos
          permite anticipar el cambio en lugar de sufrirlo. Esta guia
          detalla cada signo, cada test posible y el buen momento para
          cambiar.
        </p>

        <h2>La regla de los tres anos</h2>
        <p>
          Una bateria de coche empieza a dar signos de fatiga hacia los
          3 anos y falla del todo entre los 4 y 7 anos segun el uso. A
          partir de 3 anos, haga un test de carga cada otono &mdash;
          antes del invierno, el periodo mas exigente. Una bateria que
          ha pasado un verano ardiente con muchas paradas puede estar
          mas cansada de lo que parece.
        </p>

        <h2>Signo 1: arranque lento con frio</h2>
        <p>
          El frio es el enemigo numero uno. Una bateria fatigada pierde
          hasta el 35&nbsp;% de su capacidad a cero grados y el
          50&nbsp;% a menos 18. Si su motor gira mas despacio en
          invierno que en verano, es la primera senal. Un arranque mas
          largo por la manana que por la tarde tambien es tipico. El
          ruido caracteristico: el motor de arranque fuerza en lugar
          de cantar franco.
        </p>

        <h2>Signo 2: Start/Stop que rehusa funcionar</h2>
        <p>
          Los coches modernos tienen un sistema Start/Stop que solo se
          activa si la bateria esta en forma. Cuando su Start/Stop
          deja de funcionar en los semaforos sin razon, la centralita
          ha comprendido que la bateria no tiene las reservas
          necesarias para un rearranque limpio. Suele ser la primera
          senal visible, y desgraciadamente muchos conductores piensan
          en un bug e ignoran la alerta.
        </p>

        <h2>Signo 3: reloj y ajustes que saltan</h2>
        <p>
          Cuando la bateria pasa bajo cierto umbral, incluso las
          reservas para memorias electronicas se agotan. Resultado:
          reloj que se resetea, emisoras perdidas, contadores de
          mantenimiento a cero, a veces testigos transitorios al
          arranque. Si tiene que reprogramar sus emisoras cada semana,
          la bateria esta muerta.
        </p>

        <h2>Signo 4: faros que se debilitan</h2>
        <p>
          Motor parado, faros encendidos: deben permanecer estables
          varios minutos. Si la intensidad baja visiblemente en un
          minuto, la bateria ya no retiene carga. Mismo test con
          luces de emergencia: deben aguantar decenas de minutos sin
          luchar. Test simple sin herramientas.
        </p>

        <h2>Signo 5: la tension cae en el arranque</h2>
        <p>
          Con un multimetro conectado en bornes durante el arranque,
          vera caer la tension. En bateria sana, cae de 12,6 a 10-11&nbsp;V
          y vuelve a subir. En bateria fatigada, cae bajo 10&nbsp;V y
          se queda baja. Bajo 9&nbsp;V durante un arranque, cambie sin
          esperar.
        </p>

        <h2>Voltaje en reposo: el test de base</h2>
        <p>
          Motor parado al menos 2 horas, mida en bornes. 12,7&nbsp;V o
          mas: bateria al 100&nbsp;%. 12,5&nbsp;V: 80&nbsp;%. 12,3&nbsp;V:
          60&nbsp;%. 12,0&nbsp;V: 30&nbsp;%. Bajo 11,8&nbsp;V: descargada
          o averiada. Valores para bateria 12V clasica. En AGM los
          escalones son ligeramente distintos pero el principio es el
          mismo.
        </p>

        <h2>Alternador: el segundo sospechoso</h2>
        <p>
          Una bateria que no aguanta carga puede ocultar un alternador
          fatigado. Motor al ralenti, tension en bornes debe estar
          entre 13,8 y 14,4&nbsp;V. Mas baja: carga insuficiente. Mas
          alta (sobre 15&nbsp;V): regulador loco que sobrecarga y mata
          la bateria prematuramente. El Escaneo Sonoro puede detectar
          un alternador que empieza a silbar.
        </p>

        <h2>Trayectos cortos: el asesino lento</h2>
        <p>
          Una bateria necesita unos 20 minutos de rodaje para
          recuperar lo que el arranque le ha quitado. Un uso diario
          de trayectos cortos (5 a 10 minutos) la deja en deficit
          permanente. Acaba sulfatandose y muere prematuramente. Si
          esta en ese caso, ruede un poco mas lejos una vez por
          semana o use un mantenedor de carga.
        </p>

        <h2>Cambiar en el momento justo</h2>
        <p>
          No esperar a la averia total. Una bateria que muestra dos o
          tres signos debe cambiarse en el mes. Cuente 80 a 300&nbsp;EUR
          segun tipo y capacidad, mas montaje por profesional si su
          coche necesita codificacion (BMW, Mercedes, Audi recientes).
          No olvide nunca codificar la nueva bateria en esas marcas, si
          no el alternador la carga mal y muere rapido. Vea tambien{" "}
          <Link href="/es/blog/testigo-aceite-encendido-seguir-o-parar">
            testigo aceite encendido: seguir o parar
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
