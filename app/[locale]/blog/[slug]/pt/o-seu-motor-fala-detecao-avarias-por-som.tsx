import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTMotorFala() {
  const faq: FaqItem[] = [
    {
      q: "Como pode uma IA ouvir o que o meu ouvido nao ouve?",
      a: "Um microfone de smartphone capta frequencias muito mais amplas do que o ouvido humano. O ouvido para por volta dos 20&nbsp;kHz e perde sensibilidade a partir dos 15&nbsp;kHz, enquanto um microfone de telemovel moderno mantem-se linear ate aos 22&nbsp;kHz e capta tambem baixas frequencias subtis. O nosso modelo SVM treinado sobre 3963 gravacoes analisa essas bandas que o seu ouvido nao processa.",
    },
    {
      q: "Qual e a taxa de acerto do Scan Sonoro da AutoDiag EU?",
      a: "O modelo SVM atinge 91.3&nbsp;% de precisao em teste, sobre 11&nbsp;classes de avarias diferentes. Esta precisao calcula-se sobre um conjunto de teste independente. Na pratica, quando a confianca mostrada ultrapassa os 80&nbsp;%, o diagnostico e fiavel.",
    },
    {
      q: "E preciso um dongle OBD2 para usar o Scan Sonoro?",
      a: "Nao, funciona sem dongle. Usa apenas o microfone do telemovel. No entanto, se tiver um dongle ELM327 ligado, o sistema funde os dados OBD2 com a analise audio para um diagnostico ainda mais preciso. E a camada 5 da nossa pipeline.",
    },
    {
      q: "Que tipos de avarias deteta?",
      a: "Onze classes de avarias: batida motor, tique, ruido de rolamento, fuga de ar, fuga de escape, assobio turbo, ruido de correia, ruido de injetor, falhas de ignicao, motor saudavel e ruido de distribuicao. Cada classe cobre varios defeitos mecanicos reais.",
    },
    {
      q: "Substitui o diagnostico OBD2 classico?",
      a: "Nao, completa-o. O OBD2 le os codigos armazenados pela centralina, o Scan Sonoro deteta os problemas mecanicos que a centralina nao ve: desgaste de rolamento, tensao de correia, folga de distribuicao, estado de chumaceiras. Juntos cobrem 95&nbsp;% das avarias comuns.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="O seu motor fala: como a IA traduz os seus ruidos em diagnostico"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Scan Sonoro"
      >
        <p>
          O seu motor e falador. A cada explosao de um cilindro, a
          cada volta de cambota, a cada passagem de correia, emite
          sons. Alguns sao normais &mdash; o rum-rum regular ao
          ralenti, o assobio suave do turbo ao subir de pressao.
          Outros sao sinais de alerta que o seu ouvido simplesmente
          nao sabe descodificar. Um batimento a 3&nbsp;kHz duas
          vezes por volta, uma ressonancia a 80&nbsp;Hz ao ralenti,
          um sopro a 12&nbsp;kHz ao acelerar: tudo isso o seu
          cerebro ouve, mas classifica como &laquo;ruido de motor
          normal&raquo;. A IA nao se deixa enganar.
        </p>

        <h2>O motor como instrumento musical</h2>
        <p>
          Um motor de quatro cilindros a 800&nbsp;rpm produz cerca
          de 26 explosoes por segundo, ou seja uma frequencia
          fundamental a volta dos 26&nbsp;Hz, com harmonicos ate
          varios quilohertz. Quando tudo vai bem, estes harmonicos
          seguem um padrao previsivel. Assim que um elemento se
          degrada &mdash; um rolamento que comeca a marcar, uma
          correia que patina, um injetor com fuga &mdash; o espectro
          muda. Aparecem novas frequencias, outras desaparecem, o
          perfil temporal modifica-se. Essa assinatura espectral e
          aquela que a nossa IA aprendeu a reconhecer.
        </p>

        <h2>3963 gravacoes, 11 classes, uma verdade</h2>
        <p>
          Para treinar o modelo recolhemos 3963 ficheiros audio
          etiquetados: air leak, knock, bearing noise, belt noise,
          tick, injector noise, exhaust leak, normal engine e varias
          outras categorias. Cada gravacao foi ouvida por um humano
          para confirmar a etiqueta, depois transformada em 56
          caracteristicas numericas: 40 coeficientes MFCC
          (Mel-Frequency Cepstral Coefficients) que descrevem o
          timbre, mais 5 caracteristicas espectrais adicionais, mais
          algumas metricas temporais. O classificador SVM com kernel
          RBF aprende a separar estas 11 classes nesse espaco de 56
          dimensoes.
        </p>

        <h2>Porque um SVM e nao uma rede neuronal?</h2>
        <p>
          A pergunta volta muitas vezes: porque usar uma maquina de
          vetores suporte em vez de uma rede neuronal profunda como
          toda a gente? A resposta tem tres pontos. Primeiro, o SVM
          funciona muito bem sobre datasets de tamanho medio
          (alguns milhares de exemplos) onde um CNN precisa de
          dezenas de milhares. Segundo, e muito mais rapido de
          treinar e inferir: uma predicao demora 30&nbsp;milissegundos
          num servidor padrao. Por ultimo, as suas decisoes sao
          interpretaveis: pode-se remontar as frequencias que
          dispararam a classificacao.
        </p>

        <h2>A pipeline em 7 camadas</h2>
        <p>
          Uma gravacao nao passa diretamente para o classificador.
          Primeiro atravessa seis etapas de pre-processamento e
          fusao. Camada 1: verificacao de qualidade (volume
          suficiente, sem saturacao, duracao correta). Camada 2:
          reducao de ruido com filtro de Wiener para retirar o
          ruido de fundo. Camada 3: extracao das 56 caracteristicas.
          Camada 4: classificacao pelo SVM. Camada 5: fusao com
          dados OBD2 se houver dongle ligado &mdash; um codigo
          P0300 de falhas de ignicao reforca uma predicao
          &laquo;misfire&raquo;. Camada 6: interpretacao pela Claude
          API que traduz o resultado bruto em conselho claro.
          Camada 7: visualizacao com codigo de cores.
        </p>

        <h2>O que o motor diz realmente</h2>
        <p>
          Quando lanca um scan, o sistema nao faz apenas um
          snapshot. Grava varios segundos de motor, a diferentes
          regimes se possivel, e extrai o padrao dominante. Um
          batimento que ocorre duas vezes por volta a 2000&nbsp;rpm
          mas desaparece a 3500&nbsp;rpm nao e um defeito de
          rolamento &mdash; e provavelmente uma folga de
          distribuicao. Um assobio continuo que sobe com o regime e
          um turbo. Um sopro ritmado no tempo de escape e uma fuga
          de coletor. O SVM aprende estes padroes temporais gracas
          aos MFCC.
        </p>

        <h2>Ouvir para prevenir</h2>
        <p>
          O interesse principal do Scan Sonoro nao e constatar uma
          avaria &mdash; uma luz ou um ruido evidente chegam. E
          detetar o desgaste ANTES de se tornar rotura. Um rolamento
          que comeca a marcar ve-se desde 5&nbsp;% de desgaste
          anormal no espectro, muito antes de ouvir algo. Scaneando
          o seu motor uma vez por mes, repete a medida e ve a
          evolucao. Se a confianca &laquo;bearing noise&raquo; passa
          de 15 para 60&nbsp;% em tres meses, esta claro: algo
          piora. Intervem a 150&nbsp;EUR de reparacao em vez de
          2000&nbsp;EUR de rotura motor.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Se quer entender em detalhe que avarias deteta o sistema,
          leia o nosso artigo:{" "}
          <Link href="/pt/blog/11-avarias-motor-detetaveis-analise-sonora">
            11 avarias detetaveis por analise sonora
          </Link>
          . Para a parte cientifica &mdash; frequencias, filtros,
          matematica &mdash; va a{" "}
          <Link href="/pt/blog/sons-inaudiveis-ia-deteta-o-que-ouvido-nao-consegue">
            os sons que o ouvido humano perde
          </Link>
          . E se ve um codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link>, o Scan Sonoro
          dir-lhe-a qual cilindro fatiga realmente &mdash; informacao
          que o OBD2 sozinho nem sempre da.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
