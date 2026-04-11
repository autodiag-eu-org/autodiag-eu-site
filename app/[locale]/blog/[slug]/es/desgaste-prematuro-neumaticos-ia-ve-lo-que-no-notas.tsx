import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESDesgastePrematuroNeumaticos() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como saber si mis neumaticos se desgastan de forma anormal?",
      a: "Mira el perfil de la banda: si el centro esta mas gastado que los bordes, es sobreinflado. Si los hombros estan mas gastados que el centro, es subinflado cronico. Si el interior esta liso y el exterior intacto, es problema de alineacion o de caida. La vision IA reconoce esos cinco patrones en una foto.",
    },
    {
      q: "&iquest;Un neumatico que se gasta de un solo lado es siempre un problema mecanico?",
      a: "Casi siempre. Un desgaste unilateral significa que el angulo de contacto no es recto: caida negativa excesiva, silentblocks de brazo cansados, rotula de direccion con holgura, o un muelle hundido.",
    },
    {
      q: "&iquest;Que es el cupping y como reconocerlo?",
      a: "El cupping, o desgaste en ondas, da aspecto de olitas en la banda. Tambien se siente al conducir: zumbido regular que sube con la velocidad. Es la firma de un amortiguador cansado que deja rebotar la rueda.",
    },
    {
      q: "&iquest;Cada cuanto revisar el desgaste de los neumaticos?",
      a: "Una foto por neumatico cada dos meses basta para seguir la evolucion. Diez segundos por rueda, cuarenta en total. La IA compara las fotos sucesivas y avisa en cuanto el perfil cambia de naturaleza.",
    },
    {
      q: "&iquest;Un neumatico gastado a 1,8&nbsp;mm hay que cambiarlo ya?",
      a: "El limite legal en Europa es 1,6&nbsp;mm, pero el rendimiento en frenada en mojado cae desde 3&nbsp;mm. A 1,8&nbsp;mm estas en zona roja: pide tus neumaticos la semana siguiente. La IA mide la profundidad residual con una tolerancia de mas menos 0,3&nbsp;mm.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Desgaste prematuro de neumaticos: la IA ve lo que tu no notas"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico visual"
      >
        <p>
          Un neumatico no es solo una envoltura negra. Es un diario de a
          bordo que cuenta, foto tras foto, lo que tu coche vive
          realmente. Cada patron de desgaste es la firma de un problema
          mecanico preciso, y la mayor parte del tiempo el propietario no
          ve nada hasta el dia en que la ITV rechaza el vehiculo. La
          vision IA de AutoDiag EU lee ese diario por ti. Tomas una foto
          de la banda, ella identifica el patron, te dice de donde viene.
        </p>

        <h2>Cinco patrones, cinco causas</h2>
        <p>
          En el 90&nbsp;% de los casos de desgaste anormal, se cae en
          cinco familias. Desgaste central: sobreinflado, el contacto se
          concentra en el centro. Desgaste de hombros: subinflado
          permanente, los flancos se aplastan. Desgaste interno marcado:
          caida negativa excesiva o convergencia cerrada tras un golpe de
          bordillo. Desgaste externo: convergencia abierta o rotula de
          brazo cansada. Cupping: amortiguador cansado que deja rebotar la
          rueda.
        </p>

        <h2>Lo que la foto capta y el ojo ignora</h2>
        <p>
          Toma una foto perpendicular a la banda, con buena iluminacion.
          La IA hace tres cosas que tu no haces. Primera, mide la
          profundidad residual en cada surco con precision de tres
          decimas de milimetro. Segunda, compara la profundidad interna y
          externa. Tercera, detecta el inicio del cupping mucho antes de
          que oigas el zumbido en la cabina.
        </p>

        <h2>La historia de la caida mal ajustada</h2>
        <p>
          Un caso concreto: un Peugeot 308 que golpeo un bordillo hace
          cuatro meses. El conductor no penso en revisar la geometria
          porque el coche iba recto. Cuatro meses despues, el neumatico
          delantero izquierdo esta liso en el interior y casi nuevo en el
          exterior. La foto de vision IA detecta una diferencia de
          2,4&nbsp;mm entre los dos bordes, estima la caida en menos de
          dos grados y alerta inmediatamente. Coste: 80&nbsp;EUR de
          geometria y un neumatico a 120&nbsp;EUR.
        </p>

        <h2>El vinculo con la suspension</h2>
        <p>
          El cupping merece su seccion. Es el reconocimiento de que la
          suspension ya no amortigua correctamente: la rueda rebota, el
          neumatico roza irregularmente. Si ves cupping, el problema no
          es el neumatico, es el amortiguador. Cambiar el neumatico sin
          tocar la suspension es garantizar que el nuevo reproducira el
          mismo patron en seis meses. La vision IA hace el vinculo
          automaticamente. Puedes cruzar con una escucha de{" "}
          <Link href="/es/blog/ruido-suspension-ia-identifica-amortiguador">
            ruido de suspension
          </Link>
          .
        </p>

        <h2>El timing que lo cambia todo</h2>
        <p>
          Un neumatico se juega a dos semanas en el momento de la{" "}
          <Link href="/es/blog/preparar-itv-lista-completa">
            ITV
          </Link>
          . Si pasas la ITV con neumaticos a 1,8&nbsp;mm, tienes una
          reinspeccion casi asegurada. Con la vision IA puedes anticipar
          dos meses antes, pedir el tren de neumaticos cuando encuentras
          los mejores precios, y llegar a la ITV tranquilo. Un tren
          completo medio en 205/55 R16 cuesta entre 380 y 520&nbsp;EUR
          segun marca.
        </p>

        <h2>Lo que la IA no puede ver</h2>
        <p>
          La foto no detecta las hernias internas, los hilos de carcasa
          roidos por la humedad ni las grietas finas del flanco. Para eso
          queda obligatoria una inspeccion tactil una vez al ano, de
          preferencia al cambiar de temporada.
        </p>

        <h2>La rutina recomendada</h2>
        <p>
          Cada dos meses, toma cuatro fotos: una por neumatico,
          perpendicular a la banda, siempre en el mismo punto. El
          historico se muestra en grafico en la aplicacion y ves la curva
          de profundidad residual bajar. Cuando una rueda se queda atras,
          llega el aviso. Intervienes antes de que el problema se
          propague.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
