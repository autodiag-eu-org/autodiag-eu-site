import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESCatalizadorObstruido() {
  const faq: FaqItem[] = [
    {
      q: "&iquest;Que diferencia entre catalizador obstruido e ineficaz?",
      a: "Un catalizador ineficaz ya no hace su trabajo de descontaminacion: deja pasar contaminantes, lo que dispara el codigo P0420. Un catalizador obstruido esta fisicamente bloqueado: la seccion de paso se reduce, la contrapresion de escape sube, el motor se ahoga. Los sintomas son totalmente distintos: perdida masiva de potencia en el segundo caso, nada en el primero.",
    },
    {
      q: "&iquest;Cuales son los sintomas tipicos de un catalizador obstruido?",
      a: "Perdida de potencia progresiva sobre todo en subida, motor que no sube de vueltas, calor anormal bajo el vehiculo (a veces hasta fundir la alfombra termica), olor a huevo podrido en el escape (azufre), consumo al alza y en casos extremos calado al ralenti. El ruido de escape puede volverse sordo y ahogado.",
    },
    {
      q: "&iquest;Se puede desatascar un catalizador sin cambiarlo?",
      a: "En algunos casos, si. Los aditivos para catalizador (20 a 40&nbsp;EUR el bote) funcionan si la suciedad es quimica y moderada. Un paso por taller para regeneracion termica (100 a 250&nbsp;EUR) tambien puede tener exito. Pero si el monolito esta roto o fundido, el cambio es inevitable. No avalamos el cambio por un tubo vacio &mdash; es ilegal en la ITV.",
    },
    {
      q: "&iquest;Cual es la causa mas frecuente de un catalizador obstruido?",
      a: "El sobrecalentamiento por mezcla demasiado rica prolongada. Causas previas: inyector que gotea, sonda lambda aguas arriba al final de vida, bujia muerta que deja pasar combustible sin quemar, falta de compresion. El catalizador nunca es la causa primera, es la victima de otra averia que el propietario ha ignorado.",
    },
    {
      q: "&iquest;Cuanto cuesta cambiar un catalizador?",
      a: "Horquilla amplia: 400 a 1500&nbsp;EUR para un catalizador aftermarket de calidad correcta en coche comun, 1000 a 2500&nbsp;EUR para una pieza de fabricante, y mas de 3000&nbsp;EUR en ciertas premium alemanas o hibridas. El coste incluye pieza, montaje (1 a 2 horas) y reset de los aprendizajes de la centralita.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="es"
        title="Catalizador obstruido: sintomas, diagnostico y soluciones"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          Un catalizador que se obstruye no siempre enciende un testigo
          motor. A veces el problema se instala progresivamente: primero
          una ligera perdida de par en subida, luego un consumo que
          sube, luego un olor raro y finalmente el coche que rehusa
          subir de vueltas. Este articulo explica en detalle como
          reconocer la situacion, diagnosticarla correctamente y decidir
          entre limpieza y cambio.
        </p>

        <h2>Papel del catalizador, recordatorio rapido</h2>
        <p>
          El catalizador transforma quimicamente los contaminantes del
          escape (HC, CO, NOx) en gases menos nocivos (CO2, N2, H2O)
          gracias a metales preciosos depositados en un monolito de
          ceramica o metalico. Trabaja a alta temperatura (400 a 800
          grados). Esta estructura es fragil: un choque termico o una
          sobrecarga de combustible sin quemar puede fundirla, obstruir
          sus canales o dislocar el monolito.
        </p>

        <h2>Catalizador obstruido vs catalizador poco eficaz</h2>
        <p>
          Hay que distinguirlos absolutamente. Un codigo{" "}
          <Link href="/es/codes/p0420">P0420</Link> clasico senala una
          eficacia a la baja: el catalizador ya no depura bastante pero
          el paso esta libre. Vea{" "}
          <Link href="/es/blog/coste-reparacion-catalizador-p0420">
            el coste reparacion catalizador P0420
          </Link>
          . Un catalizador fisicamente obstruido no dispara
          forzosamente ese codigo &mdash; ralentiza el escape y crea una
          contrapresion que ahoga el motor. Son dos problemas primos
          pero distintos.
        </p>

        <h2>Los sintomas del catalizador obstruido</h2>
        <p>
          Sintoma 1: perdida de potencia en aceleracion. El motor parece
          limitado, sobre todo en cuesta o carga. Sintoma 2: regimen que
          plafona. El motor no sube de 3000 o 4000&nbsp;rpm. Sintoma 3:
          consumo al alza sin razon. Sintoma 4: calor excesivo bajo el
          piso, a veces hasta fundir las alfombras. Sintoma 5: olor a
          huevo podrido o azufre caracteristico. Sintoma 6: ruido de
          escape modificado, mas sordo. Un Escaneo Sonoro detecta de
          hecho esta alteracion acustica.
        </p>

        <h2>Diagnostico profesional: la medida de contrapresion</h2>
        <p>
          El test definitivo es la medida de contrapresion. Se desmonta
          la sonda lambda aguas arriba y se monta un manometro en su
          lugar. Motor al ralenti: la presion debe ser inferior a
          0,2&nbsp;bar. A 2500&nbsp;rpm mantenidas: inferior a 0,5&nbsp;bar.
          Mas alla de estos valores, el catalizador opone resistencia
          anormal. Intervencion de taller de 30 a 80&nbsp;EUR que zanja
          definitivamente el diagnostico.
        </p>

        <h2>Antes de culpar al catalizador</h2>
        <p>
          Compruebe siempre aguas arriba antes de declarar culpable al
          catalizador. Una toma de aire cronica o un inyector que gotea
          puede enviar gasolina al catalizador y matarlo en pocos
          meses. Una bujia muerta deja pasar combustible que se
          inflama en el catalizador (post-combustion). Un codigo{" "}
          <Link href="/es/codes/p0300">P0300</Link> de fallos de
          encendido acompana a menudo estos escenarios. Reparar la
          causa ANTES del catalizador es esencial.
        </p>

        <h2>Limpieza y regeneracion posibles</h2>
        <p>
          Los aditivos liquidos (Wynn&apos;s, Bardahl, JLM) inyectados
          en el deposito hacen subir la temperatura de escape y pueden
          quemar depositos ligeros. Funciona en suciedad moderada, no
          en monolito roto. Coste: 20 a 40&nbsp;EUR por tratamiento, a
          hacer en dos o tres llenos. La regeneracion termica en
          taller (se calienta el catalizador al blanco con ciclo
          controlado) cuesta 100 a 250&nbsp;EUR y puede recuperar un
          catalizador ligeramente obstruido.
        </p>

        <h2>FAP diesel: primo del catalizador</h2>
        <p>
          En diesel, el filtro de particulas FAP tambien puede
          obstruirse, con sintomas muy similares: perdida de potencia,
          calor, consumo al alza. El FAP se regenera normalmente
          rodando a velocidad sostenida (mas de 60&nbsp;km/h durante
          20 minutos). Un uso urbano exclusivo acaba por obstruirlo.
          Vea{" "}
          <Link href="/es/blog/preparar-itv-diesel-2026-guia">
            preparar la ITV diesel 2026
          </Link>
          .
        </p>

        <h2>Sustitucion: elegir la pieza correcta</h2>
        <p>
          Tres categorias. Pieza fabricante OEM: calidad maxima, precio
          alto, garantia larga. Pieza equivalente OES: fabricada por
          el mismo proveedor, sin logo de fabricante, 30 a 50&nbsp;%
          mas barata. Pieza aftermarket: calidad variable, elegir en
          fabricante reconocido. Evite imperativamente las piezas
          muy baratas: suelen estar recicladas de catalizadores
          robados y no tienen la carga de metales preciosos requerida,
          el codigo P0420 vuelve en meses.
        </p>

        <h2>Prevencion: cuestion de mantenimiento</h2>
        <p>
          Un catalizador bien cuidado dura 200000&nbsp;km o mas. Las
          claves: mantenimiento lambda en los intervalos (cambio
          preventivo hacia 150000&nbsp;km), calidad de bujias en
          gasolina, reglaje motor correcto, carburante de calidad y
          sobre todo reparacion rapida de cualquier mezcla demasiado
          rica o pobre. Vea tambien{" "}
          <Link href="/es/blog/consumo-excesivo-combustible-causas-obd2">
            consumo excesivo de combustible
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
