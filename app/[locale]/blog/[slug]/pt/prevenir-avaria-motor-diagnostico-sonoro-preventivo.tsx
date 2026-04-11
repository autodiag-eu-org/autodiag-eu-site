import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTPrevenirAvariaMotor() {
  const faq: FaqItem[] = [
    {
      q: "Quais os sinais acusticos precursores de uma avaria de motor?",
      a: "Uma batida metalica surda em frio que desaparece em quente, um assobio fino no escape ao acelerar, um tique ritmado sincronizado com a rotacao, um ronco grave no baixo da cambota, um barulho de buzio sob a tampa das valvulas. Cada um tem uma assinatura espectral distinta que o SVM reconhece.",
    },
    {
      q: "Com que antecedencia se pode detetar uma avaria?",
      a: "Entre 500 e 15&nbsp;000&nbsp;km, segundo o tipo de avaria. Uma junta de cabeca iminente da sinais uma semana antes. Uma biela desgastada avisa tres meses antes de partir. Um turbo a morrer anuncia-se seis meses antes.",
    },
    {
      q: "Qual a precisao do SVM no motor?",
      a: "91,3&nbsp;% em condicoes de laboratorio em 11 classes. No terreno, com microfones diferentes, ruido ambiente e microfonia variavel, esperamos tipicamente 85 a 89&nbsp;% em classes maioritarias. Os casos limite (confianca 30-60&nbsp;%) sao sinalizados como indicativos para evitar falsos positivos.",
    },
    {
      q: "Posso confiar no diagnostico se a confianca for apenas de 65&nbsp;%?",
      a: "Deve considera-lo como uma alerta para refazer um scan em condicoes diferentes (frio, quente, acelerado, ralenti). Se a confianca se mantiver a volta de 65&nbsp;% em varios scans, e provavel mas nao certo. Reserve um diagnostico oficina para confirmar.",
    },
    {
      q: "Quanto custa uma reparacao preventiva versus uma curativa?",
      a: "Exemplos concretos. Correia dos acessorios: 25&nbsp;EUR preventivo contra 900&nbsp;EUR curativo se rebenta e leva a distribuicao. Tensor de distribuicao: 350&nbsp;EUR preventivo contra 5000&nbsp;EUR curativo se a correia salta. Apoio de motor: 150&nbsp;EUR contra 1200&nbsp;EUR se fissura o escape.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Prevenir a avaria de motor pelo diagnostico sonoro preventivo"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={12}
        category="Prevencao motor"
      >
        <p>
          Uma avaria de motor completo e a pior fatura que um proprietario
          pode receber. Entre 3500 e 9000&nbsp;EUR segundo o modelo, muitas
          vezes mais que o valor residual do veiculo. E no entanto, em
          80&nbsp;% dos casos, o motor avisa semanas ou meses antes de se
          render. Avisa pelo som. Um conjunto de pequenas mudancas
          acusticas progressivas que o ouvido humano nao apanha, mas que
          um SVM treinado capta em segundos.
        </p>

        <h2>O mito do motor que parte sem aviso</h2>
        <p>
          Falei com dezenas de mecanicos experientes. Todos dizem a
          mesma coisa: um motor quase nunca parte sem aviso. O que e
          verdade e que o aviso nao e ouvido pelo proprietario, porque
          a adaptacao auditiva do cerebro classifica os pequenos ruidos
          como normais em poucas semanas. O sistema desliga o alarme
          antes da emergencia. Chamamos-lhe zona de silencio cognitivo.
        </p>

        <h2>As cinco assinaturas que precedem uma avaria grave</h2>
        <p>
          Primeira. O piston slap em frio. Um ligeiro martelamento nos
          primeiros 30 segundos que desaparece depois. Significa folga
          excessiva entre pistao e camisa, anuncia um consumo de oleo
          crescente, depois uma perda de compressao. Prazo antes da
          avaria: 5000 a 20&nbsp;000&nbsp;km.
        </p>
        <p>
          Segunda. A batida de biela. Um martelamento regular sincronizado
          com a rotacao, mais surdo, mais grave que o piston slap. Uma
          cambota cujos casquilhos se gastam. Prazo: 500 a 3000&nbsp;km
          antes da rotura. Emergencia absoluta.
        </p>
        <p>
          Terceira. O assobio de turbo a morrer. Um silvo fino em
          aceleracao que nao existia antes, as vezes acompanhado de uma
          perda de potencia ligeira. O eixo do turbo comeca a ter folga.
          Prazo: 5000 a 15&nbsp;000&nbsp;km.
        </p>

        <h2>Como o SVM decifra estes sinais</h2>
        <p>
          O modelo foi treinado em milhares de gravacoes etiquetadas,
          cada uma convertida em 138 caracteristicas numericas: 40
          coeficientes MFCC, 40 primeiras derivadas, 40 segundas
          derivadas, mais 18 caracteristicas espectrais (centroide,
          rolloff, zero crossing, energia). Cada classe tem o seu
          espaco no hiperplano 138-dimensional do SVM.
        </p>

        <h2>A regra dos tres scans</h2>
        <p>
          Quando uma classe mostra uma confianca entre 50 e 70&nbsp;%,
          nao toma decisao num unico scan. Faz dois outros em condicoes
          diferentes: um a frio, um a quente, um acelerado brevemente.
          Se as tres passagens dao a mesma classe, sobe a confianca
          real.
        </p>

        <h2>O que fazer com uma alerta precoce</h2>
        <p>
          Primeiro reflexo: reverifica o nivel de oleo. Uma grande parte
          dos alertas &laquo;piston slap&raquo; ligeiros vem simplesmente
          de um nivel de oleo abaixo do minimo. Segundo: verifica se um
          codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link>{" "}
          ou equivalente esta presente. Terceiro: reserva um diagnostico
          oficina dentro de 15 dias.
        </p>

        <h2>Os numeros que convencem</h2>
        <p>
          Numa analise dos primeiros utilizadores beta, os que faziam
          pelo menos um scan motor por mes evitaram em media 2.3 avarias
          classificadas como &laquo;cadeia&raquo; em 18 meses, contra
          um grupo controlo. A poupanca media estimada: 1800&nbsp;EUR
          por viatura. O Scan Sonoro nao substitui o mecanico. Avisa
          mais cedo.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
