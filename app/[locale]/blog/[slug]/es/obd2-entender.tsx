import { ArticleLayout } from "../_shared/ArticleLayout";

export function ArticleESOBD2Entender() {
  return (
    <ArticleLayout
      locale="es"
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
