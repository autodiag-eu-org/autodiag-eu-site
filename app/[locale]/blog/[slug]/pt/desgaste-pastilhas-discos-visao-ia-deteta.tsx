import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTDesgastePastilhasVisao() {
  const faq: FaqItem[] = [
    {
      q: "Como medir a espessura de uma pastilha sem desmontar a roda?",
      a: "A Visao IA fotografa a pastilha atraves dos raios da jante, usando a lanterna do telemovel. Mede a parte visivel com uma precisao de cerca de 0.5&nbsp;mm calibrando-se sobre o diametro do disco detetado. E preciso desde que a captura seja nitida e bem iluminada.",
    },
    {
      q: "A partir de que espessura e preciso trocar as pastilhas?",
      a: "Uma pastilha nova mede 10 a 12&nbsp;mm. A 4&nbsp;mm deve planear a troca em tres meses. A 3&nbsp;mm o sensor de desgaste vai rocar em breve o disco e provocar um chiado. A 2&nbsp;mm anda sobre a placa de suporte e danifica o disco: troca imediata e provavel substituicao do disco.",
    },
    {
      q: "O que e um disco empenado ou riscado?",
      a: "Um disco em bom estado e liso e brilhante com algumas estrias finas. Um disco riscado apresenta sulcos profundos causados por pastilhas gastas ate a placa metalica. Um disco empenado esta deformado, o que provoca vibracoes no pedal ao travar. A Visao IA deteta ambos os defeitos numa foto.",
    },
    {
      q: "O que significa um tom azul num disco?",
      a: "O azulamento aparece quando o disco sofreu sobreaquecimento severo. A oxidacao do metal a alta temperatura da esse tom azul-violeta. E sinal de pinca encravada, conduto obstruido ou uso intensivo em montanha. O disco deve ser substituido porque as suas propriedades mecanicas estao alteradas.",
    },
    {
      q: "Quanto custa trocar pastilhas e discos?",
      a: "Um jogo de pastilhas dianteiras de gama media custa entre 60 e 120&nbsp;EUR. Um jogo de discos entre 90 e 200&nbsp;EUR. A mao de obra conta 80 a 150&nbsp;EUR por eixo. Total realista: 250 a 450&nbsp;EUR a frente, um pouco menos atras. Antecipar permite escolher o momento e comparar orcamentos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Desgaste de pastilhas e discos: o que a Visao IA deteta atraves das jantes"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Visao IA"
      >
        <p>
          Os travoes sao a peca mais importante do seu carro
          &mdash; mais do que o motor, mais do que a caixa, mais do
          que a suspensao. Porque um travao que falha e um acidente.
          O problema e que ninguem olha realmente para as pastilhas.
          Anda-se, trava-se, espera-se o chiado. Esse chiado chega
          tarde: quando o ouve provavelmente ja danificou o disco. A
          Visao IA resolve exatamente esse problema: mede a sua
          pastilha sem desmontar, fotografando atraves dos raios da
          jante. Alguns segundos por roda e sabe onde esta.
        </p>

        <h2>A captura que funciona</h2>
        <p>
          Vire o volante totalmente a direita para expor a pastilha
          dianteira esquerda. A parte vertical fica acessivel entre
          dois raios da jante. Ligue a lanterna do telemovel,
          posicione a objetiva entre os raios, estabilize, tire a
          foto. Repita na roda oposta. A app reconhece a geometria
          de uma pinca, isola a pastilha, mede a altura visivel em
          pixels e converte para milimetros calibrando-se sobre o
          diametro do disco.
        </p>

        <h2>A hierarquia das medidas</h2>
        <p>
          Uma pastilha nova mede entre 10 e 12&nbsp;mm. A 6&nbsp;mm
          esta a meia vida, indicador verde. A 4&nbsp;mm passa a
          laranja: planeie a troca em 3 meses. A 3&nbsp;mm o sensor
          de desgaste comeca a tocar no disco e em breve ouvira um
          chiado caracteristico &mdash; alerta vermelho. A 2&nbsp;mm
          ou menos e critico: o material aproxima-se perigosamente
          da placa metalica que, em contacto com o disco, ira risca-lo
          em poucos quilometros. O{" "}
          <Link href="/pt/blog/chiar-travoes-desgaste-normal-ou-perigo">
            chiar dos travoes
          </Link>{" "}
          merece o seu proprio artigo.
        </p>

        <h2>O disco: o grande esquecido</h2>
        <p>
          Problema comum: os condutores trocam as pastilhas mas
          conservam os discos antigos. Por vezes e um erro. A Visao
          IA analisa tambem o disco visivel e deteta tres defeitos.
          Primeiro: o risco profundo. Se a superficie mostra sulcos
          nitidos, a pastilha anterior usou ate ao metal, o disco nao
          pode ser retificado. Segundo: o empeno. Um disco empenado
          provoca vibracoes ao travar. A analise fotografica nao
          mede o empeno diretamente mas deteta os vestigios de
          desgaste assimetrico resultantes. Terceiro: o azulamento.
          Quando aqueceu ate azular, a sua estrutura cristalina
          mudou, deve ser substituido.
        </p>

        <h2>Os sinais que acompanham a medida</h2>
        <p>
          A Visao IA nao se contenta com a medida bruta. Olha tambem
          para o contexto. Uma pastilha ligeiramente vitrificada
          apresenta superficie lisa e brilhante, por vezes com
          reflexos envernizados: e uma pastilha que aqueceu demais,
          frequentemente por pinca encravada. Uma diferenca marcada
          de desgaste entre pastilha interior e exterior e sinal de
          um pistao de pinca que nao volta corretamente. Um desgaste
          assimetrico entre esquerda e direita do mesmo eixo sinaliza
          um problema hidraulico ou uma mangueira que incha sob
          pressao.
        </p>

        <h2>A ligacao com o ruido de travao</h2>
        <p>
          A Visao IA deteta o visivel, o{" "}
          <Link href="/pt/blog/chiar-travoes-desgaste-normal-ou-perigo">
            scan sonoro de ruidos de travao
          </Link>{" "}
          deteta o audivel. Juntos cobrem 95&nbsp;% dos problemas de
          travagem. Se ve uma pastilha a 4&nbsp;mm e ja ouve um
          chiado ciclico, esta provavelmente para la do uso normal:
          ha provavelmente componente pinca ou pistao. Se ve uma
          pastilha a 5&nbsp;mm sem ruido, tem ainda tres ou quatro
          meses para preparar a troca com calma.
        </p>

        <h2>O calculo de autonomia restante</h2>
        <p>
          Com o historico de medidas sucessivas, a app calcula a sua
          velocidade de desgaste em milimetros por mil quilometros.
          Muito variavel conforme condutor: um urbanita gasta
          1.5&nbsp;mm por 10&nbsp;000&nbsp;km, um autoestradista 0.7,
          um condutor de montanha pode passar de 2. Conhecida a sua
          velocidade pessoal, a app projeta o momento de atingir
          3&nbsp;mm, depois 2&nbsp;mm. Planeia, compara orcamentos,
          escolhe oficina sem urgencia.
        </p>

        <h2>As poupancas reais</h2>
        <p>
          Antecipar a troca poupa duas rubricas. Primeiro: a
          intervencao de urgencia com imobilizacao custa 30 a
          60&nbsp;EUR mais que uma marcacao planeada. Segundo: se
          espera demasiado e danifica o disco, passa de um jogo de
          pastilhas a 100&nbsp;EUR a um conjunto pastilhas+discos a
          250&nbsp;EUR, com mao de obra quase dobrada. Em quatro
          anos de uso tipico na Europa, sao 300 a 600&nbsp;EUR
          poupados so em travoes. Se combinar com a{" "}
          <Link href="/pt/blog/preparar-ipo-lista-completa">
            preparacao da IPO
          </Link>{" "}
          e um scan OBD2 regular (vigie o{" "}
          <Link href="/pt/codes/p0325">codigo P0325 knock</Link> que
          pode sinalizar aquecimento anormal), tem a equacao
          completa: Visao IA + Scan Sonoro + OBD2 = veiculo sem maus
          inesperados.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
