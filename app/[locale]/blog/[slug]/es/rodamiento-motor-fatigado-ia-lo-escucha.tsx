import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESRodamientoMotorFatigado() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como diferenciar un ruido de rodamiento motor de un rodamiento de rueda?",
      a: "El rodamiento de rueda varia con la velocidad del vehiculo y cambia en curvas. El rodamiento motor varia con el regimen, no con la velocidad, y se mantiene identico sea cual sea la direccion. Test simple: en punto muerto, si el ruido persiste al subir regimen, es motor. Si desaparece, probablemente es rueda.",
    },
    {
      q: "&iquest;Que rodamientos internos del motor pueden desgastarse?",
      a: "Los cojinetes de biela y cigueenal (los mas graves), los apoyos de arbol de levas, los rodamientos de bomba de agua, bomba de aceite y en ciertos casos los del turbo. Cada uno tiene firma sonora distinta, localizada en una frecuencia especifica ligada a su posicion geometrica en el motor.",
    },
    {
      q: "&iquest;El nivel de aceite bajo puede hacer ruido de rodamiento sin desgaste real?",
      a: "Si. Un nivel de aceite insuficiente priva a los cojinetes de su pelicula lubricante y produce ruidos metalicos similares a un principio de desgaste. Primero a comprobar antes de cualquier diagnostico: el nivel. Si desaparece tras rellenar, has evitado una catastrofe. Si no, el desgaste es real.",
    },
    {
      q: "&iquest;A que kilometraje empiezan a fatigarse los cojinetes?",
      a: "En un motor correctamente mantenido con cambios de aceite regulares, los cojinetes aguantan 250&nbsp;000 a 400&nbsp;000&nbsp;km sin problema. Con cambios descuidados puede caer a 120&nbsp;000&nbsp;km. Algunos motores tienen defectos de diseno conocidos que reducen aun mas la vida util. Consulta los retornos sobre tu motorizacion.",
    },
    {
      q: "&iquest;Por que el escaneo detecta un rodamiento antes de que yo lo oiga?",
      a: "Porque el desgaste produce primero un pico espectral estrecho, debil en amplitud, en una banda que tu oido procesa mal (50-300&nbsp;Hz o 8-14&nbsp;kHz segun tipo de rodamiento). El clasificador, entrenado sobre 3963 grabaciones, localiza ese pico antes de que sea lo bastante fuerte para ser percibido conscientemente por un humano.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Rodamiento motor fatigado: lo que la IA escucha antes que tu"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          En la jerarquia de las averias de motor, los rodamientos
          ocupan un lugar aparte. Cuando un cojinete de biela cede, no
          es una reparacion, es un cambio de motor. Cuando un apoyo de
          arbol de levas se gripa, no es una molestia, es una rotura en
          cascada. Por suerte, ninguna de estas averias llega sin
          avisar. Todas producen, desde los primeros cientos de
          kilometros de desgaste, una firma sonora sutil pero
          perfectamente identificable &mdash; con la condicion de tener
          la herramienta adecuada para escucharla.
        </p>

        <h2>Por que los rodamientos son los primeros en traicionarse</h2>
        <p>
          Un rodamiento sano gira casi en silencio. Una pelicula de
          aceite de unas pocas micras separa las superficies moviles, y
          mientras ese film esta presente, el desgaste es nulo. En
          cuanto el film se adelgaza &mdash; aceite muy viejo, nivel
          bajo, sobrecalentamiento momentaneo &mdash; las asperezas de
          las dos superficies se rozan. Esos contactos producen
          microimpactos rapidos que emiten ondas acusticas
          caracteristicas. El ruido es demasiado debil para ser audible
          de inmediato, pero el microfono lo registra y el clasificador
          lo aisla en los coeficientes MFCC.
        </p>

        <h2>Las firmas espectrales por tipo de rodamiento</h2>
        <p>
          Cada tipo de rodamiento tiene su frecuencia propia, ligada a
          su geometria y posicion en el motor. Los cojinetes de biela
          producen un retumbo grave alrededor de 80-200&nbsp;Hz,
          calibrado sobre la rotacion motor. Los cojinetes de cigueenal
          son similares pero con huella mas amplia. Los apoyos de
          arbol de levas trabajan a la mitad del regimen motor y emiten
          sobre 100-400&nbsp;Hz. Los rodamientos de turbo, mucho mas
          pequenos y rapidos, producen picos estrechos entre 8 y
          14&nbsp;kHz. El SVM distingue estas cuatro familias con mas
          del 93&nbsp;% de precision en casos claros.
        </p>

        <h2>El error clasico: confundir con otro ruido</h2>
        <p>
          Muchos conductores atribuyen un retumbo motor a un rodamiento
          de rueda o a una correa, y pierden asi semanas o meses. La
          IA no comete ese error: compara la firma con sus 11 clases y
          saca la que mejor encaja, con una puntuacion de confianza
          para cada clase. Si ves &laquo;bearing noise&raquo; al
          65&nbsp;% y &laquo;belt noise&raquo; al 20&nbsp;%, la
          interpretacion es clara: rodamiento principalmente, correa
          secundaria o similitud parcial.
        </p>

        <h2>Lo que el aceite cuenta</h2>
        <p>
          Un indicador complementario muy fuerte: las particulas
          metalicas en el aceite. Si tienes una duda sobre un ruido y
          el Escaneo Sonoro indica bearing noise con confianza media,
          verifica el aceite. Un aceite normal es ambar y traslucido.
          Un aceite con particulas de cojinete es mas gris, mas opaco y
          a veces deja una pelicula metalica en una hoja de papel
          absorbente. Es una confirmacion visual que vale por todos
          los diagnosticos.
        </p>

        <h2>Deteccion precoz: la diferencia entre 500 y 5000&nbsp;EUR</h2>
        <p>
          Un cojinete detectado en fase inicial de desgaste (primer
          10&nbsp;% del juego anormal) se cambia en una operacion de
          bielas, por 400 a 900&nbsp;EUR segun vehiculo y mano de obra.
          El mismo cojinete ignorado hasta la rotura destruye el
          cigueenal, raya los apoyos, envia particulas por todas
          partes e impone un cambio completo de motor por 3500 a
          6000&nbsp;EUR. Esta asimetria brutal es la razon principal
          por la que existe el Escaneo Sonoro preventivo. Lee tambien{" "}
          <Link href="/es/blog/prevenir-rotura-motor-diagnostico-sonoro-preventivo">
            el diagnostico sonoro preventivo
          </Link>{" "}
          para entender la logica global.
        </p>

        <h2>Los falsos positivos y como gestionarlos</h2>
        <p>
          Ningun clasificador es perfecto. El SVM tiene 91.3&nbsp;% de
          precision, asi que aproximadamente 1 caso de cada 11 se
          clasifica mal. Para el bearing noise especificamente, las
          confusiones mas frecuentes son con los golpeteos leves
          (knock) y los ruidos de distribucion. Para gestionar eso,
          haz siempre un segundo escaneo 24-48&nbsp;h tras una alerta,
          idealmente en condiciones identicas. Si los dos escaneos
          concuerdan, el resultado es fiable. Si el segundo da una
          clase distinta, haz un tercero. La estadistica hace el resto.
        </p>

        <h2>Que hacer cuando el escaneo alerta</h2>
        <p>
          Si tu escaneo indica bearing noise con mas del 60&nbsp;% de
          confianza: primero, verifica el nivel de aceite. Segundo,
          mira su color. Tercero, evita altos regimenes y cargas
          elevadas hasta diagnostico. Cuarto, pide cita en la semana.
          Un rodamiento que empieza a marcar nunca es estable: empeora.
          La ventana de intervencion util es de unas semanas a unos
          meses segun la intensidad. Si ademas ves un codigo{" "}
          <Link href="/es/codes/p0011">P0011</Link> junto al escaneo,
          la prioridad es aun mayor. Para el conjunto de averias
          detectables, mira la{" "}
          <Link href="/es/blog/11-averias-motor-detectables-analisis-sonoro">
            lista de las 11 clases
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
