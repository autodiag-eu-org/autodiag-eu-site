import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTCorreiaDistribuicaoSom() {
  const faq: FaqItem[] = [
    {
      q: "A quantos quilometros e preciso trocar a correia de distribuicao?",
      a: "Depende do modelo: entre 60&nbsp;000 e 180&nbsp;000&nbsp;km conforme o fabricante, ou 5 a 10 anos. Verifique o livro de manutencao. Alguns motores recentes tem corrente em vez de correia, com vida superior mas que tambem pode falhar &mdash; e tambem tem assinatura sonora.",
    },
    {
      q: "O que e um motor de interferencia?",
      a: "Um motor onde as valvulas e os pistoes se podem encontrar se a distribuicao saltar ou partir. A maioria dos motores modernos sao de interferencia. Nesses motores, uma correia que salta dobra valvulas e por vezes danifica pistoes, passando a fatura de 450&nbsp;EUR (troca de correia) para 2000-8000&nbsp;EUR (retificacao de cabeca ou troca de motor).",
    },
    {
      q: "O Scan Sonoro pode realmente detetar uma distribuicao em fim de vida?",
      a: "Sim, com certos limites. Deteta particularmente bem os sinais de desgaste do tensor e da roldana de reenvio, que produzem frequencias caracteristicas antes da rotura. Para a correia em si, os sinais sao mais subtis, mas uma mudanca de assinatura espectral acima de 70&nbsp;% de confianca justifica uma verificacao mecanica.",
    },
    {
      q: "Quais sao os ruidos de alerta de uma distribuicao fatigada?",
      a: "Um gemido leve a frio, um tique rapido em regime medio, um ligeiro assobio regular que varia com o regime. Esses ruidos sao frequentemente mascarados pelo resto do motor, razao pela qual o ouvido humano os perde. O Scan Sonoro isola a sua assinatura espectral especifica.",
    },
    {
      q: "Qual a diferenca entre ruido de correia de acessorios e ruido de distribuicao?",
      a: "A correia de acessorios (alternador, ar condicionado, direcao assistida) emite ruidos mais agudos, mais variados e mais audiveis. A correia de distribuicao esta escondida atras de uma tampa e emite sons abafados, mais graves, que se misturam com o ruido geral. O SVM separa-os gracas aos 40 coeficientes MFCC.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Correia de distribuicao gasta: deteta-la pelo som antes da rotura"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevencao"
      >
        <p>
          Se tivesse de reter apenas uma vantagem do Scan Sonoro,
          seria esta: detetar uma correia de distribuicao em fim de
          vida antes de saltar. Porque quando uma correia salta em
          motor de interferencia &mdash; e a maioria dos motores
          modernos sao &mdash; a fatura parte de 2000&nbsp;EUR e
          sobe rapidamente para 5000, 6000, mesmo 8000&nbsp;EUR
          conforme o numero de valvulas tocadas e o estado dos
          pistoes. Ao lado disso, uma troca preventiva custa entre
          400 e 900&nbsp;EUR. A razao e de um para oito no melhor
          dos casos, de um para vinte no pior.
        </p>

        <h2>Porque a distribuicao cede sem avisar (os humanos)</h2>
        <p>
          A correia de distribuicao esta escondida atras de uma
          tampa de plastico, geralmente do lado esquerdo do motor
          visto do capot. Essa tampa abafa os sons, e o ruido
          residual mistura-se com o resto do motor: explosoes,
          admissao, escape, ventilador. Para um ouvido humano,
          impossivel isolar o ruido especifico da distribuicao. Por
          isso uma rotura parecera sempre &laquo;repentina&raquo;.
          Na realidade nao e: os sinais estavam la, no espectro,
          desde ha semanas.
        </p>

        <h2>A assinatura espectral de uma distribuicao que fatiga</h2>
        <p>
          Uma correia nova tem assinatura limpa: pouco ruido
          proprio, harmonicos estaveis, sem picos parasitas. A
          medida que se desgasta, varias coisas acontecem. O
          tensor, que compensa o alongamento da correia, trabalha
          cada vez mais, produzindo um pico espectral a volta dos
          4-6&nbsp;kHz. Os dentes da correia tambem se desgastam,
          introduzindo harmonicos pares ligados a frequencia de
          passagem dos dentes sobre os carretos. Por fim, se a
          roldana de reenvio comeca a encravar, aparece um ruido
          ciclico a frequencia de rotacao da roldana. Esses tres
          sinais juntos formam uma impressao que o SVM reconhece
          como &laquo;belt noise&raquo; com confianca crescente.
        </p>

        <h2>As 3 fases de degradacao detetaveis</h2>
        <p>
          Fase 1: deriva leve. A confianca &laquo;belt noise&raquo;
          passa de 5&nbsp;% (normal) para 20-30&nbsp;%. Nada visivel
          para o utilizador, mas a IA ve uma mudanca espectral.
          Momento ideal para planear a troca sem stress. Fase 2:
          alerta amarelo. A confianca atinge 50-70&nbsp;%. Ha
          mudanca nitida. Recomenda-se verificacao por mecanico em
          duas semanas. Fase 3: alerta vermelho. Confianca acima
          dos 80&nbsp;%. E preciso intervir imperativamente, o
          tempo conta-se em dias.
        </p>

        <h2>O que o scan nao pode fazer</h2>
        <p>
          Sejamos claros: o Scan Sonoro nao substitui uma inspecao
          visual da correia. Deteta uma deriva, nao o estado real
          da correia a vista. Se o livro de manutencao diz que e
          hora de trocar a distribuicao, troque-a, mesmo que o scan
          esteja calmo. O scan e uma ferramenta complementar, nao
          um substituto. O seu interesse e avisar entre duas
          revisoes oficiais, quando ainda esta longe da
          quilometragem teorica mas a correia sofreu stress anormal.
        </p>

        <h2>Os fatores que aceleram o desgaste</h2>
        <p>
          Uma correia prevista para 120&nbsp;000&nbsp;km pode dar
          o ar da sua graca aos 60&nbsp;000&nbsp;km em certos
          casos. Aceleradores de desgaste conhecidos: fuga de
          liquido de refrigeracao ou oleo sobre a correia (a
          borracha desagrega-se), tensor de origem fraco em certos
          modelos, uso em cidade intensivo com muitos arranques a
          frio, sobreaquecimento motor mesmo pontual, ou
          simplesmente uma troca anterior mal feita com pecas
          baratas. Se o seu veiculo sofreu um desses eventos, um
          scan mensal e particularmente recomendavel.
        </p>

        <h2>A fusao OBD2 + sonoro</h2>
        <p>
          Certos codigos OBD2 alertam indiretamente sobre a
          distribuicao. Um codigo{" "}
          <Link href="/pt/codes/p0011">P0011</Link> (distribuicao
          variavel de admissao avancada) pode indicar correia com
          dentes saltados. Um codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link> de falhas de
          ignicao generalizadas pode resultar do mesmo problema. A
          camada 5 da pipeline funde estas informacoes: quando um
          desses codigos esta presente E um belt noise e detetado
          acima de 40&nbsp;%, o sistema eleva a prioridade do
          diagnostico. E um exemplo concreto do valor da fusao
          audio + OBD2.
        </p>

        <h2>O custo de uma detecao perdida</h2>
        <p>
          Nos motores de interferencia mais comuns na Europa
          &mdash; Renault 1.5&nbsp;dCi, Peugeot 1.6&nbsp;HDi, VW
          1.6&nbsp;TDI, Fiat 1.3&nbsp;MultiJet, BMW N47 &mdash; a
          rotura de distribuicao custa regularmente entre 2500 e
          5000&nbsp;EUR. Em motores premium ou V6, pode
          ultrapassar os 8000&nbsp;EUR. Comparado com os 450-900
          &nbsp;EUR de uma troca preventiva. Mesmo que o seu Scan
          Sonoro so o avise uma unica vez na vida do veiculo,
          tera sido largamente rentabilizado. Para ir mais longe,
          leia o nosso artigo sobre{" "}
          <Link href="/pt/blog/prevenir-avaria-motor-diagnostico-sonoro-preventivo">
            o diagnostico sonoro preventivo
          </Link>{" "}
          e sobre a{" "}
          <Link href="/pt/blog/11-avarias-motor-detetaveis-analise-sonora">
            lista completa das 11 avarias detetaveis
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
