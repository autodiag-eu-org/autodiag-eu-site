import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESRodamientoRueda() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Como identificar el lado del rodamiento averiado?",
      a: "Gire ligeramente el volante a la derecha en carretera libre: si el ruido disminuye, es el rodamiento IZQUIERDO (la carga pasa a la derecha, que esta sana). Si el ruido aumenta, es el DERECHO. El Escaneo Sonoro aporta la objetividad, pero esta prueba manual ayuda a confirmar.",
    },
    {
      q: "&iquest;Es el rodamiento motivo de rechazo en la ITV?",
      a: "Si, desde 2019 en Francia y tambien en la ITV espanola. Un juego excesivo de rodamiento o un ruido anormal audible en el banco de rodillos provoca una segunda visita. Lo mismo ocurre con el TUV aleman y el MOT britanico.",
    },
    {
      q: "&iquest;Cuanto cuesta cambiar un rodamiento?",
      a: "Entre 180 y 450 euros por rueda, segun el vehiculo y el tipo (rodamiento integrado al buje o separado). En algunos modelos alemanes hay que recodificar el ABS, lo que anade de 30 a 60 euros de mano de obra.",
    },
    {
      q: "&iquest;Puedo seguir conduciendo con un rodamiento que zumba?",
      a: "Unos cientos de kilometros sin riesgo inmediato si el ruido es leve. Mas alla, el anillo del rodamiento se calienta, el juego aumenta y, al final, la rueda puede tomar un angulo anormal. En ese punto, el accidente es posible.",
    },
    {
      q: "&iquest;Detecta el escaneo un rodamiento que empieza a fallar?",
      a: "Si, ese es precisamente su punto fuerte. Un rodamiento incipiente produce un zumbido leve entre 200-400 Hz que el oido humano, sentado en un habitaculo ruidoso, no percibe. El SVM lo aisla entre sus 138 caracteristicas.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Ruido de rodamiento de rueda: detectar el desgaste antes de la ITV"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevencion"
      >
        <p>
          El rodamiento de rueda es una de las piezas mas tramposas de un
          coche. Empieza a fatigarse sobre los 90&nbsp;000 km, da la primera
          senal audible hacia los 110&nbsp;000 km y sigue rodando hasta los
          150&nbsp;000 km antes de ser realmente peligroso. El problema es
          que, durante todo ese tiempo, el conductor se acostumbra al
          sonido. Un ano mas tarde, se ha convertido en el &laquo;ruido
          normal&raquo; de su coche. El Escaneo Sonoro, en cambio, nunca
          olvida el ruido de referencia.
        </p>

        <h2>Fisica del rodamiento fatigado</h2>
        <p>
          Un rodamiento de bolas o de rodillos en buen estado gira en
          silencio casi absoluto. Lo que llamamos &laquo;zumbido&raquo; aparece
          cuando las superficies de contacto empiezan a marcarse: la grasa
          se degrada, las pistas internas presentan micro-escamas, y cada
          rotacion genera un choque acustico modulado por la velocidad. La
          frecuencia fundamental se situa entre 100 y 300 Hz a 80 km/h, con
          armonicos hasta 2 kHz. Es en esta zona donde el SVM es mas
          preciso.
        </p>

        <h2>La firma que delata</h2>
        <p>
          Tres caracteristicas identifican con certeza un rodamiento: el
          ruido aumenta con la velocidad (proporcional), modula con la
          carga lateral (curva suave) y desaparece cuando alivia ligeramente
          la rueda al decelerar. Si las tres estan presentes, es un
          rodamiento con un 90&nbsp;% de certeza. El Escaneo Sonoro integra
          estas dependencias en sus 138 caracteristicas: no mira solo el
          espectro en el instante T, sino tambien como evoluciona a lo
          largo de los treinta segundos de grabacion.
        </p>

        <h2>Lo que esta en juego en la ITV</h2>
        <p>
          Desde la reforma de la inspeccion tecnica, los puntos de
          verificacion de suspension y tren de rodaje son mas estrictos. Un
          juego de rodamiento medido con comparador supone un defecto
          grave con segunda visita obligatoria. Cuente 40 a 60 euros por la
          segunda visita ademas de la reparacion. La misma logica se aplica
          al TUV aleman, al MFK suizo y al IPO portugues. Detectar el
          rodamiento dos semanas antes de la visita permite reparar sin
          presion y pasar a la primera.
        </p>

        <h2>El efecto cascada del rodamiento descuidado</h2>
        <p>
          Un rodamiento que se suelta no es solo una pieza que cambiar. Es
          el calor que sube en el buje, el sensor ABS integrado que se
          quema (150 euros adicionales), el disco de freno que se calienta
          asimetricamente y se alabea (150 euros mas), y en casos
          extremos, la mangueta que se sobrecalienta y toma juego a su vez
          (450 euros). Un rodamiento de 220 euros detectado a tiempo se
          convierte en una factura de 970 euros si se deja seis meses.
        </p>

        <h2>Protocolo de escaneo del rodamiento</h2>
        <p>
          Para una deteccion fiable hay que rodar. Un escaneo estacionario
          capta muy poco de la firma. El protocolo correcto: treinta
          segundos en carretera plana a velocidad estable entre 70 y 90
          km/h, con dos cambios de carril suaves para probar la modulacion
          por carga lateral. Evite las carreteras muy bacheadas que ahogan
          la firma en los ruidos de suspension. El SVM dara una confianza
          &laquo;rodamiento&raquo; entre 0 y 100&nbsp;%. Por encima del 60&nbsp;%,
          ya sabe que lado verificar prioritariamente.
        </p>

        <h2>Lo que la adaptacion auditiva le oculta</h2>
        <p>
          Repito esta idea porque es central: su cerebro adapta su
          percepcion a los ruidos recurrentes. Un rodamiento que empieza a
          zumbar a 70 km/h, lo escucha el primer dia, lo olvida la segunda
          semana y ya no lo nota al mes. La IA, en cambio, compara
          objetivamente cada escaneo con el anterior. Si la confianza del
          rodamiento ha pasado del 20&nbsp;% al 55&nbsp;% en dos meses,
          hay que reaccionar aunque su oido diga &laquo;todo va bien&raquo;.
        </p>

        <h2>Para ir mas lejos</h2>
        <p>
          Lea tambien{" "}
          <Link href="/es/blog/controle-preventif-son-eviter-facture-cascade">
            el escaneo preventivo antes de la ITV
          </Link>{" "}
          y{" "}
          <Link href="/es/blog/usure-invisible-composant-fatigue-endommage-autre">
            como una pieza fatigada estropea otras
          </Link>
          . Si un codigo{" "}
          <Link href="/es/codes/p0011">P0011</Link>{" "}
          o un problema de ABS aparece al mismo tiempo, es posiblemente el
          sensor de velocidad de rueda perturbado por el juego del
          rodamiento. El OBD2 solo no dira cual de los dos es la causa
          raiz.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
