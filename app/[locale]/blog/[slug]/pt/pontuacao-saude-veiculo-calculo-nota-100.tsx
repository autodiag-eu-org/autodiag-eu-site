import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTPontuacaoSaudeVeiculo() {
  const faq: FaqItem[] = [
    {
      q: "Como e calculada a pontuacao?",
      a: "Parte-se de 100 pontos. Cada anomalia detetada retira um numero de pontos conforme a sua gravidade, fonte e confianca associada. Um codigo OBD2 critico retira entre 15 e 25 pontos. Uma assinatura sonora anormal com mais de 80&nbsp;% de confianca retira entre 8 e 15 pontos. Um elemento visual como uma fuga maior retira entre 10 e 20 pontos. A pontuacao final esta limitada a 100 e nunca e negativa.",
    },
    {
      q: "Que nota corresponde a que saude?",
      a: "90 a 100: excelente, nenhuma acao. 75 a 89: bom estado, alguns pontos a vigiar. 60 a 74: correto mas varios elementos pedem atencao. 40 a 59: preocupante, reparar rapido. 0 a 39: degradado, intervencao urgente. Os limiares estao calibrados para nao alarmar sem razao um carro que anda normalmente.",
    },
    {
      q: "Porque a confianca do SVM influencia a pontuacao?",
      a: "Porque uma detecao a 55&nbsp;% nao deve ser tratada como uma a 92&nbsp;%. O peso da penalizacao e proporcional a confianca. A 55&nbsp;%, retira-se 40&nbsp;% da penalizacao base. A 92&nbsp;%, 100&nbsp;%. Isto evita falsos positivos que fariam cair uma nota injustamente.",
    },
    {
      q: "A pontuacao evolui no tempo?",
      a: "Sim, cada scan e guardado. Vera a curva de saude do seu carro ao longo das ultimas semanas ou meses. Uma tendencia descendente fala mais do que um valor pontual. Se a sua nota cai de 92 para 78 em tres meses, e um sinal claro de que algo se degrada progressivamente.",
    },
    {
      q: "A pontuacao substitui uma IPO?",
      a: "Nao, complementa-a. A IPO continua a ser a referencia legal e nao queremos substitui-la. A pontuacao saude e um indicador pedagogico que o ajuda a preparar o carro antes da IPO e a evitar surpresas no dia.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Pontuacao de saude do veiculo: como calculamos a sua nota sobre 100"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={9}
        category="Tecnologia"
      >
        <p>
          Um numero unico que resume a saude do seu carro e um velho
          sonho. As tentativas existem ha anos, por vezes simplificadas
          ao extremo (numero de codigos por coeficiente) ou tao
          complexas que se tornam opacas. A pontuacao AutoDiag EU foi
          pensada para ser robusta, compreensivel e verificavel. Eis
          como funciona.
        </p>

        <h2>Principio de base: 100 pontos a partida</h2>
        <p>
          Um carro perfeitamente saudavel tem 100 pontos. Nao pode
          ganhar nenhum, so perder. Cada scan calcula o total de
          penalizacoes das tres fontes (OBD2, som, visao) e subtrai-o a
          100. Esta logica inversa e intuitiva: quanto maior a nota,
          melhor.
        </p>

        <h2>Fonte 1: OBD2</h2>
        <p>
          Um codigo retira entre 5 e 25 pontos conforme a gravidade. Um
          codigo pending nao confirmado retira metade de um confirmado.
          Um codigo historico (apagado mas registado) ainda menos. Os
          codigos classificam-se em quatro niveis:
        </p>
        <p>
          Critico (20 a 25): falhas de ignicao multiplas, temperatura
          motor fora de gama, pressao de oleo baixa. Alto (12 a 18):
          lambda cansada, mistura rica ou pobre prolongada, EGR
          bloqueada. Medio (6 a 12): catalisador no limite, sensor ABS,
          airbag. Baixo (2 a 5): defeitos informativos, luzes
          secundarias. Exemplo: o{" "}
          <Link href="/pt/codes/p0420">codigo P0420</Link>, classificado
          medio.
        </p>

        <h2>Fonte 2: Scan Sonoro</h2>
        <p>
          Cada anomalia detetada pelo SVM tem um peso base e uma
          confianca. Penalizacao = peso base vezes confianca SVM, com
          limiar minimo de 30&nbsp;% abaixo do qual nao se aplica
          nada. Uma pancada motor a 85&nbsp;% de confianca com peso
          base 18 retira 15 pontos. Um tiquetaque a 62&nbsp;% com peso
          base 10 retira 6 pontos.
        </p>
        <p>
          As 11 classes do SVM tem pesos calibrados por gravidade
          motor: knock e bearing noise tem os pesos mais altos (desgaste
          mecanico profundo), belt noise e tick pesos medios, air leak
          e exhaust leak pesos medios a baixos.
        </p>

        <h2>Fonte 3: Visao IA</h2>
        <p>
          Cada achado visual classifica-se em tres niveis. Menor (3 a
          5 pontos): resto de oleo seco, corrosao superficial ligeira,
          pneu com profundidade suficiente mas desgaste visivel. Medio
          (8 a 12): fuga ativa, corrosao ativa, pastilha abaixo de
          4&nbsp;mm, pneu proximo do limite legal. Severo (15 a 20):
          fuga maior, ferrugem perfurante, pastilha em fim de vida,
          pneu no testemunho de desgaste. Estes pesos inspiram-se nos
          criterios da IPO europeia.
        </p>

        <h2>Fusao e limite</h2>
        <p>
          A soma bruta das penalizacoes e limitada a 100 para evitar
          notas negativas sem sentido. Ha uma regra anti-duplicacao:
          se um codigo OBD2 e um Scan Sonoro apontam a mesma avaria
          (por exemplo um{" "}
          <Link href="/pt/codes/p0300">P0300</Link> e um misfire
          sonoro), conta-se so a penalizacao maior, nao as duas. Esta
          regra evita sobrepenalizar um carro com uma so avaria real
          detetada por duas fontes.
        </p>

        <h2>Interpretacao honesta dos intervalos</h2>
        <p>
          Uma nota de 88 num carro de 10 anos e excelente. 88 num
          carro novo e correta mas nao perfeita. O numero le-se em
          contexto. A app mostra tambem o delta face a nota media de
          carros da mesma idade e motorizacao. Um Clio 4 de 2016 com
          82 pontos esta na media e nao deve preocupar. O mesmo com
          55 pontos exige atencao imediata.
        </p>

        <h2>A tendencia conta mais que o valor</h2>
        <p>
          O que mais nos interessa nao e a nota de hoje, e a derivada
          no tempo. Se o seu carro perde 15 pontos em dois meses, algo
          se passa. Se fica estavel em 78 ha um ano, e equilibrio.
          Cada scan leva marca temporal e voce ve a curva. Como o
          acompanhamento da tensao arterial ou glicemia em medicina:
          uma medida pontual diz pouco, uma serie diz tudo.
        </p>

        <h2>Nao e uma nota de oficina</h2>
        <p>
          Esta nota nao e um veredicto de IPO nem uma opiniao de
          mecanico. E um indicador pedagogico que o ajuda a entender o
          estado do seu carro e a tomar decisoes informadas. Quando a
          nota desce, sabe onde olhar. Quando sobe apos reparacao, tem
          prova de que a intervencao serviu. Uma ferramenta, nao um
          oraculo.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
