import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTRuidoSuspensao() {
  const faq: FaqItem[] = [
    {
      q: "Como saber se e o amortecedor ou o silentbloc?",
      a: "O amortecedor da um ruido surdo, grave, com ressalto residual apos o obstaculo. O silentbloc da um estalido seco e curto, sem ressalto. O Scan Sonoro separa estas duas assinaturas gracas a analise da envolvente temporal sobre 138 caracteristicas.",
    },
    {
      q: "O teste manual de ressalto e fiavel?",
      a: "Parcialmente. Deteta os amortecedores totalmente mortos mas falha nos 50-70&nbsp;% de desgaste, que sao no entanto a causa principal de perda de aderencia em piso molhado. A analise sonora a rodar e nitidamente mais sensivel.",
    },
    {
      q: "Amortecedores gastos podem provocar desgaste dos pneus?",
      a: "Sim, e e ate a primeira etapa do efeito em cascata. Um amortecedor fatigado deixa a roda saltar, o pneu desgasta-se em dentes de serra (cupping), e a aderencia cai. O mesmo pneu gasto acaba por desalinhar a geometria, que arruina a cremalheira.",
    },
    {
      q: "Quando e que os amortecedores devem ser trocados aos pares?",
      a: "Sempre por eixo. Trocar so um lado cria um desequilibrio de amortecimento que inclina o veiculo ao travar. O orcamento real de um amortecedor passa assim de 180 euros unitario a 350-450 euros por eixo.",
    },
    {
      q: "Quantos quilometros dura um amortecedor moderno?",
      a: "Entre 80&nbsp;000 e 150&nbsp;000 km consoante o tipo de estrada e o peso do veiculo. Uma carrinha familiar carregada gasta os amortecedores traseiros muito mais rapido que uma berlina solo. Um scan anual basta para detetar o inicio da fadiga.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Ruido de suspensao: como a IA identifica o amortecedor fatigado"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          O amortecedor e um dos elementos mais traicoeiros do seu
          carro. Desgasta-se tao progressivamente que nao se sente
          nada. Um dia conduz um carro que se cola a estrada como um
          carril, um ano depois uma peca que salta como um colchao
          &mdash; e juraria que nada mudou. O Scan Sonoro, por sua
          vez, ve a inflexao logo no primeiro scan comparado ao
          anterior.
        </p>

        <h2>Porque o ouvido nao basta</h2>
        <p>
          Um amortecedor sao esmaga uma lomba num so movimento. Um
          amortecedor a 60&nbsp;% de desgaste deixa passar um
          ressalto residual de alguns milimetros de amplitude &mdash;
          impercetivel ao ouvido, mas que se traduz numa perda de
          apoio mensuravel em piso molhado. A analise espetral do
          audio de habitaculo captura este ressalto residual como uma
          assinatura caracteristica a volta de 8-15 Hz combinada com
          um transitorio a 200-400 Hz (o batente que salta no seu
          alojamento).
        </p>

        <h2>As tres familias de ruido de suspensao</h2>
        <p>
          Primeira familia: o estalido seco em lomba. Silentbloc
          fatigado, biela de barra estabilizadora com folga, ou prato
          de amortecedor empenado. Assinatura: impulso curto, banda
          larga, sem cauda.
        </p>
        <p>
          Segunda familia: o &laquo;ploc&raquo; de ressalto. Amortecedor
          que perde oleo, ou valvula interna gasta. Assinatura:
          impulso seguido de uma ressonancia de baixa frequencia que
          dura 150 a 300 milissegundos. E exatamente o que o SVM
          deteta melhor.
        </p>
        <p>
          Terceira familia: o ranger em curva. Prato superior de
          amortecedor com rolamento preso, ou mola que roca a sua
          espira superior contra o prato. Assinatura: ruido continuo
          modulado pelo angulo de viragem.
        </p>

        <h2>Protocolo de scan a rodar</h2>
        <p>
          Para um diagnostico fiavel, procure uma estrada com algumas
          juntas de pavimento ou lombas, rode entre 30 e 60 km/h e
          grave trinta segundos. A IA analisa cada janela audio
          independentemente, o que lhe permite localizar os ruidos em
          relacao aos impactos. Um estalido que chega sistematicamente
          apos uma lomba e suspeito.
        </p>

        <h2>O efeito em cascata pneu-geometria-cremalheira</h2>
        <p>
          Esta e a sequencia que vejo mais frequentemente na oficina.
          Um amortecedor fatigado ha dezoito meses. O condutor nao se
          apercebe. Os pneus comecam a marcar um cupping irregular.
          Ao fim de mais um ano, um dos pneus da frente tem de ser
          mudado com 20&nbsp;000 km menos do que o previsto &mdash;
          primeiro sobrecusto: 180 euros. A geometria esta entao
          falseada por causa do angulo de cambagem dinamico
          modificado pelo ressalto. A cremalheira ganha folga em seis
          meses: 800 euros suplementares. Total final: 1&nbsp;380
          euros em vez dos 350 euros de amortecedores de origem. O
          Scan Sonoro corta esta cascata pela raiz ao detetar o
          inicio do desgaste.
        </p>

        <h2>SVM 7 classes e 75,05&nbsp;%: o que significa concretamente</h2>
        <p>
          O nosso modelo de habitaculo separa sete categorias: travao,
          suspensao, rolamento, direcao, climatizacao, pneu e silencio
          de referencia. Num conjunto de teste independente, atinge
          75,05&nbsp;% de precisao. E menos do que os 91,3&nbsp;% do
          scan de motor, e nao e por acaso: os ruidos do habitaculo
          sao mais variados, mais breves, mais misturados com o
          transito exterior. Mas 75&nbsp;% continua largamente acima
          do ouvido humano em condicoes reais, sobretudo quando o
          condutor se habituou aos sons do seu proprio veiculo.
        </p>

        <h2>Quando o scan realmente salva</h2>
        <p>
          O caso mais frequente: um condutor que manda fazer o scan
          do carro duas semanas antes da IPO e descobre uma pontuacao
          &laquo;suspensao&raquo; a 62&nbsp;%. Manda verificar, o
          amortecedor da frente esquerdo tem fuga. Reparacao 350
          euros, IPO passada sem problemas. Se tivesse chegado no
          dia da IPO, reprovacao imediata, mais a reinspecao a pagar,
          mais o risco de o pneu tambem ter de ser trocado.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Continue a leitura com o artigo sobre o{" "}
          <Link href="/pt/blog/usure-invisible-composant-fatigue-endommage-autre">
            desgaste invisivel e o efeito em cascata
          </Link>
          {" "}e o{" "}
          <Link href="/pt/blog/bruit-roulement-roue-detecter-usure-avant-ct">
            rolamento de roda antes da IPO
          </Link>
          . Para os codigos OBD2 que podem surgir em paralelo com
          uma suspensao morta, veja a nossa pagina{" "}
          <Link href="/pt/codes/p0325">P0325</Link>
          {" "}: um sensor de detonacao pode ser perturbado por
          vibracoes de suspensao demasiado fortes.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
