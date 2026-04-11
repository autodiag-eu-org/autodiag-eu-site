import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTBatidaMotor() {
  const faq: FaqItem[] = [
    {
      q: "O meu motor bate ao arrancar a frio e depois desaparece, e grave?",
      a: "Nao necessariamente. Uma batida breve a frio que desaparece em 10-30 segundos costuma indicar tuchos hidraulicos a repressurizar. Se for diario e o nivel de oleo estiver bom, adicione simplesmente um oleo de boa qualidade na proxima mudanca. Se a batida persistir em quente ou voltar sob carga, e outra coisa.",
    },
    {
      q: "Qual a diferenca entre knock e batida mecanica?",
      a: "O knock e um som metalico agudo que chega sob carga, frequentemente descrito como berlindes numa caixa. Ligado a uma combustao anormal. A batida mecanica (piston slap, rod knock) e mais surda, ritmada com a rotacao do motor, e revela uma folga mecanica real. A IA separa as duas assinaturas em menos de um segundo.",
    },
    {
      q: "O codigo P0325 significa que o meu motor bate?",
      a: "Nao, o codigo P0325 diz respeito ao circuito eletrico do sensor de batida, nao a batida em si. O sensor pode estar avariado sem que o motor bata, ou o motor pode bater sem que o codigo se acenda se o sensor estiver morto. Um scan sonoro verifica a realidade do ruido independentemente do sensor.",
    },
    {
      q: "Quanto custa um motor que bate ignorado?",
      a: "Uma batida de biela severa destroi o motor completo em poucas centenas de quilometros. Substituicao: 2500 a 6000&nbsp;EUR. Deteccao precoce por scan sonoro: troca os casquilhos por 400 a 900&nbsp;EUR.",
    },
    {
      q: "Posso rodar com uma ligeira batida?",
      a: "Ate a oficina sim, devagar, sem regimes altos. Nao mais que isso. Cada quilometro com uma batida mecanica agrava o desgaste exponencialmente.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Batida de motor: causas, riscos e diagnostico por IA"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          Ha batida e batida. Um ruido metalico sob o capot nao tem nada
          de excecional &mdash; todos os motores produzem alguns, a
          diversos graus. O problema e saber quais sao normais e quais
          anunciam uma reparacao de 3000&nbsp;EUR. Sem ferramenta, mesmo
          um mecanico experiente pode enganar-se. Com o Scan Sonoro da
          AutoDiag EU obtem uma resposta em menos de um minuto, com
          nivel de confianca cifrado.
        </p>

        <h2>As tres grandes familias de batida</h2>
        <p>
          Primeira familia: o knock de combustao. Um som metalico agudo
          ao carregar no acelerador, frequentemente em subida ou em
          retoma. A causa e uma auto-inflamacao do combustivel antes da
          faisca da vela, tipicamente por indice de octano demasiado
          baixo, ignicao demasiado avancada ou sensor de batida
          defeituoso (codigo{" "}
          <Link href="/pt/codes/p0325">P0325</Link>
          ). Segunda familia: a batida mecanica, ou piston slap. Um som
          mais surdo, sobretudo a frio, por folga excessiva entre pistao
          e camisa. Terceira familia: a batida de biela, a mais grave.
          Um martelamento ritmado que assina casquilhos de biela gastos.
        </p>

        <h2>O que o ouvido nao pode fazer</h2>
        <p>
          O ouvido humano tem tres grandes defeitos para este
          diagnostico. Nao mede a periodicidade precisa. Nao separa as
          frequencias. E habitua-se depressa: apos tres minutos a ouvir,
          o seu cerebro classifica o ruido como fundo. O SVM nao tem
          nenhum destes defeitos.
        </p>

        <h2>Como a IA faz a diferenca</h2>
        <p>
          Uma batida de biela tem uma assinatura espectral muito
          caracteristica: ataque rapido, decaimento exponencial,
          fundamental em torno de 200-400&nbsp;Hz com harmonicas ate
          3&nbsp;kHz, e periodicidade rigorosamente sincronizada com a
          rotacao do motor dividida por dois. O piston slap e mais
          largo em frequencia, mais amortecido, e diminui claramente
          quando o motor aquece. O knock de combustao e muito mais
          agudo, 5-8&nbsp;kHz, e so aparece sob carga.
        </p>

        <h2>O papel do OBD2 no diagnostico</h2>
        <p>
          Se tiver um adaptador ligado, a camada 5 do pipeline
          enriquece a previsao com dados OBD2. Um codigo{" "}
          <Link href="/pt/codes/p0325">P0325</Link>{" "}
          ativo reforca a probabilidade de uma batida de combustao ser
          real. Um codigo{" "}
          <Link href="/pt/codes/p0011">P0011</Link>{" "}
          sobre a distribuicao variavel pode mascarar ou amplificar
          certas batidas. Esta fusao aumenta a precisao efetiva de
          91,3&nbsp;% para mais de 94&nbsp;%.
        </p>

        <h2>As causas mais frequentes</h2>
        <p>
          Por ordem de frequencia na clientela europeia: combustivel de
          ma qualidade (15-20&nbsp;% das batidas ligeiras), afinacao de
          ignicao deslocada (10&nbsp;%), sensor de batida morto
          (15&nbsp;%), tuchos hidraulicos gastos ou nivel de oleo baixo
          (25&nbsp;%), folga de pistao nascente (15&nbsp;%), desgaste de
          casquilhos (10&nbsp;%), e outros (10&nbsp;%). A boa noticia e
          que mais de metade destas causas se repara com menos de
          200&nbsp;EUR &mdash; desde que se apanhe cedo.
        </p>

        <h2>A cascata de degradacao</h2>
        <p>
          Um motor que bate, mesmo ligeiramente, nao permanece nesse
          estado. A folga mecanica cresce, as particulas metalicas
          contaminam o oleo, e em seis meses passa-se de uma reparacao
          de 500&nbsp;EUR a uma substituicao de motor completa. Por
          isso insistimos tanto na deteccao precoce.
        </p>

        <h2>O que fazer</h2>
        <p>
          Se ouvir alguma coisa, lance um scan sonoro. Se o sistema
          indicar knock com mais de 60&nbsp;% de confianca, confirme
          com um scan a frio e outro a quente. Se a confianca se
          mantiver alta, passe rapidamente pela oficina, mesmo sem luz
          acesa.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
