import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTDesgastePrematuroPneus() {
  const faq: FaqItem[] = [
    {
      q: "Porque os meus pneus se gastam mais depressa de um lado?",
      a: "Um desgaste assimetrico indica quase sempre um problema de geometria, paralelismo ou amortecedor cansado que faz a roda saltar em vez de a pousar. Tambem pode ser um rolamento de roda com folga. Em todos os casos, a causa e mecanica e esta para montante do pneu.",
    },
    {
      q: "Como o scan sonoro deteta o desgaste dos pneus?",
      a: "Um pneu gasto em serra ou em cupula produz uma assinatura acustica muito particular: um ronco ritmado modulado pela velocidade, que sobe em torno dos 200-600&nbsp;Hz com harmonicos. O SVM habitaculo apanha-o na classe &laquo;pneu_desgastado&raquo;.",
    },
    {
      q: "Um pneu gasto destroi realmente outras pecas?",
      a: "Sim, e em cascata. Um pneu com desgaste assimetrico gera vibracoes que fadigam o amortecedor, a rotula e a cremalheira. Ver tambem o artigo sobre o desgaste invisivel e o apoio do motor.",
    },
    {
      q: "Ate que profundidade de sulco posso rodar legalmente?",
      a: "1,6&nbsp;mm e o minimo legal na UE. Mas abaixo de 3&nbsp;mm, a aderencia em piso molhado cai dramaticamente. Nos recomendamos substituir aos 3&nbsp;mm em vez de esperar pelo minimo legal.",
    },
    {
      q: "A pressao certa muda realmente a longevidade?",
      a: "Enormemente. Uma subinflacao de 20&nbsp;% encurta a vida util em 30 a 40&nbsp;%. Verifique mensalmente a frio, de preferencia numa bomba aferida, e respeite o valor indicado na porta do condutor ou no tampao do combustivel.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Desgaste prematuro dos pneus: a IA ve o que voce nao nota"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Pneus e geometria"
      >
        <p>
          Os pneus sao o unico ponto de contacto do seu carro com a
          estrada. Quatro zonas do tamanho de uma mao que sustentam mais
          de uma tonelada a 120&nbsp;km/h. E no entanto sao uma das pecas
          mais negligenciadas. Nao porque os condutores sejam descuidados,
          mas porque o desgaste comeca de forma imperceptivel, numa zona
          que raramente se olha.
        </p>

        <h2>A verdadeira historia do desgaste prematuro</h2>
        <p>
          Um pneu novo tem um sulco de 8&nbsp;mm. Degrada-se em media
          1&nbsp;mm por 15&nbsp;000&nbsp;km em utilizacao normal. Isto e
          a teoria. Na pratica, um em quatro condutores ve os pneus a
          gastar-se duas vezes mais depressa que a teoria, sem perceber
          porque. A resposta esta quase sempre para montante do pneu:
          amortecedor, geometria, pressao.
        </p>

        <h2>Os quatro tipos de desgaste anormal e os seus culpados</h2>
        <p>
          Desgaste central: subinflacao. Desgaste nos dois bordos:
          sobreinflacao. Desgaste so no bordo interior: paralelismo
          negativo (toe-in). Desgaste em cupula ou serra: amortecedor
          cansado que faz a roda saltar.
        </p>

        <h2>O que o scan sonoro deteta no habitaculo</h2>
        <p>
          Um pneu com desgaste em serra emite um ronco caracteristico
          que varia com a velocidade, tipicamente entre 200 e 600&nbsp;Hz,
          com harmonicos subtis. O SVM habitaculo (7 classes, 75,05&nbsp;%
          de precisao) apanha essa assinatura mesmo que voce ja nao a
          ouca conscientemente.
        </p>

        <h2>A cascata de danos colaterais</h2>
        <p>
          Um pneu com desgaste anormal gera microvibracoes continuas.
          Essas vibracoes sao absorvidas pelas rotulas, pelas bielas de
          barra estabilizadora, pelo rolamento, pela cremalheira. Em
          20&nbsp;000&nbsp;km, o que comecou com 2&nbsp;mm de desgaste
          irregular transformou-se em 4 pecas desgastadas prematuramente.
          Fatura total: 1400&nbsp;EUR contra 180&nbsp;EUR se tivesse
          trocado o amortecedor a tempo.
        </p>

        <h2>A revisao mensal visual que toda a gente deveria fazer</h2>
        <p>
          Passe a mao na superficie do pneu, perpendicular ao sentido da
          marcha. Se sentir serra ou cupulas, ha um problema. Controle a
          profundidade do sulco com uma moeda. Verifique a pressao.
          Observe eventuais cortes ou saliencias na banda lateral. Cinco
          minutos por mes, zero custo.
        </p>

        <h2>Quando o scan sonoro vale mais que o ouvido</h2>
        <p>
          O problema com o ouvido humano nesta tarefa especifica e a
          frequencia. Entre 200 e 600&nbsp;Hz, o ouvido esta dominado
          pelo ruido do motor, do vento e da estrada. Uma subida
          progressiva de 3&nbsp;dB na assinatura do pneu passa
          totalmente despercebida. O SVM, que compara com uma referencia
          saudavel, deteta a mudanca.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Leia o artigo sobre o{" "}
          <Link href="/pt/blog/desgaste-invisivel-peca-cansada-danifica-outra">
            desgaste invisivel em cascata
          </Link>{" "}
          e o{" "}
          <Link href="/pt/blog/controlo-preventivo-som-evitar-fatura-cascata">
            controlo preventivo por som
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
