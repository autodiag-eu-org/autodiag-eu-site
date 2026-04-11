import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESComprarSegundaManoVerifs() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cual es la verificacion mas importante antes de comprar?",
      a: "El escaneo OBD2 completo, seguido inmediatamente de un Escaneo Sonoro de motor. El primero revela codigos ocultos y valores de envejecimiento (lambda, catalizador, fuel trims). El segundo detecta desgastes mecanicos que el vendedor no puede ocultar ni borrando codigos. Juntos dan una foto fiable de la salud real del vehiculo en menos de diez minutos.",
    },
    {
      q: "&iquest;Se puede borrar un testigo justo antes de la venta?",
      a: "Si, y muchos vendedores poco escrupulosos lo hacen. Pero algunos codigos vuelven tras pocos kilometros, y sobre todo los valores de readiness (monitores OBD2) estan entonces a cero. Un vendedor honesto no borra los codigos justo antes de la visita: los monitores estan listos, lo que significa que la centralita ha tenido tiempo de reinicializarse tras las reparaciones.",
    },
    {
      q: "&iquest;Como detectar un cuentakilometros manipulado?",
      a: "Cruce tres fuentes: el libro de mantenimiento con fechas y kilometrajes, el historial ITV o equivalente, y el kilometraje real medido por el escaner OBD2 en ciertas centralitas (ABS, caja). Una diferencia de mas de 5000&nbsp;km entre fuentes es una senal clara. Las manipulaciones mas grandes superan los 50000&nbsp;km.",
    },
    {
      q: "&iquest;Debo pagar una precompra en un mecanico?",
      a: "Para un coche de mas de 10000&nbsp;EUR, si es buena idea, cuente 100 a 200&nbsp;EUR. Por debajo, un escaneo completo con la app mas una prueba atenta cubre el 85&nbsp;% de los casos. Si tiene una duda concreta (embrague, caja), pasar por un taller especialista de la marca sigue siendo tranquilizador.",
    },
    {
      q: "&iquest;Que documentos exigir imperativamente?",
      a: "Permiso de circulacion original, informe de la DGT, ITV de menos de 6 meses, libro de mantenimiento, facturas de grandes intervenciones (distribucion, embrague, turbo). Para un coche importado, verifique que el certificado de conformidad europeo este presente. Rechace cualquier compra sin estos documentos basicos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Comprar coche de segunda mano: las verificaciones esenciales en 2026"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Compra segunda mano"
      >
        <p>
          El mercado de segunda mano es una trampa. Los anuncios brillan,
          los vendedores son amables, las fotos son favorecedoras y sin
          embargo un comprador de cada tres se arrepiente en los seis
          meses segun los estudios europeos. La buena noticia: el 80&nbsp;%
          de los malos negocios podrian haberse evitado con una inspeccion
          metodica de treinta minutos. Aqui la checklist completa que un
          comprador informado debe seguir en 2026.
        </p>

        <h2>Antes incluso de desplazarse</h2>
        <p>
          Escanee la matricula o el VIN por OCR desde el anuncio para
          verificar la conformidad basica: marca, modelo, ano,
          combustible, motor. Un vendedor que se equivoca en su propio
          coche es una senal. Consulte los historiales disponibles para
          verificar kilometraje, siniestros declarados y llamadas a
          revision del fabricante.
        </p>

        <h2>Inspeccion visual de carroceria</h2>
        <p>
          Empiece dando una vuelta al coche a plena luz del dia. Busque
          diferencias de tono entre paneles (senal de repintado), restos
          de masilla bajo los plasticos de aleta, desajustes de capo o
          puertas. Mida el grosor de pintura con un medidor (15 a
          30&nbsp;EUR) &mdash; un grosor superior a 250 micras delata una
          reparacion importante. Verifique las tuercas de suspension del
          paso de rueda: si estan marcadas, el coche ha recibido un
          golpe.
        </p>

        <h2>Bajo el coche: las fugas que hablan</h2>
        <p>
          Mire el suelo donde esta estacionado el coche. Una mancha
          fresca marron senala una fuga de aceite. Verde, rosa o naranja:
          es refrigerante. Roja: ATF de caja automatica. Transparente:
          liquido de frenos o condensado de climatizacion (benigno). Los
          colores hablan.
        </p>

        <h2>Los neumaticos: una historia en cuatro capitulos</h2>
        <p>
          Los neumaticos cuentan la geometria y el desgaste. Desgaste
          central: sobrepresion cronica. Desgaste en hombros:
          subpresion o amortiguador muerto. Desgaste en diagonal
          (cupping): suspension o paralelismo. Desgaste uniforme por
          debajo de 3&nbsp;mm: neumaticos a cambiar, factor de
          negociacion. Compruebe tambien las fechas de fabricacion (DOT):
          neumaticos de mas de 6 anos endurecen y pierden adherencia
          incluso con dibujo.
        </p>

        <h2>Escaneo OBD2: la sinceridad de la centralita</h2>
        <p>
          Conecte su dongle ELM327 y lance un escaneo completo. Tres cosas
          a verificar. Una: los codigos activos y pendientes. Dos: los
          monitores OBD2 (readiness) &mdash; deben estar mayoritariamente
          a ready, senal de que el coche lleva suficiente tiempo
          circulando normalmente para que la centralita haya probado todos
          sus sistemas. Tres: los kilometrajes leidos por ciertas
          centralitas (ABS, caja) para cruzar con el cuentakilometros.
          Un codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link> pendiente es una
          advertencia seria.
        </p>

        <h2>Escaneo Sonoro: lo que el vendedor no puede ocultar</h2>
        <p>
          El Escaneo Sonoro es imposible de manipular. Aunque el vendedor
          haya borrado todos los codigos, el desgaste mecanico deja su
          firma acustica. Grabe 30 segundos al ralenti con motor caliente
          y otros 30 a 2500&nbsp;rpm. El SVM clasifica las anomalias. Una
          confianza superior al 70&nbsp;% en bearing, knock o tick
          merece discusion.
        </p>

        <h2>Prueba de carretera metodica</h2>
        <p>
          Minimo 20 minutos en condiciones variadas: urbano, arranque
          parado, autovia, frenada firme, curva cerrada. Escuche ruidos
          sospechosos, verifique que los cambios pasen sin tirones, que
          la frenada sea franca y recta, que la direccion no tire, que el
          climatizador enfrie rapido. Pare el motor caliente, reinicie:
          un motor de arranque que fuerza o humo al arrancar son alertas
          mayores.
        </p>

        <h2>Verificar los documentos</h2>
        <p>
          Permiso de circulacion original a nombre del vendedor, informe
          DGT reciente, ITV de menos de 6 meses, libro de mantenimiento
          coherente con el kilometraje, facturas de intervenciones
          importantes. Para coches de mas de 5 anos, la factura de
          distribucion es capital. Vea tambien{" "}
          <Link href="/es/codes/p0420">el codigo P0420</Link>, motivo
          frecuente de negociacion.
        </p>

        <h2>Negociar sobre bases factuales</h2>
        <p>
          Si la inspeccion revela defectos, negocie con cifras:
          presupuesto de reparacion, coste de puesta a punto, depreciacion
          del vehiculo. Un vendedor serio acepta una negociacion
          documentada. Un vendedor que se agita por un presupuesto de
          400&nbsp;EUR probablemente tambien esta sorprendido por lo que
          ha encontrado. Vayase si hace falta &mdash; siempre hay otro
          anuncio.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
