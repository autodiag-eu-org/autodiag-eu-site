import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTAssobioVentilacao() {
  const faq: FaqItem[] = [
    {
      q: "Um assobio de ventilacao e perigoso?",
      a: "Nao, nunca diretamente. Mas e muitas vezes um sinal precursor de um problema mais caro: filtro colmatado, rolamento do ventilador morto ou embraiagem do compressor de ar condicionado em fim de vida. Detetar cedo evita passar de uma reparacao de 30 euros para uma fatura de 900 euros.",
    },
    {
      q: "Como diferenciar um ruido de compressor e um de ventilador?",
      a: "O compressor do AC estala ao engatar (ao ligar o AC) e o seu ruido e constante em velocidade. O ventilador, pelo contrario, muda de frequencia ao subir a velocidade. O Scan Sonoro separa ambos gracas a modulacao temporal.",
    },
    {
      q: "Porque e que a ventilacao assobia mais no inverno?",
      a: "Duas razoes: o ar frio e mais denso e passa pior num filtro colmatado, e o sistema funciona quase continuamente para o desembaciamento. Um filtro de habitaculo de 15 euros resolve 60&nbsp;% dos casos.",
    },
    {
      q: "O scan do habitaculo deteta uma fuga de AC?",
      a: "Indiretamente. Uma fuga traduz-se por um compressor que engata com mais frequencia (ruido repetido) e por vezes por um assobio da valvula de expansao em baixa carga. O SVM nao classifica diretamente uma fuga, mas sinaliza a anomalia de assinatura.",
    },
    {
      q: "Um assobio constante pode vir de outro lado?",
      a: "Sim: uma junta de porta defeituosa que assobia a 110 km/h, uma tomada de ar do motor que sobe pelo painel, ou um retrovisor mal ajustado. A IA distingue pela zona espetral: 2-4 kHz para juntas, 6-10 kHz para a ventilacao.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Assobio de ventilacao: diagnostico dos ruidos de climatizacao"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={8}
        category="Scan Sonoro habitaculo"
      >
        <p>
          Costumam-se ignorar os ruidos de ventilacao porque nao afetam a
          seguranca. Grande erro de avaliacao: sao muitas vezes os
          primeiros sinais fracos de um sistema de climatizacao que
          comeca a fatigar-se, e a passagem de um problema de 20 euros
          (filtro) para um de 900 euros (compressor) joga-se em tres a
          seis meses. O Scan Sonoro de habitaculo capta estes sinais
          muito cedo.
        </p>

        <h2>O ventilador e o seu rolamento</h2>
        <p>
          O motor de ventilacao e um pequeno motor eletrico com um
          rolamento de esferas interno. Quando comeca a fatigar-se emite
          um assobio modulado pela velocidade de rotacao: leve na
          velocidade 1, forte na velocidade 4. E muito caracteristico. No
          plano espetral, o rolamento fatigado acrescenta harmonicos
          entre 2-5 kHz que nao existem num motor sadio. O SVM de
          habitaculo reconhece esta assinatura na sua classe
          &laquo;ventilacao&raquo; e separa-a dos outros ruidos.
        </p>

        <h2>O filtro de habitaculo colmatado</h2>
        <p>
          E a causa mais frequente e a mais benigna. Quando o filtro
          enche de polen, folhas e poeiras, o ar passa pior e cria um
          assobio a entrada. O ruido aumenta ao aumentar a ventilacao.
          Solucao: 15 euros de filtro e dez minutos de substituicao. O
          problema e que, deixando correr, o motor do ventilador forca, o
          seu rolamento aquece e a fatura passa de 15 euros para 180
          euros em poucos meses.
        </p>

        <h2>A palheta de distribuicao de ar</h2>
        <p>
          Um estalido ou um ranger repetitivo ao mudar a direcao de ar
          (pes, rosto, para-brisas) indica um motor de palheta fatigado
          ou um came de plastico partido. Em muitos veiculos, o problema
          torna-se invisivel no tablier e ja nao consegue direcionar o
          ar. A substituicao custa entre 200 e 600 euros consoante a
          acessibilidade. Detetado na fase &laquo;estalido ocasional&raquo;,
          basta muitas vezes uma simples limpeza e lubrificacao.
        </p>

        <h2>O compressor do AC</h2>
        <p>
          O compressor pode produzir varios sons. Um estalido seco ao
          engatar o botao AC indica uma embraiagem magnetica gasta. Um
          ronronar rouco continuo indica os rolamentos internos do
          compressor cansados. Um assobio agudo durante a regulacao
          indica muitas vezes uma valvula de expansao entupida. As tres
          assinaturas tem zonas espetrais bem distintas que a analise de
          138 caracteristicas isola. Orcamento: 120 euros para uma
          embraiagem, 400 a 900 euros para um compressor completo.
        </p>

        <h2>Porque detetar cedo faz a diferenca</h2>
        <p>
          Um compressor que comeca a fatigar-se forca o circuito de
          refrigerante a aquecer mais, o que degrada o oleo, que desgasta
          mais rapido as juntas, que criam uma microfuga, que faz girar
          mais o compressor, que aquece ainda mais. Em seis meses passa
          de um assobio para uma recarga de gas E uma substituicao de
          compressor E uma desinfecao por bolores no evaporador. Fatura
          total da inacao: 1100 euros. Fatura de uma intervencao ao
          primeiro sinal: 180 euros.
        </p>

        <h2>SVM 7 classes e a ventilacao</h2>
        <p>
          A classe &laquo;ventilacao&raquo; do nosso modelo de habitaculo e
          uma das mais precisas porque os seus ruidos sao muito
          caracteristicos e pouco misturados com o resto. No nosso
          conjunto de teste ultrapassa os 80&nbsp;% de precisao individual
          (enquanto a precisao global das 7 classes e de 75,05&nbsp;%). E
          uma classe onde pode confiar no diagnostico mesmo com uma
          unica medicao.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Complete a leitura com os{" "}
          <Link href="/pt/blog/7-bruits-habitacle-jamais-ignorer">
            7 ruidos a nunca ignorar
          </Link>{" "}
          e o{" "}
          <Link href="/pt/blog/controle-preventif-son-eviter-facture-cascade">
            scan preventivo antes da fatura em cascata
          </Link>
          . Se o seu assobio for acompanhado por um codigo{" "}
          <Link href="/pt/codes/p0128">P0128</Link>{" "}
          (temperatura do motor baixa), e possivelmente o termostato que
          mantem o circuito demasiado frio, forcando a ventilacao a
          trabalhar mais para compensar o desembaciamento.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
