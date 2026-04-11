import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePT7RuidosHabitaculo() {
  const faq: FaqItem[] = [
    {
      q: "Quais sao os ruidos de habitaculo mais perigosos de ignorar?",
      a: "O estalido da direcao numa rotunda, o ronco do rolamento que sobe com a velocidade, e o estalido seco de suspensao nas lombas. Estes tres tocam diretamente na estabilidade e podem virar perda de controlo se deixar correr.",
    },
    {
      q: "O meu ouvido ja se habituou ao barulho, e grave?",
      a: "Sim, e e exatamente por isso que o Scan Sonoro existe. O cerebro humano filtra automaticamente os sons repetidos diariamente, um fenomeno chamado adaptacao auditiva. A IA nao se adapta: compara o seu habitaculo ao modelo SVM 7 classes treinado a 75,05&nbsp;% de precisao sobre 138 caracteristicas.",
    },
    {
      q: "Com que frequencia devo escanear o meu habitaculo?",
      a: "Um scan por mes chega para detetar tendencias. Se um rangido comecar a subir em confianca de um mes para o outro, e o sinal para agir antes da visita a oficina.",
    },
    {
      q: "O scan faz-se a andar ou parado?",
      a: "A ANDAR, e todo o interesse. Muitos ruidos de habitaculo so aparecem em carga: rolamento que ronca a 70&nbsp;km/h, estalido de amortecedor nas juntas do asfalto, assobio de climatizacao a ventilacao maxima. A app grava varios segundos em condicoes reais.",
    },
    {
      q: "Qual a diferenca com o scan do motor?",
      a: "O scan do motor analisa o compartimento tecnico (11 classes, batida, turbo, correia). O scan do habitaculo analisa o que ouve no lugar do condutor: suspensao, rolamentos, travoes, direcao, climatizacao. Os dois completam-se.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="7 ruidos de habitaculo a nunca ignorar"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Scan sonoro habitaculo"
      >
        <p>
          Conhece aquele momento em que, passadas duas semanas de
          conducao, ja nao repara no pequeno clique na curva a esquerda
          nem no ligeiro zumbido a 90&nbsp;km/h. O seu cerebro classificou-os
          como ruidos normais. O problema e que o seu carro nao os
          considera normais. Esta a avisa-lo, mas voce ja nao ouve. Aqui
          ficam os sete ruidos de habitaculo que nunca deve deixar passar.
        </p>

        <h2>1. O rangido de travao</h2>
        <p>
          Um assobio agudo quando carrega no pedal: e o indicador de
          desgaste mecanico das pastilhas a raspar o disco. Quando chega,
          restam em geral entre 500 e 2000&nbsp;km antes do metal contra
          metal. Deixar correr destroi o disco (mais 200 a 400&nbsp;EUR) e
          por vezes a pinca. O Scan Sonoro reconhece a assinatura
          espectral nas primeiras saidas.
        </p>

        <h2>2. O estalido seco nas lombas</h2>
        <p>
          Um &laquo;tac&raquo; limpo quando passa uma lomba ou uma tampa
          de saneamento: suspensao. Mais precisamente, um silent bloc
          cansado, uma biela de barra estabilizadora morta ou um batente
          de amortecedor que bate. Na nossa base, cai na classe
          &laquo;suspensao&raquo; com assinatura nitida nas baixas
          frequencias.
        </p>

        <h2>3. O ronco que sobe com a velocidade</h2>
        <p>
          Se o ruido amplifica de 50 a 90&nbsp;km/h e muda de intensidade
          quando roda ligeiramente o volante, tem um rolamento de roda. E
          ponto de reprovacao na IPO em Portugal, e mais grave: um
          rolamento que solta em movimento pode bloquear a roda. O Scan
          Sonoro capta essa modulacao que o ouvido humano, sentado com a
          radio ligada, ja nao trata.
        </p>

        <h2>4. O estalido de direcao</h2>
        <p>
          Um clique repetitivo quando vira a fundo parado ou num parque,
          e frequentemente uma junta de transmissao. Um estalido mais
          seco em retoma, e uma rotula de direcao. E um ruido baco nas
          curvas apertadas, e a cremalheira a ganhar folga. Tres pecas,
          tres assinaturas, tres custos entre 80 e 900&nbsp;EUR.
        </p>

        <h2>5. O assobio de ventilacao</h2>
        <p>
          Nao perigoso para a estabilidade, mas revelador. Um assobio
          constante do ventilador anuncia um filtro de habitaculo
          entupido ou um rolamento de turbina a partir. Mais subtil: um
          estalido ao engatar o compressor do ar indica um acoplamento
          magnetico gasto, precursor de 800&nbsp;EUR de fatura.
        </p>

        <h2>6. O ronco de pneu assimetrico</h2>
        <p>
          Um pneu gasto em serra produz um ronco particular que varia
          quando muda de faixa. Em geral sinal de amortecedor cansado que
          faz a roda saltar em vez de a pousar no solo. E o inicio do
          efeito cascata: amortecedor morto destroi o pneu, pneu gasto
          mata a geometria, geometria arruina a cremalheira. Um
          amortecedor a 180&nbsp;EUR evita 1400&nbsp;EUR de fatura total.
        </p>

        <h2>7. O tique-taque a velocidade constante</h2>
        <p>
          Um pequeno tique-taque regular a 80&nbsp;km/h em estrada plana,
          que desaparece ao travar, e muitas vezes uma pedra encravada na
          escultura do pneu. Benigno. O mesmo tique-taque que continua ao
          travar e uma pinca que ja nao aperta direito. O Scan Sonoro faz
          a diferenca gracas as 138 caracteristicas extraidas do audio.
        </p>

        <h2>Porque uma IA ve o que voce ja nao ve</h2>
        <p>
          O cerebro humano adapta a sua filtragem aos ruidos recorrentes.
          E um mecanismo de economia cognitiva. A IA nao se adapta. Cada
          scan e comparado friamente ao modelo SVM 7 classes a 16&nbsp;kHz,
          treinado em centenas de gravacoes etiquetadas. Diz-lhe
          objetivamente se o ruido subiu de um mes para o outro.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Aprofunde cada ruido nos artigos dedicados e, se aparecer um
          codigo{" "}
          <Link href="/pt/codes/p0325">P0325</Link>{" "}
          (sensor de batida) apos um scan, a causa vem de mais fundo que
          a suspensao.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
