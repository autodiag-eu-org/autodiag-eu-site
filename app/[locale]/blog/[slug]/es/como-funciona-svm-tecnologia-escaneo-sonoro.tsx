import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESComoFuncionaSVM() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Que es un SVM en terminos simples?",
      a: "Un SVM (Support Vector Machine, maquina de vectores soporte) es un algoritmo de clasificacion que busca trazar fronteras optimas entre varias categorias en un espacio de gran dimension. Imagina 3963 puntos dispersos en un espacio de 56 dimensiones: el SVM encuentra las superficies que separan mejor los 11 grupos de averias. Un sonido nuevo se clasifica mirando a que lado de las superficies cae.",
    },
    {
      q: "&iquest;Por que 56 caracteristicas exactamente?",
      a: "Porque es el numero que da el mejor compromiso precision/velocidad para nuestra pipeline. 40 coeficientes MFCC cubren el timbre perceptivo, 5 caracteristicas espectrales anaden info general (centroide, ancho de banda, rolloff, flujo, contraste) y algunas metricas temporales completan el conjunto. Mas alla, la precision se estanca pero el tiempo de calculo aumenta.",
    },
    {
      q: "&iquest;Por que kernel RBF y no lineal?",
      a: "Porque las clases de averias no son separables por rectas en el espacio de 56 dimensiones. El kernel RBF (Radial Basis Function) proyecta implicitamente los datos a un espacio de dimension infinita donde las fronteras se vuelven lineales. Es matematicamente elegante y concretamente eficaz: la precision pasa del 78&nbsp;% con kernel lineal al 91.3&nbsp;% con RBF.",
    },
    {
      q: "&iquest;Que tamano tiene el modelo final?",
      a: "Unos 12&nbsp;MB para el archivo .pkl serializado. Es pequeno comparado con una red neuronal profunda (a menudo varios cientos de MB). Esa ligereza es una ventaja concreta: el modelo se carga en memoria en menos de un segundo y una prediccion tarda unos 30&nbsp;ms en servidor estandar.",
    },
    {
      q: "&iquest;Como se gestiona el equilibrio entre las 11 clases?",
      a: "El dataset no esta perfectamente equilibrado: ciertas clases tienen mas ejemplos que otras (air leak con 1005, normal engine con 269). Usamos una ponderacion por clase durante el entrenamiento para compensar ese desequilibrio, lo que evita que el modelo favorezca las clases mayoritarias en detrimento de las minoritarias.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Como funciona nuestro SVM: la tecnologia detras del Escaneo Sonoro"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={11}
        category="Tecnologia"
      >
        <p>
          Si te pica la curiosidad por saber lo que realmente pasa
          cuando pulsas el boton &laquo;iniciar escaneo&raquo; de la
          app AutoDiag EU, lo que sigue es para ti. Nada de
          generalidades marketing: una vuelta real por la pipeline,
          capa a capa, con las decisiones tecnicas que tomamos y sus
          razones. El sistema corre sobre un backend Python con
          scikit-learn y procesa cada grabacion en siete etapas
          distintas, siete capas que transforman un archivo audio
          bruto en un diagnostico claro y una puntuacion de confianza.
        </p>

        <h2>Capa 1: verificacion de calidad</h2>
        <p>
          Antes de cualquier analisis se comprueba que la grabacion es
          explotable. &iquest;Volumen muy bajo? Se rechaza.
          &iquest;Saturacion detectada? Se rechaza. &iquest;Duracion
          insuficiente (menos de 3 segundos)? Se rechaza. &iquest;Ruido
          de fondo que aplasta la senal motor? Se avisa al usuario.
          Esa puerta de calidad, implementada con librosa, evita dar
          resultados fantasiosos a partir de malas grabaciones. Es una
          inversion que aumenta la fiabilidad efectiva del sistema en
          condiciones reales.
        </p>

        <h2>Capa 2: reduccion de ruido</h2>
        <p>
          Incluso con una buena grabacion siempre hay ruido parasito:
          viento, trafico, calefaccion de habitaculo, voces del
          entorno. La capa 2 aplica un filtro de Wiener via la libreria
          noisereduce para estimar el ruido de fondo y retirarlo sin
          danar la senal util. El filtro trabaja sobre una estimacion
          espectral: identifica las bandas de frecuencia dominadas por
          el ruido estacionario y reduce ahi la amplitud, preservando
          los transitorios que son la informacion interesante.
        </p>

        <h2>Capa 3: extraccion de las 56 caracteristicas</h2>
        <p>
          Aqui es donde el audio se vuelve matematica. La senal se
          divide en ventanas de 25&nbsp;ms que se solapan, cada ventana
          pasa por una transformada de Fourier, luego por una
          proyeccion sobre la escala Mel que corresponde a la
          percepcion humana del timbre, y luego por una transformada
          coseno discreta que produce los 40 coeficientes MFCC. Se
          anaden 5 caracteristicas espectrales (centroide espectral,
          ancho de banda, rolloff, flujo espectral, contraste por
          banda) y algunas metricas temporales como la envolvente de
          energia y la tasa de paso por cero. Total: 56 valores
          numericos por grabacion.
        </p>

        <h2>Capa 4: clasificacion por SVM</h2>
        <p>
          El vector de 56 valores se pasa al clasificador SVM. El
          modelo se ha entrenado sobre 3963 grabaciones etiquetadas,
          con reparto aproximado de 80&nbsp;% entrenamiento y
          20&nbsp;% test. El kernel RBF proyecta los datos a un
          espacio de dimension infinita donde las fronteras entre
          clases se vuelven lineales. Los hiperparametros C
          (regularizacion) y gamma (ancho del kernel) se optimizaron
          por grid search con validacion cruzada en 5 folds. Resultado
          final: 91.3&nbsp;% de precision sobre el set de test
          independiente.
        </p>

        <h2>Capa 5: fusion OBD2</h2>
        <p>
          Si hay un dongle OBD2 conectado durante el escaneo, el
          sistema recoge los codigos de fallo activos y los datos en
          vivo (regimen, carga, temperatura, tensiones de sondas).
          Esas informaciones se cruzan con la prediccion audio mediante
          un sistema de reglas expertas: un codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link> refuerza una
          prediccion misfire, un{" "}
          <Link href="/es/codes/p0420">P0420</Link> refuerza exhaust
          leak, un <Link href="/es/codes/p0325">P0325</Link> refuerza
          knock, etc. La fusion puede aumentar la confianza final en
          varios puntos cuando las dos fuentes concuerdan, o bajarla
          cuando divergen.
        </p>

        <h2>Capa 6: interpretacion por Claude API</h2>
        <p>
          La salida bruta del SVM es util para un mecanico pero dificil
          de leer para un conductor. La capa 6 usa Claude API para
          transformar la prediccion en un mensaje claro en espanol:
          explicacion de la averia, causas probables, gravedad, coste
          aproximado, gestos inmediatos. Importante: Claude nunca
          recibe el audio bruto. Recibe unicamente la clase predicha,
          la confianza y el contexto OBD2. El porcentaje de confianza
          siempre viene del SVM, nunca de Claude. Es una regla
          absoluta de la pipeline.
        </p>

        <h2>Capa 7: visualizacion y umbrales</h2>
        <p>
          La ultima capa, en el frontend, aplica los umbrales de
          confianza para determinar el color y el tono del mensaje. Al
          menos 80&nbsp;% de confianza: verde, diagnostico fiable,
          accion recomendada. Entre 60 y 79&nbsp;%: naranja, a
          vigilar, segundo escaneo aconsejado. Entre 30 y 59&nbsp;%:
          amarillo claro, resultado indicativo. Por debajo del
          30&nbsp;%: gris, no concluyente, puedes repetir en mejores
          condiciones. Esos umbrales se calibraron sobre datos reales
          para equilibrar sensibilidad y especificidad.
        </p>

        <h2>Por que esta eleccion de arquitectura</h2>
        <p>
          Podriamos haber ido con un CNN deep learning, a la moda desde
          hace diez anos. No lo hicimos por tres razones: el tamano
          del dataset (3963 es comodo para SVM, justo para CNN), la
          restriccion de latencia (30&nbsp;ms para SVM, varios
          cientos de ms para un CNN clasico) y la interpretabilidad
          (con SVM se puede remontar a las frecuencias influyentes,
          con red profunda es mas dificil). El SVM es una eleccion
          pragmatica, no una limitacion. Cuando nuestro dataset
          alcance 15&nbsp;000 muestras, probablemente pasaremos a un
          modelo hibrido CNN + SVM, pero la arquitectura en 7 capas se
          mantendra. Para ir mas lejos, lee{" "}
          <Link href="/es/blog/sonidos-inaudibles-ia-detecta-lo-que-oido-no-puede">
            los sonidos inaudibles que la IA capta
          </Link>{" "}
          y la{" "}
          <Link href="/es/blog/11-averias-motor-detectables-analisis-sonoro">
            lista de las 11 clases detectables
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
