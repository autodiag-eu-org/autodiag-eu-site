import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESTripleDiagnostico() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Por que combinar tres tecnologias en vez de una?",
      a: "Porque ninguna tecnologia por si sola cubre todas las averias. El OBD2 lee los codigos de fallo guardados por la centralita, el escaneo sonoro oye los desgastes mecanicos que la ECU ignora, y la vision IA detecta las anomalias visibles (fugas, oxido, neumaticos). Juntas, las tres capas se cruzan y producen un diagnostico que supera con frecuencia el 90&nbsp;% de confianza.",
    },
    {
      q: "&iquest;Cual es una averia tipica que una sola tecnologia falla?",
      a: "Un rodamiento de cigueenal que empieza a fatigarse: el OBD2 no ve nada porque no se dispara ningun codigo, la vision IA no accede al interior del carter, pero el escaneo sonoro detecta la firma acustica del 5&nbsp;% de desgaste anormal. A la inversa, una fuga de liquido de frenos en el cilindro principal no se oye pero se ve al instante.",
    },
    {
      q: "&iquest;Necesito obligatoriamente un adaptador OBD2?",
      a: "No, puedes empezar solo con el escaneo sonoro y la vision IA. El adaptador ELM327 anade una tercera capa que mejora la confianza cuando hay un codigo, pero la app funciona perfectamente sin.",
    },
    {
      q: "&iquest;Como fusiona la app las tres fuentes?",
      a: "La capa 5 del pipeline, llamada fusion de sensores, aplica reglas expertas: si un codigo P0300 llega al mismo tiempo que una firma sonora de fallo de encendido con mas del 75&nbsp;% de confianza, el veredicto pasa de vigilar a certero.",
    },
    {
      q: "&iquest;Funciona el triple diagnostico en todas las marcas?",
      a: "Si para la parte sonora y vision, que solo dependen del telefono. Para el OBD2, la compatibilidad depende del protocolo: mas de 677 vehiculos europeos soportados, con capas de fallback para protocolos antiguos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Triple diagnostico: como sonido, vision y OBD2 se complementan"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Tecnologia"
      >
        <p>
          Hay tres maneras de hacer hablar a un coche: preguntarle,
          escucharle y mirarle. AutoDiag EU es la unica herramienta de
          consumo que combina esas tres aproximaciones en una misma
          aplicacion. Cada una tiene sus fuerzas, cada una sus angulos
          muertos, y es precisamente cruzandolas como se obtiene un
          diagnostico digno de un taller especializado &mdash; sin la
          factura del taller especializado.
        </p>

        <h2>Capa 1: el OBD2, la voz de la centralita</h2>
        <p>
          La centralita del motor habla un idioma normalizado desde 2001
          en Europa. Via un pequeno adaptador ELM327 BLE conectado bajo
          el volante, cualquier telefono puede leer los codigos
          guardados, los valores PID en tiempo real (regimen, temperatura,
          lambda, avance al encendido) y disparar tests especificos. Es
          rapido, quirurgico, y un codigo como{" "}
          <Link href="/es/codes/p0420">P0420</Link> te dice enseguida que
          el catalizador esta al final.
        </p>
        <p>
          Pero el OBD2 tiene un defecto mayor: solo ve lo que la
          centralita sabe ver. Un rodamiento de rueda gastado, una correa
          que empieza a resbalar, un amortiguador que gotea, nada de eso
          dispara codigo. Los sensores estan concentrados en combustion y
          descontaminacion. Todo lo demas es invisible para el.
        </p>

        <h2>Capa 2: el escaneo sonoro, el oido que no se cansa</h2>
        <p>
          Nuestro SVM con kernel RBF, entrenado sobre 3963 grabaciones,
          reconoce once clases de averias solo a partir de una muestra de
          pocos segundos. Distingue un golpeteo de biela de un ruido de
          balancines, un silbido de turbo sano de uno que anuncia la
          rotura de los cojinetes, un soplo de fuga de escape de una
          entrada de aire en la admision. Tu oido no sabe hacer esas
          distinciones. Se satura hacia los 15&nbsp;kHz; la IA trabaja
          sobre 56 caracteristicas espectrales y temporales hasta
          22&nbsp;kHz.
        </p>
        <p>
          El escaneo sonoro cubre el punto ciego del OBD2: oye el
          desgaste mecanico antes de que la centralita dispare el menor
          codigo.
        </p>

        <h2>Capa 3: la vision IA, el ojo que no se cansa</h2>
        <p>
          Una foto del suelo bajo el coche puede contener mas informacion
          que un escaneo completo. El color del liquido delata la
          naturaleza de la fuga, el tamano de la mancha indica la
          velocidad de la perdida, la posicion bajo el vehiculo senala el
          componente culpable. La vision IA hace todo eso en dos segundos
          y despues pasa a los neumaticos, las pastillas vistas entre los
          radios de llanta, la corrosion naciente bajo el paso de rueda.
        </p>

        <h2>Cuando las tres capas convergen</h2>
        <p>
          Un caso real. Un Peugeot 308 1.6 HDi saca el codigo P0299
          &mdash; sobrevelocidad turbo baja. El codigo solo tiene cinco
          causas posibles. El escaneo sonoro lanzado a continuacion
          muestra 82&nbsp;% de confianza en un silbido de turbo anormal.
          La vision IA, sobre una foto del motor, detecta una huella de
          aceite en el manguito de admision lado turbo. Veredicto
          consolidado: manguito perforado despues del turbo. Tiempo total
          de diagnostico: menos de cinco minutos. Tiempo de taller
          tradicional para el mismo veredicto: entre una hora y dos horas,
          facturadas.
        </p>

        <h2>La triangulacion, clave de la confianza</h2>
        <p>
          Un diagnostico aislado siempre puede equivocarse. Un diagnostico
          que cruza tres fuentes independientes es casi imposible de
          discutir. Es el principio de los sistemas criticos en aviacion
          &mdash; tres sensores, mayoria ganadora. Aplicamos la misma
          logica al coche.
        </p>

        <h2>Una filosofia mas que un gadget</h2>
        <p>
          Este triple enfoque no es un argumento de marketing, es una
          necesidad tecnica. Demasiadas aplicaciones se limitan a leer
          codigos OBD2 y traducirlos &mdash; util pero incompleto. Hemos
          construido las tres capas en paralelo porque es la unica forma
          honesta de pretender diagnosticar un coche con un telefono.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
