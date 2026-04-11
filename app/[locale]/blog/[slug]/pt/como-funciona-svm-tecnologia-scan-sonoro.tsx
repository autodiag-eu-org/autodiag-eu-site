import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTComoFuncionaSVM() {
  const faq: FaqItem[] = [
    {
      q: "O que e um SVM em termos simples?",
      a: "Um SVM (Support Vector Machine, maquina de vetores suporte) e um algoritmo de classificacao que procura tracar fronteiras otimas entre varias categorias num espaco de grande dimensao. Imagine 3963 pontos dispersos num espaco de 56 dimensoes: o SVM encontra as superficies que melhor separam os 11 grupos de avarias. Um som novo e classificado olhando para que lado das superficies cai.",
    },
    {
      q: "Porque 56 caracteristicas exatamente?",
      a: "Porque e o numero que da o melhor compromisso precisao/velocidade para a nossa pipeline. 40 coeficientes MFCC cobrem o timbre percetual, 5 caracteristicas espectrais adicionam info geral (centroide, largura de banda, rolloff, fluxo, contraste) e algumas metricas temporais completam o conjunto. Para la disso, a precisao estagna mas o tempo de calculo aumenta.",
    },
    {
      q: "Porque kernel RBF e nao linear?",
      a: "Porque as classes de avarias nao sao separaveis por retas no espaco de 56 dimensoes. O kernel RBF (Radial Basis Function) projeta implicitamente os dados num espaco de dimensao infinita onde as fronteiras se tornam lineares. E matematicamente elegante e concretamente eficaz: a precisao passa de 78&nbsp;% com kernel linear para 91.3&nbsp;% com RBF.",
    },
    {
      q: "Qual o tamanho do modelo final?",
      a: "Cerca de 12&nbsp;MB para o ficheiro .pkl serializado. E pequeno comparado com uma rede neuronal profunda (frequentemente varias centenas de MB). Essa leveza e uma vantagem concreta: o modelo carrega-se em memoria em menos de um segundo e uma predicao demora cerca de 30&nbsp;ms num servidor padrao.",
    },
    {
      q: "Como se gere o equilibrio entre as 11 classes?",
      a: "O dataset nao esta perfeitamente equilibrado: certas classes tem mais exemplos que outras (air leak com 1005, normal engine com 269). Usamos uma ponderacao por classe durante o treino para compensar esse desequilibrio, o que evita que o modelo favoreca as classes maioritarias em detrimento das minoritarias.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Como funciona o nosso SVM: a tecnologia por tras do Scan Sonoro"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={11}
        category="Tecnologia"
      >
        <p>
          Se tem curiosidade em saber o que realmente acontece
          quando carrega no botao &laquo;iniciar scan&raquo; da app
          AutoDiag EU, o que se segue e para si. Sem generalidades
          de marketing: um verdadeiro tour pela pipeline, camada a
          camada, com as escolhas tecnicas que fizemos e as razoes
          por tras. O sistema corre num backend Python com
          scikit-learn e processa cada gravacao em sete etapas
          distintas, sete camadas que transformam um ficheiro audio
          bruto num diagnostico claro e numa pontuacao de confianca.
        </p>

        <h2>Camada 1: verificacao de qualidade</h2>
        <p>
          Antes de qualquer analise, verifica-se se a gravacao e
          explorvel. Volume muito baixo? Recusa-se. Saturacao
          detetada? Recusa-se. Duracao insuficiente (menos de 3
          segundos)? Recusa-se. Ruido de fundo a esmagar o sinal
          motor? Avisa-se o utilizador. Esta porta de qualidade,
          implementada com librosa, evita dar resultados fantasiosos
          a partir de gravacoes ruins. E um investimento que
          aumenta a fiabilidade efetiva do sistema em condicoes
          reais.
        </p>

        <h2>Camada 2: reducao de ruido</h2>
        <p>
          Mesmo com uma boa gravacao, ha sempre ruido parasita:
          vento, trafego, aquecimento do habitaculo, vozes
          envolventes. A camada 2 aplica um filtro de Wiener via a
          biblioteca noisereduce para estimar o ruido de fundo e
          retira-lo sem danificar o sinal util. O filtro funciona
          sobre uma estimacao espectral: identifica as bandas de
          frequencia dominadas pelo ruido estacionario e reduz ai
          a amplitude, preservando os transitorios que sao a
          informacao interessante.
        </p>

        <h2>Camada 3: extracao das 56 caracteristicas</h2>
        <p>
          E aqui que o audio se torna matematica. O sinal e
          dividido em janelas de 25&nbsp;ms que se sobrepoem, cada
          janela passa por uma transformada de Fourier, depois por
          uma projecao sobre a escala Mel que corresponde a
          perceicao humana do timbre, e depois por uma
          transformada cosseno discreta que produz os 40
          coeficientes MFCC. Adicionam-se 5 caracteristicas
          espectrais (centroide espectral, largura de banda,
          rolloff, fluxo espectral, contraste por banda) e algumas
          metricas temporais como a envolvente de energia e a taxa
          de passagem por zero. Total: 56 valores numericos por
          gravacao.
        </p>

        <h2>Camada 4: classificacao pelo SVM</h2>
        <p>
          O vetor de 56 valores e passado ao classificador SVM. O
          modelo foi treinado sobre 3963 gravacoes etiquetadas, com
          uma reparticao aproximada de 80&nbsp;% treino e
          20&nbsp;% teste. O kernel RBF projeta os dados num
          espaco de dimensao infinita onde as fronteiras entre
          classes se tornam lineares. Os hiperparametros C
          (regularizacao) e gamma (largura do kernel) foram
          otimizados por grid search com validacao cruzada em 5
          folds. Resultado final: 91.3&nbsp;% de precisao sobre o
          set de teste independente.
        </p>

        <h2>Camada 5: fusao OBD2</h2>
        <p>
          Se houver um dongle OBD2 ligado durante o scan, o
          sistema recupera os codigos de avaria ativos e os dados
          em tempo real (regime, carga, temperatura, tensoes de
          sondas). Essas informacoes sao cruzadas com a predicao
          audio atraves de um sistema de regras especializadas:
          um codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link> reforca uma
          predicao misfire, um{" "}
          <Link href="/pt/codes/p0420">P0420</Link> reforca
          exhaust leak, um{" "}
          <Link href="/pt/codes/p0325">P0325</Link> reforca knock,
          etc. A fusao pode aumentar a confianca final em varios
          pontos quando as duas fontes concordam, ou baixa-la
          quando divergem.
        </p>

        <h2>Camada 6: interpretacao pela Claude API</h2>
        <p>
          A saida bruta do SVM e util para um mecanico mas
          dificil de ler para um condutor. A camada 6 usa a
          Claude API para transformar a predicao numa mensagem
          clara em portugues: explicacao da avaria, causas
          provaveis, gravidade, custo aproximado, gestos imediatos
          a fazer. Importante: a Claude nunca recebe o audio
          bruto. Recebe apenas a classe predita, a confianca e o
          contexto OBD2. A percentagem de confianca vem sempre do
          SVM, nunca da Claude. E uma regra absoluta da pipeline.
        </p>

        <h2>Camada 7: visualizacao e limiares</h2>
        <p>
          A ultima camada, no frontend, aplica os limiares de
          confianca para determinar a cor e o tom da mensagem.
          Pelo menos 80&nbsp;% de confianca: verde, diagnostico
          fiavel, acao recomendada. Entre 60 e 79&nbsp;%: laranja,
          a vigiar, segundo scan aconselhado. Entre 30 e
          59&nbsp;%: amarelo claro, resultado indicativo. Abaixo
          de 30&nbsp;%: cinzento, nao conclusivo, pode repetir em
          melhores condicoes. Esses limiares foram calibrados
          sobre dados reais para equilibrar sensibilidade e
          especificidade.
        </p>

        <h2>Porque esta escolha de arquitetura</h2>
        <p>
          Podiamos ter ido por um CNN deep learning, na moda ha
          dez anos. Nao o fizemos por tres razoes: o tamanho do
          dataset (3963 e confortavel para SVM, justo para CNN),
          a restricao de latencia (30&nbsp;ms para SVM, varias
          centenas de ms para um CNN classico) e a
          interpretabilidade (com SVM pode-se remontar as
          frequencias influentes, com rede profunda e mais
          dificil). O SVM e uma escolha pragmatica, nao uma
          limitacao. Quando o nosso dataset atingir 15&nbsp;000
          amostras, provavelmente passaremos a um modelo hibrido
          CNN + SVM, mas a arquitetura em 7 camadas manter-se-a.
          Para ir mais longe, leia{" "}
          <Link href="/pt/blog/sons-inaudiveis-ia-deteta-o-que-ouvido-nao-consegue">
            os sons inaudiveis que a IA capta
          </Link>{" "}
          e a{" "}
          <Link href="/pt/blog/11-avarias-motor-detetaveis-analise-sonora">
            lista das 11 classes detetaveis
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
