import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTCorrosaoVisaoIA() {
  const faq: FaqItem[] = [
    {
      q: "Diferenca entre ferrugem de superficie e ferrugem estrutural?",
      a: "A ferrugem de superficie e uma oxidacao castanha limitada a camada mais externa do metal: sai a escova e repara-se com tratamento anti-ferrugem. A ferrugem estrutural ataca a espessura da chapa, provoca perfuracoes, fragiliza a peca e torna-se motivo de reprovacao na IPO. A Visao IA classifica em quatro niveis para saber se tem seis meses ou nenhum.",
    },
    {
      q: "Que zonas fotografar com prioridade?",
      a: "O triangulo ferrugem de um carro europeu: bases laterais, passagens de roda traseiras, fundo do piso, travessa traseira, silentblocks do trem, e todos os pontos de fixacao da suspensao. Junte as tubagens de travao metalicas que correm ao longo do chassi: um ponto de corrosao sobre elas implica reprovacao imediata.",
    },
    {
      q: "O meu carro de 15 anos vai reprovar na IPO obrigatoriamente?",
      a: "Nao, muitos veiculos de 15 a 20 anos passam sem problema se a corrosao for vigiada. O problema chega quando foi ignorada. Um controlo Visao IA de seis em seis meses deteta a propagacao cedo e permite tratamento por 80 a 150&nbsp;EUR em vez de reparacao de chaparia por 600 a 1200&nbsp;EUR.",
    },
    {
      q: "A tinta a bolhar e sempre sinal de ferrugem ativa?",
      a: "Em 95&nbsp;% dos casos, sim. Uma bolha de tinta significa que por baixo um ponto de ferrugem incha e levanta a camada. A Visao IA deteta essas bolhas mesmo muito pequenas, por vezes invisiveis a olho nu, analisando variacoes de tom e reflexo na superficie pintada.",
    },
    {
      q: "Posso tratar eu a corrosao detetada?",
      a: "Para ferrugem nivel 1 (superficial), sim: escovagem, conversor de ferrugem, tinta anti-ferrugem, 40&nbsp;EUR de materiais. Para niveis 2 e superiores, ou se a zona for estrutural (longarina, ponto de suspensao), a reparacao deve ser feita por um chapeiro competente.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Detetar corrosao com Visao IA antes da IPO"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevencao"
      >
        <p>
          A ferrugem e o assassino silencioso dos veiculos europeus.
          Em Franca, Alemanha, Belgica ou Suica, o inverno e o sal de
          estrada trabalham os seus fundos enquanto anda. Um ponto de
          ferrugem do tamanho de uma moeda de dois euros pode tornar-se,
          em dezoito meses sem acao, uma perfuracao que reprova o seu
          carro na IPO. A Visao IA do AutoDiag EU identifica esses
          inicios de corrosao muito antes de serem irreversiveis.
        </p>

        <h2>Porque detetar cedo muda tudo</h2>
        <p>
          O mecanismo da ferrugem e exponencial. Um primeiro ponto de
          oxidacao cria microporosidade que retem humidade, que
          estende a corrosao, que alarga a porosidade. Em seis meses
          dobra a superficie afetada. Em dezoito meses passa de
          ferrugem superficial (tratavel com 80&nbsp;EUR de produtos) a
          ferrugem estrutural (soldadura e corte, 400 a
          1500&nbsp;EUR). Quando a ve a olho nu ao fechar a mala, ja e
          tarde. A Visao IA ve os primeiros pontos quando ainda medem
          milimetros.
        </p>

        <h2>O triangulo da ferrugem</h2>
        <p>
          Nem todos os carros enferrujam nos mesmos sitios. Mas nove
          em cada dez tem as mesmas zonas sensiveis. As bases laterais
          primeiro, onde o sal projetado pelas rodas se acumula. As
          passagens de roda traseiras, onde a humidade fica presa
          atras dos resguardos plasticos. Os fundos entre travessas,
          onde a condensacao nao seca. Os pontos de fixacao dos trens
          rolantes, que combinam vibracoes e humidade. Por fim, as
          tubagens de travao metalicas, o pesadelo da IPO: um ponto
          de corrosao profunda sobre uma tubagem de travao implica
          reprovacao imediata e proibicao de circular.
        </p>

        <h2>Quatro niveis, quatro decisoes</h2>
        <p>
          O modelo Visao IA classifica cada foto em quatro niveis.
          Nivel 1, ferrugem superficial: mancha castanha, sem inchaco,
          tratamento em casa por 40 a 80&nbsp;EUR. Nivel 2, ferrugem
          ativa com inchaco: tinta a bolhar, inicio de descolamento,
          tratamento em chapeiro em 6 meses por 150 a 300&nbsp;EUR.
          Nivel 3, perfuracao iminente: chapa fina, a peca perde
          rigidez, intervencao em 3 meses obrigatoria, 400 a
          800&nbsp;EUR. Nivel 4, perfuracao ou estrutural: a IPO
          reprova, intervencao imediata, 600 a 1500&nbsp;EUR conforme
          zona. Em cada nivel, uma recomendacao clara, sem zona
          cinzenta.
        </p>

        <h2>Uma historia de Yaris e trem traseiro</h2>
        <p>
          Caso real: Toyota Yaris de 2012, 140000&nbsp;km, proprietario
          muito cuidadoso que lava todo mes. Ao fotografar sob o trem
          traseiro para um checkup de rotina, a Visao IA deteta um
          nivel 2 num dos pontos de fixacao da barra Panhard. O olho
          nao via nada, so uma mancha castanha entre o preto sujo. O
          chapeiro confirma, trata a zona por 180&nbsp;EUR. Seis meses
          depois, mesma zona, mesma foto: nivel 1, estabilizado.
          Custo evitado: cerca de 700&nbsp;EUR de substituicao de
          barra se a peca tivesse cedido em andamento.
        </p>

        <h2>A comparacao antes-depois</h2>
        <p>
          A verdadeira forca da Visao IA nao e uma foto isolada, e a
          serie. Fotografa as mesmas zonas a cada seis meses, o
          sistema compara o historico e alerta quando uma zona
          progride um nivel. Essa progressao e muito mais informativa
          do que um estado instantaneo: uma corrosao nivel 1 estavel
          ha tres anos nao e urgente. Uma corrosao nivel 1 que passou
          a nivel 2 em seis meses e um alerta. O tempo e um dado de
          entrada.
        </p>

        <h2>O que a IPO realmente olha</h2>
        <p>
          Numa{" "}
          <Link href="/pt/blog/preparar-ipo-diesel-2026-guia">
            IPO 2026
          </Link>
          , o inspetor dispoe de uma grelha precisa. Os defeitos
          maiores por corrosao sao: corrosao perfurante em zona
          estrutural, corrosao em tubagem de travao ou fixacao de
          suspensao, perfuracao de longarina ou travessa. Antecipando
          esses pontos dois meses antes com Visao IA, chega a IPO com
          os tratamentos feitos. O inspetor constata, marca, sai com
          o autocolante.
        </p>

        <h2>A higiene do controlo periodico</h2>
        <p>
          Um controlo Visao IA das zonas sensiveis demora dez minutos
          de seis em seis meses. Oito fotos: base lateral direita,
          esquerda, passagem de roda traseira direita, esquerda, sob
          trem dianteiro, sob trem traseiro, e duas fotos as tubagens
          de travao visiveis. A app guia-o, reconhece os angulos e
          sinaliza se a foto nao esta suficientemente nitida. Dez
          minutos, duas vezes por ano. Combinado com o{" "}
          <Link href="/pt/blog/checkup-visual-ia-5-pontos-veiculo-saudavel">
            checkup visual em cinco pontos
          </Link>{" "}
          e um scan OBD2 mensal, mantem o seu carro a distancia total
          da quebra imprevista.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
