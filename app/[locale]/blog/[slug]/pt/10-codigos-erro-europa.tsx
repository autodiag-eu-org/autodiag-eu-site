import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePT10CodigosErroEuropa() {
  const faq: FaqItem[] = [
    {
      q: "Qual e o codigo OBD2 mais frequente na Europa?",
      a: "P0420 (eficacia do catalisador abaixo do limite) e de longe o mais frequente em carros europeus com mais de 8 anos. E causado muitas vezes por uma sonda lambda envelhecida ou por um catalisador fatigado.",
    },
    {
      q: "Posso passar a IPO com um codigo ativo?",
      a: "Nao. Desde 2018, uma luz MIL acesa e causa de reprovacao grave. Mesmo que o codigo esteja apenas guardado e a luz apagada, alguns inspetores leem na mesma. Resolva sempre a causa, nao apague apenas.",
    },
    {
      q: "Todos os codigos P afetam o motor?",
      a: "Os codigos P (Powertrain) afetam motor e transmissao. Os C afetam o chassis (ABS, ESP), os B a carrocaria (airbag, climatizacao) e os U o barramento CAN e a comunicacao entre centralinas.",
    },
    {
      q: "Quanto custa a reparacao mais cara desta lista?",
      a: "Um catalisador original para P0420 pode custar 700 a 1500 EUR em Portugal, mais em marcas premium. Um catalisador adaptavel custa 200 a 460 EUR. A sonda lambda como verdadeira causa custa apenas 70 a 150 EUR.",
    },
    {
      q: "Posso ler estes codigos com o telemovel?",
      a: "Sim. Um adaptador ELM327 Bluetooth (desde 20 EUR) combinado com o AutoDiag EU le os dez codigos em segundos e explica-os em portugues. Sem diagnostico caro na oficina.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="pt"
        title="Os 10 codigos de erro OBD2 mais frequentes na Europa"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={11}
        category="Codigos erro"
      >
        <p>
          De Lisboa a Berlim: os mesmos dez codigos OBD2 sao responsaveis
          por cerca de 75 por cento das luzes do motor acesas na Europa.
          Gracas a norma OBD2 imposta pela UE, os codigos significam o
          mesmo num Renault em Paris, num Fiat em Roma ou num Opel em
          Lisboa. Aqui esta o nosso top 10 para 2026, com causas
          habituais e precos reais em Portugal.
        </p>

        <h2>
          1. <Link href="/pt/codes/p0420">P0420</Link> &mdash; Eficacia do
          catalisador
        </h2>
        <p>
          O lider absoluto. A sonda lambda posterior deteta que o
          catalisador ja nao converte poluentes suficientes. Causas:
          sonda lambda envelhecida (70 a 150 EUR), catalisador fatigado
          (adaptavel 200 a 460 EUR, original 700 a 1500 EUR), fuga no
          escape antes do catalisador. Antes de qualquer reparacao,
          verifique os valores das sondas em tempo real.
        </p>

        <h2>
          2. <Link href="/pt/codes/p0171">P0171</Link> &mdash; Mistura
          pobre (banco 1)
        </h2>
        <p>
          A centralina deteta pouco combustivel na mistura. Causas:
          entrada de ar no coletor, caudalimetro sujo (limpeza 15 EUR,
          substituicao 100 a 220 EUR), injetor defeituoso. Tipico em
          carros com mais de 120&thinsp;000 km.
        </p>

        <h2>
          3. <Link href="/pt/codes/p0300">P0300</Link> &mdash; Falhas de
          ignicao aleatorias
        </h2>
        <p>
          Varios cilindros tem falhas de ignicao. Causas: velas gastas
          (30 a 100 EUR), bobine de ignicao defeituosa (50 a 170 EUR por
          unidade), injetores sujos, bateria fraca. Se a luz piscar,
          oficina imediatamente &mdash; risco para o catalisador.
        </p>

        <h2>
          4. <Link href="/pt/codes/p0442">P0442</Link> &mdash; Fuga EVAP
          pequena
        </h2>
        <p>
          O sistema de recuperacao de vapores de combustivel tem uma
          pequena fuga. A causa mais comum: tampao do deposito mal
          fechado (0 EUR para apertar, 15 EUR para um novo). Outras
          causas: valvulas EVAP defeituosas (50 a 130 EUR), canister com
          fuga.
        </p>

        <h2>
          5. <Link href="/pt/codes/p0128">P0128</Link> &mdash; Liquido de
          refrigeracao nao atinge a temperatura
        </h2>
        <p>
          O motor nao aquece o suficiente. Quase sempre um termostato
          bloqueado aberto (peca 20 a 70 EUR, mao-de-obra 70 a 130 EUR).
          As vezes um sensor de temperatura defeituoso. Este codigo
          provoca consumo excessivo.
        </p>

        <h2>6. P0113 &mdash; Sensor de temperatura do ar de admissao</h2>
        <p>
          Um sensor IAT sujo ou obstruido envia valores irrealistas.
          Limpeza 15 EUR, substituicao 30 a 100 EUR. Aparece muitas vezes
          em conjunto com P0171.
        </p>

        <h2>7. P0401 &mdash; Fluxo EGR insuficiente</h2>
        <p>
          A valvula de recirculacao de gases esta carbonizada ou
          bloqueada. Limpeza 70 a 170 EUR, substituicao 260 a 620 EUR.
          Tipico em diesel com muito uso urbano.
        </p>

        <h2>8. P0455 &mdash; Fuga EVAP grande</h2>
        <p>
          Como P0442 mas maior. Tampao defeituoso, tubo EVAP partido ou
          canister rachado. Custo 25 a 260 EUR conforme a causa.
        </p>

        <h2>9. P0172 &mdash; Mistura rica (banco 1)</h2>
        <p>
          O oposto de P0171. Regulador de pressao defeituoso, injetor
          com fuga, caudalimetro alterado. Sem resolver: consumo elevado
          e danos ao catalisador. Custo 90 a 460 EUR conforme a causa.
        </p>

        <h2>10. P0011 &mdash; Posicao da arvore de cames adiantada</h2>
        <p>
          Distribuicao variavel desajustada. Quase sempre solenoide VVT
          obstruido por oleo velho ou corrente de distribuicao gasta.
          Oleo adequado, solenoide 70 a 170 EUR, corrente 750 a 1800 EUR.
        </p>

        <h2>Conclusao</h2>
        <p>
          Estes dez codigos cobrem cerca de tres quartos dos casos de
          luz do motor acesa na Europa. Com um adaptador ELM327 por 20
          EUR e o AutoDiag EU, identifica o codigo em segundos, percebe
          a causa e ve os custos tipicos &mdash; antes de ir a oficina.
          Assim evita surpresas no orcamento.
        </p>
      </ArticleLayout>
    </>
  );
}
