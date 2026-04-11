import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESPrevenirRoturaMotor() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Con que frecuencia hay que hacer un escaneo sonoro preventivo?",
      a: "Una vez al mes basta para un uso diario. Eso establece una linea base y detecta las derivas. Si haces muchos kilometros (mas de 30&nbsp;000 al ano), pasa a dos veces al mes. Antes de un viaje largo o de las vacaciones, escanea sistematicamente.",
    },
    {
      q: "&iquest;Basta con un escaneo al ralenti?",
      a: "No. Un ralenti muestra los juegos mecanicos pero no las averias bajo carga (turbo, fugas de aire). Lo ideal es grabar al ralenti caliente y luego manteniendo 2500&nbsp;rpm. Esas dos capturas cubren la mayoria de las averias detectables.",
    },
    {
      q: "&iquest;Cuanto dinero ahorra de media un escaneo preventivo?",
      a: "Muy variable. En 100 conductores seguidos durante un ano, los ahorros medios son de unos 340&nbsp;EUR gracias a reparaciones hechas pronto. Para quienes han cogido una averia grande antes de la rotura, el ahorro supera los 2000&nbsp;EUR.",
    },
    {
      q: "&iquest;La IA puede decirme cuanto tiempo me queda antes de la rotura?",
      a: "No directamente, pero te da una tendencia. Si escaneas una vez al mes, ves si una prediccion empeora. Un ruido de rodamiento que pasa del 20&nbsp;% al 55&nbsp;% en tres meses es una senal clara.",
    },
    {
      q: "&iquest;El diagnostico preventivo sustituye a las revisiones?",
      a: "No, las completa. Las revisiones oficiales siguen siendo obligatorias para el cambio de aceite, filtros, liquido de frenos, correas. El escaneo sonoro te alerta entre dos revisiones sobre las derivas que el fabricante solo verifica cada 20 o 30&nbsp;000&nbsp;km.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Prevenir la rotura de motor gracias al diagnostico sonoro preventivo"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Prevencion"
      >
        <p>
          Un dato que mereceria mas atencion: el 70&nbsp;% de las roturas
          de motor en Europa ocurren en motores que, tres meses antes, ya
          daban senales detectables. Rodamiento que empieza a marcar,
          juego de distribucion que se acentua, inyector que pierde junta,
          turbo cuyo eje coge holgura. Derivas menores, invisibles para el
          conductor, pero perfectamente legibles para un microfono y un
          algoritmo bien entrenado. El diagnostico preventivo por sonido
          es exactamente eso: atrapar esas senales antes de que cuesten
          caras.
        </p>

        <h2>Por que las averias caras son todas previsibles</h2>
        <p>
          Una biela nunca se rompe de golpe. Da senales durante cientos de
          kilometros: un ligero golpeteo bajo carga, luego un golpeteo al
          ralenti, luego un consumo de aceite creciente, luego la rotura.
          Una correa de distribucion que salta tampoco es sorpresa: el
          tensor emite un ruido especifico semanas antes, la propia correa
          cambia ligeramente su firma espectral.
        </p>

        <h2>El efecto cascada: una averia desencadena diez</h2>
        <p>
          Un rodamiento de cigueenal que empieza a gastarse produce
          particulas metalicas en el aceite. Esas particulas, arrastradas
          por la bomba, gastan el resto de los cojinetes, los soportes de
          arbol de levas, el turbo si tienes. En tres meses, una
          reparacion de 500&nbsp;EUR se convierte en un motor completo a
          rehacer por 4500&nbsp;EUR. El escaneo preventivo corta esa
          cascada de raiz.
        </p>

        <h2>Las averias mas rentables de coger pronto</h2>
        <p>
          Segun nuestro analisis de clientes, aqui el ranking por retorno
          de inversion. Primero: la correa de distribucion. Deteccion
          temprana 450&nbsp;EUR, rotura tardia hasta 8000&nbsp;EUR en
          motor de interferencia. Ratio 1 a 17. Segundo: el rodamiento de
          biela. Deteccion 800&nbsp;EUR, rotura 4500&nbsp;EUR. Tercero: el
          turbo. Deteccion 700&nbsp;EUR, rotura 2200&nbsp;EUR mas danos
          anexos. Cuarto: los inyectores. Deteccion 200&nbsp;EUR, cambio
          completo hasta 2000&nbsp;EUR.
        </p>

        <h2>Como montar un seguimiento mensual</h2>
        <p>
          El metodo mas simple es hacer un escaneo el primer sabado de
          cada mes, siempre en las mismas condiciones: motor caliente
          tras 10 minutos de ruta, ventanillas cerradas, ventilacion
          apagada, telefono sobre el capot en el mismo sitio. La app
          graba y compara con los escaneos previos. Si una clase de averia
          ve subir su confianza, recibes aviso.
        </p>

        <h2>Cuando el escaneo detecta algo</h2>
        <p>
          Cuando una prediccion supera el 60&nbsp;%, actua. Haz un segundo
          escaneo 48 horas despues para confirmar. Si la confianza se
          mantiene, pasa por taller o, si la reparacion es sencilla, hazla
          tu mismo. Entre 30 y 60&nbsp;%, vigila. Bajo 30&nbsp;%, el
          sistema es prudente pero no es aleatorio: algo ligero ha
          aparecido, tomanota.
        </p>

        <h2>El papel del historico</h2>
        <p>
          Un escaneo aislado no vale gran cosa. Un historico de doce
          escaneos mensuales vale oro. Es la curva de confianza la que
          habla: si se mantiene estable, todo va bien. Si sube, tienes una
          deriva. Esa logica de evolucion es mas fiable que un valor
          absoluto.
        </p>

        <h2>Los limites del preventivo</h2>
        <p>
          Seamos honestos: un escaneo sonoro no detecta todo. Las averias
          electronicas (centralita fallando, sensor muerto) no dejan firma
          audio. Las hidraulicas (circuito de frenos, direccion asistida)
          tampoco. Para esos casos, el OBD2 y las verificaciones visuales
          siguen siendo imprescindibles. El escaneo sonoro cubre las
          averias mecanicas y acusticas, que representan aproximadamente
          el 40&nbsp;% del total pero la mayoria de las mas caras.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
