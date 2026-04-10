import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleESCosteCatalizadorP0420() {
  const faq: FaqItem[] = [
    {
      q: "Que significa el codigo P0420?",
      a: "P0420 indica que la sonda lambda posterior detecta que el catalizador ya no convierte contaminantes con la eficiencia minima. Enciende el testigo del motor y provoca rechazo directo en la ITV.",
    },
    {
      q: "Hay que sustituir el catalizador inmediatamente si aparece P0420?",
      a: "No necesariamente. En cerca del 40 por ciento de los casos, la sonda lambda posterior es la verdadera causa. Cuesta 70 a 160 EUR. Solo despues de sustituirla y volver a diagnosticar deberias plantearte cambiar el catalizador.",
    },
    {
      q: "Cuanto cuesta un catalizador adaptable en Espana?",
      a: "Un catalizador adaptable homologado para coches europeos comunes cuesta en 2026 entre 220 y 480 EUR, mas 120 a 260 EUR de mano de obra. Para marcas premium, 400 a 750 EUR mas instalacion. Debe tener marca europea (e-Mark) para pasar la ITV.",
    },
    {
      q: "Merece la pena un catalizador original?",
      a: "Los originales son mas caros (700 a 1600 EUR gama media, hasta 2800 EUR premium) pero duran mas y siempre cumplen la normativa. Recomendado en coches jovenes con garantia; en vehiculos de mas de 10 anos un adaptable suele compensar.",
    },
    {
      q: "Puedo quitar el catalizador para ahorrar?",
      a: "No. Conducir sin catalizador es ilegal en Espana. Rechazo directo en ITV, multa de hasta 500 EUR y retirada de la tarjeta de la ITV. Ademas los controles anticontaminacion en zonas de bajas emisiones son cada vez mas frecuentes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="es"
        title="Cuanto cuesta reparar un catalizador P0420?"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={9}
        category="Costes reparacion"
      >
        <p>
          El codigo <Link href="/es/codes/p0420">P0420</Link> es el codigo
          OBD2 mas comun en coches europeos de mas de 8 anos. Cuando
          aparece, suele llegar la preocupacion: hay que cambiar el
          catalizador? Cuesta 2000 EUR? Respuesta corta: no
          necesariamente. En esta guia encontraras la tabla real de
          precios en Espana 2026 y como evitar sorpresas en el taller.
        </p>

        <h2>Que significa P0420 exactamente?</h2>
        <p>
          Tu coche tiene dos sondas lambda: una antes del catalizador
          (banco 1 sensor 1) y otra despues (banco 1 sensor 2). La
          segunda mide la eficiencia del catalizador. Si da valores
          parecidos a la primera, significa que el catalizador apenas
          convierte contaminantes. La centralita guarda P0420 y enciende
          el testigo. Importante: el codigo no dice que esta averiado,
          solo que la eficiencia es baja.
        </p>

        <h2>Las 5 causas posibles</h2>
        <p>
          Antes de gastar 1200 EUR en un catalizador nuevo, comprueba
          estas causas en orden:
        </p>

        <h3>1. Sonda lambda posterior (40 por ciento de los casos)</h3>
        <p>
          La causa mas comun. Una sonda envejecida manda valores
          erroneos. Precios 2026 Espana: sonda universal 35 a 110 EUR,
          sonda OEM 70 a 160 EUR. Mano de obra 35 a 90 EUR. Total:{" "}
          <strong>100 a 250 EUR</strong>. Comprueba siempre esto primero!
        </p>

        <h3>2. Sonda lambda delantera (15 por ciento)</h3>
        <p>
          Si la sonda delantera da valores incorrectos puede provocar
          tambien P0420. Costes similares:{" "}
          <strong>100 a 250 EUR</strong>. A menudo acompanado de{" "}
          <Link href="/es/codes/p0171">P0171</Link> o{" "}
          <Link href="/es/codes/p0172">P0172</Link>.
        </p>

        <h3>3. Catalizador fatigado (25 por ciento)</h3>
        <p>
          Tras 180&thinsp;000 a 250&thinsp;000 km el catalizador pierde
          eficiencia. La estructura ceramica esta saturada.{" "}
          <strong>Coste con catalizador adaptable: 350 a 750 EUR
          completo.</strong>{" "}
          Con original: 900 a 1900 EUR completo. Verifica siempre la
          marca europea (e-Mark) al comprar.
        </p>

        <h3>4. Fuga de escape antes del catalizador (10 por ciento)</h3>
        <p>
          Una entrada de aire parasita falsea las lecturas de las sondas.
          Coste: junta de colector 25 a 70 EUR, colector 140 a 380 EUR.
          Escucha silbidos con el motor en marcha.
        </p>

        <h3>5. Software de la centralita (10 por ciento)</h3>
        <p>
          Algunos fabricantes (VW, SEAT, Ford) han publicado
          actualizaciones que ajustan los umbrales P0420. Pregunta en el
          concesionario por una actualizacion de servicio. Coste 0 a 70
          EUR.
        </p>

        <h2>Tabla de precios Espana 2026</h2>
        <p>
          Precios reales en taller independiente (no concesionario
          oficial):
        </p>
        <ul>
          <li>
            <strong>Sustitucion sonda lambda posterior:</strong> 100 a 250
            EUR
          </li>
          <li>
            <strong>Ambas sondas lambda a la vez:</strong> 200 a 460 EUR
          </li>
          <li>
            <strong>Catalizador adaptable completo (SEAT Leon, Peugeot
            308, Opel Astra):</strong>{" "}
            350 a 750 EUR
          </li>
          <li>
            <strong>Catalizador adaptable premium (BMW, Audi,
            Mercedes):</strong>{" "}
            550 a 1100 EUR
          </li>
          <li>
            <strong>Catalizador original completo:</strong> 900 a 2300 EUR
          </li>
          <li>
            <strong>Junta de colector de escape:</strong> 70 a 180 EUR
          </li>
        </ul>

        <h2>3 trampas a evitar</h2>
        <ol>
          <li>
            <strong>&laquo;Hay que cambiar el catalizador&raquo;:</strong>{" "}
            sin probar antes las sondas lambda es poco profesional. Exige
            una prueba de datos en vivo con AutoDiag EU o un scanner de
            taller.
          </li>
          <li>
            <strong>Original sin opcion:</strong> tienes derecho a pedir
            un adaptable homologado. Ahorro tipico: 50 a 70 por ciento.
          </li>
          <li>
            <strong>Mano de obra excesiva:</strong> cambiar una sonda
            lambda lleva 20 a 40 minutos. Facturas superiores a 120 EUR
            solo por instalacion son excesivas.
          </li>
        </ol>

        <h2>Cuando hacerlo uno mismo?</h2>
        <p>
          <strong>Sustituir la sonda lambda</strong> se puede hacer con
          un poco de mana: llave especial para sondas (22 mm) 10 EUR,
          aflojador 5 EUR, sonda 45 a 110 EUR. Total bajo 130 EUR.
          Cambiar el catalizador es mas dificil por los tornillos del
          colector y las juntas, pero es factible con experiencia.
        </p>

        <h2>Conclusion</h2>
        <p>
          P0420 no es una sentencia para tu cartera. En el 55 por ciento
          de los casos es solo una sonda lambda &mdash; reparacion por
          debajo de 250 EUR. Solo si las sondas estan bien deberias
          considerar el catalizador. Con AutoDiag EU y un adaptador de 25
          EUR puedes comprobar los valores lambda tu mismo y llegar al
          taller bien informado. Ahorro medio frente a un cambio de
          catalizador a ciegas: 350 a 700 EUR.
        </p>
      </ArticleLayout>
    </>
  );
}
