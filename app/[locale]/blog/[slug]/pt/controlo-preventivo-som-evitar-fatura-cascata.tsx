import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTControloPreventivoSom() {
  const faq: FaqItem[] = [
    {
      q: "O que e um controlo preventivo por som?",
      a: "E uma inspecao acustica regular do carro, tipicamente uma vez por mes, durante a qual o Scan Sonoro analisa motor e habitaculo para detetar assinaturas sonoras anormais antes de se transformarem em avaria. E o equivalente a uma consulta medica preventiva: pesca os sinais fracos antes do sintoma brutal.",
    },
    {
      q: "Qual a economia media comparada a reparacao curativa?",
      a: "Nos nossos casos reais, um controlo preventivo mensal poupa em media entre 60 e 75&nbsp;% sobre a fatura cumulada num ano, porque apanha as avarias no estadio em que ainda sao baratas. Um rolamento de roda detetado a 70&nbsp;% de confianca custa 120&nbsp;EUR. Ignorado seis meses, torna-se um cubo completo a 450&nbsp;EUR, com risco de dano colateral.",
    },
    {
      q: "A quem serve particularmente o controlo preventivo?",
      a: "A todos os proprietarios de viaturas com mais de cinco anos ou mais de 80&nbsp;000&nbsp;km. Tambem aos compradores de usado (diagnostico a entrega do veiculo), aos vendedores que querem valorizar o carro, aos titulares de garantia mecanica para detetar precocemente o que ainda esta coberto.",
    },
    {
      q: "O controlo preventivo substitui a revisao do mecanico?",
      a: "Nao. E complementar. O Scan Sonoro e uma ferramenta de orientacao que identifica as zonas a inspecionar. O mecanico confirma com inspecao visual, mecanica, e instrumentos de oficina. O preventivo poupa consultas desnecessarias, mas nao substitui a pericia humana.",
    },
    {
      q: "Qual a duracao de um controlo preventivo completo?",
      a: "Cinco a dez minutos. Um scan motor ao ralenti em frio, um scan motor quente, um scan habitaculo a rodar a 50&nbsp;km/h, e se possivel um teste rapido a 80-90&nbsp;km/h. Os resultados surgem imediatamente no ecra, com nivel de confianca por classe.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Controlo preventivo por som: evite a fatura em cascata"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Prevencao"
      >
        <p>
          Uma fatura em cascata e essa sequencia catastrofica em que uma
          peca pequena e barata destroi lentamente varias outras pecas
          maiores e caras. Comeca num amortecedor cansado a 180&nbsp;EUR
          e acaba em 1400&nbsp;EUR entre pneus, geometria, cremalheira e
          rolamento. O controlo preventivo por som existe precisamente
          para cortar essa cascata antes que custe caro.
        </p>

        <h2>Como nasce uma cascata</h2>
        <p>
          Tudo comeca com um sinal fraco. Um amortecedor que perde 15&nbsp;%
          de eficacia, uma junta de direcao que cria tres decimos de
          folga, uma pastilha de travao que se desgasta 2&nbsp;mm a mais
          do lado direito. Nada disto provoca sintoma consciente ao
          condutor. Mas cada uma dessas pecas degradadas comeca a martelar
          outras pecas a sua volta.
        </p>

        <h2>O que o ouvido humano nao deteta</h2>
        <p>
          Uma assinatura sonora em mudanca de 5&nbsp;% imperceptivel ao
          ouvido. Um ruido que aumenta 1&nbsp;dB por mes. Um rolamento
          cuja frequencia fundamental sobe progressivamente de 180 para
          220&nbsp;Hz ao longo de tres meses. O Scan Sonoro, com as suas
          138 caracteristicas MFCC e deltas, ve cada uma destas derivas.
        </p>

        <h2>O protocolo preventivo mensal ideal</h2>
        <p>
          Primeiro dia do mes, motor frio desde a noite anterior. Faz um
          scan motor de 30 segundos ao ralenti. Ve os resultados. Arranca,
          anda 10 minutos para aquecer. Segundo scan motor em quente.
          Depois scan habitaculo a rodar, durante 30 segundos em estrada
          calma. Anota os niveis de confianca em cada classe.
        </p>

        <h2>Os sinais fracos mais rentaveis de detetar</h2>
        <p>
          Por ordem de rentabilidade. Primeiro: rolamento de roda (custa
          cedo 120&nbsp;EUR, tarde 500&nbsp;EUR). Segundo: amortecedor
          (180&nbsp;EUR cedo, 1400&nbsp;EUR tarde). Terceiro: correia
          acessorios (25&nbsp;EUR cedo, 900&nbsp;EUR tarde se a correia
          parte e leva a distribuicao). Quarto: sonda lambda (80&nbsp;EUR
          cedo, 1100&nbsp;EUR tarde se mata o catalisador ver o{" "}
          <Link href="/pt/codes/p0420">P0420</Link>).
        </p>

        <h2>Em que confiar</h2>
        <p>
          Regra D3 da app. Igual ou superior a 80&nbsp;% e deteccao
          fiavel, atua sem hesitar. Entre 60 e 79&nbsp;% e para vigiar,
          refaz o scan em condicoes diferentes (frio, quente, em estrada)
          e confirma antes de ir a oficina. Entre 30 e 59&nbsp;% e
          indicativo, olha outros sintomas e repete na semana. Abaixo de
          30&nbsp;% nao e concludente, nao entres em panico.
        </p>

        <h2>A filosofia por tras</h2>
        <p>
          Nao se trata de transformar cada condutor num mecanico obsessivo,
          mas de lhe dar uma objetividade simples. Um numero, uma
          confianca, uma acao. Assim a viatura deixa de ser uma caixa
          preta que explode em factura surpresa. Para continuar, veja o{" "}
          <Link href="/pt/blog/triplo-diagnostico-som-visao-obd2-completam-se">
            triplo diagnostico som, visao e OBD2
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
