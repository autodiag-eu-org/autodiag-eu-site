import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTDiagnosticoPreventivo() {
  const faq: FaqItem[] = [
    {
      q: "Quanto se pode poupar realmente com diagnostico preventivo?",
      a: "Em uso normal com um carro com mais de cinco anos, observam-se facilmente entre 800 e 2500&nbsp;EUR de poupanca por ano. Vem de avarias detetadas antes de partir (rolamentos, distribuicao, lambda) e de pecas trocadas no bom momento. A poupanca nao vem de uma so peca grande mas da acumulacao de pequenas decisoes a tempo.",
    },
    {
      q: "Um Scan Sonoro mensal e realmente util?",
      a: "Sim. A maioria dos desgastes mecanicos evolui ao longo de semanas ou meses. Um scan mensal mostra a curva e nao apenas a foto. Uma confianca que passa de 15&nbsp;% a 60&nbsp;% em bearing noise em tres meses e um sinal claro impossivel de detetar com um scan unico.",
    },
    {
      q: "Que avarias sao mais rentaveis de prevenir?",
      a: "Por ordem: quebra de motor por distribuicao negligenciada (ate 5000&nbsp;EUR de poupanca), catalisador destruido por lambda cansada (1500 a 2500&nbsp;EUR), turbo partido por falta de oleo (1500 a 3000&nbsp;EUR), caixa de velocidades grelhada por embraiagem a patinar demais (2000 a 4500&nbsp;EUR), e pneus destruidos por defeito de geometria ou amortecedor (300 a 800&nbsp;EUR).",
    },
    {
      q: "Como priorizar com varios alertas?",
      a: "Use a pontuacao de saude: trate primeiro o que mais pesa. Um codigo OBD2 critico vai antes de uma anomalia sonora a 55&nbsp;% de confianca. Uma fuga visual ativa vai antes de uma corrosao superficial ligeira. A pontuacao da a hierarquia num relance.",
    },
    {
      q: "E preciso reparar tudo de imediato?",
      a: "Nao. Algumas anomalias podem ser vigiadas antes de tratadas, desde que sejam realmente vigiadas. A app segue a evolucao e alerta quando se cruza um limiar. A reparacao imediata so e necessaria para avarias criticas ou de seguranca.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Diagnostico preventivo: como poupar varios milhares de euros por ano"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Poupanca"
      >
        <p>
          Ninguem gosta de pagar uma reparacao nao prevista. Um
          orcamento de 1800&nbsp;EUR numa sexta a tarde e o momento em
          que se pergunta porque nao viu nada a chegar. Na maioria das
          vezes, essas grandes faturas nao sao fatalidade. Sao pequenas
          avarias deixadas sem tratar ate partirem outra coisa. O
          diagnostico preventivo tem um so objetivo: cortar essa
          cascata.
        </p>

        <h2>A regra de ouro: detetar antes de partir</h2>
        <p>
          Um rolamento de roda a comecar a marcar custa 150&nbsp;EUR.
          Deixado demasiado tempo, destroi o cubo (400&nbsp;EUR),
          estraga o disco por aquecimento (120&nbsp;EUR), gasta um pneu
          em viez (180&nbsp;EUR) e ate fragiliza a manga de eixo
          (250&nbsp;EUR). Detetado cedo: 150&nbsp;EUR. Tarde:
          900&nbsp;EUR. O Scan Sonoro capta a assinatura bearing noise
          a partir de 5&nbsp;% de desgaste anormal. Veja{" "}
          <Link href="/pt/blog/ruido-rolamento-roda-antes-ipo">
            o artigo sobre rolamentos
          </Link>
          .
        </p>

        <h2>Caso 1: a sonda lambda cansada</h2>
        <p>
          Uma lambda a montante tem uma vida tipica de
          150000&nbsp;km. Ao cansar, envia valores enviesados a
          centralina que compensa enriquecendo a mistura. Consumo em
          alta, catalisador sobrecarregado, depois um{" "}
          <Link href="/pt/codes/p0420">P0420</Link> quando o
          catalisador esta atacado. Reparar a lambda a tempo: 80 a
          150&nbsp;EUR. Reparar lambda + catalisador: 1200 a
          2000&nbsp;EUR. A detecao preventiva ve a deriva muito antes
          do limiar de codigo.
        </p>

        <h2>Caso 2: a correia de distribuicao</h2>
        <p>
          O cenario catastrofe por excelencia. Em motor de interferencia
          (a maioria dos modernos), uma rotura de distribuicao bate as
          valvulas nos pistoes. 3500 a 6000&nbsp;EUR. Uma distribuicao
          mudada a tempo (100000 a 160000&nbsp;km conforme modelo)
          custa 500 a 1200&nbsp;EUR. O Scan Sonoro identifica
          assinaturas de folga ou tensao anormal antes da quebra.
        </p>

        <h2>Caso 3: o turbo e as suas pocas</h2>
        <p>
          Um turbo a comecar a verter oleo pelo chumaceira do veio
          acaba sem lubrificacao e gripa. A detecao visual de um traco
          de oleo no tubo de admissao mais um assobio anormal permite
          intervir por 400 a 800&nbsp;EUR. Um turbo estourado: 1500 a
          3000&nbsp;EUR, mais danos por oleo engolido se for longe.
        </p>

        <h2>Caso 4: amortecedores e danos colaterais</h2>
        <p>
          Um amortecedor a vazar deixa progressivamente de amortecer.
          O pneu salta, o desgaste fica desigual, os discos aquecem
          mais, o trem rolante envelhece mais depressa. Um par de
          amortecedores: 300 a 500&nbsp;EUR. Nao mudar: 400&nbsp;EUR de
          pneus por ano mais desgaste acelerado. A analise
          acelerometro do Drive Test mede o coeficiente zeta sem
          desmontar.
        </p>

        <h2>Caso 5: injetores diesel entupidos</h2>
        <p>
          Um injetor a gotejar envia mais combustivel do que previsto
          ao cilindro. Sintoma: consumo anormal, fumos negros, misfire
          ocasional. Deixado demasiado tempo, danifica o pistao ou o
          FAP. Limpar ou trocar a tempo: 150 a 400&nbsp;EUR. Reparar os
          danos: 1500&nbsp;EUR e mais. A fusao Scan Sonoro (classe
          injector noise) + OBD2 (fuel trims anormais) da uma detecao
          precoce fiavel.
        </p>

        <h2>O balanco anual de um proprietario atento</h2>
        <p>
          Exemplo cifrado num carro de 9 anos, 130000&nbsp;km. No ano,
          a app detetou: uma deriva lambda (reparada por 110&nbsp;EUR,
          1000&nbsp;EUR poupados no catalisador), um rolamento
          nascente (180&nbsp;EUR, 600&nbsp;EUR poupados em disco e
          pneu), inicio de fuga turbo (400&nbsp;EUR de retoque,
          1800&nbsp;EUR poupados na troca completa), e desgaste de
          pastilhas detetado antecipadamente (70&nbsp;EUR,
          250&nbsp;EUR poupados no disco riscado). Despesa total:
          760&nbsp;EUR. Poupanca total: 3650&nbsp;EUR. Margem liquida:
          cerca de 2890&nbsp;EUR no ano.
        </p>

        <h2>O paradoxo da prevencao</h2>
        <p>
          O problema da prevencao e que nunca se veem as catastrofes
          evitadas. So se ve o preco das pequenas reparacoes feitas.
          Por isso muitos proprietarios descuidam o diagnostico
          preventivo. A pontuacao de saude, historiada na app, torna
          esse comparativo visivel e concreto. Veja{" "}
          <Link href="/pt/blog/pontuacao-saude-veiculo-calculo-nota-100">
            como se calcula a pontuacao de saude
          </Link>
          .
        </p>

        <h2>O verdadeiro luxo e a tranquilidade</h2>
        <p>
          Para alem dos numeros, o diagnostico preventivo traz algo
          dificil de monetizar: sabe onde esta o seu carro. Sem
          duvidas, sem angustia, sem surpresas de orcamento. Parte de
          fim de semana sabendo que esta tudo OK. Vende o seu carro
          com historico claro e pontuacao recente. Isso tambem tem
          valor.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
