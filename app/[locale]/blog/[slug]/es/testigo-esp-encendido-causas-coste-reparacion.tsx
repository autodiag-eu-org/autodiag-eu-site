import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESTestigoESP() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Se puede conducir con el testigo ESP encendido?",
      a: "Si, pero sin las asistencias electronicas de estabilidad. La frenada clasica y las asistencias basicas siguen funcionando. Reduzca la velocidad, evite maniobras bruscas y repare rapido. En condiciones humedas, con hielo o en curva cerrada, la ausencia de ESP aumenta significativamente el riesgo de perdida de control.",
    },
    {
      q: "&iquest;Cual es la diferencia entre ESP y ABS?",
      a: "El ABS impide el bloqueo de las ruedas al frenar. El ESP (control de trayectoria) corrige una perdida de trayectoria frenando selectivamente una o varias ruedas y reduciendo el par motor. ESP y ABS comparten algunos sensores (velocidad de rueda), por lo que un fallo comun puede encender ambos testigos. El ESP usa ademas un sensor de guinada y un sensor de angulo de volante.",
    },
    {
      q: "&iquest;Cuanto cuesta una reparacion del ESP?",
      a: "Sensor de velocidad de rueda: 80 a 200 euros la pieza mas mano de obra. Sensor de guinada: 250 a 450 euros. Sensor de angulo de volante: 150 a 400 euros. Bloque hidraulico ESP completo: 600 a 1800 euros. Interruptor de luces de freno (causa frecuente descuidada): 30 a 100 euros. Identifique con precision la causa antes de pedir la pieza.",
    },
    {
      q: "&iquest;Puede encenderse el testigo ESP sin fallo real?",
      a: "Si, en algunos casos benignos. Una bateria debil puede desencadenar un fallo transitorio. Un desmontaje reciente de neumatico puede desadaptar temporalmente un sensor de velocidad. Una desactivacion manual via el boton ESP OFF enciende un testigo diferente. Puede ser necesario un reaprendizaje del sensor de angulo de volante tras sustituir una rotula.",
    },
    {
      q: "&iquest;Que codigos OBD2 suelen acompanar a un testigo ESP?",
      a: "Los codigos C0035 a C0050 para los sensores de velocidad de rueda, C0196 para el sensor de angulo de volante, C0265 para el bloque hidraulico ESP, C0710 para el sensor de guinada. Un escaneo OBD2 con acceso a los modulos de chasis (no solo motor) es necesario para leerlos &mdash; no todos los escaneres de consumo lo permiten.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Testigo ESP encendido: causas, diagnostico y coste de reparacion"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          El testigo ESP, ese pequeno triangulo o ese coche derrapando
          en su cuadro de mandos, preocupa con razon. Senala que la
          estabilidad electronica esta desactivada, parcial o
          totalmente. A diferencia del testigo motor que puede quedarse
          encendido meses sin drama, el testigo ESP debe tratarse
          rapidamente: afecta directamente a la seguridad activa del
          vehiculo.
        </p>

        <h2>Lo que es realmente el ESP</h2>
        <p>
          ESP significa Electronic Stability Program. Es un sistema que
          compara permanentemente la trayectoria deseada por el
          conductor (angulo de volante, aceleracion del pedal) con la
          trayectoria real (sensor de guinada, velocidades de rueda).
          En caso de desviacion, frena selectivamente una o varias
          ruedas y reduce el par motor para devolver el vehiculo a la
          trayectoria. Es obligatorio en todos los coches nuevos
          vendidos en Europa desde 2014.
        </p>

        <h2>Causa 1: sensor de velocidad de rueda</h2>
        <p>
          Es la causa mas frecuente, alrededor del 40&nbsp;% de los
          casos. El sensor lee un blanco dentado en el buje. Se ensucia
          con depositos de freno, se rompe por golpe, o simplemente
          envejece. La sustitucion cuesta 80 a 200 euros la pieza, mas
          60 a 120 euros de mano de obra. Un codigo C0035 (rueda
          delantera izquierda) o C0040 (delantera derecha) identifica la
          rueda afectada.
        </p>

        <h2>Causa 2: sensor de angulo de volante desadaptado</h2>
        <p>
          Tras un cambio de rotula, una alineacion mal hecha o un
          impacto, el sensor de angulo de volante puede perder su cero.
          El ESP detecta la incoherencia y se desactiva por seguridad.
          La solucion: un reaprendizaje en taller con una herramienta
          de diagnostico, generalmente 30 a 60 euros. Si el sensor esta
          averiado, sustitucion entre 150 y 400 euros.
        </p>

        <h2>Causa 3: sensor de guinada y acelerometro</h2>
        <p>
          Ubicado bajo el asiento o en la consola central, este sensor
          mide las rotaciones alrededor del eje vertical y las
          aceleraciones transversales. Cuando falla, el ESP ya no tiene
          referencia de trayectoria y se desactiva. Sustitucion 250 a
          450 euros con codificacion.
        </p>

        <h2>Causa 4: interruptor de luces de freno defectuoso</h2>
        <p>
          Causa a menudo ignorada. El interruptor de luces de freno bajo
          el pedal informa al ESP de que esta frenando. Cuando envia una
          senal incoherente (por ejemplo encendido permanentemente), el
          ESP entra en fallo. Sustitucion rapida 30 a 100 euros, una
          ganga comparado con las otras causas.
        </p>

        <h2>Causa 5: bloque hidraulico ESP</h2>
        <p>
          El bloque hidraulico ESP contiene las electrovalvulas que
          frenan selectivamente cada rueda. Cuando falla, es la
          reparacion mas cara: 600 a 1800 euros la pieza mas 150 a 300
          euros de mano de obra y codificacion. Las reparaciones
          electronicas especializadas (unos 400 euros) son una
          alternativa viable en algunos modelos.
        </p>

        <h2>Escaneo OBD2 y codigos de chasis</h2>
        <p>
          A diferencia de los codigos motor, los codigos de chasis
          empiezan por C. No son accesibles a todos los escaneres de
          consumo. Se necesita una herramienta que dialogue con el
          modulo ABS ESP en el bus CAN de chasis. Una vez identificado
          el codigo, la causa casi siempre esta clara. Ver{" "}
          <Link href="/es/blog/lire-codes-obd2-telephone">
            como leer codigos OBD2 con un telefono
          </Link>
          .
        </p>

        <h2>Como evitar el problema</h2>
        <p>
          Primera regla: nunca lavar con karcher a presion directa los
          sensores de rueda, puede arrancarlos o hacer subir agua al
          conector. Segunda regla: un mantenimiento serio de las
          pastillas y discos evita el ensuciamiento de los sensores por
          limaduras. Tercera regla: un control visual regular de los
          cableados bajo el vehiculo detecta roedores y rozamientos
          prematuros. Ver{" "}
          <Link href="/es/blog/checkup-visuel-ia-5-points-vehicule-sain">
            el checkup visual en 5 puntos
          </Link>
          .
        </p>

        <h2>&iquest;Y si vuelve despues de reparar?</h2>
        <p>
          Un testigo ESP que vuelve tras sustituir el sensor debe hacer
          sospechar un problema de cableado (hilo cortado en el ramal,
          conector oxidado) o un modulo ABS defectuoso que sigue
          emitiendo errores pese al nuevo sensor. El diagnostico debe
          entonces profundizarse en un especialista, sobre todo en
          coches alemanes donde los codigos secundarios son mas
          dificiles de interpretar. Ver tambien{" "}
          <Link href="/es/blog/voyant-huile-allume-rouler-ou-arreter">
            testigo de aceite encendido: rodar o parar
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
