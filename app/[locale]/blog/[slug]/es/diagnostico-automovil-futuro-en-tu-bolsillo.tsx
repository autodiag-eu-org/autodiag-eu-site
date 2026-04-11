import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESDiagnosticoFuturoBolsillo() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Puede un movil sustituir realmente una herramienta de diagnostico profesional?",
      a: "Para la gran mayoria de averias cotidianas, si. Un movil moderno tiene un microfono de calidad, un sensor foto potente, un acelerometro y GPS. Con los algoritmos adecuados en el servidor, se convierte en una herramienta que rivaliza con los escaneres profesionales en las averias mas frecuentes. Para reprogramaciones y codificaciones de centralitas sigue haciendo falta un util de taller.",
    },
    {
      q: "&iquest;Que sensores del movil se usan en realidad?",
      a: "El microfono para el Escaneo Sonoro motor e habitaculo, la camara para la Vision IA y el OCR matricula/VIN, el acelerometro para el Drive Test y el analisis de suspensiones, el GPS para el Virtual Dyno y el analisis de embrague, el giroscopio para el comportamiento dinamico. Seis sensores presentes en cualquier smartphone de menos de 5 anos.",
    },
    {
      q: "&iquest;El tratamiento ocurre en el movil o en el servidor?",
      a: "Hibrido. Preprocesamiento audio, captura y OCR corren en el movil. La clasificacion SVM y el analisis Claude corren en un servidor FastAPI en Europa central. Eso mantiene el movil ligero y asegura una calidad de modelo homogenea para todos los usuarios.",
    },
    {
      q: "&iquest;Funciona sin conexion?",
      a: "Parcialmente. El checkup visual local y la lectura basica OBD2 funcionan sin red. El Escaneo Sonoro completo y el analisis Claude necesitan conexion para enviar datos al backend. Una version offline total esta planeada como mejora.",
    },
    {
      q: "&iquest;Cual es la diferencia con una dashcam o un OBD2 sobre el salpicadero?",
      a: "Esas herramientas capturan datos pero no los entienden. Una dashcam graba una imagen, no le dice si la correa visible esta gastada. Un OBD2 sobre el salpicadero muestra cifras pero no le dice si son anormales para su vehiculo. La inteligencia viene del par sensor + IA, no del sensor solo.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="El futuro del diagnostico automovil ya esta en su bolsillo"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={9}
        category="Tecnologia"
      >
        <p>
          Hace diez anos, diagnosticar un coche requeria una maleta pro de
          3000&nbsp;EUR y una formacion especifica. Hace cinco, un dongle
          ELM327 de 20&nbsp;EUR y una app empezaron a democratizar la
          lectura de codigos. En 2026 estamos viviendo otro salto
          tecnologico: su movil mismo, sin accesorio, se convierte en
          una herramienta de diagnostico completa. No porque el hardware
          haya cambiado, sino porque el software ha alcanzado por fin el
          material que duerme en su bolsillo desde hace anos.
        </p>

        <h2>Seis sensores que esperaban un cerebro</h2>
        <p>
          Su smartphone ya llevaba todo lo necesario para interrogar un
          coche. Un microfono lineal hasta 22&nbsp;kHz capaz de grabar
          frecuencias que su oido ya no procesa. Un sensor foto de alta
          resolucion capaz de analizar el color de un fluido o la
          geometria de un neumatico. Un acelerometro de tres ejes que
          muestrea a 200&nbsp;Hz y mide los recorridos de suspension. Un
          GPS que da la velocidad real con precision submetrica. Un
          giroscopio que captura rotaciones. Y por supuesto procesador y
          conectividad para enviar todo a un servidor de analisis.
        </p>
        <p>
          Esos sensores siempre estuvieron ahi. Lo que faltaba eran
          algoritmos para hacerlos hablar. Un microfono sin SVM es solo
          un micro. Un sensor foto sin Vision IA es solo una camara. 2025
          trajo la madurez de modelos ligeros ejecutables localmente y
          en servidor a coste manejable. Eso es lo que explotamos.
        </p>

        <h2>El Escaneo Sonoro: 56 caracteristicas por segundo</h2>
        <p>
          Cuando graba unos segundos de sonido motor, la pipeline audio
          extrae 40 coeficientes MFCC y 16 features espectrales
          adicionales. Esas 56 cifras describen el timbre del motor con
          una precision que su oido no puede alcanzar. Un SVM con kernel
          RBF, entrenado sobre 3963 ficheros etiquetados, las clasifica
          entre 11 categorias. Todo en 30 milisegundos en un servidor
          estandar.
        </p>

        <h2>Vision IA: cada foto es un analisis</h2>
        <p>
          Una foto del suelo bajo el coche contiene mas informacion de
          la que parece. El color del fluido (verde, rosa, naranja, rojo,
          marron, transparente) identifica el tipo de fuga. El tamano de
          la mancha da el caudal de perdida. Una foto bajo la llanta,
          por los rayos, mide el espesor del forro de pastilla a pocos
          milimetros. Una foto del bajo detecta corrosion antes de que
          sea estructural. Cada checkup visual dura menos de dos minutos
          y genera un informe consolidado.
        </p>

        <h2>OBD2 se convierte en una capa entre otras</h2>
        <p>
          Con un dongle BLE, el movil capta los codigos y valores en
          tiempo real. Pero este flujo ya no es el corazon del
          diagnostico, es una fuente adicional que confirma o desmiente
          lo que el sonido y la vision ya han visto. Este giro
          filosofico es fundamental. Vea{" "}
          <Link href="/es/blog/por-que-escaner-obd2-solo-no-es-suficiente-2026">
            por que un escaner OBD2 solo ya no basta
          </Link>
          .
        </p>

        <h2>Drive Test, Virtual Dyno y mas alla</h2>
        <p>
          El mismo smartphone permite analisis que antes requerian
          bancos especificos. Un Virtual Dyno calcula la potencia real a
          partir de aceleracion, peso y arrastre aerodinamico, usando
          GPS y acelerometro como referencia. El analisis de
          amortiguadores se hace rodando sobre un badeno a velocidad
          constante: la oscilacion medida por el sensor da el
          coeficiente de amortiguamiento zeta. El patinaje del embrague
          se detecta por correlacion entre velocidad real GPS y regimen
          OBD2. Todo en la app.
        </p>

        <h2>Lo que cambia en concreto</h2>
        <p>
          Un propietario que oye un ruido sospechoso ya no tiene que ir
          al taller por un diagnostico de pago. Lanza un escaneo, lee el
          veredicto, decide. Un comprador de ocasion inspecciona un
          coche en 30 minutos. El vendedor dificilmente podra mentir a
          cuatro fuentes de datos independientes. Vea{" "}
          <Link href="/es/codes/p0011">el codigo P0011</Link> como
          ejemplo.
        </p>

        <h2>Un punto de inflexion, no una moda</h2>
        <p>
          Esto no es otro gadget del App Store. Es un cambio de
          paradigma que probablemente necesitara cinco o diez anos para
          reemplazar las herramientas tradicionales en la cabeza del
          gran publico. Pero para las personas que quieren entender su
          coche hoy, el futuro ya esta disponible. Basta con abrir la
          app y dejar hablar a los sensores que duermen en su bolsillo
          desde hace cinco anos.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
