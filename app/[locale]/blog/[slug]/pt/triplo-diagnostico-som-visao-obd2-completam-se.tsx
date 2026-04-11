import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTTriploDiagnostico() {
  const faq: FaqItem[] = [
    {
      q: "Porque nao basta o OBD2?",
      a: "O OBD2 so ve o que a centralina decidiu codificar. Uma correia que range, um apoio de motor cansado, um liquido de travao que comeca a escurecer: nada disto aparece em OBD2. O som e a visao apanham esta zona cega.",
    },
    {
      q: "O que o Scan Sonoro deteta que o OBD2 nao ve?",
      a: "Batida mecanica precoce, fuga de ar de admissao, correia que patina, rolamento que ronca, amortecedor cansado, apoio de motor com folga, escape a fendilhar, compressor de climatizacao gripado. Todos invisiveis a centralina porque nao sao anomalias eletricas.",
    },
    {
      q: "A visao IA le as matriculas?",
      a: "Nao. A visao IA analisa fluidos (cor do oleo, nivel do refrigerante, aspeto do liquido de travoes), pontos de corrosao, estado visual de correias, fugas no bloco. E uma inspecao visual assistida, nao reconhecimento de matriculas.",
    },
    {
      q: "As tres camadas fundem-se automaticamente?",
      a: "Sim. O pipeline cruza os resultados das tres fontes e eleva a confianca final quando duas ou tres fontes apontam no mesmo sentido. Um P0420 OBD2 mais uma batida metalica detetada no escape mais uma mancha de oleo visual igual a 98&nbsp;% de confianca de catalisador comprometido.",
    },
    {
      q: "Preciso do adaptador ELM327 para beneficiar do som?",
      a: "Nao. O scan sonoro e a visao funcionam sem nenhum hardware alem do telemovel. O adaptador adiciona apenas a terceira camada, a OBD2, que enriquece ainda mais a confianca final. Comece com som e visao, adicione o dongle depois.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Triplo diagnostico: como som, visao e OBD2 se completam"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={11}
        category="Tecnologia"
      >
        <p>
          A filosofia da AutoDiag EU assenta numa constatacao simples:
          nenhuma fonte de dados e suficiente sozinha para dar um
          diagnostico completo de um automovel moderno. O OBD2 e
          fabuloso, mas so ve o eletrico. O som apanha a mecanica mas nao
          ve os liquidos. A visao capta os liquidos e a corrosao, mas nao
          ouve. Ao cruzar as tres fontes, conseguimos cobrir praticamente
          toda a superficie de avarias possiveis.
        </p>

        <h2>A zona cega do OBD2</h2>
        <p>
          Um OBD2 moderno le entre 200 e 400 parametros num carro de
          2015. Parece muito. Mas esses parametros referem-se quase todos
          a eletricidade: tensao das sondas, tempo de injecao, angulo de
          avanco, fluxo de ar medido. Nada sobre o estado fisico das
          pecas. Um apoio de motor pode estar a rachar durante 30&nbsp;000&nbsp;km
          sem fazer piscar um unico bit da centralina.
        </p>

        <h2>A camada acustica: ouvir o que a centralina nao sente</h2>
        <p>
          O Scan Sonoro funciona com o microfone do telemovel, a 16&nbsp;kHz.
          A gravacao de 30 segundos passa pelas 7 camadas do pipeline:
          controlo de qualidade, reducao de ruido, extracao de 138
          caracteristicas MFCC, SVM 11 classes, fusao com OBD2, interprete
          Claude, afixacao com codigo de cores. A assinatura espectral de
          uma correia a patinar e totalmente diferente de uma bomba de
          agua a falhar.
        </p>

        <h2>A camada visual: ver o que o som nao apanha</h2>
        <p>
          A visao IA tira fotos do compartimento do motor e analisa a
          cor e textura dos fluidos. Oleo escuro e grosso sinaliza falta
          de revisao. Refrigerante laranja em vez de verde indica
          contaminacao. Liquido de travao escuro na vasilha aponta
          humidade absorvida. Uma corrosao verde azulada num terminal de
          bateria anuncia um contacto deficiente. Tudo inacessivel ao som.
        </p>

        <h2>A fusao: quando tres ficam mais que tres</h2>
        <p>
          A camada 5 do pipeline e a mais subtil. Em vez de dar a cada
          fonte uma opiniao isolada, cruza sistematicamente os
          resultados. Um codigo{" "}
          <Link href="/pt/codes/p0171">P0171</Link>{" "}
          (mistura pobre) sozinho em OBD2 da 60&nbsp;% de confianca numa
          fuga de ar. O mesmo P0171 combinado com uma assinatura sonora
          de assobio detetada em torno dos 2&nbsp;kHz durante 3 segundos
          sobe essa confianca a 92&nbsp;%.
        </p>

        <h2>Exemplos concretos de sinergia</h2>
        <p>
          Primeiro. Um motor que tem sede de oleo. OBD2 mostra P0300
          (falhas de ignicao). Som deteta uma batida metalica a 45&nbsp;%
          de confianca na classe &laquo;piston slap&raquo;. Visao ve
          fumo azul no escape. A fusao concluiu com 95&nbsp;% de
          confianca: desgaste de segmentos. Nenhuma fonte sozinha teria
          chegado tao perto.
        </p>

        <h2>O papel de cada camada na confianca final</h2>
        <p>
          O SVM dos 91,3&nbsp;% em motor e 75,05&nbsp;% em habitaculo e o
          pilar. O OBD2 afina por regras especialistas. A visao traz um
          peso entre 0 e 25&nbsp;pontos percentuais. Claude interpreta em
          Portugues, mas nunca inventa o numero: o valor vem sempre do
          SVM fundido com o OBD2.
        </p>

        <h2>Para continuar a leitura</h2>
        <p>
          Veja o artigo sobre{" "}
          <Link href="/pt/blog/7-ruidos-interior-carro-nao-ignorar">
            os 7 ruidos de interior a nunca ignorar
          </Link>{" "}
          e o{" "}
          <Link href="/pt/blog/controlo-preventivo-som-evitar-fatura-cascata">
            controlo preventivo
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
