import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleES10CodigosAveria() {
  const faq: FaqItem[] = [
    {
      q: "Cual es el codigo OBD2 mas frecuente en Europa?",
      a: "P0420 (eficacia del catalizador por debajo del umbral) es con diferencia el mas frecuente en coches europeos de mas de 8 anos. Suele deberse a una sonda lambda envejecida o a un catalizador fatigado.",
    },
    {
      q: "Puedo pasar la ITV con un codigo activo?",
      a: "No. Desde 2018, un testigo del motor encendido es causa de rechazo grave. Aunque el codigo este solo almacenado y el testigo apagado, algunos inspectores lo leen igualmente. Resuelve siempre la causa, no solo borres.",
    },
    {
      q: "Todos los codigos P afectan al motor?",
      a: "Los codigos P (Powertrain) afectan a motor y transmision. Los C a chasis (ABS, ESP), los B a carroceria (airbag, climatizacion) y los U al bus CAN y comunicacion entre centralitas.",
    },
    {
      q: "Cuanto cuesta la reparacion mas cara de esta lista?",
      a: "Un catalizador original para un P0420 puede costar de 700 a 1600 EUR en Espana, mas en marcas premium. Un catalizador adaptable cuesta 220 a 480 EUR. La sonda lambda como causa real cuesta solo 70 a 160 EUR.",
    },
    {
      q: "Puedo leer estos codigos con el movil?",
      a: "Si. Un adaptador ELM327 Bluetooth (desde 20 EUR) combinado con AutoDiag EU lee los diez codigos en segundos y los explica en espanol. Sin diagnostico caro en taller.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="es"
        title="Los 10 codigos de averia OBD2 mas frecuentes en Europa"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={11}
        category="Codigos averia"
      >
        <p>
          De Lisboa a Berlin: los mismos diez codigos OBD2 son responsables
          de cerca del 75 por ciento de los testigos del motor encendidos en
          Europa. Gracias a la norma OBD2 impuesta por la UE, los codigos
          significan lo mismo en un SEAT en Madrid, un Peugeot en Paris o
          un Fiat en Roma. Aqui tienes nuestro top 10 para 2026, con causas
          habituales y precios reales en Espana.
        </p>

        <h2>
          1. <Link href="/es/codes/p0420">P0420</Link> &mdash; Eficacia del
          catalizador
        </h2>
        <p>
          El rey absoluto. La sonda lambda posterior detecta que el
          catalizador ya no convierte suficientes contaminantes. Causas:
          sonda lambda envejecida (70 a 160 EUR), catalizador fatigado
          (adaptable 220 a 480 EUR, original 700 a 1600 EUR), fuga en el
          escape antes del catalizador. Antes de cualquier reparacion,
          comprueba los valores lambda en tiempo real.
        </p>

        <h2>
          2. <Link href="/es/codes/p0171">P0171</Link> &mdash; Mezcla pobre
          (banco 1)
        </h2>
        <p>
          La centralita detecta poco combustible en la mezcla. Causas:
          entrada de aire en el colector, caudalimetro sucio (limpieza 15
          EUR, sustitucion 100 a 230 EUR), inyector defectuoso. Tipico en
          coches con mas de 120&thinsp;000 km.
        </p>

        <h2>
          3. <Link href="/es/codes/p0300">P0300</Link> &mdash; Fallos de
          encendido aleatorios
        </h2>
        <p>
          Varios cilindros tienen fallos de encendido. Causas: bujias
          gastadas (35 a 110 EUR), bobina de encendido defectuosa (50 a 180
          EUR por unidad), inyectores sucios, bateria debil. Si el testigo
          parpadea, al taller inmediatamente: peligro para el catalizador.
        </p>

        <h2>
          4. <Link href="/es/codes/p0442">P0442</Link> &mdash; Fuga EVAP
          pequena
        </h2>
        <p>
          El sistema de recuperacion de vapores de combustible tiene una
          fuga. La causa mas frecuente: tapon del deposito mal cerrado (0
          EUR para apretar, 15 EUR para uno nuevo). Otras causas: valvulas
          EVAP defectuosas (50 a 140 EUR), canister con fuga.
        </p>

        <h2>
          5. <Link href="/es/codes/p0128">P0128</Link> &mdash; El
          refrigerante no alcanza la temperatura deseada
        </h2>
        <p>
          El motor no se calienta lo suficiente. Casi siempre un termostato
          bloqueado abierto (pieza 22 a 70 EUR, mano de obra 70 a 140 EUR).
          A veces un sensor de temperatura de refrigerante defectuoso. Este
          codigo provoca consumo excesivo.
        </p>

        <h2>6. P0113 &mdash; Sensor de temperatura del aire de admision</h2>
        <p>
          Un sensor IAT sucio u obstruido manda valores irreales. Limpieza
          15 EUR, sustitucion 35 a 110 EUR. A menudo aparece junto con
          P0171.
        </p>

        <h2>7. P0401 &mdash; Flujo insuficiente de EGR</h2>
        <p>
          La valvula de recirculacion de gases esta carbonizada o bloqueada.
          Limpieza 70 a 180 EUR, sustitucion 280 a 650 EUR. Tipico en
          diesel con mucho recorrido urbano.
        </p>

        <h2>8. P0455 &mdash; Fuga EVAP grande</h2>
        <p>
          Como P0442, pero mas grande. Tapon defectuoso, tubo EVAP roto o
          canister agrietado. Coste 25 a 280 EUR segun la causa.
        </p>

        <h2>9. P0172 &mdash; Mezcla rica (banco 1)</h2>
        <p>
          Lo contrario de P0171. Regulador de presion defectuoso, inyector
          con fuga, caudalimetro alterado. Sin resolver: consumo alto y
          dano al catalizador. Coste 90 a 480 EUR segun la causa.
        </p>

        <h2>10. P0011 &mdash; Posicion del arbol de levas adelantada</h2>
        <p>
          Distribucion variable desajustada. Casi siempre solenoide VVT
          obstruido por aceite viejo o cadena de distribucion gastada.
          Cambio de aceite correcto, solenoide 70 a 180 EUR, cadena 750 a
          1900 EUR.
        </p>

        <h2>Conclusion</h2>
        <p>
          Estos diez codigos cubren cerca de tres cuartos de los casos de
          testigo del motor encendido en Europa. Con un adaptador ELM327
          por 20 EUR y AutoDiag EU, identificas el codigo en segundos,
          entiendes la causa y ves los costes tipicos &mdash; antes de ir
          al taller. Asi evitas sorpresas en el presupuesto.
        </p>
      </ArticleLayout>
    </>
  );
}
