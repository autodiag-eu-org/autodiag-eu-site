import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

function ArticleLayout({
  children,
  title,
  date,
  author,
  readingTime,
  category,
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Blog", href: "/es/blog" },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href="/es/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; Volver al blog
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>Por {author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} min de lectura</span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">
          &iquest;Listo para diagnosticar tu coche tu mismo?
        </h3>
        <p className="mb-6 text-secondary">
          AutoDiag EU te da herramientas profesionales, simplificadas. Escaneo
          de audio con IA, lector de codigos de averia y mas &mdash; todo en tu
          bolsillo.
        </p>
        <Link
          href="/es#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Unete a la beta gratuita
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Article 1 — Como leer un codigo de fallo OBD2
   ================================================================ */

export function ArticleESCodigosFalloOBD2() {
  return (
    <ArticleLayout
      title="Como leer un codigo de fallo OBD2 &mdash; guia completa"
      date="2026-03-15"
      author="Reda Kaouani"
      readingTime={8}
      category="Tutorial"
    >
      <p>
        Se enciende el testigo del motor en tu salpicadero y no sabes que
        significa. Tranquilo, no eres el unico. Cada dia, miles de conductores
        en Espana y en toda Europa se enfrentan a este pequeno icono naranja
        que genera estres innecesario. La buena noticia es que, con un minimo
        de conocimiento y la herramienta adecuada, puedes entender tu mismo
        que le pasa a tu coche &mdash; sin necesidad de ir al taller.
      </p>
      <p>
        En esta guia completa te explicamos paso a paso como leer un codigo de
        fallo OBD2, que significan esos codigos y como actuar en cada caso.
        Tanto si tienes un SEAT, un Renault, un Volkswagen, un BMW o un
        Peugeot, el proceso es el mismo.
      </p>

      <h2>&iquest;Que es el OBD2?</h2>
      <p>
        OBD2 significa <strong>On-Board Diagnostics, version 2</strong>. Es un
        sistema estandarizado que llevan todos los coches de gasolina vendidos
        en Europa desde 2001 y todos los diesel desde 2004. La centralita
        (ECU) de tu coche monitoriza constantemente decenas de sensores
        &mdash; sonda lambda, caudalimetro, sensor de presion del turbo,
        temperatura del refrigerante, etc. Cuando un valor sale de los
        parametros normales, la centralita almacena un <strong>codigo de
        averia</strong> (tambien llamado DTC, por Diagnostic Trouble Code) y
        enciende el testigo del motor.
      </p>
      <p>
        Con un lector OBD2 &mdash; ya sea un dongle fisico como el Vgate iCar
        Pro (unos 25&nbsp;&euro;) o una app como AutoDiag EU &mdash; puedes
        conectarte a la centralita y leer esos codigos. Es como hablar
        directamente con el cerebro de tu coche.
      </p>

      <h2>&iquest;Donde esta el conector OBD2?</h2>
      <p>
        El conector OBD2 es una toma de 16 pines que, por normativa, debe
        estar accesible desde el asiento del conductor. En la mayoria de
        coches europeos lo encontraras en una de estas ubicaciones:
      </p>
      <ul>
        <li>Debajo del salpicadero, a la izquierda del volante (la mas comun)</li>
        <li>Detras de una tapa en la zona de la caja de fusibles interior</li>
        <li>En la consola central, cerca de la palanca de cambios</li>
        <li>En el hueco del reposapiernas del conductor</li>
      </ul>
      <p>
        Si no lo encuentras, busca en el manual del propietario o simplemente
        introduce tu marca y modelo en la app AutoDiag EU &mdash; te indicamos
        la ubicacion exacta.
      </p>

      <h2>&iquest;Como se estructuran los codigos de fallo?</h2>
      <p>
        Un codigo de fallo OBD2 siempre tiene el mismo formato: una letra
        seguida de cuatro cifras. La letra indica el sistema afectado:
      </p>
      <ul>
        <li><strong>P</strong> &mdash; Tren motriz (Powertrain): motor y transmision</li>
        <li><strong>C</strong> &mdash; Chasis: suspension, direccion, frenos</li>
        <li><strong>B</strong> &mdash; Carroceria (Body): airbags, climatizacion, cierre centralizado</li>
        <li><strong>U</strong> &mdash; Red de comunicacion: fallos en el bus CAN</li>
      </ul>
      <p>
        La primera cifra indica si el codigo es generico (0) o especifico del
        fabricante (1). Las tres cifras restantes identifican el subsistema y
        la averia concreta. Ejemplo: <strong>P0420</strong> &mdash; P
        (motor), 0 (generico), 4 (sistema de escape), 20 (rendimiento del
        catalizador por debajo del umbral).
      </p>

      <h2>3 codigos comunes explicados</h2>

      <h3>P0420 &mdash; Rendimiento del catalizador por debajo del umbral</h3>
      <p>
        Es uno de los codigos mas frecuentes en Europa. Significa que el
        catalizador no esta convirtiendo los gases contaminantes con
        suficiente eficiencia. Las causas mas habituales son: catalizador
        desgastado por la edad (muy comun a partir de 150.000 km), sonda
        lambda deteriorada o fugas en el escape. El coste de reparacion va
        desde 150&nbsp;&euro; si es la sonda lambda hasta
        800&ndash;1.500&nbsp;&euro; si hay que cambiar el catalizador completo.
        Es un motivo seguro de rechazo en la ITV.
      </p>

      <h3>P0171 &mdash; Mezcla demasiado pobre (banco 1)</h3>
      <p>
        La centralita detecta que entra demasiado aire o muy poco combustible.
        Los culpables habituales: filtro de aire sucio, caudalimetro averiado,
        inyectores obstruidos o una fuga de vacio en la admision. Si tu coche
        tironea al acelerar, consume mas de lo normal o el ralenti es
        inestable, probablemente veras este codigo. Coste:
        50&ndash;400&nbsp;&euro; segun la causa.
      </p>

      <h3>P0300 &mdash; Fallos de encendido multiples detectados</h3>
      <p>
        El motor falla en varios cilindros. Es un codigo serio que no debes
        ignorar. Puede deberse a bujias gastadas (lo mas barato,
        30&ndash;80&nbsp;&euro;), bobinas de encendido defectuosas
        (100&ndash;300&nbsp;&euro;) o problemas de compresion mas graves. Si
        notas vibraciones fuertes, perdida de potencia o un olor a gasolina
        sin quemar, ve al taller cuanto antes.
      </p>

      <h2>&iquest;Como leer estos codigos con AutoDiag EU?</h2>
      <ol>
        <li>Conecta tu dongle ELM327 BLE al conector OBD2 del coche</li>
        <li>Abre la app AutoDiag EU y activa el Bluetooth</li>
        <li>La app detecta el dongle automaticamente y se conecta</li>
        <li>Pulsa &laquo;Leer codigos de averia&raquo;</li>
        <li>En segundos, ves la lista de codigos con una explicacion clara en espanol</li>
        <li>Para cada codigo: causas probables, nivel de gravedad, coste estimado y si puedes seguir conduciendo o no</li>
      </ol>
      <p>
        Ademas, el asistente IA mecanicien de AutoDiag EU te explica el
        problema con palabras sencillas, como lo haria un amigo mecanico de
        confianza. Sin jerga tecnica innecesaria.
      </p>

      <h2>&iquest;Cuando hay que ir al taller?</h2>
      <p>
        AutoDiag EU te indica con un semaforo el nivel de gravedad de cada
        averia. Si ves rojo (gravedad alta o critica), no lo demores: pide
        cita en un taller de confianza. Si ves amarillo (gravedad media),
        puedes seguir conduciendo pero programa una revision pronto. Si ves
        verde (gravedad baja), monitorizalo y revisa en tu proximo
        mantenimiento.
      </p>

      <h2>Errores que debes evitar</h2>
      <ul>
        <li>
          <strong>Borrar codigos sin entender la causa</strong> &mdash; El
          testigo se apagara temporalmente, pero el problema sigue ahi y
          volvera a encenderse.
        </li>
        <li>
          <strong>Confiar ciegamente en un unico codigo</strong> &mdash; Un
          P0420 puede ser la sonda lambda, no siempre el catalizador. El
          contexto importa.
        </li>
        <li>
          <strong>Ignorar el testigo durante meses</strong> &mdash; Un
          problema menor puede convertirse en una averia costosa. Y no pasaras
          la ITV.
        </li>
        <li>
          <strong>Comprar la pieza mas barata online</strong> &mdash; A veces
          lo barato sale caro. Consulta siempre el diagnostico completo antes
          de actuar.
        </li>
      </ul>

      <h2>En resumen</h2>
      <p>
        Leer un codigo de fallo OBD2 es mucho mas sencillo de lo que parece.
        Con un dongle de 25&nbsp;&euro; y una app como AutoDiag EU, puedes
        saber en segundos que le pasa a tu coche, evaluar la gravedad del
        problema y decidir si puedes solucionarlo tu mismo o si necesitas un
        profesional. Es la forma mas inteligente de cuidar tu coche &mdash; y
        tu bolsillo.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 2 — Preparar la ITV: lista de comprobacion completa
   ================================================================ */

export function ArticleESPrepararITV() {
  return (
    <ArticleLayout
      title="Preparar la ITV: la lista de comprobacion completa"
      date="2026-03-10"
      author="Reda Kaouani"
      readingTime={9}
      category="Guia practica"
    >
      <p>
        La ITV (Inspeccion Tecnica de Vehiculos) es obligatoria en Espana
        &mdash; y en toda Europa. Sin embargo, cada ano miles de coches son
        rechazados por defectos que podrian haberse detectado y corregido
        facilmente antes de la cita. Segun las estadisticas de las estaciones
        ITV, aproximadamente <strong>un 30% de los vehiculos</strong> no
        supera la inspeccion a la primera. Y eso supone tiempo perdido, dinero
        extra y frustracion innecesaria.
      </p>
      <p>
        En esta guia te damos la lista completa de puntos a revisar antes de
        llevar tu coche a la ITV, para que pases a la primera sin sorpresas.
      </p>

      <h2>La ITV por paises</h2>
      <p>
        Aunque el principio es el mismo en toda Europa &mdash; verificar que
        tu coche cumple las normas de seguridad y emisiones &mdash; cada pais
        tiene sus propias reglas:
      </p>
      <ul>
        <li>
          <strong>Espana (ITV)</strong> &mdash; Obligatoria a partir de los 4
          anos, cada 2 anos hasta los 10, y luego cada ano. Coste:
          30&ndash;50&nbsp;&euro; segun comunidad autonoma.
        </li>
        <li>
          <strong>Francia (CT)</strong> &mdash; Cada 2 anos desde los 4 anos
          del vehiculo. Coste: 70&ndash;90&nbsp;&euro;.
        </li>
        <li>
          <strong>Alemania (TUV)</strong> &mdash; Cada 2 anos (HU +
          AU). Coste: 100&ndash;150&nbsp;&euro;.
        </li>
        <li>
          <strong>Suiza (MFK)</strong> &mdash; A los 4 anos, luego cada 3
          anos. Coste: 50&ndash;80 CHF.
        </li>
        <li>
          <strong>Portugal (IPO)</strong> &mdash; Regimen similar al espanol.
          Coste: 30&ndash;45&nbsp;&euro;.
        </li>
      </ul>

      <h2>La lista completa punto por punto</h2>

      <h3>1. Iluminacion</h3>
      <p>
        Revisa todas las luces de tu coche: faros de cruce y carretera,
        intermitentes delanteros y traseros, luces de posicion, luces de
        freno, luz de marcha atras, luz de matricula y antiniebla (si los
        tienes). Comprueba que no hay ninguna bombilla fundida, que los faros
        estan bien alineados y que las opticas no estan demasiado
        amarillentas o rayadas. Un faro desalineado es motivo de rechazo.
      </p>

      <h3>2. Sistema de frenado</h3>
      <p>
        Las pastillas y discos de freno deben tener un grosor minimo. Comprueba
        visualmente el desgaste de las pastillas a traves de las llantas. El
        freno de mano debe inmovilizar el coche en pendiente. Si notas
        vibraciones al frenar, puede que tengas un disco alabeado. Revisa
        tambien el nivel del liquido de frenos &mdash; debe estar entre el
        minimo y el maximo.
      </p>

      <h3>3. Emisiones</h3>
      <p>
        Este es uno de los puntos mas criticos, especialmente en diesel. El
        inspector medira las emisiones del escape (opacimetria en diesel,
        analisis de gases en gasolina). Si tu coche tiene filtro de
        particulas (FAP/DPF), asegurate de que no esta obstruido. Un viaje
        largo por autopista a buen regimen antes de la ITV ayuda a regenerar
        el filtro. Si tienes un codigo de averia activo relacionado con
        emisiones, la ITV sera un rechazo seguro.
      </p>

      <h3>4. Neumaticos</h3>
      <p>
        La profundidad minima legal del dibujo es de <strong>1,6 mm</strong>,
        pero se recomienda cambiarlos a partir de 3 mm. Comprueba que no hay
        cortes, deformaciones ni desgaste irregular. Los cuatro neumaticos
        deben ser del mismo tipo (no mezclar radiales con diagonales). Revisa
        tambien la presion segun lo indicado en la ficha tecnica.
      </p>

      <h3>5. Direccion y suspension</h3>
      <p>
        La direccion no debe tener holguras excesivas. Si notas que el volante
        vibra a cierta velocidad o que el coche tira hacia un lado, puede que
        tengas un problema de alineacion, rotulas desgastadas o amortiguadores
        vencidos. Los amortiguadores en mal estado son un motivo frecuente de
        rechazo: si el coche rebota mas de una vez al empujar una esquina
        hacia abajo, probablemente necesitan cambio.
      </p>

      <h3>6. Visibilidad</h3>
      <p>
        El parabrisas no debe tener grietas en la zona de barrido del
        limpiaparabrisas. Las escobillas deben limpiar correctamente y el
        deposito del lavaparabrisas debe tener liquido. Los retrovisores
        deben estar completos y bien sujetos. Los cristales no pueden tener
        laminas tintadas no homologadas.
      </p>

      <h3>7. Estructura y carroceria</h3>
      <p>
        Revisa que no haya puntos de oxido perforante en los bajos, los
        pasos de rueda o las zonas estructurales. Las puertas deben abrir y
        cerrar correctamente. El capo y el maletero deben disponer de su
        sistema de retencion. La matricula debe ser legible y estar bien
        fijada.
      </p>

      <h3>8. Elementos de seguridad</h3>
      <p>
        Los cinturones de seguridad deben enrollarse y bloquear correctamente.
        El testigo del airbag no debe estar encendido en el salpicadero. El
        claxon debe funcionar. El asiento del conductor debe poder regularse
        y bloquearse. Si tu coche tiene sistema TPMS (sensor de presion de
        neumaticos), el testigo no debe estar encendido.
      </p>

      <h2>Como el OBD2 te ayuda a preparar la ITV</h2>
      <p>
        Con AutoDiag EU puedes hacer un pre-chequeo completo antes de ir a la
        ITV. La app lee todos los codigos de averia almacenados en la
        centralita y te indica cuales son motivo de rechazo. Tambien
        comprueba los <strong>monitores de preparacion</strong> (readiness
        monitors) &mdash; si alguno no esta listo, el inspector puede
        rechazar el vehiculo. Ademas, puedes consultar los datos en tiempo
        real del motor para verificar que todo funciona dentro de los
        parametros normales.
      </p>

      <h2>Calendario ideal de preparacion</h2>
      <ul>
        <li><strong>2 semanas antes</strong> &mdash; Lectura OBD2 completa con AutoDiag EU. Repara cualquier codigo activo.</li>
        <li><strong>1 semana antes</strong> &mdash; Revision visual completa: luces, neumaticos, liquidos, limpiaparabrisas.</li>
        <li><strong>3 dias antes</strong> &mdash; Viaje largo por autopista (30 min a 3.000 RPM) para regenerar el FAP y completar los monitores.</li>
        <li><strong>El dia anterior</strong> &mdash; Segunda lectura OBD2 para confirmar que todo esta limpio.</li>
        <li><strong>El dia de la ITV</strong> &mdash; Llega con el motor caliente (los monitores dan mejor lectura en caliente).</li>
      </ul>

      <h2>Los 5 motivos de rechazo mas frecuentes</h2>
      <ol>
        <li><strong>Iluminacion defectuosa</strong> &mdash; bombillas fundidas o faros desalineados (28% de los rechazos)</li>
        <li><strong>Emisiones fuera de norma</strong> &mdash; FAP obstruido, catalizador gastado, sonda lambda averiada (22%)</li>
        <li><strong>Frenos desgastados</strong> &mdash; pastillas al limite, discos alabeados, liquido bajo (18%)</li>
        <li><strong>Suspension deteriorada</strong> &mdash; amortiguadores vencidos, rotulas con holgura (15%)</li>
        <li><strong>Neumaticos en mal estado</strong> &mdash; dibujo insuficiente, deformaciones, presion incorrecta (10%)</li>
      </ol>

      <h2>En resumen</h2>
      <p>
        Pasar la ITV a la primera no es cuestion de suerte &mdash; es cuestion
        de preparacion. Con esta lista de comprobacion y una lectura OBD2
        previa con AutoDiag EU, reduces drasticamente el riesgo de rechazo.
        Invierte 30 minutos en revisar tu coche antes de la cita y ahorrate
        el tiempo, el dinero y la frustracion de tener que volver.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 3 — Los 5 ruidos del motor que no debes ignorar
   ================================================================ */

export function ArticleES5RuidosMotor() {
  return (
    <ArticleLayout
      title="Los 5 ruidos del motor que no debes ignorar"
      date="2026-03-05"
      author="Reda Kaouani"
      readingTime={7}
      category="Diagnostico"
    >
      <p>
        Tu coche te habla. Si, literalmente. Cada ruido, cada vibracion, cada
        cambio en el sonido del motor es una pista sobre su estado de salud.
        El problema es que la mayoria de conductores no saben interpretar esas
        senales &mdash; y acaban ignorando ruidos que podrian evitarles
        averias de miles de euros. En este articulo te ensenamos a reconocer
        los 5 ruidos mas peligrosos que puede hacer tu motor y que debes
        hacer en cada caso.
      </p>

      <h2>1. Traqueteo metalico al arrancar en frio</h2>
      <p>
        <strong>Como suena:</strong> Un repiqueteo rapido y metalico durante
        los primeros segundos tras arrancar el motor, que desaparece cuando se
        calienta.
      </p>
      <p>
        <strong>Causas probables:</strong> Taques hidraulicos que han perdido
        presion de aceite durante la noche, o una cadena de distribucion
        destensada. En los motores TSI/TFSI de Volkswagen y los motores N47
        de BMW, este ruido es especialmente conocido.
      </p>
      <p>
        <strong>Riesgo:</strong> Medio a alto. Si son los taques, un cambio
        de aceite con la viscosidad correcta puede solucionarlo. Si es la
        cadena de distribucion, ignorarlo puede provocar un salto de cadena y
        la destruccion del motor.
      </p>
      <p>
        <strong>Coste estimado:</strong> Cambio de aceite
        50&ndash;100&nbsp;&euro; | Kit de cadena de distribucion
        600&ndash;1.800&nbsp;&euro; (piezas + mano de obra).
      </p>

      <h2>2. Zumbido grave que aumenta con la velocidad</h2>
      <p>
        <strong>Como suena:</strong> Un ronroneo grave y constante que se
        intensifica al acelerar y cambia de tono en las curvas.
      </p>
      <p>
        <strong>Causas probables:</strong> Rodamiento de rueda desgastado. Si
        el zumbido cambia al girar (se atenua en un sentido y se amplifica en
        el otro), casi seguro es un rodamiento. Tambien puede ser el
        diferencial en coches con traccion trasera.
      </p>
      <p>
        <strong>Riesgo:</strong> Alto. Un rodamiento de rueda que se gripea
        mientras conduces puede bloquear la rueda y provocar un accidente
        grave, sobre todo a alta velocidad.
      </p>
      <p>
        <strong>Coste estimado:</strong> Rodamiento de rueda
        150&ndash;400&nbsp;&euro; por rueda (piezas + mano de obra).
      </p>

      <h2>3. Silbido agudo al acelerar</h2>
      <p>
        <strong>Como suena:</strong> Un silbido fino y agudo, sobre todo al
        pisar el acelerador con fuerza, que puede ir acompanado de perdida de
        potencia.
      </p>
      <p>
        <strong>Causas probables:</strong> Fuga en el circuito de admision
        del turbo. Puede ser un manguito suelto, un intercooler perforado o
        la propia turbina danada. En diesel con turbo de geometria variable,
        tambien puede indicar un problema en la valvula de descarga
        (wastegate).
      </p>
      <p>
        <strong>Riesgo:</strong> Medio. El coche pierde rendimiento y consume
        mas, pero no vas a quedarte tirado inmediatamente. Sin embargo, si la
        turbina esta danada y sueltas esquirlas metalicas en la admision, el
        dano puede extenderse al motor.
      </p>
      <p>
        <strong>Coste estimado:</strong> Manguito o abrazadera
        30&ndash;80&nbsp;&euro; | Turbo completo
        800&ndash;2.500&nbsp;&euro;.
      </p>

      <h2>4. Golpeteo fuerte y ritmico</h2>
      <p>
        <strong>Como suena:</strong> Un golpe seco, profundo y ritmico que
        coincide con las revoluciones del motor. Puede sentirse como si
        alguien golpeara el bloque motor con un martillo desde dentro.
      </p>
      <p>
        <strong>Causas probables:</strong> Detonacion (knocking) por
        combustible inadecuado, casquillo de biela desgastado o piston danado.
        Si el golpeteo aparece solo bajo carga (subiendo una cuesta o
        acelerando fuerte), puede ser detonacion por calidad del combustible.
        Si es constante, probablemente sea un problema mecanico interno serio.
      </p>
      <p>
        <strong>Riesgo:</strong> Muy alto. Un casquillo de biela que falla
        puede provocar la rotura de la biela y la destruccion total del
        motor (&laquo;biela pasada&raquo;). Deja de conducir inmediatamente.
      </p>
      <p>
        <strong>Coste estimado:</strong> Cambio de combustible
        0&nbsp;&euro; | Reparacion de biela
        1.500&ndash;4.000&nbsp;&euro; | Motor de intercambio
        3.000&ndash;8.000&nbsp;&euro;.
      </p>

      <h2>5. Chirrido al arrancar o al encender el aire acondicionado</h2>
      <p>
        <strong>Como suena:</strong> Un chirrido agudo y estridente al
        arrancar el motor o al activar el aire acondicionado. Suele durar
        unos segundos y a veces desaparece al calentarse.
      </p>
      <p>
        <strong>Causas probables:</strong> Correa de accesorios (correa poly-V)
        desgastada, destensada o con el tensor defectuoso. Tambien puede ser
        la correa de la direccion asistida en coches mas antiguos.
      </p>
      <p>
        <strong>Riesgo:</strong> Medio. La correa no va a romperse
        inmediatamente, pero si lo hace, perderas la direccion asistida, el
        alternador y el aire acondicionado de golpe. En algunos motores, la
        bomba de agua tambien va en esa correa, lo que provocaria
        sobrecalentamiento.
      </p>
      <p>
        <strong>Coste estimado:</strong> Correa de accesorios
        40&ndash;100&nbsp;&euro; | Kit correa + tensor
        80&ndash;200&nbsp;&euro;.
      </p>

      <h2>Como te ayuda el Escaneo Sonoro de AutoDiag EU</h2>
      <p>
        AutoDiag EU integra una funcion unica en el mercado: el{" "}
        <strong>Escaneo Sonoro</strong>. Graba el sonido de tu motor con el
        microfono del movil durante 15 segundos y nuestra inteligencia
        artificial (modelo SVM entrenado con mas de 3.900 muestras de audio
        reales) analiza las frecuencias para identificar el tipo de ruido.
        Combinado con los datos OBD2 en tiempo real, el diagnostico gana en
        precision y fiabilidad.
      </p>
      <p>
        No necesitas ser mecanico. No necesitas experiencia. Solo necesitas
        15 segundos y tu telefono movil.
      </p>

      <h2>En resumen</h2>
      <p>
        Un coche que hace ruidos raros no es un coche que haya que ignorar
        &mdash; es un coche que te esta pidiendo atencion. Traqueteo, zumbido,
        silbido, golpeteo o chirrido: cada sonido tiene un significado, y
        ahora ya sabes cual. Escucha a tu coche, actualo a tiempo y ahorrate
        averias costosas. Con AutoDiag EU, tienes un mecanico en el bolsillo
        que entiende cada ruido.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 4 — OBD2: todo lo que necesitas saber en 5 minutos
   ================================================================ */

export function ArticleESOBD2Entender() {
  return (
    <ArticleLayout
      title="OBD2: todo lo que necesitas saber en 5 minutos"
      date="2026-02-28"
      author="Reda Kaouani"
      readingTime={6}
      category="Tutorial"
    >
      <p>
        Seguro que has oido hablar del OBD2, pero &iquest;sabes realmente que
        es y para que sirve? En este articulo te lo explicamos todo de forma
        clara y rapida, sin jerga tecnica innecesaria. En 5 minutos tendras
        una vision completa del sistema que lleva tu coche bajo el capo
        &mdash; y como puedes aprovecharlo para ahorrar dinero y evitar
        sustos.
      </p>

      <h2>Un poco de historia</h2>
      <p>
        Todo empezo en California en los anos 80. La CARB (California Air
        Resources Board) obligo a los fabricantes a incluir un sistema de
        autodiagnostico en los coches para controlar las emisiones
        contaminantes. Ese primer sistema se llamo <strong>OBD1</strong>, y
        cada fabricante tenia su propio formato &mdash; un autentico caos.
      </p>
      <p>
        En 1996, se estandarizo el sistema con <strong>OBD2</strong>: un
        conector universal de 16 pines, un protocolo de comunicacion comun y
        un catalogo de codigos de fallo estandarizados. En Europa, la
        variante se llama <strong>EOBD</strong> (European On-Board
        Diagnostics) y es obligatoria desde 2001 para gasolina y 2004 para
        diesel.
      </p>

      <h2>La centralita: el cerebro de tu coche</h2>
      <p>
        La centralita (ECU &mdash; Engine Control Unit) es un ordenador que
        gestiona el motor en tiempo real. Recibe datos de decenas de sensores
        (temperatura del refrigerante, presion del colector de admision,
        posicion del acelerador, sonda lambda, etc.) y ajusta la inyeccion de
        combustible, el encendido y otros parametros para optimizar el
        rendimiento, el consumo y las emisiones.
      </p>
      <p>
        Cuando algo no funciona como deberia, la centralita registra un
        codigo de fallo (DTC) y enciende el testigo del motor. Esos codigos
        son los que puedes leer con un lector OBD2.
      </p>

      <h2>Los PIDs: datos en tiempo real</h2>
      <p>
        Ademas de los codigos de fallo, el OBD2 permite acceder a los
        <strong> PIDs</strong> (Parameter Identification numbers). Son datos
        en tiempo real que la centralita emite constantemente: RPM, velocidad,
        temperatura del refrigerante, carga del motor, presion del turbo,
        avance del encendido, valores de las sondas lambda, etc. Los
        profesionales usan estos datos para diagnosticar problemas que no
        generan un codigo de fallo pero que afectan al rendimiento.
      </p>

      <h2>Los 5 protocolos OBD2</h2>
      <p>
        Existen 5 protocolos de comunicacion OBD2 diferentes. Tu coche usa
        uno de ellos:
      </p>
      <ul>
        <li><strong>ISO 9141-2</strong> &mdash; Coches europeos antiguos (Mercedes, Peugeot, Citroen)</li>
        <li><strong>ISO 14230 (KWP2000)</strong> &mdash; Europeos (BMW, Volkswagen, Renault)</li>
        <li><strong>ISO 15765 (CAN)</strong> &mdash; Todos los coches desde 2008 (el mas comun hoy en dia)</li>
        <li><strong>SAE J1850 PWM</strong> &mdash; Ford (EEUU principalmente)</li>
        <li><strong>SAE J1850 VPW</strong> &mdash; General Motors (EEUU principalmente)</li>
      </ul>
      <p>
        La buena noticia: no necesitas saber cual usa tu coche. Los dongles
        ELM327 modernos y AutoDiag EU detectan el protocolo automaticamente.
      </p>

      <h2>Dongles OBD2: &iquest;cual elegir?</h2>
      <p>
        Un dongle OBD2 es un pequeno dispositivo que se conecta al conector de
        16 pines de tu coche y se comunica con tu movil por Bluetooth (BLE).
        Recomendamos el <strong>Vgate iCar Pro</strong> (unos
        25&nbsp;&euro;), compatible con BLE 4.0+, que funciona perfectamente
        con AutoDiag EU. Evita los dongles ELM327 muy baratos (menos de
        10&nbsp;&euro;) &mdash; suelen ser clones con firmware inestable que
        dan problemas de conexion.
      </p>

      <h2>&iquest;Que puedes hacer con el OBD2?</h2>
      <ul>
        <li><strong>Leer codigos de averia</strong> &mdash; Saber exactamente que le pasa a tu coche cuando se enciende el testigo</li>
        <li><strong>Borrar codigos de averia</strong> &mdash; Tras reparar el problema, apagar el testigo sin ir al taller</li>
        <li><strong>Datos en tiempo real</strong> &mdash; Ver RPM, temperatura, consumo instantaneo, presion turbo y mas mientras conduces</li>
        <li><strong>Monitores de preparacion</strong> &mdash; Verificar que todos los sistemas de emisiones estan listos para pasar la ITV</li>
        <li><strong>Pruebas de sensores</strong> &mdash; Verificar el estado de las sondas lambda, el caudalimetro, el sensor MAP, etc.</li>
        <li><strong>Diagnostico preventivo</strong> &mdash; Detectar problemas antes de que se conviertan en averias costosas</li>
      </ul>

      <h2>El futuro: OBD3, Smartcar y diagnostico multi-sensor</h2>
      <p>
        El OBD2 lleva con nosotros desde 1996, pero la tecnologia no se
        detiene. <strong>OBD3</strong> propone enviar los datos de diagnostico
        directamente a las autoridades por telemetria, sin necesidad de
        inspeccion presencial. Plataformas como <strong>Smartcar</strong>
        permiten acceder a los datos del coche a traves de APIs en la nube,
        sin dongle fisico, en mas de 40 marcas.
      </p>
      <p>
        Y luego esta el enfoque de AutoDiag EU: combinar el OBD2 clasico con
        sensores del telefono (microfono, acelerometro, giroscopio, GPS) para
        un diagnostico <strong>multi-sensor</strong> mucho mas completo.
        Escaneo Sonoro por IA, Drive Test sin dongle, deteccion de vibraciones
        anormales &mdash; el futuro del diagnostico es la fusion de datos, y
        ya esta aqui.
      </p>

      <h2>En resumen</h2>
      <p>
        El OBD2 es la puerta de entrada al cerebro de tu coche. Con un dongle
        de 25&nbsp;&euro; y una app inteligente como AutoDiag EU, tienes
        acceso al mismo nivel de informacion que un taller profesional
        &mdash; pero en tu bolsillo. Ya no hay excusa para no saber que le
        pasa a tu coche.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 5 — AutoDiag EU vs taller: cuanto ahorras realmente
   ================================================================ */

export function ArticleESAutodiagVsTaller() {
  return (
    <ArticleLayout
      title="AutoDiag EU vs taller: &iquest;cuanto ahorras realmente?"
      date="2026-02-20"
      author="Reda Kaouani"
      readingTime={8}
      category="Ahorros"
    >
      <p>
        Ir al taller cada vez que se enciende un testigo o suena un ruido
        raro puede ser muy caro. Y lo peor no es el precio de la reparacion
        en si &mdash; es el coste del diagnostico. En Espana, una simple
        lectura de codigos de averia cuesta entre 20 y 50&nbsp;&euro; en un
        taller independiente, y un diagnostico completo puede llegar a
        50&ndash;100&nbsp;&euro; en un concesionario. Multiplica eso por
        varias visitas al ano y la factura se dispara.
      </p>
      <p>
        &iquest;Y si pudieras hacer ese diagnostico tu mismo, desde casa, con
        tu movil? Eso es exactamente lo que ofrece AutoDiag EU. Vamos a hacer
        cuentas.
      </p>

      <h2>El coste del diagnostico en Europa</h2>
      <p>
        Los precios varian segun el pais y el tipo de taller:
      </p>
      <ul>
        <li>
          <strong>Espana</strong> &mdash; Lectura de codigos:
          20&ndash;50&nbsp;&euro;. Diagnostico completo:
          50&ndash;100&nbsp;&euro;. Borrado de codigos:
          10&ndash;30&nbsp;&euro;.
        </li>
        <li>
          <strong>Francia</strong> &mdash; Lectura de codigos:
          30&ndash;60&nbsp;&euro;. Diagnostico completo:
          60&ndash;120&nbsp;&euro;.
        </li>
        <li>
          <strong>Alemania</strong> &mdash; Lectura de codigos:
          30&ndash;50&nbsp;&euro;. Diagnostico completo:
          80&ndash;150&nbsp;&euro;.
        </li>
        <li>
          <strong>Suiza</strong> &mdash; Lectura de codigos:
          50&ndash;80 CHF. Diagnostico completo: 120&ndash;200 CHF.
        </li>
        <li>
          <strong>Portugal</strong> &mdash; Lectura de codigos:
          15&ndash;40&nbsp;&euro;. Diagnostico completo:
          40&ndash;80&nbsp;&euro;.
        </li>
      </ul>

      <h2>3 escenarios reales</h2>

      <h3>Escenario 1: SEAT Ibiza &mdash; testigo del motor encendido</h3>
      <p>
        Maria conduce un SEAT Ibiza 1.0 TSI de 2019. Se enciende el testigo
        del motor y va al taller. El mecanico le cobra 35&nbsp;&euro; por la
        lectura de codigos y le dice que tiene un P0171 (mezcla pobre). Le
        propone un diagnostico mas profundo por 70&nbsp;&euro; adicionales.
        Total: 105&nbsp;&euro; solo por el diagnostico, sin reparar nada.
      </p>
      <p>
        <strong>Con AutoDiag EU:</strong> Maria conecta su dongle Vgate iCar
        Pro (compra unica de 25&nbsp;&euro;), abre la app y lee el codigo en
        10 segundos. La app le explica que probablemente es un filtro de aire
        sucio o una toma de aire suelta. Maria cambia el filtro de aire ella
        misma (12&nbsp;&euro; la pieza) y el testigo se apaga. Ahorro:
        93&nbsp;&euro;.
      </p>

      <h3>Escenario 2: Renault Megane &mdash; ruido extrano al arrancar</h3>
      <p>
        Carlos tiene un Renault Megane 1.5 dCi de 2016. Oye un chirrido al
        arrancar el motor cada manana. Va al taller: 50&nbsp;&euro; de
        diagnostico, le dicen que es la correa de accesorios. Pieza + mano de
        obra: 120&nbsp;&euro;. Total con diagnostico: 170&nbsp;&euro;.
      </p>
      <p>
        <strong>Con AutoDiag EU:</strong> Carlos graba el sonido con el
        Escaneo Sonoro. La IA identifica un &laquo;chirrido de correa&raquo;
        con un 87% de confianza. Carlos compra la correa por
        35&nbsp;&euro; y la cambia el mismo siguiendo un tutorial de YouTube.
        Ahorro: 135&nbsp;&euro;.
      </p>

      <h3>Escenario 3: Volkswagen Golf VII &mdash; preparacion ITV</h3>
      <p>
        Ana tiene un Volkswagen Golf VII 2.0 TDI de 2015. Le toca la ITV y
        quiere ir segura. En el taller le hacen un pre-ITV por
        60&nbsp;&euro;. Le dicen que tiene un codigo de averia de emisiones
        pendiente y que las pastillas de freno estan justas.
      </p>
      <p>
        <strong>Con AutoDiag EU:</strong> Ana hace el pre-ITV con la app.
        Lee todos los codigos, verifica los monitores de preparacion y revisa
        los datos en tiempo real. Ve que tiene un P0401 (flujo de EGR
        insuficiente) y que los monitores del catalizador no estan listos.
        Hace un viaje de 30 minutos por autopista, los monitores se completan
        y el codigo no vuelve a aparecer (era intermitente). Las pastillas las
        revisa visualmente. Pasa la ITV a la primera. Ahorro:
        60&nbsp;&euro;.
      </p>

      <h2>Calculo anual: Espana</h2>
      <p>
        Un conductor espanol medio lleva su coche al taller para diagnostico
        entre 2 y 4 veces al ano (testigo del motor, ruido extrano,
        pre-ITV, revision periodica). A un coste medio de
        40&ndash;60&nbsp;&euro; por visita, eso supone entre
        <strong> 100 y 200&nbsp;&euro; al ano</strong> solo en diagnosticos.
      </p>
      <p>
        Con AutoDiag EU Premium a <strong>49 CHF/ano</strong> (unos
        55&nbsp;&euro;), tienes diagnosticos ilimitados: lectura y borrado de
        codigos, datos en tiempo real, Escaneo Sonoro con IA, pre-ITV y
        asistente mecanico inteligente. Y la version gratuita ya cubre la
        lectura de codigos basica.
      </p>
      <p>
        <strong>Ahorro medio anual: 45&ndash;145&nbsp;&euro;.</strong> Sin
        contar las reparaciones que puedes hacer tu mismo gracias al
        diagnostico preciso.
      </p>

      <h2>Comparativa con otras apps</h2>
      <p>
        AutoDiag EU no es la unica app de diagnostico del mercado. Pero hay
        diferencias clave:
      </p>
      <ul>
        <li>
          <strong>Carly</strong> &mdash; Muy completa pero cara: desde
          21&nbsp;&euro;/ano hasta 80&nbsp;&euro;/ano segun la marca, y
          requiere su propio dongle (60&nbsp;&euro;). No tiene diagnostico
          audio.
        </li>
        <li>
          <strong>Car Scanner</strong> &mdash; Buena lectura OBD2, interfaz
          correcta, pero sin IA, sin audio, sin pre-ITV. Version Pro a
          27&nbsp;&euro; (compra unica).
        </li>
        <li>
          <strong>OBDeleven</strong> &mdash; Excelente para grupo VAG
          (Volkswagen, Audi, SEAT, Skoda), pero limitada en otras marcas.
          Requiere su propio dongle (30&nbsp;&euro;) y creditos para funciones
          avanzadas.
        </li>
        <li>
          <strong>AutoDiag EU</strong> &mdash; Compatible con todas las marcas,
          diagnostico audio con IA, pre-ITV 5 paises, Drive Test sin dongle,
          fusion de datos multi-sensor. 49 CHF/ano todo incluido, sin creditos
          ni compras in-app ocultas.
        </li>
      </ul>

      <h2>&iquest;Entonces ya no necesitas taller?</h2>
      <p>
        Ojo, AutoDiag EU no reemplaza al taller &mdash; lo complementa. Para
        reparaciones mecanicas complejas (cambio de distribucion, sustitucion
        de turbo, reparacion de caja de cambios), necesitas un profesional con
        las herramientas adecuadas. Pero para el <strong>diagnostico
        inicial</strong>, el seguimiento del estado de tu coche y la
        preparacion de la ITV, AutoDiag EU te da autonomia total.
      </p>
      <p>
        Piensa en ello como ir al medico: AutoDiag EU es tu farmacia de
        guardia y tu termomentro inteligente. Para una operacion quirurgica,
        vas al hospital. Pero para saber si tienes fiebre o un resfriado, no
        necesitas urgencias.
      </p>

      <h2>En resumen</h2>
      <p>
        Con AutoDiag EU, dejas de pagar por informacion que tu coche ya tiene
        almacenada en su centralita. Un dongle de 25&nbsp;&euro;, una app
        inteligente y 5 minutos de tu tiempo &mdash; eso es todo lo que
        necesitas para saber exactamente que le pasa a tu coche, sin pasar por
        caja en el taller. El ahorro medio anual supera los
        100&nbsp;&euro;, y la tranquilidad que te da no tiene precio.
      </p>
    </ArticleLayout>
  );
}
