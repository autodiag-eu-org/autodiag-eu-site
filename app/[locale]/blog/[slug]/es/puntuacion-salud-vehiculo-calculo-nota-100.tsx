import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESPuntuacionSaludVehiculo() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como se calcula la puntuacion?",
      a: "Se parte de 100 puntos. Cada anomalia detectada resta un numero de puntos segun su gravedad, su fuente y la confianza asociada. Un codigo OBD2 critico resta entre 15 y 25 puntos. Una firma sonora anormal con mas del 80&nbsp;% de confianza resta entre 8 y 15 puntos. Un elemento visual como una fuga mayor resta entre 10 y 20 puntos. La puntuacion final esta topada en 100 y nunca es negativa.",
    },
    {
      q: "&iquest;Que nota corresponde a que salud?",
      a: "90 a 100: excelente, ninguna accion. 75 a 89: buen estado, algunos puntos a vigilar. 60 a 74: correcto pero varios elementos requieren atencion. 40 a 59: preocupante, reparar rapido. 0 a 39: degradado, intervencion urgente. Los umbrales estan calibrados para no alarmar sin razon a un coche que rueda normalmente.",
    },
    {
      q: "&iquest;Por que la confianza del SVM influye en la puntuacion?",
      a: "Porque una deteccion al 55&nbsp;% no debe tratarse como una al 92&nbsp;%. El peso de la penalidad es proporcional a la confianza. Al 55&nbsp;%, se resta el 40&nbsp;% de la penalidad base. Al 92&nbsp;%, el 100&nbsp;%. Asi se evitan falsos positivos que harian caer una nota injustamente.",
    },
    {
      q: "&iquest;Evoluciona la puntuacion en el tiempo?",
      a: "Si, cada escaneo se historiza. Vera la curva de salud de su coche sobre las ultimas semanas o meses. Una tendencia descendente habla mas que un valor puntual. Si su puntuacion cae de 92 a 78 en tres meses, es una senal clara de que algo se degrada progresivamente.",
    },
    {
      q: "&iquest;Sustituye la puntuacion a una ITV?",
      a: "No, la complementa. La ITV sigue siendo la referencia legal y no queremos sustituirla. La puntuacion salud es un indicador pedagogico que le ayuda a preparar su coche antes de la ITV y a evitar sorpresas el dia D.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Puntuacion de salud del vehiculo: como calculamos su nota sobre 100"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={9}
        category="Tecnologia"
      >
        <p>
          Una cifra unica que resume la salud de su coche es un viejo
          sueno. Los intentos existen desde hace anos, a veces
          simplificados al extremo (numero de codigos por coeficiente)
          o tan complejos que se vuelven opacos. La puntuacion AutoDiag
          EU se diseno para ser robusta, comprensible y verificable. Asi
          funciona.
        </p>

        <h2>Principio basico: 100 puntos al inicio</h2>
        <p>
          Un coche perfectamente sano tiene 100 puntos. No puede ganar
          ninguno, solo perder. Cada escaneo calcula el total de
          penalidades de las tres fuentes (OBD2, sonido, vision) y lo
          resta de 100. Esta logica inversa es intuitiva: cuanto mas
          alta la nota, mejor.
        </p>

        <h2>Fuente 1: OBD2</h2>
        <p>
          Un codigo resta entre 5 y 25 puntos segun gravedad. Un codigo
          pending no confirmado resta la mitad que uno confirmado. Un
          codigo historico (borrado pero trazado) aun menos. Los
          codigos se clasifican en cuatro niveles:
        </p>
        <p>
          Critico (20 a 25): fallos de encendido multiples, temperatura
          motor fuera de rango, presion aceite baja. Alto (12 a 18):
          lambda cansada, mezcla rica o pobre prolongada, EGR bloqueada.
          Medio (6 a 12): catalizador al limite, sensor ABS, airbag.
          Bajo (2 a 5): defectos informativos, testigos secundarios.
          Ejemplo: el{" "}
          <Link href="/es/codes/p0420">codigo P0420</Link>, clasificado
          medio.
        </p>

        <h2>Fuente 2: Escaneo Sonoro</h2>
        <p>
          Cada anomalia detectada por el SVM tiene un peso base y una
          confianza. Penalidad = peso base por confianza SVM, con
          umbral minimo del 30&nbsp;% bajo el cual no se aplica nada.
          Un golpeteo motor al 85&nbsp;% de confianza con peso base 18
          resta 15 puntos. Un tiqueteo al 62&nbsp;% con peso base 10
          resta 6 puntos.
        </p>
        <p>
          Las 11 clases del SVM tienen pesos calibrados por gravedad
          motor: knock y bearing noise tienen los pesos mas altos
          (desgaste mecanico profundo), belt noise y tick pesos medios,
          air leak y exhaust leak pesos medios a bajos.
        </p>

        <h2>Fuente 3: Vision IA</h2>
        <p>
          Cada hallazgo visual se clasifica en tres niveles. Menor (3 a
          5 puntos): rastro de aceite seco, corrosion superficial
          ligera, neumatico con profundidad suficiente pero desgaste
          visible. Medio (8 a 12): fuga activa, corrosion activa,
          pastilla bajo 4&nbsp;mm, neumatico cerca del limite legal.
          Severo (15 a 20): fuga mayor, herrumbre perforante, pastilla
          en fin de vida, neumatico en testigo de desgaste. Estos pesos
          se inspiran en los criterios ITV europeos.
        </p>

        <h2>Fusion y tope</h2>
        <p>
          La suma bruta de penalidades esta topada en 100 para evitar
          notas negativas sin sentido. Hay una regla anti-doble
          contabilidad: si un codigo OBD2 y un Escaneo Sonoro apuntan a
          la misma averia (por ejemplo un{" "}
          <Link href="/es/codes/p0300">P0300</Link> y un misfire
          sonoro), solo se cuenta la mayor penalidad, no las dos. Esta
          regla evita sobrepenalizar un coche con una sola averia real
          detectada por dos fuentes.
        </p>

        <h2>Interpretacion honesta de los rangos</h2>
        <p>
          Una nota de 88 en un coche de 10 anos es excelente. 88 en un
          coche nuevo es correcto pero no perfecto. La cifra se lee en
          contexto. La app muestra tambien el delta respecto a la nota
          media de coches de la misma edad y motorizacion. Un Clio 4 de
          2016 con 82 puntos esta en la media y no debe preocupar. El
          mismo con 55 puntos pide atencion inmediata.
        </p>

        <h2>La tendencia cuenta mas que el valor</h2>
        <p>
          Lo que mas nos interesa no es la nota de hoy sino la derivada
          en el tiempo. Si su coche pierde 15 puntos en dos meses,
          algo pasa. Si se mantiene estable en 78 desde hace un ano, es
          un equilibrio. Cada escaneo lleva marca temporal y ve la
          curva. Igual que el seguimiento de tension arterial o
          glucemia en medicina: una medida puntual dice poco, una serie
          lo dice todo.
        </p>

        <h2>No es una nota de taller</h2>
        <p>
          Esta nota no es un veredicto de ITV ni una opinion de
          mecanico. Es un indicador pedagogico que le ayuda a entender
          el estado de su coche y a tomar decisiones informadas. Cuando
          la nota baja, sabe donde mirar. Cuando sube tras reparacion,
          tiene la prueba de que la intervencion sirvio. Una
          herramienta, no un oraculo.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
