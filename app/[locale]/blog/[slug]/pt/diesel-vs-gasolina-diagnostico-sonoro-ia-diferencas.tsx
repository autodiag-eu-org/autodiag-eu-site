import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTDieselVsGasolinaSom() {
  const faq: FaqItem[] = [
    {
      q: "O meu diesel e barulhento ao ralenti, e normal?",
      a: "Sim, ate certo ponto. Os diesel produzem naturalmente um estalar caracteristico devido a combustao por compressao, sobretudo a frio. Esse ruido e mais marcado em injecao direta common rail moderna. Torna-se anormal quando aumenta, quando toma tonalidade metalica mais aguda, ou quando persiste mesmo apos aquecimento completo.",
    },
    {
      q: "A IA faz a diferenca entre ruido normal de diesel e uma avaria?",
      a: "Sim, e precisamente por isso incluimos varias centenas de gravacoes diesel no dataset. O modelo aprende que esse estalar base e a norma para um diesel saudavel e nao o classifica como knock. Reage apenas aos desvios em relacao a essa norma.",
    },
    {
      q: "Um motor a gasolina muito silencioso pode esconder uma avaria?",
      a: "Sim, absolutamente. Os motores a gasolina modernos sao tao silenciosos que os inicios de avarias mecanicas passam abaixo do limiar de perceicao humana. Uma chumaceira que comeca a marcar pode ser inaudivel durante meses. O Scan Sonoro e particularmente util em motores a gasolina por essa razao: compensa o silencio relativo da mecanica com uma analise fina de harmonicos subtis.",
    },
    {
      q: "As frequencias detetadas sao diferentes conforme o carburante?",
      a: "Sim. O diesel concentra a sua energia em baixas frequencias (50-400&nbsp;Hz) devido ao alto racio de compressao e ao ruido de combustao. A gasolina estende mais para medias e altas (200&nbsp;Hz - 3&nbsp;kHz). O SVM aprende estas assinaturas distintas e classifica-as corretamente em ambos os casos gracas aos 40 coeficientes MFCC que separam eficazmente os dois perfis.",
    },
    {
      q: "E os hibridos ou bicombustivel GPL?",
      a: "Os hibridos sao caso particular: scaneie sempre o motor termico em funcionamento, nao em modo eletrico. A bicombustivel GPL pode modificar ligeiramente a assinatura por combustao mais limpa e lenta, mas o modelo mantem-se fiavel na maioria dos casos. Recolhemos ativamente dados adicionais para essas motorizacoes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Diesel vs gasolina: porque o seu diagnostico sonoro e diferente"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          Um motor diesel e um motor a gasolina nao soam igual, e
          nao e simples questao de ambiente. Funcionam com
          principios de combustao fundamentalmente diferentes, o
          que produz assinaturas acusticas nos antipodas uma da
          outra. Para um diagnostico sonoro fiavel, e essencial
          que o modelo saiba com que tipo de motor lida, e que
          aplique os criterios de analise corretos. E exatamente
          o que o SVM aprendeu durante o seu treino.
        </p>

        <h2>Dois principios de combustao, duas assinaturas</h2>
        <p>
          Um motor a gasolina inflama a sua mistura com uma
          faisca, num espaco fechado onde o ar e o combustivel ja
          estao misturados. A combustao e relativamente
          progressiva, o que da um ruido liso com componente
          mecanica dominante. Um diesel, pelo contrario, injeta o
          combustivel em ar muito fortemente comprimido (14:1 a
          22:1 contra 8:1 a 11:1 para a gasolina). A
          autoinflamacao do combustivel produz um pico de pressao
          rapido, quase explosivo, que gera um ruido de combustao
          muito marcado. E o que da ao diesel o seu caracter
          &laquo;estalante&raquo; tipico.
        </p>

        <h2>As frequencias dominantes</h2>
        <p>
          Num scan de motor diesel, a energia espectral concentra-
          se entre 50 e 400&nbsp;Hz, com harmonicos marcados ate
          2&nbsp;kHz. Os MFCC refletem essa concentracao nas
          baixas frequencias. Num motor a gasolina, a energia esta
          mais espalhada, com componentes significativas de
          200&nbsp;Hz ate 3-4&nbsp;kHz. Esta diferenca de
          distribuicao espectral e tao marcada que um humano quase
          pode adivinhar o tipo de motor a ouvido. O SVM, ele,
          sabe-o com certeza a partir dos primeiros coeficientes
          MFCC.
        </p>

        <h2>O que o diesel esconde</h2>
        <p>
          O ruido de combustao diesel e tao presente que mascara
          muitas assinaturas de avarias. Um inicio de batida de
          biela num diesel e dificil de ouvir porque se funde no
          ruido normal do motor. E aqui que o Scan Sonoro mais
          traz: separa matematicamente a assinatura da combustao
          normal da da avaria, mesmo quando partilham
          parcialmente a mesma banda de frequencia. Em diesel, os
          desvios mais significativos a vigiar sao o knock acima
          do ruido de base, os injetores a ganhar folga e as
          chumaceiras de cambota.
        </p>

        <h2>O que a gasolina deixa ouvir</h2>
        <p>
          Sendo a gasolina muito mais silenciosa, os inicios de
          avarias costumam ser audiveis mais cedo para um humano
          &mdash; mas tambem mais confusos. Um leve assobio pode
          ser um turbo, uma fuga de admissao, uma correia de
          acessorios, ou mesmo uma fuga de coletor. A IA e
          particularmente util nesses motores para decidir
          rapidamente entre varios candidatos. As classes mais
          uteis em gasolina sao air leak, turbo whistle, belt
          noise e misfire.
        </p>

        <h2>As avarias exclusivas de um tipo de motor</h2>
        <p>
          Certas avarias sao exclusivas de um tipo. O estalar de
          injetor common rail e especifico do diesel e de certos
          motores a gasolina de injecao direta recentes. A
          detonacao (preignition) e quase exclusivamente gasolina.
          A falha turbo por entupimento FAP e diesel. O fenomeno
          LSPI (low-speed preignition) e especifico de certos
          motores a gasolina turbo de injecao direta. O nosso
          modelo conhece essas especificidades e adapta os
          limiares conforme o contexto declarado pelo utilizador.
        </p>

        <h2>Os codigos OBD2 que mudam de significado</h2>
        <p>
          Um mesmo codigo nao tem sempre a mesma implicacao em
          diesel e gasolina. O codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link> de falhas de
          ignicao existe em diesel mas indica antes um problema
          de injecao ou compressao, nao de velas. O codigo{" "}
          <Link href="/pt/codes/p0420">P0420</Link> de eficiencia
          de catalisador e diferente em diesel (DPF/SCR) e
          gasolina (tres vias). A camada 5 de fusao OBD2 tem em
          conta essas diferencas ao enriquecer a predicao audio.
        </p>

        <h2>Precisao comparada</h2>
        <p>
          No set de teste, a precisao media do modelo e de
          91.3&nbsp;%. Detalhada por tipo de motor, e de cerca
          de 92&nbsp;% em gasolina e 90&nbsp;% em diesel. A
          diferenca e leve e explica-se pela dificuldade
          intrinseca de detetar anomalias num motor ja barulhento.
          Compensamos essa dificuldade recolhendo progressivamente
          mais dados diesel com etiquetas finas. Para ir mais
          longe, consulte{" "}
          <Link href="/pt/blog/como-funciona-svm-tecnologia-scan-sonoro">
            a tecnologia por tras do Scan Sonoro
          </Link>{" "}
          e o nosso artigo sobre{" "}
          <Link href="/pt/blog/batida-motor-causas-diagnostico-ia">
            a batida motor
          </Link>
          . Um codigo <Link href="/pt/codes/p0128">P0128</Link>
          {" "}num diesel tambem pode enviesar o scan por um
          ventilador que roda anormalmente.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
