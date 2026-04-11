import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTFugaCorRevela() {
  const faq: FaqItem[] = [
    {
      q: "Porque os liquidos do carro tem cores diferentes?",
      a: "Cada liquido tem funcao especifica e quimica adaptada, o que da coloracoes naturais ou adicionadas. O oleo motor fica castanho por oxidacao, o refrigerante e colorido de proposito para ser identificavel e detetar fugas, o liquido de travoes e quase transparente para se manter quimicamente neutro. Sao indices valiosos para o diagnostico.",
    },
    {
      q: "Uma fuga vermelho cereja e sempre de caixa automatica?",
      a: "Quase sempre. A caixa automatica usa ATF (Automatic Transmission Fluid) vermelho cereja quando novo. A direcao assistida por vezes partilha essa cor mas mais ambar. A posicao sob o veiculo decide: caixa&nbsp;= centro, direcao&nbsp;= perto da cremalheira.",
    },
    {
      q: "O meu refrigerante esta a ficar castanho, e grave?",
      a: "Sim. Um refrigerante que puxa para castanho esta contaminado por depositos de ferrugem interna (radiador, bloco motor) ou misturado com oleo se uma junta de cabeca comeca a ceder. Em qualquer caso e um alerta: purgar rapidamente e inspecao profunda.",
    },
    {
      q: "O liquido de travoes transparente pode estar igualmente mau?",
      a: "Sim, totalmente. O liquido de travoes novo e transparente a amarelo palha, mas absorve humidade com o tempo e escurece progressivamente. Um liquido castanho escuro perdeu as suas propriedades e deve ser trocado, mesmo sem fuga visivel.",
    },
    {
      q: "O limpa-vidros azul pode confundir-se com outro liquido?",
      a: "Raramente. O azul franco do limpa-vidros e muito distinto. Alguns anticongelantes tambem sao azuis mas mais escuros e densos. Em caso de duvida, a posicao da mancha decide: uma fuga de limpa-vidros esta perto do reservatorio dianteiro ou sob a mala (modelos com bicos traseiros).",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Fuga de oleo, liquido de travoes ou refrigerante: a cor revela a avaria"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico visual"
      >
        <p>
          Cada liquido no seu carro tem a sua historia quimica. Essas
          historias leem-se na cor, na textura e no cheiro. Um bom
          mecanico identifica uma fuga em tres segundos apenas a
          olhar para a mancha. A Visao IA da AutoDiag&nbsp;EU aprendeu
          a mesma linguagem, estudando milhares de imagens anotadas.
          Neste artigo mostro-lhe o catalogo completo, porque cada
          liquido tem essa cor e o que uma fuga lhe diz realmente
          sobre a saude do seu veiculo.
        </p>

        <h2>O oleo motor: a memoria do tempo</h2>
        <p>
          Acabado de sair do bidao, o oleo motor e dourado, quase
          ambar, com transparencia marcada. Apos mil quilometros no
          motor comeca a escurecer: residuos de combustao, particulas
          de carbono, vestigios de desgaste metalico dao-lhe pouco a
          pouco esse tom castanho-preto caracteristico. Uma fuga de
          oleo e quase sempre castanha no chao, com viscosidade
          media: espalha-se devagar e deixa um halo oleoso. Posicao
          quase sempre sob o bloco motor ou carter. Custo tipico:
          junta do carter 80 a 180&nbsp;EUR, retentor de cambota lado
          distribuicao 250 a 450&nbsp;EUR, junta da tampa de
          balanceiros 120 a 220&nbsp;EUR.
        </p>

        <h2>O refrigerante: o camaleao colorido</h2>
        <p>
          As formulacoes variam conforme construtor e idade. Os
          antigos IAT sao verdes fluorescentes, ainda usados em
          antigos Peugeot ou Citroen. Os OAT sao laranja ou rosa:
          G12+ rosa da Volkswagen, Dex-Cool laranja da General Motors.
          Os HOAT misturam ambos: amarelo ou turquesa. Cada cor
          sinaliza uma quimica diferente, e misturar duas familias
          causa gelificacao que destroi o circuito. A Visao IA
          reconhece a cor, identifica o grupo e avisa se houver
          incoerencia com o seu modelo. A fluidez e baixa (quase
          como agua), o cheiro ligeiramente adocicado. Posicao tipica:
          a frente do motor ou sob o radiador.
        </p>

        <h2>O liquido de travoes: o transparente mortal</h2>
        <p>
          Uma fuga de liquido de travoes e a unica que obriga a
          paragem imediata do veiculo. Novo, e transparente a amarelo
          palha, muito fluido, cheiro algo quimico. Usado, escurece
          para castanho porque absorve humidade (e higroscopico, e a
          sua funcao). Uma fuga esta perto de uma roda (bomba ou
          pinca), sob o cilindro mestre no compartimento do motor,
          ou ao longo de uma canalizacao. O risco: perda de pressao
          do circuito e perda progressiva de travagem. Custo: de
          40&nbsp;EUR por uma simples purga a 300&nbsp;EUR por uma
          pinca inteira. A Visao IA deteta o tom quase transparente e
          classifica-o como alerta critico automaticamente. Se
          identificar liquido de travoes, a recomendacao e sempre:
          nao circular, reboque.
        </p>

        <h2>A caixa automatica: o vermelho que vira castanho</h2>
        <p>
          O ATF e vermelho cereja quando novo, especialmente para ser
          reconhecivel. Contaminado, usado ou sobreaquecido, escurece
          para um castanho avermelhado pouco apetitoso. O cheiro
          torna-se queimado &mdash; sinal claro de que o seu
          conversor de binario sobreaqueceu. Uma fuga de ATF e rara
          mas severa: caixa que patina, mudancas lentas, solavancos.
          Custo: junta de caixa 300 a 600&nbsp;EUR, troca de oleo
          150 a 250&nbsp;EUR, caixa completa 2500 a 4500&nbsp;EUR.
          Ver tambem como o{" "}
          <Link href="/pt/blog/autodiag-vs-oficina-poupancas">
            diagnostico autonomo se compara a oficina
          </Link>
          .
        </p>

        <h2>A direcao assistida: o vermelho ambar discreto</h2>
        <p>
          Alguns veiculos (BMW, Mercedes, Renault antigos) usam
          direcao assistida hidraulica com fluido vermelho ambar.
          Mais claro que o ATF, mais denso que o liquido de travoes.
          Uma fuga esta sob a cremalheira ou perto da bomba. Nota a
          fuga no volante: direcao pesada, chiadeira ao virar ate ao
          maximo. Custo: 120 a 280&nbsp;EUR por uma junta, 400 a
          900&nbsp;EUR por uma cremalheira. A Visao IA distingue-o do
          ATF pela posicao: cremalheira para direcao, centro para
          caixa.
        </p>

        <h2>Os outros: limpa-vidros, GPL, AdBlue</h2>
        <p>
          O limpa-vidros e azul claro ou rosa conforme a estacao,
          muito fluido, cheiro citrico ou alcoolico. Inofensivo
          exceto para o bolso se o reservatorio bater em algo. O
          AdBlue, em diesel Euro 6, e transparente mas deixa
          vestigios brancos ao secar (e ureia). Uma fuga de AdBlue
          provoca o{" "}
          <Link href="/pt/codes/p0300">
            codigo P0300 e por vezes um P0420
          </Link>{" "}
          quando o catalisador SCR perde eficiencia. O GPL foge em
          fase gasosa e nao e visivel no chao &mdash; a Visao IA
          nao o deteta, e preciso um detetor olfativo ou um controlo
          em oficina.
        </p>

        <h2>O protocolo da duvida</h2>
        <p>
          Quando hesita entre dois liquidos, a Visao IA usa uma
          arvore de decisao. Primeira pergunta: cor dominante?
          Castanho-preto&nbsp;= oleo quase certo.
          Vermelho&nbsp;= ATF ou direcao.
          Verde/laranja/rosa&nbsp;= refrigerante quase certo.
          Transparente&nbsp;= travoes ou limpa-vidros. Segunda
          pergunta: onde esta a mancha sob o veiculo?
          Centro&nbsp;= caixa ou direcao. Bloco&nbsp;= motor.
          Roda&nbsp;= travoes. Frente em baixo&nbsp;= radiador.
          Terceira pergunta: ha quanto tempo esta parado? Esse dado
          calcula o caudal. As tres respostas convergem num
          diagnostico com indice de confianca. Acima de 85&nbsp;% a
          IA afirma. Entre 60 e 85&nbsp;% propoe duas hipoteses e
          pede para precisar (cheiro, textura). Abaixo de 60&nbsp;%
          orienta-o diretamente para a oficina. Para completar, leia
          tambem{" "}
          <Link href="/pt/blog/visao-ia-detetar-fugas-sob-carro-telemovel">
            detecao de fugas sob o carro
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
