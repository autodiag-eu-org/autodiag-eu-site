import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESConsumoExcesivoCombustible() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;A partir de que diferencia es anormal un consumo?",
      a: "Mas del 15&nbsp;% de desviacion respecto al consumo anunciado (WLTP o fabricante), o mas del 20&nbsp;% respecto a su media habitual, es una senal. Si su coche consume normalmente 6&nbsp;L/100&nbsp;km y pasa a 7,5&nbsp;L sin cambios de uso, algo ha derivado. Las variaciones estacionales explican 5 a 10&nbsp;%, mas alla hay que buscar.",
    },
    {
      q: "&iquest;Cual es la causa mas frecuente de sobreconsumo?",
      a: "El sensor MAF (caudalimetro de aire) sucio. Envia un valor sesgado a la centralita que compensa enriqueciendo la mezcla. Limpieza con spray especifico: 15&nbsp;EUR y 10 minutos. Si no basta, cambio: 80 a 250&nbsp;EUR. Tras el MAF estan las sondas lambda fatigadas y las presiones de combustible fuera de rango.",
    },
    {
      q: "&iquest;El estilo de conduccion cuenta de verdad?",
      a: "Enormemente. Un pie pesado puede doblar el consumo en ciudad. Aceleraciones francas, frenadas bruscas y altas velocidades en autovia son los tres factores principales. A 130&nbsp;km/h se consume tipicamente 30&nbsp;% mas que a 110. Un conductor atento ahorra facilmente 1 a 2 litros a los 100&nbsp;km sin cambiar nada.",
    },
    {
      q: "&iquest;Como diagnosticar via OBD2?",
      a: "Los valores clave: short term fuel trim (STFT) y long term fuel trim (LTFT). Normal entre -5&nbsp;% y +5&nbsp;%. Mas alla de +10&nbsp;% duraderamente, la centralita enriquece para compensar una toma de aire o un sensor que lee bajo. Mas alla de +20&nbsp;% es critico. Mire tambien el valor MAF en g/s a distintos regimenes y compare con los valores esperados.",
    },
    {
      q: "&iquest;Puede un cambio de aceite reducir el consumo?",
      a: "Moderadamente, 1 a 3&nbsp;%. Un aceite demasiado viejo aumenta las fricciones internas. Si ha superado el intervalo en mucho, hagalo, ganara algunas decimas. No cuente con ello para compensar una deriva grande &mdash; si el consumo ha dado un salto, busque en otro lado.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Consumo excesivo de combustible: causas y diagnostico OBD2"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          Cuando el consumo sube sin razon aparente, rara vez es una
          fatalidad. En el 80&nbsp;% de los casos, un diagnostico OBD2
          metodico encuentra la causa en menos de una hora. Esta guia le
          da la checklist exacta para identificar al culpable, de causas
          benignas a averias mas serias, con las horquillas de precio de
          cada intervencion.
        </p>

        <h2>Verificar primero lo que cuesta cero</h2>
        <p>
          Antes de sacar el OBD2, elimine falsas alarmas. Presion de
          neumaticos: un subinflado de 0,5&nbsp;bar aumenta el consumo
          3 a 5&nbsp;%. Filtro de aire: un filtro colmatado puede costar
          0,3 a 0,5 litros a los cien. Barras o cofre de techo: hasta
          1,5 litros mas en autovia. Gasolina de mala calidad o mezcla
          con E85 no prevista: ocurre mas de lo que se cree. Condiciones
          meteorologicas: invierno, frio y neumaticos de nieve anaden
          naturalmente 0,5 a 1 litro.
        </p>

        <h2>El escaneo OBD2: fuel trims ante todo</h2>
        <p>
          Los fuel trims son los indicadores mas elocuentes. STFT (short
          term) es la correccion instantanea, LTFT (long term) es la
          media aprendida. Normalmente ambos entre -5&nbsp;% y +5&nbsp;%.
          Si LTFT supera +10&nbsp;% duraderamente, la centralita
          enriquece. Busque: toma de aire no medida (manguito, colector,
          junta de admision), MAF que lee bajo, sonda lambda aguas
          arriba fatigada, presion de combustible baja. Vea el codigo{" "}
          <Link href="/es/codes/p0171">P0171</Link>.
        </p>

        <h2>MAF y MAP: los sensores de medida de aire</h2>
        <p>
          El sensor MAF (caudalimetro masico) o MAP (presion de admision)
          indica a la centralita la cantidad de aire que entra al motor.
          Si miente, la mezcla es falsa. Un MAF sucio subestima el
          caudal, la centralita aplica menos combustible, luego escucha
          las lambdas y corrige enriqueciendo. Resultado: LTFT alto,
          consumo al alza. Limpieza con spray dedicado: 15&nbsp;EUR y 10
          minutos. Un MAF con mas de 200000&nbsp;km merece cambio aun tras
          limpieza.
        </p>

        <h2>Sondas lambda: el relevo de la regulacion</h2>
        <p>
          La sonda aguas arriba pilota la regulacion de la mezcla cada
          segundo. Una sonda fatigada (mas de 150000&nbsp;km) reacciona
          lenta, la centralita regula peor, el consumo deriva. El
          cambio cuesta 80 a 200&nbsp;EUR la pieza mas mano de obra. Las
          universales (NTK, Bosch) son igual de eficaces que las del
          fabricante a mitad de precio. Vea{" "}
          <Link href="/es/blog/coste-reparacion-catalizador-p0420">
            el coste reparacion catalizador P0420
          </Link>
          .
        </p>

        <h2>Inyectores cansados o sucios</h2>
        <p>
          En diesel, los inyectores gotean ligeramente con la edad y
          envian mas combustible del previsto. En gasolina, pueden
          ensuciarse y pulverizar peor. En ambos casos, el consumo sube.
          Una limpieza en banco (50 a 100&nbsp;EUR por inyector) suele
          devolver su aplomo a los inyectores gasolina. Para diesel, el
          test de caudal de retorno identifica directamente los
          inyectores culpables.
        </p>

        <h2>EGR y sistemas de descontaminacion</h2>
        <p>
          Una valvula EGR bloqueada abierta diluye el aire admitido y
          sube el consumo. Una EGR bloqueada cerrada satura los NOx
          pero no afecta el consumo. Un FAP colmatado aumenta la
          contrapresion de escape y por tanto el trabajo del motor:
          consumo al alza notable. Un diagnostico OBD2 lee las
          posiciones EGR y las derivas, pero solo una prueba de carretera
          confirma.
        </p>

        <h2>Neumaticos, frenos y tren rodante</h2>
        <p>
          Una pinza agarrotada que deja la pastilla rozando el disco
          crea resistencia permanente &mdash; calor excesivo en un
          lado, desgaste desigual, consumo al alza. Un rodamiento muy
          fatigado tambien produce resistencia al rodadura. Neumaticos
          de nieve dejados en verano suben el consumo en 0,5 litros.
          Vea{" "}
          <Link href="/es/blog/ruido-rodamiento-rueda-antes-itv">
            detectar un ruido de rodamiento
          </Link>
          .
        </p>

        <h2>Estilo de conduccion: el factor numero uno</h2>
        <p>
          Antes de buscar una averia, pregunter por sus habitos. &iquest;Ha
          cambiado de trayecto? &iquest;De condiciones? &iquest;Hace mas
          trayectos cortos? La eco-conduccion ahorra facilmente un
          15&nbsp;% en el mismo vehiculo. Anticipar, levantar el pie a
          tiempo, rodar a 110 en vez de 130, apagar el motor parado
          largo rato, todo eso acumulado hace una diferencia real.
        </p>

        <h2>Cuando acudir al profesional</h2>
        <p>
          Si tras verificar los puntos anteriores el consumo sigue
          anormal, una visita a un mecanico con herramienta avanzada
          permite leer modos del fabricante y acceder a parametros que
          el OBD2 estandar no expone. Cuente 50 a 100&nbsp;EUR por un
          diagnostico motor serio, rentable en la factura de combustible
          ahorrada los meses siguientes.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
