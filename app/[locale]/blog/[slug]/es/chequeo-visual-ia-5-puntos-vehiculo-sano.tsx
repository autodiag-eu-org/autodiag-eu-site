import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESChequeo5Puntos() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cuanto tarda el chequeo visual en cinco puntos?",
      a: "Cinco minutos si sigues el protocolo, diez si empiezas. La app te guia punto por punto, reconoce cada toma y confirma cuando la imagen es utilizable. Es menos de lo que tardas en llenar el deposito.",
    },
    {
      q: "&iquest;Con que frecuencia debo hacerlo?",
      a: "Una vez al mes para uso diario. Cada quince dias si ruedas mucho o el vehiculo tiene mas de doce anos. Antes de un viaje largo es la rutina mas rentable que puedes hacer &mdash; cinco minutos para detectar un problema que te habria costado el viaje.",
    },
    {
      q: "&iquest;Necesito material especial?",
      a: "Solo un telefono y una linterna para zonas oscuras (la del movil basta). Un carton blanco A4 ayuda con las fugas, pero no es obligatorio. Sin herramientas, sin desmontaje.",
    },
    {
      q: "&iquest;Que hace la app con mis fotos?",
      a: "Se analizan en el servidor, el resultado vuelve como diagnostico y las imagenes se borran en 48&nbsp;horas salvo que autorices su conservacion para mejorar el modelo. Solo conservas el informe, no las fotos.",
    },
    {
      q: "&iquest;El chequeo detecta todo?",
      a: "Detecta lo visible desde fuera. Para averias electronicas o problemas internos del motor hay que combinar con escaneo OBD2 o Escaneo Sonoro. Las tres tecnologias se completan y cubren juntas mas del 90&nbsp;% de las averias comunes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Chequeo visual IA en cinco puntos: mantener tu vehiculo sano"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Prevencion"
      >
        <p>
          La mejor averia es la que pillas antes de que se convierta en
          averia. No es un eslogan, es una verdad economica: una
          reparacion anticipada cuesta cuatro veces menos de media que
          una de urgencia. El problema es que la mayoria no sabe donde
          mirar ni cuando. El chequeo visual en cinco puntos es la rutina
          que hemos disenado exactamente para eso: cinco minutos, cinco
          zonas, un movil y la Vision IA haciendo el trabajo de experto.
        </p>

        <h2>Punto 1: el suelo bajo el coche</h2>
        <p>
          Aparca sobre suelo claro y seco, espera al menos dos horas.
          Agachate a un metro y fotografia la zona bajo el bloque motor.
          Luego otra bajo la caja de cambios. La IA busca tres cosas: una
          mancha visible, una diferencia con tomas anteriores, un color
          inusual. Si no aparece nada, pasas al punto&nbsp;2 en diez
          segundos. Si aparece algo, tienes el detalle completo: liquido
          probable, gravedad, accion recomendada. Esta etapa se trata en
          profundidad en el articulo{" "}
          <Link href="/es/blog/vision-ia-detectar-fugas-bajo-coche-movil">
            deteccion de fugas con Vision IA
          </Link>
          .
        </p>

        <h2>Punto 2: los neumaticos</h2>
        <p>
          Una foto por neumatico, perpendicular a la banda de rodadura.
          El modelo mide la profundidad residual en los surcos, detecta
          patrones anormales (centro, hombros, bordes, cupping), compara
          con el historial y te alerta si uno se desvia. Esta etapa es la
          que se paga mas rapido: un neumatico mal inflado detectado a
          tiempo te evita doscientos euros de cambio prematuro. Metodo
          detallado en el articulo dedicado al{" "}
          <Link href="/es/blog/desgaste-prematuro-neumaticos-ia-ve-lo-que-no-notas">
            desgaste prematuro de neumaticos
          </Link>
          .
        </p>

        <h2>Punto 3: las pastillas a traves de los radios</h2>
        <p>
          Gira el volante a tope para exponer la pastilla delantera
          derecha, pasa el movil entre los radios, enciende la linterna,
          haz la foto. Luego igual a la izquierda. La Vision IA mide el
          grosor residual, detecta rayado en el disco (aspecto estriado),
          principios de vitrificacion y marcas de calentamiento (tinte
          azulado que delata sobrecalentamiento). Una pastilla por debajo
          de 3&nbsp;mm dispara alerta roja: unos 2000&nbsp;km de
          autonomia restante. A 6&nbsp;mm es verde. Esta medida precisa
          evita sorpresas en un viaje largo. Detalles en{" "}
          <Link href="/es/blog/desgaste-pastillas-discos-vision-ia-detecta">
            desgaste de pastillas y discos detectado por Vision IA
          </Link>
          .
        </p>

        <h2>Punto 4: bajo el capo</h2>
        <p>
          Abre el capo. Cuatro fotos: el tapon de aceite con la varilla
          sacada para verificar nivel, el vaso de expansion del
          refrigerante, el deposito de liquido de frenos y una vista
          general de las correas visibles. La IA mide niveles por la
          posicion del liquido en los depositos translucidos, detecta
          microfisuras nacientes en correas auxiliares, ve rastro de
          rezume en un manguito. Si tu refrigerante paso de verde franco
          a marron oxido, es firma de contaminacion a vigilar. Si tu
          aceite es opaco en la varilla, cambio atrasado. Cuatro fotos,
          cuatro verificaciones.
        </p>

        <h2>Punto 5: la iluminacion exterior</h2>
        <p>
          Pide a alguien que encienda sucesivamente luces de cruce, de
          carretera, intermitentes y luces de freno. Para los frenos
          basta un pie en el pedal si estas solo. Una foto de frente, una
          de tres cuartos, una del trasero. La IA cuenta las fuentes
          luminosas activas, detecta una bombilla fundida, senala
          asimetria de potencia (un faro mas amarillo que otro&nbsp;=
          bombilla en fin de vida). Una bombilla fundida es motivo de
          rechazo en ITV, y es lo mas facil de arreglar antes del dia.
        </p>

        <h2>El informe sintetico</h2>
        <p>
          Al final de los cinco puntos la app genera un informe unico
          con codigo de color: verde si todo bien, naranja si un punto
          pide vigilancia, rojo si un punto exige accion. El informe se
          archiva en el historial de tu vehiculo. Mes a mes ves las
          curvas: profundidad del neumatico que baja, grosor de pastilla
          que disminuye, niveles que oscilan. El dia que una curva entra
          en zona anormal, estas avisado antes incluso de percibir nada.
        </p>

        <h2>La combinacion que cubre el 90&nbsp;%</h2>
        <p>
          El chequeo visual no es una herramienta aislada. Forma parte
          de una triada: Vision IA para el exterior, Escaneo Sonoro para
          los ruidos (ver{" "}
          <Link href="/es/blog/11-averias-motor-detectables-analisis-sonoro">
            las 11 averias detectables al oido
          </Link>
          ), escaneo OBD2 para la electronica (ver{" "}
          <Link href="/es/codes/p0171">
            codigo P0171 y codigos de mezcla pobre
          </Link>
          ). Juntas cubren mas del 90&nbsp;% de las averias comunes de
          los vehiculos europeos en fase precoz, donde la reparacion
          sigue siendo asequible. Cinco minutos al mes en lo visual,
          tres en lo sonoro, dos en lo electronico. Diez minutos
          mensuales que ahorran de media 800&nbsp;EUR al ano segun
          nuestros datos de campo.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
