import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTCheckup5Pontos() {
  const faq: FaqItem[] = [
    {
      q: "Quanto tempo demora o check-up visual em cinco pontos?",
      a: "Cinco minutos se seguir o protocolo, dez se for a primeira vez. A app guia ponto a ponto, reconhece cada captura e confirma quando a imagem e utilizavel. E menos do que demora a atestar o deposito.",
    },
    {
      q: "Com que frequencia devo faze-lo?",
      a: "Uma vez por mes em uso diario. A cada quinze dias se circula muito ou o veiculo tem mais de doze anos. Antes de uma viagem longa e a rotina mais rentavel que pode fazer &mdash; cinco minutos para detetar um problema que lhe teria estragado a viagem.",
    },
    {
      q: "Precisa de material especial?",
      a: "Apenas um telemovel e uma lanterna para zonas escuras (a do telemovel chega). Um cartao branco A4 ajuda com as fugas mas nao e obrigatorio. Sem ferramentas, sem desmontagem.",
    },
    {
      q: "O que faz a app com as minhas fotos?",
      a: "Sao analisadas no servidor, o resultado volta como diagnostico e as imagens sao apagadas em 48&nbsp;horas salvo se autorizar a conservacao para melhorar o modelo. Fica apenas com o relatorio, nao com as fotos.",
    },
    {
      q: "O check-up deteta tudo?",
      a: "Deteta o que e visivel do exterior. Para avarias eletronicas ou problemas internos do motor e preciso combinar com scan OBD2 ou Scan Sonoro. As tres tecnologias completam-se e cobrem em conjunto mais de 90&nbsp;% das avarias comuns.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Check-up visual IA em cinco pontos: manter o seu veiculo saudavel"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Prevencao"
      >
        <p>
          A melhor avaria e aquela que apanha antes de se tornar
          avaria. Nao e um slogan, e uma verdade economica: uma
          reparacao antecipada custa em media quatro vezes menos do
          que uma de urgencia. O problema e que a maioria nao sabe
          onde olhar nem quando. O check-up visual em cinco pontos e
          a rotina que desenhamos exatamente para isso: cinco minutos,
          cinco zonas, um telemovel e a Visao IA a fazer o trabalho
          de perito.
        </p>

        <h2>Ponto 1: o chao sob o carro</h2>
        <p>
          Estacione sobre piso claro e seco, espere pelo menos duas
          horas. Agache-se a um metro e fotografe a zona sob o bloco
          motor. Depois outra sob a caixa de velocidades. A IA procura
          tres coisas: uma mancha visivel, uma diferenca em relacao a
          capturas anteriores, uma cor invulgar. Se nao aparecer nada,
          passa ao ponto 2 em dez segundos. Se aparecer algo, tem o
          detalhe completo: liquido provavel, gravidade, acao
          recomendada. Esta etapa e tratada em profundidade no artigo{" "}
          <Link href="/pt/blog/visao-ia-detetar-fugas-sob-carro-telemovel">
            detecao de fugas com Visao IA
          </Link>
          .
        </p>

        <h2>Ponto 2: os pneus</h2>
        <p>
          Uma foto por pneu, perpendicular ao piso de rolamento. O
          modelo mede a profundidade residual nos sulcos, deteta
          padroes anormais (centro, ombros, bordos, cupping), compara
          com o historico e alerta se um se desvia. Esta etapa paga-se
          rapidamente: um pneu mal calibrado detetado a tempo evita
          duzentos euros de troca prematura. Metodo detalhado no
          artigo dedicado ao{" "}
          <Link href="/pt/blog/desgaste-prematuro-pneus-ia-ve-o-que-nao-nota">
            desgaste prematuro de pneus
          </Link>
          .
        </p>

        <h2>Ponto 3: as pastilhas atraves das jantes</h2>
        <p>
          Vire o volante ate ao maximo para expor a pastilha dianteira
          direita, passe o telemovel entre os raios, ligue a lanterna,
          tire a foto. Depois igual a esquerda. A Visao IA mede a
          espessura residual, deteta riscos no disco (aspeto estriado),
          inicios de vitrificacao e marcas de sobreaquecimento (tom
          azulado que denuncia sobreaquecimento). Uma pastilha abaixo
          de 3&nbsp;mm dispara alerta vermelho: cerca de 2000&nbsp;km
          de autonomia restante. A 6&nbsp;mm e verde. Esta medida
          precisa evita surpresas numa viagem longa. Detalhes em{" "}
          <Link href="/pt/blog/desgaste-pastilhas-discos-visao-ia-deteta">
            desgaste de pastilhas e discos detetado pela Visao IA
          </Link>
          .
        </p>

        <h2>Ponto 4: sob o capot</h2>
        <p>
          Abra o capot. Quatro fotos: a tampa de oleo com a vareta
          retirada para verificar o nivel, o vaso de expansao do
          refrigerante, o reservatorio do liquido de travoes e uma
          vista geral das correias visiveis. A IA mede niveis pela
          posicao do liquido nos reservatorios translucidos, deteta
          microfissuras nascentes em correias auxiliares, ve vestigios
          de escorrencia numa manga. Se o refrigerante passou de verde
          franco a castanho ferrugem, e sinal de contaminacao a
          vigiar. Se o oleo esta opaco na vareta, mudanca atrasada.
          Quatro fotos, quatro verificacoes.
        </p>

        <h2>Ponto 5: a iluminacao exterior</h2>
        <p>
          Peca a alguem que ligue sucessivamente medios, maximos,
          piscas e luzes de travao. Para os travoes basta um pe no
          pedal se estiver sozinho. Uma foto de frente, uma de tres
          quartos, uma de tras. A IA conta as fontes luminosas
          ativas, deteta uma lampada fundida, sinaliza assimetria de
          potencia (um farol mais amarelo que o outro&nbsp;= lampada
          em fim de vida). Uma lampada fundida e motivo de reprovacao
          na IPO, e e a coisa mais facil de resolver antes do dia.
        </p>

        <h2>O relatorio sintetico</h2>
        <p>
          No fim dos cinco pontos a app gera um relatorio unico com
          codigo de cores: verde se tudo bem, laranja se um ponto
          pede vigilancia, vermelho se um ponto exige acao. O
          relatorio e arquivado no historico do seu veiculo. Mes a
          mes ve as curvas: profundidade do pneu a descer, espessura
          de pastilha a diminuir, niveis a oscilar. No dia em que
          uma curva entra em zona anormal, esta avisado antes mesmo
          de notar alguma coisa.
        </p>

        <h2>A combinacao que cobre 90&nbsp;%</h2>
        <p>
          O check-up visual nao e uma ferramenta isolada. Faz parte
          de uma triade: Visao IA para o exterior, Scan Sonoro para
          os ruidos (ver{" "}
          <Link href="/pt/blog/11-avarias-motor-detetaveis-analise-sonora">
            as 11 avarias detetaveis pelo som
          </Link>
          ), scan OBD2 para a eletronica (ver{" "}
          <Link href="/pt/codes/p0171">
            codigo P0171 e codigos de mistura pobre
          </Link>
          ). Em conjunto cobrem mais de 90&nbsp;% das avarias comuns
          dos veiculos europeus em fase precoce, onde a reparacao
          ainda e acessivel. Cinco minutos por mes no visual, tres no
          sonoro, dois no eletronico. Dez minutos mensais que poupam
          em media 800&nbsp;EUR por ano segundo os nossos dados de
          campo.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
