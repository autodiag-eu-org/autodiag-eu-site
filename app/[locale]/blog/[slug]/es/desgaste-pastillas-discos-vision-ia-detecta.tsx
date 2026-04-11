import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESDesgastePastillasVision() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como medir el grosor de una pastilla sin desmontar la rueda?",
      a: "La Vision IA fotografia la pastilla a traves de los radios de la llanta, usando la linterna del movil. Mide la parte visible con una precision de unos 0.5&nbsp;mm calibrandose sobre el diametro del disco detectado. Es preciso siempre que la toma sea nitida y bien iluminada.",
    },
    {
      q: "&iquest;A partir de que grosor hay que cambiar las pastillas?",
      a: "Una pastilla nueva mide 10 a 12&nbsp;mm. A 4&nbsp;mm debes planificar el cambio en tres meses. A 3&nbsp;mm el testigo de desgaste va a rozar pronto el disco y provocar un chirrido. A 2&nbsp;mm ruedas sobre la placa soporte y danas el disco: cambio inmediato y probable sustitucion del disco.",
    },
    {
      q: "&iquest;Que es un disco alabeado o rayado?",
      a: "Un disco en buen estado es liso y brillante con algunas estrias finas. Un disco rayado presenta surcos profundos causados por pastillas gastadas hasta la placa metalica. Un disco alabeado esta deformado, lo que provoca vibraciones en el pedal al frenar. La Vision IA detecta ambos defectos en una foto.",
    },
    {
      q: "&iquest;Que significa un tinte azul en un disco?",
      a: "El azulamiento aparece cuando el disco ha sufrido sobrecalentamiento severo. La oxidacion del metal a alta temperatura da ese tinte azul-violeta. Es firma de pinza agarrotada, conducto obstruido o uso intensivo en montana. El disco debe reemplazarse porque sus propiedades mecanicas estan alteradas.",
    },
    {
      q: "&iquest;Cuanto cuesta cambiar pastillas y discos?",
      a: "Un juego de pastillas delanteras de gama media cuesta entre 60 y 120&nbsp;EUR. Un juego de discos entre 90 y 200&nbsp;EUR. La mano de obra cuenta 80 a 150&nbsp;EUR por eje. Total realista: 250 a 450&nbsp;EUR delante, algo menos detras. Anticipar permite elegir el momento y comparar presupuestos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Desgaste de pastillas y discos: lo que la Vision IA detecta a traves de los radios"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Vision IA"
      >
        <p>
          Los frenos son la pieza mas importante de tu coche &mdash; mas
          que el motor, mas que la caja, mas que la suspension. Porque
          un freno que falla es un accidente. El problema es que nadie
          mira realmente sus pastillas. Se rueda, se frena, se espera el
          chirrido. Ese chirrido llega tarde: cuando lo oyes
          probablemente ya has danado el disco. La Vision IA resuelve
          exactamente ese problema: mide tu pastilla sin desmontar,
          fotografiando a traves de los radios de la llanta. Unos
          segundos por rueda y sabes donde estas.
        </p>

        <h2>La toma que funciona</h2>
        <p>
          Gira el volante a tope a la derecha para exponer la pastilla
          delantera izquierda. La parte vertical queda accesible entre
          dos radios de la llanta. Enciende la linterna del movil,
          posiciona el objetivo entre los radios, estabiliza, haz la
          foto. Repite en la rueda opuesta. La app reconoce la geometria
          de una pinza, aisla la pastilla, mide la altura visible en
          pixeles y convierte a milimetros calibrandose sobre el
          diametro del disco.
        </p>

        <h2>La jerarquia de medidas</h2>
        <p>
          Una pastilla nueva mide entre 10 y 12&nbsp;mm. A 6&nbsp;mm
          estas a mitad de vida, indicador verde. A 4&nbsp;mm pasa a
          naranja: planifica el cambio en 3 meses. A 3&nbsp;mm el
          testigo de desgaste empieza a tocar el disco y oiras pronto
          un chirrido caracteristico &mdash; alerta roja. A 2&nbsp;mm o
          menos es critico: el material se acerca peligrosamente a la
          placa metalica que, en contacto con el disco, lo rayara en
          pocos kilometros. El{" "}
          <Link href="/es/blog/chirrido-frenos-desgaste-normal-o-peligro">
            chirrido de frenos
          </Link>{" "}
          merece su propio articulo.
        </p>

        <h2>El disco: el gran olvidado</h2>
        <p>
          Problema comun: los conductores cambian sus pastillas pero
          conservan los discos antiguos. A veces es un error. La Vision
          IA analiza tambien el disco visible y detecta tres defectos.
          Primero: el rayado profundo. Si la superficie muestra surcos
          netos, la pastilla anterior uso hasta el metal, el disco no
          puede rectificarse. Segundo: el alabeo. Un disco alabeado
          provoca vibraciones al frenar. El analisis fotografico no
          mide el alabeo directamente pero detecta los rastros de
          desgaste asimetrico resultantes. Tercero: el azulamiento.
          Cuando ha calentado hasta azularse, su estructura cristalina
          ha cambiado, debe reemplazarse.
        </p>

        <h2>Los signos que acompanan la medida</h2>
        <p>
          La Vision IA no se contenta con la medida bruta. Mira tambien
          el contexto. Una pastilla ligeramente vitrificada presenta
          superficie lisa y brillante, a veces con reflejos
          barnizados: es una pastilla que ha calentado demasiado, a
          menudo por pinza agarrotada. Una diferencia marcada de
          desgaste entre pastilla interior y exterior es firma de un
          piston de pinza que no vuelve correctamente. Un desgaste
          asimetrico entre izquierda y derecha del mismo eje senala un
          problema hidraulico o un latiguillo que se hincha a presion.
        </p>

        <h2>El vinculo con el ruido de freno</h2>
        <p>
          La Vision IA detecta lo visible, el{" "}
          <Link href="/es/blog/chirrido-frenos-desgaste-normal-o-peligro">
            escaneo sonoro de ruidos de freno
          </Link>{" "}
          detecta lo audible. Juntas cubren el 95&nbsp;% de los
          problemas de frenado. Si ves una pastilla a 4&nbsp;mm y ya
          oyes un chirrido ciclico, estas probablemente mas alla del
          uso normal: hay probablemente componente pinza o piston. Si
          ves una pastilla a 5&nbsp;mm sin ruido, tienes aun tres o
          cuatro meses para preparar el cambio con calma.
        </p>

        <h2>El calculo de autonomia restante</h2>
        <p>
          Con el historial de medidas sucesivas, la app calcula tu
          velocidad de desgaste en milimetros por mil kilometros. Muy
          variable segun conductor: un urbanita gasta 1.5&nbsp;mm por
          10&nbsp;000&nbsp;km, un autopistero 0.7, un conductor de
          montana puede pasar de 2. Conocida tu velocidad personal, la
          app proyecta el momento de alcanzar 3&nbsp;mm, luego 2&nbsp;mm.
          Planificas, comparas presupuestos, eliges taller sin urgencia.
        </p>

        <h2>Los ahorros reales</h2>
        <p>
          Anticipar el cambio ahorra dos partidas. Primero: la
          intervencion de urgencia con inmovilizacion cuesta 30 a
          60&nbsp;EUR mas que una cita planificada. Segundo: si esperas
          demasiado y danas el disco, pasas de un juego de pastillas a
          100&nbsp;EUR a un conjunto pastillas+discos a 250&nbsp;EUR,
          con mano de obra casi duplicada. En cuatro anos de uso tipico
          en Europa, son 300 a 600&nbsp;EUR ahorrados solo en frenos.
          Si combinas con la{" "}
          <Link href="/es/blog/preparar-itv-lista-completa">
            preparacion de la ITV
          </Link>{" "}
          y un escaneo OBD2 regular (vigila el{" "}
          <Link href="/es/codes/p0325">codigo P0325 picado</Link> que
          puede senalar calentamiento anormal), tienes la ecuacion
          completa: Vision IA + Escaneo Sonoro + OBD2 = vehiculo sin
          malas sorpresas.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
