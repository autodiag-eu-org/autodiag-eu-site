import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESVisionFugasBajoCoche() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como distingue la Vision IA una fuga de aceite de una de refrigerante?",
      a: "El modelo analiza tres senales a la vez: el color de la mancha (marron-negro para aceite motor, verde/naranja/rosa para refrigerante), la viscosidad estimada por la forma de la aureola, y la posicion bajo el vehiculo. Una mancha verde fluor delante del motor = refrigerante al 95&nbsp;%. Una mancha marron-negra en el centro = aceite motor.",
    },
    {
      q: "&iquest;A partir de que tamano debo preocuparme?",
      a: "Por debajo de 2&nbsp;cm hablamos de rezumado: vigilar, no urgente. Entre 2 y 10&nbsp;cm, la junta o el manguito fatiga de verdad, prevea intervencion en 15 dias. Mas de 10&nbsp;cm o si la mancha reaparece en horas: no ruede, se aconseja grua.",
    },
    {
      q: "&iquest;Puedo rodar si veo una gota al dia bajo mi coche?",
      a: "Si, pero verifique el nivel afectado cada tres dias. Una gota de aceite al dia son unos 30&nbsp;ml al mes: debe compensar. Si es liquido de frenos, deje de rodar de inmediato, el circuito no tolera ninguna perdida.",
    },
    {
      q: "&iquest;Hay que poner algo bajo el coche para la deteccion?",
      a: "Un simple carton blanco A4 puesto en el suelo antes de aparcar toda la noche basta. Por la manana fotografia el carton: la IA maneja mejor los contrastes sobre fondo claro y mide la mancha con precision.",
    },
    {
      q: "&iquest;Sustituye la Vision IA una visita al taller?",
      a: "No, le avisa. Le dice que fuga, donde y con que gravedad, y le orienta a la reparacion correcta. El taller sigue siendo indispensable para intervenir, pero llega con un dossier claro en vez de un presupuesto abierto.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Vision IA: detectar fugas bajo su coche con un movil"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Vision IA"
      >
        <p>
          Da marcha atras por la manana y ve una mancha sobre el
          hormigon. Primer reflejo: entornar los ojos y preguntarse si
          estaba ayer. Segundo reflejo, a partir de ahora: sacar el
          movil. La Vision IA de AutoDiag EU identifica en segundos que
          fuga, donde y con que severidad. Sin ser mecanico, sin oler
          el liquido ni mojar un dedo.
        </p>

        <h2>La foto que vale un diagnostico</h2>
        <p>
          El principio es simple: fotografia la mancha en el suelo, la
          app analiza tres dimensiones en paralelo. Primera: el color
          dominante calibrado segun la luz ambiente. Segunda: textura y
          viscosidad estimadas a partir de la forma del borde y la
          aureola. Tercera: la posicion bajo el vehiculo — el usuario
          indica donde estaba la rueda delantera izquierda y el modelo
          triangula el origen probable.
        </p>

        <h2>El catalogo cromatico de los liquidos</h2>
        <p>
          Cada liquido de un coche tiene su firma. El aceite motor
          empieza ambar y se vuelve marron-negro tras unos miles de
          kilometros: graso, denso, cae bajo el bloque. El refrigerante
          existe en verde fluor, naranja, rosa o amarillo segun quimica
          (IAT, OAT, HOAT) — fluido, ligeramente dulce, cerca de
          radiador o manguitos. El liquido de frenos es transparente a
          amarillo paja, muy fluido, fuga cerca de las ruedas o del
          cilindro maestro. La transmision automatica es rojo cereza
          nuevo, marron usado. La direccion asistida es rojo ambar. El
          limpiaparabrisas azul claro. Esa es la paleta.
        </p>

        <h2>La gravedad segun el caudal</h2>
        <p>
          Dos manchas identicas no cuentan lo mismo. Una mancha de
          10&nbsp;cm tras 8 horas parado es una alerta seria: unos
          200&nbsp;ml por noche. La misma acumulada en tres semanas es
          un rezumado a vigilar. Por eso la app pregunta desde cuando
          esta aparcado el coche. Con ese dato calcula un caudal en
          ml/h y lo clasifica en cuatro niveles: rezumado, fuga lenta,
          fuga moderada, fuga critica.
        </p>

        <h2>Coger la junta antes de la rotura</h2>
        <p>
          El interes de esta deteccion precoz no es estetico. Un
          reten de ciguenal que empieza a rezumar cuesta 180 a
          350&nbsp;EUR cambiar. Ignorado seis meses, llega al volante
          motor y contamina el embrague: la factura salta a
          1400&nbsp;EUR. Un manguito de radiador que gotea cuesta
          60&nbsp;EUR. El mismo que revienta en autopista
          sobrecalienta el motor y hace saltar la junta de culata:
          2000&nbsp;EUR minimo. La Vision IA da una o dos semanas de
          ventaja.
        </p>

        <h2>Cuando rodar, cuando grua</h2>
        <p>
          El sistema da una recomendacion clara al final del analisis.
          Rezumado ligero: rodar normal y pasar por el taller en la
          semana. Fuga lenta: verificar nivel antes de cada trayecto,
          reparacion en 15 dias. Fuga moderada: trayectos a lo
          imprescindible, reparacion en 48 horas. Fuga critica de
          liquido de frenos o refrigerante importante: no rodar, grua
          obligatoria. Misma logica que el{" "}
          <Link href="/es/codes/p0128">codigo P0128</Link> — anticipar
          siempre cuesta menos.
        </p>

        <h2>Lo que la foto no puede hacer</h2>
        <p>
          La Vision IA identifica liquido y gravedad, pero no
          sustituye un diagnostico mecanico completo. No le dice que
          junta exactamente causa la fuga — hara falta inspeccion en
          elevador. No detecta fugas internas que no salen al suelo,
          como una junta de culata que manda refrigerante al aceite.
          Para esos casos, el{" "}
          <Link href="/es/blog/motor-habla-deteccion-averias-por-sonido">
            Escaneo Sonoro motor
          </Link>{" "}
          toma el relevo.
        </p>

        <h2>El protocolo que funciona</h2>
        <p>
          El metodo que da mejores resultados: aparque en suelo claro,
          liso y seco. Si el suelo es oscuro, deslice un carton blanco
          A4 bajo el vehiculo antes de apagar el motor. Deje reposar
          dos horas minimo, idealmente toda la noche. Por la manana,
          agachese a un metro, enmarque la mancha con una referencia
          en el suelo (moneda, llave) para la escala. Lance el
          escaneo. En tres segundos sabe que fuga. Haga la foto igual
          a la semana siguiente para seguir la evolucion.
        </p>

        <h2>Combinar con el checkup mensual</h2>
        <p>
          La deteccion de fugas es la primera etapa de un{" "}
          <Link href="/es/blog/checkup-visual-ia-5-puntos-vehiculo-sano">
            checkup visual en cinco puntos
          </Link>{" "}
          que puede hacer en cinco minutos al mes. Otros puntos:
          desgaste de neumaticos, pastillas a traves de los rayos,
          niveles bajo el capo, iluminacion exterior. Si ademas tiene
          dongle OBD2, piense tambien en el{" "}
          <Link href="/es/codes/p0420">codigo P0420</Link> que suele
          acompanar a una fuga de aceite que ha alcanzado el
          catalizador. Las dos tecnologias — Vision y Escaneo Sonoro —
          se complementan.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
