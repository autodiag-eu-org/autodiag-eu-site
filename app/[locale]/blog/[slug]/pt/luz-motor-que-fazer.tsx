import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTLuzMotorQueFazer() {
  const faq: FaqItem[] = [
    {
      q: "A luz do motor esta acesa, posso continuar a conduzir?",
      a: "Se a luz estiver laranja fixa, pode continuar a conduzir com precaucao e fazer um diagnostico em breve. Se estiver a piscar, conduza devagar ate uma oficina: geralmente indica falhas de ignicao que podem destruir o catalisador em poucos quilometros. Se for vermelha (temperatura, pressao do oleo), pare imediatamente.",
    },
    {
      q: "Quanto custa ler um codigo de erro numa oficina em Portugal?",
      a: "Em Portugal, a leitura de um codigo numa oficina custa entre 25 e 60 EUR, e ate 90 EUR num concessionario. Com um adaptador ELM327 (desde 20 EUR) e a app AutoDiag EU, le os seus codigos gratuitamente e as vezes que quiser.",
    },
    {
      q: "Apagar o codigo faz desaparecer o problema?",
      a: "Nao. Apagar apenas remove a luz temporariamente, mas se a causa nao for corrigida o codigo volta apos 50 a 200 km. Pior: mesmo antes da IPO, apagar codigos coloca os monitores de prontidao em estado 'nao prontos', o que o inspetor deteta imediatamente.",
    },
    {
      q: "A luz do motor pode apagar-se sozinha?",
      a: "Sim, em alguns casos. Se o problema foi pontual (por exemplo um tampao de deposito mal fechado com codigo P0442), a luz apaga-se apos alguns ciclos de arranque. Mas nao conte com isso: a maioria dos codigos exige intervencao.",
    },
    {
      q: "Quais sao os codigos mais frequentes quando a luz acende?",
      a: "Os mais frequentes em carros europeus sao P0420 (eficacia do catalisador), P0171 (mistura pobre), P0300 (falhas de ignicao), P0442 (fuga EVAP pequena) e P0128 (termostato). Juntos representam cerca de 60 por cento das luzes do motor acesas.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="pt"
        title="Luz do motor acesa: o que fazer?"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={8}
        category="Guia pratico"
      >
        <p>
          Acabou de acender no seu painel uma pequena luz laranja em forma
          de motor. Pergunta-se se deve parar imediatamente, chamar um
          reboque ou continuar a conduzir. Respire: em 90 por cento dos
          casos, essa luz nao significa que o seu carro vai avariar em
          cinco minutos. Mas convem ouvi-la. Aqui esta exatamente o que
          fazer, passo a passo.
        </p>

        <h2>1. Observe a cor e o comportamento da luz</h2>
        <p>
          A primeira informacao util e o estado da propria luz. Pode
          assumir tres formas: laranja fixa, laranja a piscar ou vermelha.
          Cada uma tem um significado muito diferente.
        </p>
        <p>
          <strong>Laranja fixa:</strong> o caso mais comum. A centralina
          do motor detetou uma anomalia, mas nao e critica. Pode conduzir
          normalmente, terminar a sua viagem, voltar a casa. Mas nos
          proximos dias, faca um diagnostico para perceber o problema.
          Quanto mais esperar, mais cara a fatura pode ficar.
        </p>
        <p>
          <strong>Laranja a piscar:</strong> a coisa torna-se seria. Quase
          sempre indica falhas de ignicao importantes. A cada falha,
          combustivel por queimar chega ao escape e sobreaquece o
          catalisador. Em poucas dezenas de quilometros, pode literalmente
          derreter o catalisador, transformando uma reparacao de 70 EUR
          (velas) numa fatura de 1400 EUR. Conduza devagar, evite
          aceleracoes fortes e chegue a uma oficina rapidamente.
        </p>
        <p>
          <strong>Luz vermelha:</strong> parar. Seja temperatura do motor,
          pressao do oleo ou bateria, uma luz vermelha significa um
          problema imediato que pode destruir o motor se continuar. Pare
          em seguranca, desligue a ignicao e chame assistencia.
        </p>

        <h2>2. Leia o codigo de erro</h2>
        <p>
          Uma luz do motor acesa e como uma notificacao do telemovel:
          diz-lhe que ha algo, mas nao o que. Para saber realmente, e
          preciso ler os codigos guardados na centralina. Sao
          padronizados: comecam por uma letra (P para motor, C para
          chassis, B para carrocaria, U para rede) seguida de quatro
          algarismos. Um P0420 significa sempre o mesmo, seja num
          Volkswagen, num Renault ou num Fiat.
        </p>
        <p>
          Opcao 1: oficina. 25 a 60 EUR so pela leitura. Opcao 2:
          adaptador ELM327 Bluetooth (desde 20 EUR) com AutoDiag EU. Liga
          o adaptador a porta OBD2 (por baixo do volante na maioria dos
          carros), abre a app e em dez segundos ve todos os codigos
          ativos, explicados em portugues, com causas provaveis e
          estimativa de custos.
        </p>

        <h2>3. Identifique a causa provavel</h2>
        <p>
          Estes cinco codigos representam cerca de 60 por cento dos casos
          mais comuns na Europa:
        </p>
        <ul>
          <li>
            <Link href="/pt/codes/p0420">P0420 &mdash; eficacia do catalisador</Link>
            : muito frequente em carros com mais de 8 anos, ligado a sonda
            lambda ou ao proprio catalisador.
          </li>
          <li>
            <Link href="/pt/codes/p0171">P0171 &mdash; mistura pobre</Link>
            : muitas vezes entrada de ar no coletor ou caudalimetro sujo.
          </li>
          <li>
            <Link href="/pt/codes/p0300">P0300 &mdash; falhas de ignicao</Link>
            : velas ou bobines gastas na maioria dos casos.
          </li>
          <li>
            <Link href="/pt/codes/p0442">P0442 &mdash; fuga EVAP pequena</Link>
            : muitas vezes apenas um tampao de deposito mal fechado.
          </li>
          <li>
            <Link href="/pt/codes/p0128">P0128 &mdash; termostato</Link>:
            motor que nao atinge a temperatura, termostato bloqueado
            aberto.
          </li>
        </ul>

        <h2>4. Os 5 reflexos imediatos</h2>
        <p>
          Antes mesmo de ler codigos, verifique estas cinco coisas que
          podem apagar a luz sem ferramentas. Primeiro, aperte bem o
          tampao do deposito &mdash; um tampao mal fechado e responsavel
          por 20 por cento das luzes do motor acesas na Europa. Depois
          verifique o nivel de oleo: um nivel baixo pode disparar a luz.
          Em seguida o liquido de refrigeracao. Oica tambem ruidos
          estranhos ao ralenti &mdash; um assobio pode indicar entrada de
          ar, um estalido uma vela defeituosa. Por fim, anote se notou
          alguma mudanca recente: perda de potencia, consumo elevado,
          arranque dificil.
        </p>

        <h2>5. Quando ir a oficina?</h2>
        <p>
          Tudo o que afeta a seguranca (travoes, direcao, airbags) ou
          sistemas anti-poluicao complexos (catalisador, FAP, valvula EGR
          avariada) merece a intervencao de um profissional. Mas para
          intervencoes simples &mdash; velas, caudalimetro sujo, tampao,
          sensor de temperatura &mdash; um tutorial YouTube e um jogo de
          chaves chegam. O erro classico e pagar 250 EUR na oficina por
          uma intervencao de 25 EUR em pecas e 15 minutos de trabalho.
          AutoDiag EU ajuda-o a distinguir.
        </p>

        <h2>6. Como evitar que volte a acontecer</h2>
        <p>
          A melhor forma de nao ver a luz do motor acesa e a manutencao
          preventiva. Respeite os intervalos de mudanca de oleo, troque
          as velas a cada 60&thinsp;000 km, limpe o caudalimetro uma vez
          por ano, e sobretudo use combustivel de qualidade. Um
          diagnostico mensal com AutoDiag EU leva dois minutos e permite
          detetar pequenos problemas antes que se tornem grandes. Tambem
          evita surpresas na IPO: desde 2018, uma luz do motor acesa
          provoca reprovacao direta.
        </p>

        <h2>Em resumo</h2>
        <p>
          Uma luz do motor acesa nao e uma condenacao. Veja a cor, leia o
          codigo, identifique a causa e aja em conformidade. Com AutoDiag
          EU e um adaptador de 20 EUR, tem um diagnostico profissional no
          bolso. Poupa 50 EUR a cada visita a oficina por uma simples
          leitura e conduz sabendo exatamente o que se passa no motor.
        </p>
      </ArticleLayout>
    </>
  );
}
