import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTLuzOleoAcesa() {
  const faq: FaqItem[] = [
    {
      q: "Vermelho ou laranja? Como distinguir as duas luzes de oleo?",
      a: "VERMELHO: oleador vermelho ou icone com texto STOP - e um alerta de pressao de oleo. Deve parar imediatamente, desligar o motor e nao voltar a arrancar antes de verificar. LARANJA: oleador amarelo ou texto OIL CHANGE - e um aviso de mudanca de oleo, sem urgencia, pode continuar normalmente ate a oficina.",
    },
    {
      q: "Quanto tempo posso rodar com a luz vermelha acesa?",
      a: "Zero minutos. Cada segundo de rotacao sem pressao de oleo destroi os casquilhos, a cabeca do motor e os pistoes. O motor pode partir em menos de 30 segundos em caso de rotura total do circuito. Desligue imediatamente, deixe arrefecer, verifique o nivel e se estiver correto, chame o reboque.",
    },
    {
      q: "O que acontece se o nivel estiver bom mas a luz continuar acesa?",
      a: "E uma situacao grave. Significa que o circuito nao pressuriza: bomba de oleo a falhar, filtro de aspiracao entupido, valvula reguladora gripada ou pressao real anormal. Tambem pode ser o sensor defeituoso. Nao corra o risco de circular para verificar - chame o reboque e diagnostique. Reparar uma bomba custa 200 a 600&nbsp;EUR, reparar um motor partido custa 10 a 30 vezes mais.",
    },
    {
      q: "Com que frequencia verificar o nivel de oleo?",
      a: "Uma vez por mes no minimo, uma vez por semana se o carro consome. Motor frio, em piso plano, esperar 5 minutos apos desligar para que o oleo escorra. O nivel deve estar entre min e max. Uma diferenca maior que 1 litro entre dois controlos mensais e anormal.",
    },
    {
      q: "Pode-se por um oleo diferente em emergencia?",
      a: "Sim, melhor um oleo um pouco diferente do que nada. Respeite se puder a viscosidade (por exemplo 5W30 preferivel) mas nao bloqueie a situacao por uma marca. Apos essa reposicao de emergencia, faca uma mudanca completa na intervencao seguinte.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Luz de oleo acesa: continuar ou parar imediatamente?"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          A luz de oleo e a unica luz onde a reacao correta depende
          inteiramente da sua cor. Confundir o vermelho e o laranja pode
          custar entre 5000 e 15&nbsp;000&nbsp;EUR de reparacao, ou ate
          mesmo a perda total do motor. Este guia ensina a distingui-los
          em dois segundos e a reagir corretamente em cada caso.
        </p>

        <h2>Luz vermelha: paragem imediata obrigatoria</h2>
        <p>
          A luz vermelha mostra um oleador vermelho ou um icone com a
          palavra STOP. Significa que a pressao de oleo e insuficiente
          para lubrificar corretamente o motor. Pode vir de nivel muito
          baixo, bomba a falhar, filtro de aspiracao entupido ou sensor
          defeituoso. Nos tres primeiros casos, cada segundo conta. Os
          casquilhos da cambota e da arvore de cames funcionam sobre um
          filme de oleo de cerca de dez micrometros. Sem esse filme, o
          metal roca o metal e as pecas destroem-se em poucas dezenas
          de segundos.
        </p>

        <h2>O procedimento de emergencia em 5 passos</h2>
        <p>
          Passo 1: por o pisca, encostar na berma em seguranca. Passo 2:
          desligar o motor imediatamente. Passo 3: deixar arrefecer 5 a
          10 minutos. Passo 4: verificar o nivel com a vareta. Passo 5:
          se o nivel estiver abaixo do minimo, adicionar oleo ate ao
          maximo e rearrancar brevemente para ver se a luz se apaga. Se
          sim, circule prudentemente ate a oficina. Se nao, ou se o
          nivel ja estava correto, chame o reboque.
        </p>

        <h2>Luz laranja: sem urgencia, apenas lembrete</h2>
        <p>
          A luz laranja, frequentemente com texto OIL CHANGE ou SERVICE,
          e um simples aviso de mudanca de oleo com base na quilometragem
          ou no tempo. Nao indica nenhum problema mecanico. Pode
          continuar a rodar normalmente e marcar uma consulta nas
          semanas seguintes. A mudanca de oleo custa em geral entre 60
          e 150&nbsp;EUR para um carro corrente.
        </p>

        <h2>Causas tipicas da luz vermelha</h2>
        <p>
          Nivel muito baixo: a consequencia mais frequente, muitas vezes
          por consumo progressivo negligenciado. Bomba de oleo cansada:
          200 a 600&nbsp;EUR de substituicao. Filtro de aspiracao
          entupido por depositos ou calamina. Sensor de pressao
          defeituoso: 40 a 150&nbsp;EUR, o cenario mais tranquilizador.
          Valvula reguladora gripada: 150 a 400&nbsp;EUR.
        </p>

        <h2>Consequencias de rodar prolongado sem pressao</h2>
        <p>
          Apos 30 segundos: inicio de gripagem dos casquilhos. Apos 2
          minutos: ranhuras nos cilindros. Apos 5 minutos: rotura de
          biela provavel. Os danos sao irreversiveis. O que era uma
          bomba de 400&nbsp;EUR torna-se um motor de 5000&nbsp;EUR no
          minimo, por vezes mais.
        </p>

        <h2>O consumo de oleo, sinal previo</h2>
        <p>
          Um carro que consome mais de meio litro aos 1000&nbsp;km esta
          a dizer-lhe algo. Causas frequentes: segmentos de pistao
          gastos, retentores de valvula, turbo que perde na admissao,
          junta de cabeca nascente.
        </p>

        <h2>Prevencao ativa</h2>
        <p>
          Respeite os intervalos de mudanca do fabricante. Use um oleo
          conforme as especificacoes (ACEA, API, aprovacoes do
          fabricante). Verifique o nivel pelo menos uma vez por mes,
          mais em viagem longa. Guarde um bidao na mala. Ver tambem{" "}
          <Link href="/pt/blog/luz-motor-acesa-o-que-fazer">
            luz de motor acesa: o que fazer
          </Link>
          .
        </p>

        <h2>Caso particular: luz ao arrancar</h2>
        <p>
          Muitos carros acendem todas as luzes 2 segundos ao arrancar
          para testar lampadas. A luz de oleo vermelha apaga-se assim
          que o motor arranca. Se continuar acesa mais de 3 segundos
          apos o arranque, trate-a como uma luz ativa.
        </p>

        <h2>O reflexo que salva</h2>
        <p>
          Cor vermelha igual a paragem imediata. Cor laranja igual a
          marcacao na semana. Se so tiver que recordar uma coisa deste
          artigo, e esta. Esta regra salvou mais motores que qualquer
          tecnologia de diagnostico.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
