import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESPrepararITV2026() {
  const faq: FaqItem[] = [
    {
      q: "Cada cuanto hay que pasar la ITV en Espana?",
      a: "Los coches nuevos pasan la primera ITV a los 4 anos. Luego cada 2 anos hasta los 10 anos, y despues cada ano. Taxis y vehiculos profesionales tienen intervalos mas cortos. La pegatina de la ITV anterior indica la fecha limite.",
    },
    {
      q: "Cuanto cuesta la ITV 2026 en Espana?",
      a: "Entre 35 y 60 EUR segun comunidad autonoma. Madrid y Barcelona son las mas caras, Andalucia y Extremadura mas baratas. Una segunda pasada tras un rechazo cuesta entre 5 y 15 EUR extra si se hace en los 2 meses siguientes.",
    },
    {
      q: "Que pasa si el testigo del motor esta encendido en la ITV?",
      a: "Desde 2018, un testigo MIL (malfuncion del motor) encendido es causa de defecto grave y rechazo inmediato. El inspector lee tambien los codigos almacenados. Borrarlos justo antes no funciona: los monitores de preparacion quedan incompletos y el inspector lo detecta.",
    },
    {
      q: "Cuanto tiempo tengo para la segunda pasada?",
      a: "Tienes 2 meses desde la primera inspeccion para volver con los defectos corregidos. Si te pasas, debes hacer una ITV completa nueva con tarifa completa. Con defecto grave no puedes circular salvo para ir al taller o a la ITV.",
    },
    {
      q: "Puede AutoDiag EU reemplazar la ITV oficial?",
      a: "No, la ITV debe hacerla siempre una estacion autorizada. AutoDiag EU es una herramienta de preparacion: lectura de codigos, datos en tiempo real, escaneo de audio del motor. Asi evitas sorpresas desagradables en la estacion.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="es"
        title="Preparar la ITV 2026: guia completa"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={10}
        category="Guia ITV"
      >
        <p>
          Cada 2 anos (o cada ano si tu coche tiene mas de 10) toca pasar la
          Inspeccion Tecnica de Vehiculos. En Espana, cerca del 20 por
          ciento de los coches son rechazados en la primera pasada. La buena
          noticia: la mitad de esos rechazos se pueden evitar con una
          preparacion estructurada. Esta es la checklist actualizada para
          2026, con los puntos criticos en Espana.
        </p>

        <h2>La ITV en Espana 2026</h2>
        <p>
          La ITV es obligatoria y la gestionan estaciones autorizadas por
          las comunidades autonomas. Las tarifas varian entre 35 y 60 EUR
          segun la region. Los defectos se clasifican en tres niveles:
          leves (se corrigen sin nueva ITV), graves (rechazo, 2 meses para
          reparar, tarifa reducida segunda pasada) y muy graves (rechazo y
          prohibicion de circular salvo al taller). Los tres motivos mas
          habituales de rechazo son las luces, las emisiones y la
          suspension.
        </p>

        <h2>Paso 1: Prediagnostico OBD &mdash; el test mas importante</h2>
        <p>
          Cuatro semanas antes de la cita: conecta un adaptador ELM327 al
          puerto OBD2 y lanza AutoDiag EU. Verifica tres cosas: codigos de
          averia activos, monitores de preparacion (readiness) y datos de
          lambda. Cualquier codigo debe resolverse ANTES del test &mdash;
          no solo borrado. Candidatos frecuentes:{" "}
          <Link href="/es/codes/p0420">P0420</Link>,{" "}
          <Link href="/es/codes/p0171">P0171</Link> y{" "}
          <Link href="/es/codes/p0128">P0128</Link>. Si borras un codigo,
          conduce al menos 200 km para que los monitores vuelvan a estado
          &laquo;listo&raquo;.
        </p>

        <h2>Paso 2: Emisiones y filtro de particulas diesel</h2>
        <p>
          En 2026, el control de emisiones diesel es mas estricto en Espana.
          Un filtro de particulas saturado provoca casi siempre rechazo.
          Antes del test: 30 minutos de autovia a entre 2500 y 3000 rpm
          para provocar una regeneracion. Con AutoDiag EU puedes leer en
          tiempo real el nivel de hollin del DPF. Si supera el 70 por
          ciento, hay que actuar. Gasolinas: calentar el catalizador
          durante al menos 20 minutos antes del test.
        </p>

        <h2>Paso 3: Frenos, direccion y suspension</h2>
        <p>
          Tras las luces, frenos y suspension son las causas mas frecuentes
          de rechazo. El banco de rodillos mide la eficacia de frenado
          (minimo 50 por ciento para freno de servicio). Comprueba:
          pastillas (indicador de desgaste), discos (surcos visibles),
          liquido de frenos (DOT4 cada 2 anos). En la suspension:
          rotulas gastadas, bieletas rotas, amortiguadores con fugas.
          Precios 2026 en Espana: pastillas 70 a 130 EUR por eje,
          amortiguadores 150 a 350 EUR el par.
        </p>

        <h2>Paso 4: Luces y vision</h2>
        <p>
          Causa numero uno de rechazos en Espana (cerca del 22 por ciento).
          Comprueba cada luz: cortas, largas, posicion, freno,
          intermitentes, marcha atras, antiniebla, matricula. La
          reglaje de faros es critico: un desnivel excesivo provoca
          rechazo. Para vehiculos con xenon o LED, debe funcionar el
          corrector automatico. Limpiaparabrisas en buen estado, grietas en
          el parabrisas mayores de 10 mm en la zona del conductor =
          rechazo.
        </p>

        <h2>Paso 5: Neumaticos y carroceria</h2>
        <p>
          Profundidad minima legal 1,6 mm, pero los inspectores prefieren
          ver 2 mm. Desgaste desigual indica problemas de direccion o
          amortiguacion. Deformaciones o cortes en los flancos = rechazo
          directo. En carroceria, la corrosion en elementos estructurales
          (faldones, largueros) es peligrosa sobre todo en coches de mas
          de 10 anos.
        </p>

        <h2>Paso 6: Calendario ideal de preparacion</h2>
        <ul>
          <li>
            <strong>4 semanas antes:</strong> escaneo OBD con AutoDiag EU,
            buscar causas de los codigos, escaneo audio del motor.
          </li>
          <li>
            <strong>3 semanas antes:</strong> reparaciones en el taller.
          </li>
          <li>
            <strong>2 semanas antes:</strong> luces, limpiaparabrisas,
            profundidad de neumaticos.
          </li>
          <li>
            <strong>1 semana antes:</strong> niveles (liquido de frenos,
            refrigerante, lavaparabrisas, aceite). Segundo escaneo OBD para
            confirmar.
          </li>
          <li>
            <strong>El dia de la cita:</strong> 30 minutos de autovia,
            vehiculo limpio, papeles del coche y ultimo informe de ITV.
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          La ITV no tiene por que ser un quebradero de cabeza. Empezando
          4 semanas antes con un escaneo OBD, resolviendo los codigos mas
          comunes, forzando la regeneracion del DPF y revisando las luces,
          apruebas la ITV 2026 a la primera. AutoDiag EU es tu herramienta
          de preparacion gratuita &mdash; no sustituye a la ITV, pero es la
          mejor manera de evitar segundas pasadas costosas.
        </p>
      </ArticleLayout>
    </>
  );
}
