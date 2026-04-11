import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESTestigoAceite() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Rojo o naranja? &iquest;Como distinguir los dos testigos de aceite?",
      a: "ROJO: aceitera roja o icono con texto STOP &mdash; es una alerta de presion de aceite. Debes parar inmediatamente, apagar el motor y no volver a arrancar antes de comprobar. NARANJA: aceitera amarilla o texto OIL CHANGE &mdash; es un aviso de cambio de aceite, sin urgencia, puedes seguir con normalidad hasta el taller.",
    },
    {
      q: "&iquest;Cuanto tiempo puedo rodar con el testigo rojo encendido?",
      a: "Cero minutos. Cada segundo de rotacion sin presion de aceite destruye los cojinetes, la culata y los pistones. El motor puede romperse en menos de 30 segundos en caso de rotura total del circuito. Apaga inmediatamente, deja enfriar, comprueba el nivel y si esta bien, llama a la grua.",
    },
    {
      q: "&iquest;Que pasa si el nivel esta bien pero el testigo sigue encendido?",
      a: "Es una situacion grave. Significa que el circuito no presuriza: bomba de aceite fallando, colador obstruido, valvula reguladora agarrotada o presion real anormal. Tambien puede ser el sensor defectuoso. No corras el riesgo de circular para comprobar &mdash; llama a la grua y diagnostica. Reparar una bomba cuesta 200 a 600&nbsp;EUR, reparar un motor roto cuesta 10 a 30 veces mas.",
    },
    {
      q: "&iquest;Con que frecuencia revisar el nivel de aceite?",
      a: "Una vez al mes como minimo, una vez por semana si el coche consume. Motor frio, en llano, esperar 5 minutos tras apagar para que el aceite baje. El nivel debe estar entre min y max. Una diferencia mayor de 1 litro entre dos controles mensuales es anormal.",
    },
    {
      q: "&iquest;Se puede poner un aceite diferente en emergencia?",
      a: "Si, mejor un aceite algo distinto que nada. Respeta si puedes la viscosidad (por ejemplo 5W30 preferible) pero no bloquees la situacion por una marca. Tras ese relleno de emergencia, haz un cambio completo a la siguiente intervencion.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Testigo de aceite encendido: &iquest;seguir o parar inmediatamente?"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          El testigo de aceite es el unico testigo en el que la reaccion
          correcta depende enteramente de su color. Confundir el rojo y
          el naranja puede costar entre 5000 y 15&nbsp;000&nbsp;EUR de
          reparacion, o incluso la perdida total del motor. Esta guia te
          ensena a distinguirlos en dos segundos y a reaccionar
          correctamente en cada caso.
        </p>

        <h2>Testigo rojo: parada inmediata obligatoria</h2>
        <p>
          El testigo rojo muestra una aceitera roja o un icono con la
          palabra STOP. Significa que la presion de aceite es
          insuficiente para lubricar correctamente el motor. Puede venir
          de nivel muy bajo, bomba fallando, colador obstruido o sensor
          defectuoso. En los tres primeros casos, cada segundo cuenta.
          Los cojinetes de cigueenal y arbol de levas funcionan sobre un
          film de aceite de unas diez micras. Sin ese film, el metal roza
          el metal y las piezas se destruyen en pocas decenas de
          segundos.
        </p>

        <h2>El procedimiento de emergencia en 5 pasos</h2>
        <p>
          Paso 1: poner intermitente, detenerse al arcen con seguridad.
          Paso 2: apagar el motor inmediatamente. Paso 3: dejar enfriar 5
          a 10 minutos. Paso 4: comprobar el nivel con la varilla. Paso
          5: si el nivel esta bajo el minimo, anadir aceite hasta el
          maximo y rearrancar brevemente para ver si el testigo se apaga.
          Si si, circula prudentemente al taller. Si no, o si el nivel ya
          estaba bien, llama a la grua.
        </p>

        <h2>Testigo naranja: sin urgencia, solo recordatorio</h2>
        <p>
          El testigo naranja, a menudo con texto OIL CHANGE o SERVICE, es
          un simple aviso de cambio de aceite basado en kilometraje o
          tiempo. No indica ningun problema mecanico. Puedes seguir
          rodando con normalidad y reservar cita en las semanas
          siguientes. El cambio de aceite cuesta en general entre 60 y
          150&nbsp;EUR para un coche corriente.
        </p>

        <h2>Causas tipicas del testigo rojo</h2>
        <p>
          Nivel muy bajo: la consecuencia mas frecuente, a menudo por
          consumo progresivo desatendido. Bomba de aceite cansada: 200 a
          600&nbsp;EUR de sustitucion. Colador obstruido por depositos o
          calamina. Sensor de presion defectuoso: 40 a 150&nbsp;EUR, el
          escenario mas tranquilizador. Valvula reguladora agarrotada:
          150 a 400&nbsp;EUR.
        </p>

        <h2>Consecuencias de rodar prolongado sin presion</h2>
        <p>
          Tras 30 segundos: inicio de gripado de cojinetes. Tras 2
          minutos: rayado de cilindros. Tras 5 minutos: rotura de biela
          probable. Los danos son irreversibles. Lo que era una bomba de
          400&nbsp;EUR se convierte en un motor de 5000&nbsp;EUR minimo,
          a veces mas.
        </p>

        <h2>El consumo de aceite, senal previa</h2>
        <p>
          Un coche que consume mas de medio litro a los 1000&nbsp;km te
          esta diciendo algo. Causas frecuentes: segmentos de piston
          gastados, retenes de valvula, turbo que pierde a la admision,
          junta de culata naciente.
        </p>

        <h2>Prevencion activa</h2>
        <p>
          Respeta los intervalos de cambio del fabricante. Usa un aceite
          conforme a las especificaciones (ACEA, API, aprobaciones del
          fabricante). Revisa el nivel al menos una vez al mes, mas en
          viaje largo. Guarda un bidon en el maletero. Ver tambien{" "}
          <Link href="/es/blog/testigo-motor-encendido-que-hacer">
            testigo de motor encendido: que hacer
          </Link>
          .
        </p>

        <h2>Caso particular: testigo en el arranque</h2>
        <p>
          Muchos coches encienden todos los testigos 2 segundos al
          arrancar para probar bombillas. El testigo de aceite rojo se
          apaga en cuanto el motor gira. Si sigue encendido mas de 3
          segundos despues del arranque, tratalo como un testigo activo.
        </p>

        <h2>El reflejo que salva</h2>
        <p>
          Color rojo = parada inmediata. Color naranja = cita en la
          semana. Si solo has de recordar una cosa de este articulo, esta
          es. Esta regla ha salvado mas motores que cualquier tecnologia
          de diagnostico.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
