import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESEscanearMatricula() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cuanto tarda el escaneo de una matricula?",
      a: "Menos de dos segundos en condiciones normales. El OCR lee los caracteres, consulta la base europea y devuelve marca, modelo, ano, cilindrada y combustible. Si la luz es mala o la matricula esta sucia, el tiempo puede subir a cuatro segundos pero el resultado sigue siendo fiable a mas del 95&nbsp;%.",
    },
    {
      q: "&iquest;El escaneo de matricula funciona en todos los paises europeos?",
      a: "Funciona en los formatos estandar de la UE mas Suiza y Reino Unido. Algunas matriculas personalizadas o diplomaticas no devuelven datos tecnicos, pero el OCR identifica correctamente los caracteres. Las bases tecnicas estan cubiertas para Francia, Alemania, Belgica, Espana, Italia, Portugal, Reino Unido, Paises Bajos y Suiza.",
    },
    {
      q: "&iquest;Puedo escanear la matricula de un coche que quiero comprar de ocasion?",
      a: "Es precisamente el uso principal. Llega delante del vehiculo, escanea la matricula, compara instantaneamente con el anuncio. Marca, modelo, ano, energia: todo debe cuadrar. Si el anuncio dice gasolina y la base dice diesel, se da la vuelta antes incluso de negociar el precio.",
    },
    {
      q: "&iquest;La Vision IA detecta si una matricula ha sido manipulada?",
      a: "Detecta las incoherencias basicas: formato no conforme al pais declarado, caracteres mal alineados, fondo anormal. Pero no sustituye una verificacion administrativa completa. Para una transaccion, exija siempre el permiso de circulacion y el informe de cargas como complemento.",
    },
    {
      q: "&iquest;Los datos recuperados incluyen el kilometraje y el historial?",
      a: "No, el escaneo de matricula solo da las caracteristicas tecnicas del vehiculo: marca, modelo, motorizacion, ano, combustible, emisiones. Para el historial completo (accidentes, km, mantenimiento) hay que escanear el VIN que contiene 17 caracteres unicos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Escanear una matricula: identificacion instantanea del vehiculo"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Compra ocasion"
      >
        <p>
          Imagine: esta en un parking delante de un Golf VII que le
          interesa, el vendedor insiste en una version TSI de 2016 con
          pocos kilometros. Saca su telefono, encuadra la matricula,
          pulsa una vez. Dos segundos despues, la aplicacion le
          responde: Volkswagen Golf VII, 1.6 TDI 110 cv, matriculacion
          2014. Conversacion terminada. Acaba de evitar una estafa. Es
          exactamente lo que hace el escaner de matricula de AutoDiag
          EU, y es la funcionalidad mas util que hemos anadido para los
          compradores de ocasion.
        </p>

        <h2>El OCR al servicio del comprador desconfiado</h2>
        <p>
          El sistema se basa en dos piezas tecnicas: un OCR optimizado
          para los formatos de matriculas europeas, y una base de datos
          de matriculaciones que devuelve las caracteristicas tecnicas
          del vehiculo. El OCR gestiona los nueve formatos principales
          de la UE, mas Suiza y UK. Sabe distinguir el cero de la letra
          O, el uno de la letra I, y corrige automaticamente las
          inversiones debidas a un angulo de toma. Una vez leidos los
          caracteres, se envian a la API de referencia que devuelve la
          ficha tecnica en unos cientos de milisegundos.
        </p>

        <h2>Lo que obtiene en dos segundos</h2>
        <p>
          La respuesta contiene: la marca, el modelo exacto con su nivel
          de acabado si esta disponible, la cilindrada y la potencia, el
          tipo de combustible (gasolina, diesel, hibrido, electrico, GLP,
          GNV, E85), el ano de primera matriculacion, y la norma Euro de
          emisiones (Euro 4, 5, 6, 6d). Para un comprador, esta
          informacion permite verificar si el vehiculo es compatible con
          las zonas de bajas emisiones de su ciudad, si la motorizacion
          anunciada se corresponde con la realidad, y si el ano es
          coherente con el kilometraje mostrado en el cuentakilometros.
        </p>

        <h2>La prueba del cafe</h2>
        <p>
          Mi uso favorito: antes de ir a ver un vehiculo, escaneo la
          matricula desde las fotos del anuncio en linea. Si el vendedor
          ha pixelado la matricula, pido una foto nitida. Si la
          respuesta de la IA no se corresponde con el anuncio (energia
          diferente, ano desfasado dos anos, modelo de gama mas baja),
          ni siquiera tengo que desplazarme. He ahorrado un viaje inutil,
          una hora de negociacion y probablemente un cuentakilometros
          falso. De cada diez anuncios escaneados asi, de media dos
          plantean problemas.
        </p>

        <h2>El reglamento europeo y su vida privada</h2>
        <p>
          Una pregunta vuelve: &iquest;es legal escanear cualquier
          matricula? Si. Una matricula es publica por definicion. En
          cambio, cruzar esta matricula con los datos personales del
          propietario esta prohibido, y AutoDiag EU no lo hace. Usted
          recibe la ficha tecnica del vehiculo, no el nombre o la
          direccion del propietario. Esta distincion es esencial y
          respeta el RGPD al pie de la letra. Las consultas no se
          almacenan, no constituyen un perfil.
        </p>

        <h2>El caso del propietario</h2>
        <p>
          Si escanea la matricula de su propio coche, la aplicacion
          puede crear automaticamente un perfil de vehiculo: marca,
          modelo, ano, combustible precargados. Gana cinco minutos de
          entrada manual. Este perfil sirve luego para personalizar los
          diagnosticos OBD2, orientar la{" "}
          <Link href="/es/blog/preparer-ct-2026">ITV</Link> y adaptar
          los consejos de mantenimiento. El escaneo es una puerta de
          entrada, no una simple curiosidad.
        </p>

        <h2>Cuando el escaneo falla</h2>
        <p>
          Tres casos plantean problemas. Las matriculas personalizadas o
          con demasiados caracteres de fantasia devuelven un OCR limpio
          pero ningun dato tecnico. Las matriculas antiguas (antes de
          2009 en Francia, formato FNI) funcionan pero los datos son
          menos completos. Las matriculas extranjeras fuera de la UE
          (Noruega, Serbia, Turquia) salen del perimetro. En estos
          casos, la aplicacion le propone escanear directamente el VIN
          para obtener la misma informacion, mas completa.
        </p>

        <h2>La combinacion ganadora matricula + VIN + OBD2</h2>
        <p>
          Para una verificacion completa antes de comprar, el protocolo
          AutoDiag EU combina tres capas. Primera capa: el escaneo de
          matricula en diez segundos para verificar la coherencia
          basica. Segunda capa: el{" "}
          <Link href="/es/blog/scanner-vin-decoder-historique-complet-voiture">
            escaneo VIN
          </Link>{" "}
          para recuperar el historial (accidentes, kilometraje,
          mantenimiento). Tercera capa: la conexion OBD2 si hay dongle
          disponible, para leer los codigos almacenados y pendientes.
          Con estas tres capas ve en quince minutos lo que una
          inspeccion tradicional tarda una hora en encontrar. Es el
          poder del{" "}
          <Link href="/es/blog/autodiag-vs-garage">
            autodiagnostico frente a la visita al taller
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
