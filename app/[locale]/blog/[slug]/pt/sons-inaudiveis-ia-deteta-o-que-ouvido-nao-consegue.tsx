import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTSonsInaudiveis() {
  const faq: FaqItem[] = [
    {
      q: "O meu telemovel consegue mesmo captar ultra-sons?",
      a: "Sim, em parte. A maioria dos smartphones modernos usa microfones MEMS com resposta linear ate 20-22&nbsp;kHz, e uma resposta reduzida mas explorable ate 24&nbsp;kHz. Alem disso, a resposta cai. Para o diagnostico motor, este intervalo e largamente suficiente: a quase totalidade das assinaturas de avaria situa-se entre 50&nbsp;Hz e 16&nbsp;kHz.",
    },
    {
      q: "O ouvido humano ouve mesmo ate 20&nbsp;kHz?",
      a: "Em teoria sim, na juventude. Na pratica, o limite cai cerca de 1&nbsp;kHz por decada a partir dos 20 anos. Aos 50, muitas pessoas ja nao ultrapassam os 13&nbsp;kHz. Pior, a sensibilidade cai muito antes do limiar: uma frequencia a 10&nbsp;kHz ja e 20&nbsp;dB menos audivel que uma a 1&nbsp;kHz.",
    },
    {
      q: "Porque falar de infra-sons para um motor?",
      a: "As grandes massas em rotacao &mdash; cambota, volante motor, embraiagem &mdash; produzem vibracoes de muito baixa frequencia, por vezes abaixo de 20&nbsp;Hz. Esses infra-sons sao impossiveis de ouvir mas um microfone capta-os. Um desequilibrio de cambota pode aparecer a 12-15&nbsp;Hz, uma zona totalmente surda para o ouvido.",
    },
    {
      q: "Um microfone externo e mais preciso que o do telemovel?",
      a: "Um microfone de medida calibrado e mais fiel, sim, mas o microfone de smartphone moderno e suficiente para o diagnostico. O que conta e que a resposta seja repetivel de uma medicao para outra. A IA nao precisa de precisao absoluta, precisa de coerencia para comparar os seus scans ao longo do tempo.",
    },
    {
      q: "Porque e que algumas avarias soam iguais para mim?",
      a: "Porque o seu ouvido suaviza as diferencas. Nao decompoe um ruido em frequencias, percebe uma textura global. Dois sons muito diferentes espectralmente podem parecer-lhe identicos. O classificador SVM, por sua vez, trabalha num espaco de 56 dimensoes onde cada frequencia tem o seu peso proprio.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Sons inaudiveis: o que a IA deteta e o seu ouvido nao percebe"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Tecnologia"
      >
        <p>
          Tente uma experiencia. Ligue o seu carro, deixe ao ralenti e
          oica com atencao. Ouve o motor, claro, mas o que e que percebe
          realmente? Um ronronar regular. Um ligeiro sopro de escape.
          Talvez um ventilador a ligar. E tudo. No entanto, um microfone
          colocado no mesmo sitio capta muito mais: cerca de 4000 vezes
          mais informacao por segundo do que aquilo que o seu cerebro
          trata conscientemente. Essa diferenca e o terreno de caca da
          IA.
        </p>

        <h2>O mito dos 20&nbsp;Hz &ndash; 20&nbsp;kHz</h2>
        <p>
          Repete-se por todo o lado que o ouvido humano ouve de
          20&nbsp;Hz a 20&nbsp;kHz. Tecnicamente correto, mas enganador.
          Esse intervalo so e valido para um jovem adulto em boa saude,
          em silencio absoluto, com sons puros e intensos. Na vida real,
          a sensibilidade auditiva segue a curva de Fletcher-Munson:
          muito sensivel a volta de 2-4&nbsp;kHz (a frequencia da voz),
          cai bruscamente nos graves (10&nbsp;dB menos a 100&nbsp;Hz) e
          nos agudos (20&nbsp;dB menos a 10&nbsp;kHz). Acrescente o
          ruido ambiente do habitaculo e o seu ouvido perde metade das
          assinaturas de avaria.
        </p>

        <h2>O que capta um microfone de smartphone</h2>
        <p>
          Um microfone MEMS moderno, o integrado no seu telemovel, tem
          resposta plana entre 50&nbsp;Hz e 18&nbsp;kHz, com extensao
          ate 22&nbsp;kHz. Alem disso, a resposta cai mas a informacao
          continua parcialmente explorable ate 24&nbsp;kHz para uma IA
          treinada. Em baixas frequencias, o microfone desce ate
          20&nbsp;Hz, la onde o ouvido ja so sente vibracoes no peito.
          Para uma IA, este intervalo alargado significa acesso a
          assinaturas invisiveis para um humano.
        </p>

        <h2>Exemplos concretos de inaudibilidade</h2>
        <p>
          Um rolamento de turbo a comecar a marcar emite um pico
          espectral a volta de 14-16&nbsp;kHz, muito fino e muito
          breve. O seu ouvido, num habitaculo com ventilador, GPS a
          falar e estrada, nunca o percebera. O SVM, por sua vez,
          identifica-o instantaneamente. Outro caso: um pistao a comecar
          a ter folga produz uma assinatura harmonica especifica a
          volta de 3&nbsp;kHz com periodicidade ligada ao regime motor.
          Inaudivel ao ralenti para o ouvido, mas muito claro nos 40
          coeficientes MFCC do pipeline.
        </p>

        <h2>Os infra-sons: o territorio oculto dos grandes defeitos</h2>
        <p>
          Abaixo de 20&nbsp;Hz deixa de perceber sons, passa a perceber
          vibracoes. Um desequilibrio de volante motor produz uma
          oscilacao a cerca de 12-15&nbsp;Hz que faz tremer a alavanca
          das mudancas mas que nao identifica como um
          &laquo;ruido&raquo;. O microfone regista essa componente de
          baixa frequencia e o classificador isola-a nas caracteristicas
          espectrais. Mesma logica para os defeitos de alinhamento de
          transmissao ou os apoios de motor fatigados.
        </p>

        <h2>Porque 56 caracteristicas?</h2>
        <p>
          O pipeline extrai 56 valores numericos de cada gravacao: 40
          coeficientes MFCC que descrevem o timbre na escala perceptual
          Mel, mais 5 caracteristicas espectrais classicas (centroide,
          largura de banda, rolloff, fluxo, contraste espectral), mais
          algumas metricas temporais como o envelope de energia ou a
          taxa de passagem por zero. Estes 56 numeros sao a fotografia
          matematica do som, suficiente para que um SVM RBF atinja
          91,3&nbsp;% de precisao em 11 classes.
        </p>

        <h2>Porque e que o seu cerebro o engana</h2>
        <p>
          O cerebro humano faz algo que a IA nao faz: ignora o que
          considera pouco importante. E pratico no dia-a-dia (senao
          ouviria cada peca de roupa a roca-lhe a pele), mas
          catastrofico para o diagnostico. O seu cerebro habitua-se ao
          ruido do seu motor em segundos, e ao fim de um mes de
          agravamento lento ja integrou o novo som como
          &laquo;normal&raquo;. A IA tem 3963 referencias de treino na
          cabeca e nao se habitua a nada.
        </p>

        <h2>A assinatura nunca mente</h2>
        <p>
          Um som pode parecer-lhe inocente mas conter uma assinatura
          esmagadora. E todo o interesse do scan sonoro: oferecer-lhe
          um ouvido que nao se cansa, nao se habitua e compara cada
          gravacao com um referencial estatistico. Para ir mais longe,
          descubra{" "}
          <Link href="/pt/blog/comment-fonctionne-svm-technologie-scan-sonore">
            como o SVM trata os dados internamente
          </Link>
          , ou a lista completa das{" "}
          <Link href="/pt/blog/11-pannes-detectables-analyse-sonore-moteur">
            11 avarias detetaveis
          </Link>
          . Se vir um codigo{" "}
          <Link href="/pt/codes/p0325">P0325</Link>{" "}
          (circuito de sensor de detonacao), um scan sonoro confirma
          frequentemente a presenca de uma verdadeira batida antes de
          o sensor a ver.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
