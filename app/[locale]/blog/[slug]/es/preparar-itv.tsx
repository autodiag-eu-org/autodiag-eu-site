import { ArticleLayout } from "../_shared/ArticleLayout";

export function ArticleESPrepararITV() {
  return (
    <ArticleLayout
      locale="es"
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
