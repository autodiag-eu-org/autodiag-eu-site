import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESDiagnosticoPreventivo() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cuanto se puede ahorrar realmente con un diagnostico preventivo?",
      a: "En un uso normal con un coche de mas de cinco anos, se observan facilmente entre 800 y 2500&nbsp;EUR de ahorro al ano. Procede de averias detectadas antes de romper (rodamientos, distribucion, lambda) y de piezas cambiadas en el buen momento. El ahorro no viene de una sola pieza grande sino de la acumulacion de pequenas decisiones a tiempo.",
    },
    {
      q: "&iquest;Es util un Escaneo Sonoro mensual?",
      a: "Si. La mayoria de los desgastes mecanicos evolucionan durante semanas o meses. Un escaneo mensual muestra la curva y no solo la foto. Una confianza que pasa del 15&nbsp;% al 60&nbsp;% en bearing noise en tres meses es una senal clara imposible de detectar con un solo escaneo.",
    },
    {
      q: "&iquest;Que averias son mas rentables de prevenir?",
      a: "En orden: rotura motor por distribucion olvidada (hasta 5000&nbsp;EUR de ahorro), catalizador destruido por lambda cansada (1500 a 2500&nbsp;EUR), turbo roto por falta de aceite (1500 a 3000&nbsp;EUR), caja de cambios quemada por embrague que patina demasiado (2000 a 4500&nbsp;EUR), y neumaticos destruidos por defecto de alineacion o amortiguador (300 a 800&nbsp;EUR).",
    },
    {
      q: "&iquest;Como priorizar con varias alertas?",
      a: "Use la puntuacion de salud: trate primero lo que mas pesa. Un codigo OBD2 critico va antes que una anomalia sonora al 55&nbsp;% de confianza. Una fuga visual activa va antes que una corrosion superficial ligera. La puntuacion da la jerarquia de un vistazo.",
    },
    {
      q: "&iquest;Hay que repararlo todo de inmediato?",
      a: "No. Algunas anomalias pueden vigilarse antes de tratarse, siempre que se vigilen de verdad. La app sigue la evolucion y alerta cuando se cruza un umbral. La reparacion inmediata solo hace falta en averias criticas o de seguridad.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Diagnostico preventivo: como ahorrar varios miles de euros al ano"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Ahorro"
      >
        <p>
          A nadie le gusta pagar una reparacion no prevista. Un
          presupuesto de 1800&nbsp;EUR un viernes por la tarde es el
          momento en que uno se pregunta por que no vio venir nada. La
          mayoria de las veces, esas grandes facturas no son fatales.
          Son pequenas averias dejadas sin tratar hasta que rompen otra
          cosa. El diagnostico preventivo tiene un solo objetivo: cortar
          esa cascada.
        </p>

        <h2>La regla de oro: detectar antes de romper</h2>
        <p>
          Un rodamiento de rueda que empieza a marcar cuesta
          150&nbsp;EUR. Dejado demasiado tiempo, destruye el buje
          (400&nbsp;EUR), estropea el disco por calentamiento
          (120&nbsp;EUR), gasta un neumatico en diagonal (180&nbsp;EUR)
          y hasta fragiliza la mangueta (250&nbsp;EUR). Detectado a
          tiempo: 150&nbsp;EUR. Tarde: 900&nbsp;EUR. El Escaneo Sonoro
          capta la firma bearing noise desde el 5&nbsp;% de desgaste
          anormal. Vea{" "}
          <Link href="/es/blog/ruido-rodamiento-rueda-antes-itv">
            el articulo sobre rodamientos
          </Link>
          .
        </p>

        <h2>Caso 1: la sonda lambda cansada</h2>
        <p>
          Una lambda aguas arriba tiene una vida tipica de
          150000&nbsp;km. Al fatigarse, envia valores sesgados a la
          centralita que compensa enriqueciendo la mezcla. Consumo al
          alza, catalizador sobreexigido, luego un{" "}
          <Link href="/es/codes/p0420">P0420</Link> cuando el
          catalizador esta atacado. Reparar la lambda a tiempo: 80 a
          150&nbsp;EUR. Reparar lambda + catalizador: 1200 a
          2000&nbsp;EUR. La deteccion preventiva ve la deriva mucho
          antes del umbral de codigo.
        </p>

        <h2>Caso 2: la correa de distribucion</h2>
        <p>
          El escenario catastrofe por excelencia. En motor de
          interferencia (la mayoria de los modernos), una rotura de
          distribucion golpea las valvulas contra los pistones. 3500 a
          6000&nbsp;EUR. Una distribucion cambiada a tiempo (100000 a
          160000&nbsp;km segun modelo) cuesta 500 a 1200&nbsp;EUR. El
          Escaneo Sonoro identifica firmas de holgura o tension
          anormal antes de la rotura.
        </p>

        <h2>Caso 3: el turbo y sus charcos</h2>
        <p>
          Un turbo que empieza a gotear aceite por el rodamiento de eje
          acaba sin lubricacion y se agarrota. La deteccion visual de
          una traza de aceite en el manguito de admision mas un silbido
          anormal permite intervenir por 400 a 800&nbsp;EUR. Un turbo
          fundido: 1500 a 3000&nbsp;EUR, mas danos por aceite tragado
          si llega lejos.
        </p>

        <h2>Caso 4: los amortiguadores y sus danos colaterales</h2>
        <p>
          Un amortiguador que fuga deja progresivamente de amortiguar.
          El neumatico rebota, el desgaste se hace desigual, los discos
          calientan mas, el tren rodante envejece mas rapido. Un par de
          amortiguadores: 300 a 500&nbsp;EUR. No cambiarlos: un par de
          neumaticos al ano a 400&nbsp;EUR mas desgaste acelerado. El
          analisis acelerometro del Drive Test mide el coeficiente zeta
          sin desmontar.
        </p>

        <h2>Caso 5: inyectores diesel obturados</h2>
        <p>
          Un inyector que gotea envia mas carburante del previsto al
          cilindro. Sintoma: consumo anormal, humos negros, misfire
          ocasional. Dejado demasiado tiempo, dana el piston o el FAP.
          Limpiar o cambiar a tiempo: 150 a 400&nbsp;EUR. Reparar los
          danos: 1500&nbsp;EUR y mas. La fusion Escaneo Sonoro (clase
          injector noise) + OBD2 (fuel trims anormales) da una
          deteccion precoz fiable.
        </p>

        <h2>El balance anual de un propietario atento</h2>
        <p>
          Ejemplo cifrado en un coche de 9 anos, 130000&nbsp;km.
          Durante el ano, la app detecto: una deriva lambda (reparada
          por 110&nbsp;EUR, 1000&nbsp;EUR ahorrados en el catalizador),
          un rodamiento naciente (180&nbsp;EUR, 600&nbsp;EUR ahorrados
          en disco y neumatico), inicio de fuga turbo (400&nbsp;EUR de
          retoque, 1800&nbsp;EUR ahorrados en cambio completo), y
          desgaste de pastillas detectado con antelacion (70&nbsp;EUR,
          250&nbsp;EUR ahorrados en disco rayado). Gasto total:
          760&nbsp;EUR. Ahorro total: 3650&nbsp;EUR. Margen neto: unos
          2890&nbsp;EUR al ano.
        </p>

        <h2>La paradoja de la prevencion</h2>
        <p>
          El problema de la prevencion es que nunca se ven las
          catastrofes evitadas. Solo se ve el precio de las pequenas
          reparaciones hechas. Por eso muchos propietarios descuidan el
          diagnostico preventivo. La puntuacion de salud, historiada en
          la app, hace este comparativo visible y concreto. Vea{" "}
          <Link href="/es/blog/puntuacion-salud-vehiculo-calculo-nota-100">
            como se calcula la puntuacion de salud
          </Link>
          .
        </p>

        <h2>El verdadero lujo es la tranquilidad</h2>
        <p>
          Mas alla de las cifras, el diagnostico preventivo aporta
          algo dificil de monetizar: sabe en que estado esta su coche.
          Sin dudas, sin angustia, sin sorpresas de presupuesto. Se va
          de fin de semana sabiendo que todo esta OK. Vende su coche
          con historial claro y puntuacion reciente. Eso tambien tiene
          valor.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
