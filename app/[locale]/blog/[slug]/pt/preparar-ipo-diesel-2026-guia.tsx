import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTPrepararIPODiesel2026() {
  const faq: FaqItem[] = [
    {
      q: "O que muda na IPO diesel em 2026?",
      a: "Os limites de opacimetro continuam exigentes: 1,5&nbsp;m-1 para diesel pos-2008 e 2,5&nbsp;m-1 para os mais antigos. O controlo visual do FAP e obrigatorio: FAP ausente ou cortado significa reinspecao automatica. O AdBlue e verificado nos Euro&nbsp;6, qualquer falha SCR e penalizada. Em 2026 os controlos reforcados sobre os sistemas de descontaminacao ganham ainda mais importancia.",
    },
    {
      q: "Como evitar uma reinspecao por opacidade?",
      a: "Faca varias regeneracoes forcadas do FAP duas semanas antes: conduza 30 minutos na autoestrada a 3000&nbsp;rpm minimo, duas vezes. Use um aditivo de catalisador se faz sobretudo cidade. Verifique se a valvula EGR nao esta bloqueada. Controle as fugas de admissao que falseiam a mistura.",
    },
    {
      q: "Quanto custa reparar um FAP entupido?",
      a: "Uma limpeza profissional em estacao especializada custa entre 200 e 400&nbsp;EUR. Uma regeneracao forcada em oficina e faturada 80 a 150&nbsp;EUR. Uma substituicao completa de FAP varia entre 1000 e 2500&nbsp;EUR conforme o veiculo. A prevencao custa muito menos que a intervencao curativa.",
    },
    {
      q: "O que fazer se o carro e recusado por AdBlue?",
      a: "Nunca conduzir muito tempo em modo degradado: a centralina acaba por bloquear o arranque. Verifique primeiro o sensor NOx (troca 200 a 450&nbsp;EUR), depois o injetor AdBlue (180 a 350&nbsp;EUR). Um codigo P229F ou P2BAD no OBD2 aponta diretamente para a avaria. Depois faca um ciclo completo de descontaminacao antes de voltar a passar a IPO.",
    },
    {
      q: "Os diesel antigos ainda passam a IPO em 2026?",
      a: "Sim, mas com menor tolerancia. Os diesel Euro&nbsp;3 e Euro&nbsp;4 sao alvo de um controlo visual FAP mais estrito. Os Euro&nbsp;2 e anteriores sao geridos com limites especificos. Nas ZER o acesso e restrito, mas a IPO em si continua acessivel desde que o veiculo respeite os limites de opacidade e ruido.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Preparar a IPO diesel 2026: guia completo"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Guia pratico"
      >
        <p>
          A IPO diesel mete medo. Os limites de opacidade sao mais estritos
          que a gasolina, os sistemas de descontaminacao sao fragies e uma
          reinspecao FAP pode custar ate 2500&nbsp;EUR. Contudo, com uma boa
          preparacao e algumas verificacoes, a grande maioria das rejeicoes
          pode ser evitada. Este guia explica exatamente o que fazer, quando
          e quanto custa se tiver de passar a reparacao.
        </p>

        <h2>Os 5 pontos que fazem chumbar uma IPO diesel</h2>
        <p>
          Estatisticamente, 60&nbsp;% das reinspecoes diesel dizem respeito a
          um destes cinco pontos: opacimetro demasiado alto, FAP cortado ou
          ausente, falha AdBlue (SCR), fuga de escape ou sensor de pressao
          diferencial entupido. Os quatro primeiros sao penalizadores, o
          ultimo deteta-se antes da IPO com um simples scan OBD2.
        </p>

        <h2>Opacimetria: perceber o teste</h2>
        <p>
          O tecnico monta um opacimetro na saida de escape e efetua tres
          aceleracoes livres com motor quente. O aparelho mede a absorcao
          luminosa dos fumos. Limites 2026: 1,5&nbsp;m-1 para diesel
          Euro&nbsp;5 e Euro&nbsp;6 (pos-2011), 2,5&nbsp;m-1 para diesel
          antigos. Um FAP em bom estado da tipicamente valores entre 0,2 e
          0,8&nbsp;m-1. Acima de 1,2 e um aviso serio.
        </p>

        <h2>Preparar o FAP antes da IPO</h2>
        <p>
          O FAP regenera-se em fase ativa (passiva acima de 60&nbsp;km/h) e
          forcada (pos-injecao, temperatura 600 graus). Se conduz
          sobretudo em cidade, o FAP nao regenera completamente e acaba por
          entupir. Duas semanas antes da IPO, va a autoestrada para duas
          viagens de 30&nbsp;minutos minimo acima de 2500&nbsp;rpm. Isso
          forca varios ciclos de regeneracao e limpa as fuligens. Para mais
          detalhes, veja{" "}
          <Link href="/pt/blog/preparar-inspecao-2026">
            o guia geral IPO 2026
          </Link>
          .
        </p>

        <h2>AdBlue e SCR: a armadilha dos Euro&nbsp;6</h2>
        <p>
          Os diesel Euro&nbsp;6 usam AdBlue para reduzir os NOx via um
          catalisador SCR. Se o sistema falhar, a centralina passa a modo
          degradado e acaba por bloquear o arranque apos certo numero de
          reinicios. Causas frequentes: sensor NOx a jusante em fim de vida
          (200 a 450&nbsp;EUR), injetor AdBlue sujo (180 a 350&nbsp;EUR),
          cristalizacao do deposito no inverno ou bomba AdBlue cansada (350
          a 600&nbsp;EUR). Um codigo{" "}
          <Link href="/pt/codes/p0420">P0420</Link> associado a P229F, P20EE
          ou P2BAD e tipico. Faca scan antes da IPO.
        </p>

        <h2>Fugas de escape: o silenciador na mira</h2>
        <p>
          Uma fuga antes do catalisador ou do FAP falseia as medidas e
          degrada a eficacia de descontaminacao. O tecnico inspeciona
          visualmente e testa com o opacimetro. Fugas frequentes: coletor
          (junta cansada), tubo flexivel apos turbo (fissuras) ou
          silenciador traseiro (corrosao). Uma pequena reparacao por
          soldadura custa 80 a 150&nbsp;EUR. Uma troca de linha traseira
          completa 400 a 900&nbsp;EUR. O Scan Sonoro deteta as fugas pela
          assinatura acustica &mdash; veja{" "}
          <Link href="/pt/blog/controlo-preventivo-som-evitar-fatura-cascata">
            o controlo preventivo pelo som
          </Link>
          .
        </p>

        <h2>Controlos visuais adicionais</h2>
        <p>
          Alem da mecanica pura, o tecnico tambem verifica: manchas de
          oleo sob o motor, estado de tubos de turbo, ausencia de luzes
          acesas (motor, ABS, airbag, AdBlue), funcionamento das luzes,
          estado dos pneus, folgas em rotulas e silentblocks. Um
          pre-controlo visual em cinco pontos cobre o essencial em menos de
          cinco minutos.
        </p>

        <h2>Duas semanas antes: a checklist completa</h2>
        <p>
          Dia J-14: duas viagens longas de autoestrada para regenerar o
          FAP. Dia J-10: scan OBD2 completo, correcao de codigos. Dia J-7:
          verificacao visual de fugas de escape e manchas de oleo. Dia J-5:
          controlo de pneus, luzes, liquido dos limpa-vidros. Dia J-3: Scan
          Sonoro para detetar ruidos anormais. Dia J: marcacao
          confirmada, carro quente a chegar, deposito AdBlue pelo menos a
          meio.
        </p>

        <h2>ZER e IPO: duas coisas distintas</h2>
        <p>
          Muitos confundem: a IPO verifica a conformidade tecnica
          (emissoes medidas, sistemas presentes), a ZER verifica a
          etiqueta ambiental (categoria administrativa ligada a data de
          primeira matricula). Pode passar a IPO com um carro de categoria
          inferior, mas nao necessariamente circular no centro. A IPO nao
          altera a sua etiqueta.
        </p>

        <h2>Se a reinspecao acontecer</h2>
        <p>
          Sem panico. A reinspecao e feita nos dois meses seguintes e so
          remede os pontos rejeitados. Prioridade: identificar
          precisamente o ponto bloqueante com o relatorio, corrigir
          rapidamente e voltar. Para um FAP rejeitado, considere uma
          limpeza profissional em vez de substituicao. Para uma fuga de
          escape, uma soldadura dirigida basta. Para um problema AdBlue,
          faca scan primeiro. Veja tambem{" "}
          <Link href="/pt/codes/p0300">o codigo P0300</Link> que acompanha
          frequentemente os defeitos de combustao diesel.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
