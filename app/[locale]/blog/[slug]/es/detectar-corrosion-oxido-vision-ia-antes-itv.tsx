import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESCorrosionVisionIA() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Diferencia entre oxido de superficie y oxido estructural?",
      a: "El oxido de superficie es oxidacion marron limitada a la capa mas externa del metal: se va cepillando y se repara con tratamiento antioxido. El oxido estructural ataca el espesor de la chapa, provoca perforaciones, fragiliza la pieza y es motivo de rechazo en ITV. La Vision IA clasifica en cuatro niveles para que sepa si tiene seis meses o ninguno.",
    },
    {
      q: "&iquest;Que zonas fotografiar con prioridad?",
      a: "El triangulo oxido de un coche europeo: bajos de puerta, pasos de rueda traseros, bajos del piso, travesero trasero, silentblocks de tren, y todos los puntos de fijacion de la suspension. Anada las tuberias de freno metalicas que bordean el chasis: un punto de corrosion sobre ellas implica rechazo inmediato.",
    },
    {
      q: "&iquest;Mi coche de 15 anos va a rechazar la ITV seguro?",
      a: "No, muchos vehiculos de 15 a 20 anos pasan sin problema si la corrosion esta vigilada. El problema llega cuando se ignora. Un control Vision IA cada seis meses detecta la propagacion pronto y permite tratamiento por 80 a 150&nbsp;EUR en vez de una reparacion de carroceria por 600 a 1200&nbsp;EUR.",
    },
    {
      q: "&iquest;La pintura que burbujea es siempre signo de oxido activo?",
      a: "En el 95&nbsp;% de los casos, si. Una burbuja de pintura significa que debajo un punto de oxido se hincha y levanta la capa. La Vision IA detecta esas burbujas incluso muy pequenas, a veces invisibles a simple vista, analizando variaciones de tono y reflejo en la superficie pintada.",
    },
    {
      q: "&iquest;Puedo tratar yo mismo la corrosion detectada?",
      a: "Para oxido nivel 1 (superficial), si: cepillado, convertidor de oxido, pintura antioxido, 40&nbsp;EUR de materiales. Para niveles 2 y superiores, o si la zona es estructural (larguero, punto de suspension), la reparacion debe hacerla un chapista competente.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Detectar corrosion con Vision IA antes de la ITV"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevencion"
      >
        <p>
          El oxido es el asesino silencioso de los vehiculos europeos.
          En Francia, Alemania, Belgica o Suiza, el invierno y la sal
          de carreteras trabajan sus bajos mientras rueda. Un punto de
          oxido del tamano de una moneda de dos euros puede convertirse,
          en dieciocho meses sin accion, en una perforacion que rechaza
          su vehiculo en ITV. La Vision IA de AutoDiag EU identifica
          esos comienzos de corrosion mucho antes de que sean
          irreversibles.
        </p>

        <h2>Por que detectar pronto lo cambia todo</h2>
        <p>
          El mecanismo del oxido es exponencial. Un primer punto de
          oxidacion crea microporosidad que retiene humedad, que
          extiende la corrosion, que ampla la porosidad. En seis meses,
          dobla la superficie afectada. En dieciocho meses pasa de
          oxido superficial (tratable con 80&nbsp;EUR de productos) a
          oxido estructural (soldadura y corte, 400 a 1500&nbsp;EUR).
          Cuando lo ve a simple vista al cerrar el maletero, ya es
          tarde. La Vision IA ve los primeros puntos cuando aun miden
          milimetros.
        </p>

        <h2>El triangulo del oxido</h2>
        <p>
          No todos los coches se oxidan en los mismos sitios. Pero
          nueve de cada diez tienen las mismas zonas sensibles. Los
          bajos de puerta primero, donde la sal proyectada por las
          ruedas se estanca. Los pasos de rueda traseros, donde la
          humedad queda atrapada tras los pasos de plastico. Los bajos
          entre traveseros, donde la condensacion no se seca. Los
          puntos de fijacion de los trenes rodantes, que combinan
          vibraciones y humedad. Por ultimo, las tuberias de freno
          metalicas, la pesadilla de la ITV: un punto de corrosion
          profunda sobre una tuberia de freno implica rechazo
          inmediato y prohibicion de circular.
        </p>

        <h2>Cuatro niveles, cuatro decisiones</h2>
        <p>
          El modelo Vision IA clasifica cada foto en cuatro niveles.
          Nivel 1, oxido superficial: mancha marron, sin hinchazon,
          tratamiento en casa por 40 a 80&nbsp;EUR. Nivel 2, oxido
          activo con hinchazon: pintura burbujea, empieza a despegarse,
          tratamiento en chapista en 6 meses por 150 a 300&nbsp;EUR.
          Nivel 3, perforacion inminente: chapa adelgazada, la pieza
          pierde rigidez, intervencion en 3 meses obligatoria, 400 a
          800&nbsp;EUR. Nivel 4, perforacion o estructural: la ITV
          rechazara, intervencion inmediata, 600 a 1500&nbsp;EUR
          segun zona. En cada nivel, una recomendacion clara, sin
          zona gris.
        </p>

        <h2>Una historia de Yaris y tren trasero</h2>
        <p>
          Caso real: Toyota Yaris de 2012, 140000&nbsp;km, propietario
          muy cuidadoso que lo lava cada mes. Al fotografiar bajo el
          tren trasero para un checkup de rutina, la Vision IA detecta
          un nivel 2 en un punto de fijacion de la barra Panhard. El
          ojo no veia nada, solo una mancha marron entre el negro
          sucio. El chapista confirma, trata la zona por 180&nbsp;EUR.
          Seis meses despues, misma zona, misma foto: nivel 1,
          estabilizado. Coste evitado: unos 700&nbsp;EUR de
          sustitucion de barra si la pieza hubiera cedido en marcha.
        </p>

        <h2>La comparacion antes-despues</h2>
        <p>
          La verdadera fuerza de la Vision IA no es una foto aislada,
          es la serie. Fotografia las mismas zonas cada seis meses, el
          sistema compara el historial y le alerta cuando una zona
          progresa un nivel. Esa progresion es mucho mas informativa
          que un estado instantaneo: una corrosion nivel 1 estable
          desde hace tres anos no es urgente. Una corrosion nivel 1
          que ha pasado a nivel 2 en seis meses es una alerta. El
          tiempo es un dato de entrada.
        </p>

        <h2>Lo que la ITV mira en realidad</h2>
        <p>
          En una{" "}
          <Link href="/es/blog/preparar-itv-diesel-2026-guia">
            ITV 2026
          </Link>
          , el inspector dispone de una lista precisa. Los defectos
          mayores por corrosion son: corrosion perforante en zona
          estructural, corrosion en tuberia de freno o fijacion de
          suspension, perforacion de larguero o travesero.
          Anticipando esos puntos dos meses antes con Vision IA,
          llega a la ITV con los tratamientos hechos. El inspector
          constata, marca, usted sale con la pegatina.
        </p>

        <h2>La higiene del control periodico</h2>
        <p>
          Un control Vision IA de las zonas sensibles lleva diez
          minutos cada seis meses. Ocho fotos: bajos de puerta
          derecho, izquierdo, paso de rueda trasero derecho, izquierdo,
          bajo tren delantero, bajo tren trasero, y dos fotos a las
          tuberias de freno visibles. La app le guia, reconoce los
          angulos y le senala si la foto no es suficientemente nitida.
          Diez minutos, dos veces al ano. Combinado con el{" "}
          <Link href="/es/blog/checkup-visual-ia-5-puntos-vehiculo-sano">
            checkup visual en cinco puntos
          </Link>{" "}
          y un escaneo OBD2 mensual, mantiene su vehiculo a distancia
          total de la rotura imprevista.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
