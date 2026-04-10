import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESLeerCodigosOBD2Movil() {
  const faq: FaqItem[] = [
    {
      q: "Que adaptador ELM327 es recomendable en Espana?",
      a: "Un adaptador Bluetooth Vgate (iCar 2 o iCar Pro) cuesta de 20 a 40 EUR y funciona bien con Android. Los adaptadores chinos de 10 EUR suelen ser clones imprecisos. Para iPhone necesitas un adaptador BLE (Bluetooth Low Energy), no Bluetooth clasico.",
    },
    {
      q: "Es legal leer los codigos OBD2 uno mismo?",
      a: "Si, totalmente. El puerto OBD2 es un estandar legal obligatorio para diagnostico. Puedes leer todas las veces que quieras. Al borrar codigos antes de la ITV hay que tener cuidado: los monitores de preparacion se reinician y el inspector puede detectarlo.",
    },
    {
      q: "Desde que ano tiene mi coche puerto OBD2?",
      a: "En Europa, los coches de gasolina desde 2001 y los diesel desde 2004 llevan OBD2 obligatorio. Los anteriores solo tienen conectores propios de marca que no funcionan con ELM327.",
    },
    {
      q: "Donde esta el puerto OBD2?",
      a: "En el 90 por ciento de los casos, debajo del volante a la izquierda de la columna de direccion. En algunos modelos tras una tapa, en la consola central o en la guantera. El manual del coche indica la ubicacion exacta.",
    },
    {
      q: "Puedo ver datos en tiempo real tambien?",
      a: "Si. AutoDiag EU muestra datos en vivo: rpm, temperatura del refrigerante, sonda lambda, caudalimetro y trim de combustible. Asi puedes detectar problemas antes de que se guarde un codigo de averia.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="es"
        title="Como leer codigos OBD2 con tu movil"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={9}
        category="Tutorial"
      >
        <p>
          Leer un codigo de averia en un taller en Espana cuesta entre 25 y
          60 EUR, y hasta 90 EUR en concesionarios. Lo absurdo: el mecanico
          conecta un adaptador, lee el codigo y te pasa la factura. Con 20
          EUR para un adaptador ELM327 y una app gratuita como AutoDiag EU,
          haces exactamente lo mismo tu mismo en menos de 60 segundos. Aqui
          esta la guia paso a paso.
        </p>

        <h2>Que es el OBD2?</h2>
        <p>
          OBD2 significa &laquo;On-Board Diagnostics 2&raquo;. Desde 2001
          (gasolina) y 2004 (diesel), todos los coches nuevos matriculados
          en la UE llevan un puerto estandar de 16 pines. A traves de el,
          talleres (y tu!) pueden leer codigos de averia, datos en tiempo
          real y valores de emisiones. Los codigos son internacionales: un
          P0420 en un SEAT significa lo mismo que en un Ford o un Renault.
        </p>

        <h2>Paso 1: Elige el adaptador correcto</h2>
        <p>
          El famoso <strong>chip ELM327</strong> es el estandar de facto.
          Lo encuentras en cientos de adaptadores desde 10 EUR. Nuestras
          recomendaciones para Espana:
        </p>
        <ul>
          <li>
            <strong>Vgate iCar 2 Bluetooth (25 EUR):</strong> fiable con
            Android.
          </li>
          <li>
            <strong>Vgate iCar Pro BLE (40 EUR):</strong> compatible con
            iPhone (Bluetooth Low Energy) y Android.
          </li>
          <li>
            <strong>OBDLink MX+ (90 EUR):</strong> solucion profesional
            rapida para marcas premium.
          </li>
        </ul>
        <p>
          Evita adaptadores por debajo de 15 EUR. Suelen llevar chips
          falsos, dan datos imprecisos y son incompatibles con protocolos
          CAN nuevos.
        </p>

        <h2>Paso 2: Instala AutoDiag EU</h2>
        <p>
          Descarga la app gratis desde Google Play. Sin tarjeta, sin
          registro para funciones basicas. Abre la app. Te guia en tres
          pantallas hasta el inicio.
        </p>

        <h2>Paso 3: Conecta el adaptador</h2>
        <p>
          Busca el puerto OBD2. En el 90 por ciento de casos esta debajo
          del volante a la izquierda de la columna de direccion. En
          algunos modelos oculto tras una tapa (BMW, Audi). Gira la llave
          a posicion II (contacto, sin arrancar) o enciende el motor. El
          adaptador debe mostrar un LED rojo y otro azul.
        </p>

        <h2>Paso 4: Empareja por Bluetooth</h2>
        <p>
          Ve a los ajustes de Bluetooth del movil y busca &laquo;OBDII&raquo;
          o &laquo;Vgate&raquo;. El codigo suele ser{" "}
          <strong>1234</strong> o <strong>0000</strong>. Una vez
          emparejado, se conectara automaticamente. Abre AutoDiag EU y la
          app detectara el adaptador y establecera la conexion OBD2.
        </p>

        <h2>Paso 5: Lee los codigos de averia</h2>
        <p>
          Pulsa &laquo;Leer codigos&raquo;. En cinco segundos veras todos
          los codigos activos y almacenados. Cada codigo se explica en
          espanol con causas tipicas y rango de precios. Ejemplos:{" "}
          <Link href="/es/codes/p0420">P0420</Link>,{" "}
          <Link href="/es/codes/p0171">P0171</Link>,{" "}
          <Link href="/es/codes/p0300">P0300</Link>. Puedes compartir los
          codigos por email o guardarlos en PDF para discutirlos con el
          taller.
        </p>

        <h2>Paso 6: Datos en tiempo real y escaneo audio</h2>
        <p>
          Mas alla de los codigos, AutoDiag EU ofrece datos en vivo: rpm,
          refrigerante, sonda lambda, caudalimetro y muchos mas. El
          escaneo audio es util: acerca el movil al motor y la IA analiza
          el sonido para detectar problemas tipicos como rodamientos,
          picado o correas.
        </p>

        <h2>Paso 7: Borrar codigos &mdash; con cuidado</h2>
        <p>
          Borrar es posible pero recuerda: la causa no desaparece. El
          codigo volvera en 50 a 200 km. Sobre todo NO borres justo antes
          de la ITV! Los monitores se reinician y el inspector lo detecta
          al instante. Primero arregla la causa, luego borra, luego conduce
          200 km.
        </p>

        <h2>Lo que ahorras al ano</h2>
        <p>
          Un conductor medio en Espana enciende el testigo del motor 2 o 3
          veces al ano. A 40 EUR por diagnostico, son 80 a 120 EUR al ano.
          El adaptador de 25 EUR se amortiza a la primera. En 5 anos: mas
          de 400 EUR de ahorro &mdash; sin tocar una sola pieza.
        </p>

        <h2>Conclusion</h2>
        <p>
          Un adaptador de 25 EUR mas una app gratuita sustituye cualquier
          visita al taller para el simple diagnostico. AutoDiag EU lo hace
          todo en espanol y explica cada codigo en lenguaje comprensible.
          Mantienes el control de tu coche &mdash; y de tu cartera.
        </p>
      </ArticleLayout>
    </>
  );
}
