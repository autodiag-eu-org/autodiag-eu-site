import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTBatidaDirecao() {
  const faq: FaqItem[] = [
    {
      q: "Uma batida na direcao e perigosa?",
      a: "Sim, potencialmente. Uma rotula que cede em movimento liberta a roda do eixo de viragem e torna o veiculo incontrolavel. E uma das poucas avarias que pode provocar um acidente imediato sem aviso previo.",
    },
    {
      q: "Como distinguir semi-eixo, rotula e cremalheira de ouvido?",
      a: "Semi-eixo: clique-clique-clique rapido em curva apertada a baixa velocidade (parque). Rotula: &laquo;toc&raquo; seco ao passar uma lomba ou a travar. Cremalheira: batida mate no volante em linha reta numa estrada irregular. As tres tem assinaturas espetrais bem diferenciadas que a IA isola com 138 caracteristicas.",
    },
    {
      q: "Posso conduzir alguns dias com uma rotula a bater?",
      a: "E de evitar. Uma rotula anunciadora pode durar dois meses ou ceder amanha, nao ha forma fiavel de saber. A reparacao custa 90 a 180 euros, o potencial acidente custa infinitamente mais.",
    },
    {
      q: "Uma cremalheira pode ser reparada ou tem de ser substituida?",
      a: "Na maioria dos modelos europeus modernos e uma troca padrao. So alguns veiculos de colecao ou comerciais guardam cremalheiras desmontaveis. Orcamento tipico: 600 a 1200 euros montada.",
    },
    {
      q: "O Scan Sonoro funciona rodando o volante parado?",
      a: "Sim para detetar semi-eixos gastos, menos bem para rotulas que precisam de carga dinamica. O melhor protocolo e um scan misto: dez segundos parado rodando o volante a fundo, depois trinta segundos a rodar em estrada variada.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Batida na direcao: rotula, cremalheira ou semi-eixo?"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Seguranca"
      >
        <p>
          De todos os ruidos que um carro pode produzir, os que vem da
          direcao sao os que levo mais a serio. Nao porque sejam os mais
          frequentes, mas porque anunciam pecas que, ao cederem, tornam
          o veiculo incontrolavel. Vejamos como identificar com precisao
          a fonte gracas ao Scan Sonoro e a algum ouvido guiado.
        </p>

        <h2>O semi-eixo de transmissao</h2>
        <p>
          Se ouvir um &laquo;clique-clique-clique&raquo; rapido ao virar
          a fundo manobrando num parque, e um fole de semi-eixo rasgado.
          A massa escapou, a agua e o po entraram, as esferas do tripe
          gastam-se e criam esse ruido de roquete. No inicio nao
          incomoda: a transmissao aguenta milhares de quilometros. Ao
          fim de um certo tempo, as esferas desintegram-se e a
          transmissao parte. Custo so do fole: 80 euros montado. Custo
          de uma transmissao completa: 450 a 900 euros consoante o
          veiculo.
        </p>

        <h2>A rotula de direcao</h2>
        <p>
          A rotula e a peca que liga a cremalheira a manga de eixo da
          roda. A sua folga manifesta-se por um &laquo;toc&raquo; seco e
          curto, geralmente ao passar uma junta de pavimento ou ao
          aliviar uma lomba. Particularidade: o ruido tambem se sente no
          volante, como um pequeno ressalto. A assinatura espetral e um
          impulso muito curto, de banda larga, com um pico entre
          600-1200 Hz. O SVM de habitaculo reconhece-a como classe
          &laquo;direcao&raquo; com confianca tipicamente elevada quando
          a peca esta realmente gasta.
        </p>

        <h2>A cremalheira que ganha folga</h2>
        <p>
          Mais subtil, a cremalheira desgasta a sua engrenagem interna.
          Sintomas: ligeira vibracao no volante a 80-90 km/h em estrada
          irregular, batida mate ao virar bruscamente, e por vezes uma
          pequena folga percetivel ao mover o volante da direita para a
          esquerda com o motor desligado. A cremalheira ganha folga
          progressivamente ao longo de dezenas de milhares de
          quilometros, e e exatamente a situacao onde a adaptacao
          auditiva do condutor faz mais mal: so se apercebe quando a
          folga se torna enorme.
        </p>

        <h2>O efeito em cascata do sistema de direcao</h2>
        <p>
          Um semi-eixo gasto acaba por partir: o carro nao roda,
          reboque 150 euros, transmissao 700 euros, mais eventualmente
          um apoio de caixa deformado pelo impacto, acrescente 200
          euros. Uma rotula gasta forca a cremalheira a compensar a
          folga, o que desgasta mais rapido o seu pinhao: seis meses de
          rotula a bater podem transformar uma reparacao de 120 euros
          em fatura de 900. E uma cremalheira com folga fatiga as
          rotulas em retorno &mdash; o feedback mecanico roda em loop
          ate tudo ter de ser substituido ao mesmo tempo.
        </p>

        <h2>O protocolo de scan da direcao</h2>
        <p>
          Para um scan eficaz recomendo uma sequencia em tres tempos.
          Primeiro tres rotacoes de volante a fundo parado, com motor a
          trabalhar: deteta semi-eixos e pratos de amortecedor. Depois
          trinta segundos a rodar a baixa velocidade em estrada
          ligeiramente irregular com duas ou tres manobras de
          estacionamento: deteta as rotulas. Por fim trinta segundos em
          linha reta a 90 km/h em estrada variada: deteta a cremalheira
          e os rolamentos de coluna. Uma unica gravacao continua basta.
        </p>

        <h2>SVM e escuta objetiva</h2>
        <p>
          O modelo SVM de 7 classes, amostrado a 16 kHz, e capaz de
          separar as tres fontes em 75&nbsp;% dos casos. Quando a
          confianca &laquo;direcao&raquo; sai a 70&nbsp;% ou mais, e
          preciso agir. Quando esta a 30-50&nbsp;%, vigiar no proximo
          scan. O mais util continua a ser a comparacao longitudinal:
          se a confianca sobe de um mes para outro, e o sinal de
          alarme objetivo que o seu ouvido, habituado ao ruido, jamais
          lhe dara.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Leia tambem o nosso artigo sobre o{" "}
          <Link href="/pt/blog/bruit-suspension-ia-identifie-amortisseur">
            ruido de suspensao
          </Link>{" "}
          (muitas vezes confundido com a direcao) e sobre o{" "}
          <Link href="/pt/blog/bruit-roulement-roue-detecter-usure-avant-ct">
            rolamento de roda
          </Link>{" "}
          (que pode imitar uma rotula). Para um problema eletrico de
          direcao assistida, um codigo{" "}
          <Link href="/pt/codes/p0171">P0171</Link>{" "}
          associado a uma bomba hidraulica barulhenta pode orientar
          para uma entrada de ar no motor que falseia o ralenti.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
