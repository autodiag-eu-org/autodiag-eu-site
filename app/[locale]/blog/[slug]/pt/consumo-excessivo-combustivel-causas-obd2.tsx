import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTConsumoExcessivoCombustivel() {
  const faq: FaqItem[] = [
    {
      q: "A partir de que diferenca e anormal um consumo?",
      a: "Acima de 15&nbsp;% de desvio face ao consumo anunciado (WLTP ou fabricante), ou acima de 20&nbsp;% da sua media habitual, e um sinal. Se o seu carro consome normalmente 6&nbsp;L/100&nbsp;km e passa a 7,5&nbsp;L sem alteracao de uso, algo mudou. Variacoes sazonais explicam 5 a 10&nbsp;%, alem disso ha que procurar.",
    },
    {
      q: "Qual a causa mais frequente de consumo excessivo?",
      a: "O sensor MAF (caudalimetro de ar) sujo. Envia um valor enviesado a centralina que compensa enriquecendo a mistura. Limpeza com spray dedicado: 15&nbsp;EUR e 10 minutos. Se nao bastar, substituicao: 80 a 250&nbsp;EUR. Depois do MAF estao as sondas lambda cansadas e as pressoes de combustivel fora de gama.",
    },
    {
      q: "O estilo de conducao conta mesmo?",
      a: "Enormemente. Um pe pesado pode duplicar o consumo em cidade. Aceleracoes francas, travagens brutas e altas velocidades na autoestrada sao os tres fatores principais. A 130&nbsp;km/h consome-se tipicamente 30&nbsp;% mais que a 110. Um condutor atento poupa facilmente 1 a 2 litros aos 100&nbsp;km sem mudar nada.",
    },
    {
      q: "Como diagnosticar via OBD2?",
      a: "Os valores chave: short term fuel trim (STFT) e long term fuel trim (LTFT). Normal entre -5&nbsp;% e +5&nbsp;%. Acima de +10&nbsp;% duradouramente, a centralina enriquece para compensar uma tomada de ar ou um sensor a ler baixo. Acima de +20&nbsp;% e critico. Veja tambem o valor MAF em g/s a diferentes rotacoes.",
    },
    {
      q: "Uma mudanca de oleo pode reduzir o consumo?",
      a: "Moderadamente, 1 a 3&nbsp;%. Oleo demasiado velho aumenta os atritos internos. Se ultrapassou muito o intervalo, faca-a, ganhara algumas decimas. Nao conte com isso para compensar uma derivacao grande &mdash; se o consumo deu um salto, procure noutro lado.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Consumo excessivo de combustivel: causas e diagnostico OBD2"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          Quando o consumo sobe sem razao aparente, raramente e uma
          fatalidade. Em 80&nbsp;% dos casos, um diagnostico OBD2 metodico
          encontra a causa em menos de uma hora. Este guia da-lhe a
          checklist exata para identificar o culpado, de causas benignas
          a avarias mais serias, com as faixas de preco de cada
          intervencao.
        </p>

        <h2>Verificar primeiro o que custa zero</h2>
        <p>
          Antes de tirar o OBD2, elimine falsos alarmes. Pressao dos
          pneus: uma sub-enchimento de 0,5&nbsp;bar aumenta o consumo 3
          a 5&nbsp;%. Filtro de ar: um filtro colmatado pode custar 0,3
          a 0,5 litros aos cem. Barras ou bagageiro de tejadilho: ate
          1,5 litros mais em autoestrada. Gasolina de ma qualidade ou
          mistura com E85 nao prevista: acontece mais do que se pensa.
          Inverno, frio e pneus de neve acrescentam naturalmente 0,5 a
          1 litro.
        </p>

        <h2>O scan OBD2: fuel trims antes de tudo</h2>
        <p>
          Os fuel trims sao os indicadores mais falantes. STFT (short
          term) e a correcao instantanea, LTFT (long term) e a media
          aprendida. Normalmente ambos entre -5&nbsp;% e +5&nbsp;%. Se
          LTFT ultrapassa +10&nbsp;% duradouramente, a centralina
          enriquece. Procure: tomada de ar nao medida (tubo, coletor,
          junta de admissao), MAF a ler baixo, sonda lambda a montante
          cansada, pressao de combustivel baixa. Veja o codigo{" "}
          <Link href="/pt/codes/p0171">P0171</Link>.
        </p>

        <h2>MAF e MAP: os sensores de medida de ar</h2>
        <p>
          O sensor MAF (caudalimetro massico) ou MAP (pressao de
          admissao) indica a centralina a quantidade de ar que entra
          no motor. Se mente, a mistura e falsa. Um MAF sujo subestima o
          caudal, a centralina aplica menos combustivel, depois ouve as
          lambdas e corrige enriquecendo. Resultado: LTFT alto, consumo
          em alta. Limpeza com spray dedicado: 15&nbsp;EUR e 10 minutos.
          Um MAF acima de 200000&nbsp;km merece troca mesmo apos limpeza.
        </p>

        <h2>Sondas lambda: o rele da regulacao</h2>
        <p>
          A sonda a montante pilota a regulacao da mistura a cada
          segundo. Uma sonda cansada (mais de 150000&nbsp;km) reage
          devagar, a centralina regula pior, o consumo deriva. A troca
          custa 80 a 200&nbsp;EUR a peca mais mao de obra. As
          universais (NTK, Bosch) sao tao eficazes como as do
          fabricante a metade do preco. Veja{" "}
          <Link href="/pt/blog/custo-reparacao-catalisador-p0420">
            o custo reparacao catalisador P0420
          </Link>
          .
        </p>

        <h2>Injetores cansados ou sujos</h2>
        <p>
          Em diesel, os injetores gotejam ligeiramente com a idade e
          enviam mais combustivel que o previsto. Em gasolina, podem
          sujar e pulverizar pior. Em ambos os casos, o consumo sobe.
          Uma limpeza em banco (50 a 100&nbsp;EUR por injetor) devolve
          muitas vezes o aprumo aos injetores de gasolina. Para diesel,
          o teste de caudal de retorno identifica diretamente os
          injetores culpados.
        </p>

        <h2>EGR e sistemas de descontaminacao</h2>
        <p>
          Uma valvula EGR bloqueada aberta dilui o ar admitido e faz
          subir o consumo. Uma EGR bloqueada fechada satura os NOx mas
          nao toca no consumo. Um FAP colmatado aumenta a contra-pressao
          de escape e portanto o trabalho motor: consumo em alta
          notavel. Um diagnostico OBD2 le as posicoes EGR e as derivas,
          mas so um teste de estrada confirma.
        </p>

        <h2>Pneus, travoes e trem rodante</h2>
        <p>
          Uma pinca agarrada que deixa o calco roçar o disco cria
          resistencia permanente &mdash; calor excessivo de um lado,
          desgaste desigual, consumo em alta. Um rolamento muito cansado
          tambem produz resistencia ao rolamento. Pneus de neve deixados
          no verao sobem o consumo em 0,5 litros. Veja{" "}
          <Link href="/pt/blog/ruido-rolamento-roda-antes-ipo">
            detetar um ruido de rolamento
          </Link>
          .
        </p>

        <h2>Estilo de conducao: o fator numero um</h2>
        <p>
          Antes de procurar uma avaria, interrogue os seus habitos.
          Mudou de trajeto? De condicoes? Faz mais trajetos curtos? A
          eco-conducao poupa facilmente 15&nbsp;% no mesmo veiculo.
          Antecipar, levantar o pe a tempo, andar a 110 em vez de 130,
          desligar o motor em paragem prolongada, tudo isso acumulado
          faz uma diferenca real.
        </p>

        <h2>Quando recorrer a um profissional</h2>
        <p>
          Se apos verificacao destes pontos o consumo continuar
          anormal, uma passagem por um mecanico com ferramenta avancada
          permite ler modos de fabricante e aceder a parametros que o
          OBD2 padrao nao expoe. Conte 50 a 100&nbsp;EUR por um
          diagnostico motor serio, rentavel na fatura de combustivel
          poupada nos meses seguintes.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
