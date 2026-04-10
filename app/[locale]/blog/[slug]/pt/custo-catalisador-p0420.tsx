import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTCustoCatalisadorP0420() {
  const faq: FaqItem[] = [
    {
      q: "O que significa o codigo P0420?",
      a: "P0420 indica que a sonda lambda posterior deteta que o catalisador ja nao converte poluentes com a eficiencia minima. Acende a luz do motor e provoca reprovacao direta na IPO em Portugal.",
    },
    {
      q: "Tem de se substituir o catalisador imediatamente se aparecer P0420?",
      a: "Nao necessariamente. Em cerca de 40 por cento dos casos, a sonda lambda posterior e a verdadeira causa. Custa 70 a 150 EUR. So depois de a substituir e de voltar a diagnosticar deve considerar trocar o catalisador.",
    },
    {
      q: "Quanto custa um catalisador adaptavel em Portugal?",
      a: "Um catalisador adaptavel homologado para carros europeus comuns custa em 2026 entre 200 a 460 EUR, mais 120 a 240 EUR de mao-de-obra. Para marcas premium, 400 a 700 EUR mais instalacao. Deve ter marca europeia (e-Mark) para passar a IPO.",
    },
    {
      q: "Vale a pena um catalisador original?",
      a: "Os originais sao mais caros (700 a 1500 EUR gama media, ate 2500 EUR premium) mas duram mais e cumprem sempre a norma. Recomendado em carros jovens com garantia; em veiculos com mais de 10 anos compensa normalmente um adaptavel.",
    },
    {
      q: "Posso retirar o catalisador para poupar?",
      a: "Nao. Conduzir sem catalisador e ilegal em Portugal. Reprovacao direta na IPO, coima ate 500 EUR e possivel retencao do veiculo. Alem disso os controlos de emissoes sao cada vez mais rigorosos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="pt"
        title="Custo de reparacao catalisador P0420"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={9}
        category="Custos reparacao"
      >
        <p>
          O codigo <Link href="/pt/codes/p0420">P0420</Link> e o codigo
          OBD2 mais comum em carros europeus com mais de 8 anos. Quando
          aparece, chega muitas vezes a preocupacao: vai ser preciso
          trocar o catalisador? Custa 2000 EUR? Resposta curta: nao
          necessariamente. Neste guia encontra a tabela real de precos em
          Portugal 2026 e como evitar surpresas na oficina.
        </p>

        <h2>O que significa P0420 exatamente?</h2>
        <p>
          O seu carro tem duas sondas lambda: uma antes do catalisador
          (banco 1 sensor 1) e outra depois (banco 1 sensor 2). A
          segunda mede a eficiencia do catalisador. Se der valores
          semelhantes aos da primeira, significa que o catalisador quase
          nao converte poluentes. A centralina guarda P0420 e acende a
          luz do motor. Importante: o codigo nao diz o que esta avariado,
          apenas que a eficiencia e baixa.
        </p>

        <h2>As 5 causas possiveis</h2>
        <p>
          Antes de gastar 1200 EUR num catalisador novo, verifique estas
          causas por ordem:
        </p>

        <h3>1. Sonda lambda posterior (40 por cento dos casos)</h3>
        <p>
          A causa mais comum. Uma sonda envelhecida envia valores
          errados. Precos 2026 Portugal: sonda universal 30 a 100 EUR,
          sonda OEM 70 a 150 EUR. Mao-de-obra 30 a 80 EUR. Total:{" "}
          <strong>90 a 230 EUR</strong>. Verifique sempre isto primeiro!
        </p>

        <h3>2. Sonda lambda dianteira (15 por cento)</h3>
        <p>
          Se a sonda dianteira der valores errados pode tambem provocar
          P0420. Custos semelhantes:{" "}
          <strong>90 a 230 EUR</strong>. Muitas vezes em conjunto com{" "}
          <Link href="/pt/codes/p0171">P0171</Link> ou{" "}
          <Link href="/pt/codes/p0172">P0172</Link>.
        </p>

        <h3>3. Catalisador fatigado (25 por cento)</h3>
        <p>
          Apos 180&thinsp;000 a 250&thinsp;000 km o catalisador perde
          eficacia. A estrutura ceramica esta saturada.{" "}
          <strong>Custo com catalisador adaptavel: 320 a 700 EUR
          completo.</strong>{" "}
          Com original: 850 a 1800 EUR completo. Verifique sempre a
          marca europeia (e-Mark) na compra.
        </p>

        <h3>4. Fuga no escape antes do catalisador (10 por cento)</h3>
        <p>
          Uma entrada de ar parasita falsifica as leituras das sondas.
          Custo: junta do coletor 25 a 70 EUR, coletor 140 a 380 EUR.
          Oica assobios com o motor ligado.
        </p>

        <h3>5. Software da centralina (10 por cento)</h3>
        <p>
          Alguns fabricantes (VW, SEAT, Ford) publicaram atualizacoes que
          ajustam os limites de P0420. Pergunte no concessionario por
          uma atualizacao de servico. Custo 0 a 70 EUR.
        </p>

        <h2>Tabela de precos Portugal 2026</h2>
        <p>
          Precos reais numa oficina independente (nao concessionario):
        </p>
        <ul>
          <li>
            <strong>Substituicao sonda lambda posterior:</strong> 90 a 230
            EUR
          </li>
          <li>
            <strong>Ambas as sondas ao mesmo tempo:</strong> 180 a 420 EUR
          </li>
          <li>
            <strong>Catalisador adaptavel completo (SEAT Leon, Peugeot
            308, Opel Astra):</strong>{" "}
            320 a 700 EUR
          </li>
          <li>
            <strong>Catalisador adaptavel premium (BMW, Audi,
            Mercedes):</strong>{" "}
            500 a 1050 EUR
          </li>
          <li>
            <strong>Catalisador original completo:</strong> 850 a 2200
            EUR
          </li>
          <li>
            <strong>Junta do coletor de escape:</strong> 70 a 180 EUR
          </li>
        </ul>

        <h2>3 armadilhas a evitar</h2>
        <ol>
          <li>
            <strong>&laquo;E preciso trocar o catalisador&raquo;:</strong>{" "}
            sem testar antes as sondas lambda e pouco serio. Exija um
            teste de dados em tempo real com o AutoDiag EU ou um scanner
            de oficina.
          </li>
          <li>
            <strong>Original sem alternativa:</strong> tem direito a
            pedir um adaptavel homologado. Poupanca tipica: 50 a 70 por
            cento.
          </li>
          <li>
            <strong>Mao-de-obra excessiva:</strong> trocar uma sonda
            lambda leva 20 a 40 minutos. Faturas acima de 120 EUR so
            pela instalacao sao exageradas.
          </li>
        </ol>

        <h2>Quando fazer por si proprio?</h2>
        <p>
          <strong>Substituir a sonda lambda</strong> e possivel com
          alguma pratica: chave especial (22 mm) 10 EUR, desbloqueador 5
          EUR, sonda 40 a 100 EUR. Total abaixo de 130 EUR. Trocar o
          proprio catalisador e mais dificil pelos parafusos do coletor
          e pelas juntas, mas e viavel com experiencia.
        </p>

        <h2>Conclusao</h2>
        <p>
          P0420 nao e uma sentenca para a sua carteira. Em 55 por cento
          dos casos e apenas uma sonda lambda &mdash; reparacao abaixo
          de 230 EUR. So se as sondas estiverem bem deve considerar o
          catalisador. Com o AutoDiag EU e um adaptador de 25 EUR
          verifica os valores lambda por si proprio e chega a oficina
          bem informado. Poupanca media face a uma troca de catalisador
          as cegas: 320 a 650 EUR.
        </p>
      </ArticleLayout>
    </>
  );
}
