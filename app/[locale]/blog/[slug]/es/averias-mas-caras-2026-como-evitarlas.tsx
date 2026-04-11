import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESAveriasMasCaras2026() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Cual es la averia mas cara en un coche moderno?",
      a: "En un termico, es la rotura de motor tras fallo de distribucion en un motor de interferencia: entre 4500 y 9000&nbsp;EUR para un cambio completo. En un hibrido o electrico, es la bateria de alta tension: de 3500 a 12&nbsp;000&nbsp;EUR sin mano de obra segun modelo.",
    },
    {
      q: "&iquest;Que edad es la mas arriesgada para las grandes averias?",
      a: "Entre 8 y 14 anos para la mayoria de las averias mecanicas pesadas. Es el periodo en que la distribucion llega al final en muchos modelos, el turbo empieza a fatigarse, y las piezas de desgaste intermedio acumulan sus danos.",
    },
    {
      q: "&iquest;Se pueden anticipar todas esas averias?",
      a: "La mayoria, si. Un escaneo preventivo mensual combinando OBD2, sonido y visual coge las senales debiles en el 80&nbsp;% de los casos. El 20&nbsp;% restante son defectos brutales imposibles de anticipar.",
    },
    {
      q: "&iquest;Las averias de hibridos son todas caras?",
      a: "No. Un hibrido no enchufable se comporta a menudo mejor que un termico clasico en averias corrientes: menos desgaste del motor de arranque, frenos regenerativos que cuidan las pastillas. La bateria HV sigue siendo el punto caro, pero su vida supera a menudo 15 anos o 300&nbsp;000&nbsp;km.",
    },
    {
      q: "Garantia mecanica: &iquest;merece la pena?",
      a: "En un seminuevo de 6 a 10 anos, si, a condicion de leer bien las exclusiones. Las buenas cubren turbo, caja, motor, sin piezas de desgaste. Cuenta 30 a 60&nbsp;EUR al mes para una cobertura correcta.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Las averias mas caras de 2026 y como evitarlas"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Costes de reparacion"
      >
        <p>
          Un coche nunca se rompe cuando te conviene. Ciertas averias
          cuestan mas que un coche de ocasion entero, otras parecen
          modestas en el presupuesto pero explotan una vez contados los
          danos colaterales. Este ranking de las diez averias mas caras
          en 2026 se basa en casos reales de nuestros usuarios y en las
          horquillas observadas en las redes independientes europeas.
        </p>

        <h2>1 &mdash; Turbo roto y sus consecuencias</h2>
        <p>
          Horquilla: 1500 a 3000&nbsp;EUR para el turbo solo, hasta
          5000&nbsp;EUR con danos colaterales. Cuando un turbo se rompe
          y el aceite va a la admision, el motor puede embalarse y
          destruirse en pocos segundos. Senales previas: silbido
          anormal, humo azul, perdida de potencia progresiva. Deteccion
          temprana por escaneo sonoro.
        </p>

        <h2>2 &mdash; FAP obstruido y linea de escape</h2>
        <p>
          Horquilla: 1000 a 2500&nbsp;EUR para el cambio, 200 a 400 para
          una limpieza. El FAP se obstruye cuando no se regenera
          correctamente: demasiada ciudad, trayectos cortos. Una vez
          colmatado, provoca perdida de potencia, sobreconsumo y termina
          por bloquear el vehiculo en modo degradado.
        </p>

        <h2>3 &mdash; DSG y cajas robotizadas</h2>
        <p>
          Horquilla: 1500 a 4500&nbsp;EUR segun modelo. Las DSG 7 en
          seco tienen mala fama, las DSG 6 en bano de aceite envejecen
          mejor. Senales: tirones al cambiar, vibraciones al arrancar,
          testigo PRNDS. Un cambio de aceite a 60&nbsp;000&nbsp;km
          prolonga su vida.
        </p>

        <h2>4 &mdash; Valvula EGR y sistema de descontaminacion</h2>
        <p>
          Horquilla: 400 a 1200&nbsp;EUR. La valvula EGR se bloquea por
          incrustaciones en diesel principalmente urbanos. Sintomas:
          tirones, humo negro, perdida de potencia, codigo{" "}
          <Link href="/es/codes/p0420">P0420</Link> asociado.
        </p>

        <h2>5 &mdash; Cadena o correa de distribucion</h2>
        <p>
          Horquilla: 500 a 1200&nbsp;EUR para cambio preventivo, 3500 a
          6000&nbsp;EUR en caso de rotura en motor de interferencia. LA
          averia mas rentable de anticipar. Cambia sistematicamente en
          los intervalos del fabricante y escucha tu motor.
        </p>

        <h2>6 &mdash; Catalizador</h2>
        <p>
          Horquilla: 800 a 2500&nbsp;EUR. El cat muere raramente solo:
          casi siempre es consecuencia de una lambda cansada, de una
          mezcla rica prolongada o de un consumo de aceite que envenena
          los metales preciosos. Ver{" "}
          <Link href="/es/blog/coste-reparacion-catalizador-p0420">
            el coste detallado de reparacion del catalizador P0420
          </Link>
          .
        </p>

        <h2>7 &mdash; Junta de culata</h2>
        <p>
          Horquilla: 1200 a 3500&nbsp;EUR. A menudo consecuencia de un
          sobrecalentamiento. Senales: humo blanco, burbujas en el vaso
          de expansion, temperatura inestable, aceite emulsionado.
        </p>

        <h2>8 &mdash; Bateria de alta tension hibrida</h2>
        <p>
          Horquilla: 3500 a 12&nbsp;000&nbsp;EUR. La gran inquietud de
          los compradores de hibrido usado. Vida media excelente en
          Toyota Prius, Lexus, Honda.
        </p>

        <h2>9 &mdash; Centralita airbag o ABS</h2>
        <p>
          Horquilla: 600 a 2000&nbsp;EUR. Una centralita fallando
          requiere a menudo una codificacion tras cambio. Un codigo ABS
          o airbag persistente hay que tomarlo en serio &mdash; ver{" "}
          <Link href="/es/blog/testigo-esp-encendido-causas-coste-reparacion">
            testigo ESP encendido
          </Link>
          .
        </p>

        <h2>10 &mdash; Compresor de climatizacion</h2>
        <p>
          Horquilla: 700 a 1800&nbsp;EUR. Un compresor gripado dana
          todo el circuito (expansor, evaporador, condensador). Senal
          previa: ruido metalico al enganchar el aire.
        </p>

        <h2>Anticipacion: tu mejor aliado</h2>
        <p>
          Nueve de estas diez averias dan senales debiles detectables
          mucho antes de la rotura completa. Un escaneo combinado
          sonido-OBD2-vision una vez al mes durante 5 minutos coge la
          mayoria de esas senales antes de que se vuelvan facturas de
          cuatro cifras.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
