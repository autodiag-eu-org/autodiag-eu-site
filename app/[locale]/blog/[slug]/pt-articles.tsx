import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

function ArticleLayout({
  children,
  title,
  date,
  author,
  readingTime,
  category,
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/pt" },
          { label: "Blog", href: "/pt/blog" },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href="/pt/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; Voltar ao blog
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>Por {author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("pt-PT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} min de leitura</span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">
          Pronto para diagnosticar o seu carro?
        </h3>
        <p className="mb-6 text-secondary">
          O AutoDiag EU oferece-lhe ferramentas profissionais, simplificadas.
          Scan de audio com IA, leitor de codigos de erro e muito mais &mdash;
          tudo no seu bolso.
        </p>
        <Link
          href="/pt#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Aderir a beta gratuita
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Artigo 1 — Como ler codigos de erro OBD2
   ================================================================ */

export function ArticlePTCodigosErroOBD2() {
  return (
    <ArticleLayout
      title="Como ler um codigo de erro OBD2 &mdash; guia completo"
      date="2026-03-15"
      author="Reda Kaouani"
      readingTime={8}
      category="Tutorial"
    >
      <p>
        Quando o indicador luminoso do motor se acende no painel, a maioria dos
        condutores sente um aperto no peito. Sera algo grave? Quanto vai custar?
        A boa noticia e que, na grande maioria dos casos, o problema pode ser
        identificado rapidamente atraves de um simples <strong>codigo de erro
        OBD2</strong>. Neste guia completo, vamos explicar-lhe tudo o que
        precisa saber para ler e interpretar esses codigos &mdash; sem precisar
        de ser mecanico.
      </p>

      <h2>O que e o OBD2?</h2>
      <p>
        OBD2 significa <em>On-Board Diagnostics, segunda geracao</em>. E um
        sistema padronizado presente em todos os veiculos vendidos na Europa
        desde 2001 (gasolina) e 2004 (diesel). A centralina (ECU) do seu
        carro monitoriza continuamente dezenas de sensores &mdash; desde a
        sonda lambda ate ao sensor de pressao do coletor de admissao. Quando
        algo sai dos parametros normais, a centralina regista um{" "}
        <strong>codigo de erro</strong> (tambem chamado DTC, do ingles
        Diagnostic Trouble Code) e acende a famosa luz de avaria no painel.
      </p>
      <p>
        O sistema OBD2 foi criado inicialmente nos Estados Unidos pela CARB
        (California Air Resources Board) nos anos 90 para controlar as emissoes.
        Na Europa, a versao equivalente chama-se EOBD (European On-Board
        Diagnostics) e e obrigatoria desde a directiva 98/69/CE. Hoje em dia,
        todos os carros vendidos em Portugal, Franca, Alemanha, Espanha e
        no resto da UE possuem esta ficha de diagnostico.
      </p>

      <h2>Onde esta a ficha OBD2?</h2>
      <p>
        A ficha OBD2 e um conector de 16 pinos, normalmente localizado debaixo
        do volante, do lado do condutor. Em alguns veiculos, pode estar
        escondido atras de um pequeno painel ou tampa. Na maioria dos Renault,
        Peugeot e Volkswagen, encontra-se facilmente na zona inferior do
        tablier, a esquerda do volante. Nos BMW e SEAT, pode estar um pouco
        mais escondido, mas nunca fora do alcance do condutor. Se nao encontrar,
        consulte o manual do proprietario &mdash; a localizacao exata esta
        sempre indicada.
      </p>

      <h2>Como sao estruturados os codigos de erro?</h2>
      <p>
        Cada codigo de erro segue um formato universal de cinco caracteres.
        A primeira letra indica o sistema afetado:
      </p>
      <ul>
        <li><strong>P</strong> &mdash; Powertrain (motor e transmissao) &mdash; os mais comuns</li>
        <li><strong>C</strong> &mdash; Chassis (ABS, direcao assistida, suspensao)</li>
        <li><strong>B</strong> &mdash; Body (airbags, ar condicionado, fecho central)</li>
        <li><strong>U</strong> &mdash; Network (comunicacao entre centralinas)</li>
      </ul>
      <p>
        O segundo caractere indica se o codigo e generico (0) ou especifico do
        fabricante (1). Os restantes tres digitos identificam o subsistema e a
        avaria especifica. Por exemplo, <strong>P0420</strong> significa: P
        (motor), 0 (generico), 4 (sistema catalitico), 20 (eficiencia abaixo
        do limiar).
      </p>

      <h2>3 codigos comuns explicados</h2>

      <h3>P0420 &mdash; Eficiencia do catalisador abaixo do limiar</h3>
      <p>
        Este e provavelmente o codigo de erro mais frequente em toda a Europa.
        A centralina compara os sinais das duas sondas lambda (antes e depois
        do catalisador). Se os valores forem demasiado semelhantes, significa
        que o catalisador ja nao esta a converter os gases de escape de forma
        eficiente. Em Portugal, este problema e particularmente relevante
        porque pode levar a reprovacao na IPO (Inspecao Periodica Obrigatoria).
        Custo de reparacao: entre <strong>300&euro; e 1 200&euro;</strong>,
        consoante o veiculo e o tipo de catalisador.
      </p>

      <h3>P0171 &mdash; Mistura demasiado pobre (banco 1)</h3>
      <p>
        A centralina deteta que esta a entrar demasiado ar ou pouco combustivel
        no motor. As causas mais comuns incluem fugas de ar na admissao,
        filtro de ar obstruido, sonda lambda defeituosa ou bomba de
        combustivel fraca. E um codigo que nao deve ser ignorado &mdash;
        conduzir durante muito tempo com mistura pobre pode danificar o
        catalisador e as valvulas. Custo tipico: entre{" "}
        <strong>50&euro; e 400&euro;</strong>, dependendo da causa.
      </p>

      <h3>P0300 &mdash; Falhas de ignicao aleatorias detetadas</h3>
      <p>
        Quando a centralina deteta que um ou mais cilindros estao a falhar
        a ignicao de forma intermitente, regista o codigo P0300. Pode sentir
        o motor a tremer ao ralenti, perda de potencia ou aumento do consumo.
        As causas habituais sao velas de ignicao gastas, bobinas defeituosas
        ou injetores sujos. Se o problema afetar apenas um cilindro especifico,
        aparecera um codigo mais preciso (P0301 para o cilindro 1, P0302 para
        o cilindro 2, etc.). Reparacao: entre{" "}
        <strong>30&euro; e 350&euro;</strong>.
      </p>

      <h2>Como ler estes codigos com o AutoDiag EU?</h2>
      <p>
        Com o AutoDiag EU, ler os codigos de erro do seu carro e tao simples
        como ligar o Bluetooth. Basta um dongle ELM327 BLE (como o Vgate iCar
        Pro, disponivel por cerca de 25&euro;) e o seu telemovel. Ligue o
        dongle a ficha OBD2, abra a aplicacao e em poucos segundos tera a
        lista completa dos codigos de erro ativos. Mas o AutoDiag EU vai mais
        longe do que simplesmente mostrar os codigos &mdash; a nossa IA
        mecanico traduz cada codigo numa linguagem clara, explica as causas
        provaveis, estima os custos de reparacao e indica-lhe o nivel de
        urgencia. Nao precisa de pesquisar no Google nem de tentar decifrar
        codigos enigmaticos.
      </p>

      <h2>Quando ir a oficina?</h2>
      <p>
        Nem todos os codigos de erro exigem uma ida imediata a oficina. Alguns,
        como o P0420, podem esperar algumas semanas se o carro funcionar
        normalmente. Outros, como codigos relacionados com o sistema de
        travagem ou com a temperatura do motor, requerem atencao imediata.
        O AutoDiag EU classifica cada codigo por gravidade &mdash;{" "}
        <strong>critico</strong> (parar imediatamente),{" "}
        <strong>alto</strong> (agendar reparacao em breve),{" "}
        <strong>medio</strong> (monitorizar) ou{" "}
        <strong>baixo</strong> (sem pressa). Esta classificacao ajuda-o a
        tomar decisoes informadas sem entrar em panico desnecessario.
      </p>

      <h2>Erros a evitar</h2>
      <ul>
        <li>
          <strong>Apagar os codigos sem resolver o problema</strong> &mdash;
          E tentador limpar a luz de avaria e esquecer o assunto. Mas o codigo
          vai voltar e, entretanto, o problema pode agravar-se.
        </li>
        <li>
          <strong>Confiar apenas num codigo</strong> &mdash; Um unico codigo
          pode ter dezenas de causas possiveis. O AutoDiag EU cruza os dados
          do OBD2 com o historico do veiculo para estreitar as hipoteses.
        </li>
        <li>
          <strong>Ignorar codigos pendentes</strong> &mdash; Mesmo que a luz
          de avaria nao esteja acesa, podem existir codigos pendentes que
          indicam um problema em formacao.
        </li>
        <li>
          <strong>Nao verificar antes da IPO</strong> &mdash; Uma leitura
          OBD2 antes de ir a inspecao pode poupar-lhe o custo de uma
          reprovacao (e a chatice de ter de voltar).
        </li>
      </ul>

      <h2>Em resumo</h2>
      <p>
        Os codigos de erro OBD2 sao a linguagem que o seu carro usa para
        comunicar consigo. Aprender a le-los nao requer formacao em
        mecanica &mdash; basta a ferramenta certa. Com o AutoDiag EU, um
        dongle de 25&euro; e dois minutos do seu tempo, pode saber exatamente
        o que se passa com o seu veiculo, quanto vai custar a reparacao e se
        e seguro continuar a conduzir. E a diferenca entre ir a oficina
        informado ou ir as cegas &mdash; e essa diferenca pode poupar-lhe
        centenas de euros.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artigo 2 — Preparar a IPO: lista completa
   ================================================================ */

export function ArticlePTPrepararIPO() {
  return (
    <ArticleLayout
      title="Preparar a IPO: a lista de verificacao completa"
      date="2026-03-10"
      author="Reda Kaouani"
      readingTime={9}
      category="Guia pratico"
    >
      <p>
        Ninguem gosta de reprovar na inspecao do carro. Em Portugal, a IPO
        (Inspecao Periodica Obrigatoria) e o momento de verdade para qualquer
        veiculo &mdash; e reprovar significa pagar novamente, perder tempo e,
        em muitos casos, enfrentar uma reparacao que poderia ter sido detetada
        a tempo. A boa noticia e que a maioria das reprovacoes sao evitaveis
        com uma preparacao adequada. Neste guia, damos-lhe a lista completa
        para chegar a IPO com confianca.
      </p>

      <h2>A IPO por paises</h2>
      <p>
        Cada pais europeu tem o seu proprio nome e as suas proprias regras para
        a inspecao periodica do veiculo, mas o objetivo e o mesmo em todo o
        lado: garantir que os carros nas estradas sao seguros e nao poluem
        em excesso.
      </p>
      <ul>
        <li>
          <strong>Portugal &mdash; IPO</strong>: Primeira inspecao aos 4 anos
          apos a matricula, depois de 2 em 2 anos. A partir dos 8 anos, a
          inspecao e anual. Custo: cerca de <strong>30&euro;&ndash;35&euro;</strong>.
        </li>
        <li>
          <strong>Franca &mdash; Controle Technique (CT)</strong>: Primeiro
          aos 4 anos, depois de 2 em 2 anos. Custo: 70&euro;&ndash;90&euro;.
        </li>
        <li>
          <strong>Alemanha &mdash; TUV/HU</strong>: De 2 em 2 anos desde
          o primeiro registo. Custo: 90&euro;&ndash;120&euro;.
        </li>
        <li>
          <strong>Suica &mdash; MFK</strong>: Primeira aos 4 anos, depois de
          3 em 3 anos (certas condicoes de 2 em 2). Custo: 50&ndash;80 CHF.
        </li>
        <li>
          <strong>Espanha &mdash; ITV</strong>: Primeira aos 4 anos, depois
          de 2 em 2 anos, anual apos os 10 anos. Custo: 35&euro;&ndash;55&euro;.
        </li>
      </ul>

      <h2>A lista completa ponto por ponto</h2>

      <h3>1. Iluminacao</h3>
      <p>
        A iluminacao e um dos pontos mais verificados &mdash; e um dos mais
        faceis de corrigir. Verifique todas as luzes do veiculo: medios,
        maximos, luzes de presenca, intermitentes, luzes de travagem, luzes
        de marcha-atras, luzes de nevoeiro e luz da matricula. Uma lampada
        fundida e reprovacao garantida. Custo de substituicao: entre{" "}
        <strong>3&euro; e 25&euro;</strong> por lampada, dependendo do tipo.
        Se o seu carro tem farois de xenon ou LED, a substituicao pode ser
        mais cara (50&euro;&ndash;150&euro;), mas e menos frequente.
      </p>

      <h3>2. Travagem</h3>
      <p>
        O sistema de travagem e testado num banco de rolos que mede a eficiencia
        e o equilibrio entre os lados esquerdo e direito. Verifique a espessura
        das pastilhas (minimo 2&ndash;3mm), o estado dos discos (sem sulcos
        profundos nem empenamento), o nivel do liquido de travoes e o
        funcionamento do travao de mao. Uma diferenca excessiva entre os lados
        e motivo de reprovacao. Custo medio: pastilhas{" "}
        <strong>40&euro;&ndash;80&euro;</strong> por eixo, discos + pastilhas{" "}
        <strong>100&euro;&ndash;200&euro;</strong> por eixo.
      </p>

      <h3>3. Emissoes</h3>
      <p>
        Para carros a gasolina, e medido o nivel de CO (monoxido de carbono)
        e hidrocarbonetos. Para diesel, e a opacidade dos fumos. Um catalisador
        desgastado, velas fora de prazo, filtro de ar sujo ou um filtro de
        particulas (DPF) entupido sao as causas mais comuns de reprovacao
        por emissoes. Dica importante: faca uma viagem de pelo menos 30
        minutos na autoestrada antes da IPO para aquecer o catalisador e
        regenerar o DPF. Isto pode fazer a diferenca entre passar e reprovar.
      </p>

      <h3>4. Pneus</h3>
      <p>
        O piso minimo legal e de <strong>1,6mm</strong> em toda a superficie
        de contacto. Verifique tambem a presenca de cortes, bolhas ou
        deformacoes laterais. Todos os pneus do mesmo eixo devem ser do
        mesmo tipo e dimensao. Pneus misturados (radiais com diagonais, por
        exemplo) sao motivo de reprovacao. Custo: entre{" "}
        <strong>40&euro; e 120&euro;</strong> por pneu, incluindo montagem
        e equilibragem.
      </p>

      <h3>5. Direcao e suspensao</h3>
      <p>
        A folga na direcao, o estado dos amortecedores, molas, rotulas e
        barras estabilizadoras sao verificados. Um amortecedor que pinga
        oleo ou uma mola partida sao reprovacao imediata. O inspector
        tambem verifica a folga nas rotulas e terminais de direcao. Se
        sentir o carro instavel nas curvas ou ouvir batidos ao passar em
        lombas, investigue antes da IPO.
      </p>

      <h3>6. Visibilidade</h3>
      <p>
        O para-brisas nao pode ter fissuras no campo de visao do condutor.
        As escovas limpa-para-brisas devem funcionar corretamente e o
        deposito do limpa-vidros deve ter liquido. Os espelhos retrovisores
        (interior e exteriores) devem estar intactos e bem fixos. Uma fissura
        no para-brisas na zona central custa entre{" "}
        <strong>80&euro; e 300&euro;</strong> para reparar ou substituir.
      </p>

      <h3>7. Estrutura e carrocaria</h3>
      <p>
        Corrosao excessiva no chassis ou nos pontos de fixacao dos cintos
        de seguranca e motivo de reprovacao. Verifique os subquadros, as
        longarinas e a zona em redor dos apoios dos amortecedores. Nos
        carros com mais de 10 anos, esta e uma area critica, especialmente
        em regioes costeiras onde a maresia acelera a oxidacao.
      </p>

      <h3>8. Seguranca</h3>
      <p>
        Cintos de seguranca (funcionamento e estado das fivelas), airbags
        (luz de aviso apagada), fechos das portas, buzina, conta-quilometros
        e numero de chassis legivel. Verifique que a luz do airbag apaga
        apos o arranque &mdash; se ficar acesa, ha um problema que precisa
        de diagnostico. O AutoDiag EU pode ler os codigos de erro do sistema
        de airbag atraves do OBD2.
      </p>

      <h2>Como o OBD2 ajuda a preparar a IPO</h2>
      <p>
        Um dos maiores aliados na preparacao da IPO e o leitor OBD2. Com o
        AutoDiag EU, pode verificar todos os codigos de erro ativos e
        pendentes antes de ir a inspecao. A luz de avaria do motor acesa e
        reprovacao automatica na maioria dos centros de inspecao. Mas mesmo
        que a luz esteja apagada, podem existir codigos pendentes que indicam
        problemas. Alem disso, a aplicacao mostra dados em tempo real como
        a temperatura do motor, os valores das sondas lambda e a pressao do
        sistema de combustivel &mdash; tudo informacao util para antecipar
        problemas de emissoes.
      </p>

      <h2>Calendario ideal de preparacao</h2>
      <ul>
        <li>
          <strong>4 semanas antes</strong>: Faca uma leitura OBD2 completa.
          Verifique codigos de erro e dados em tempo real. Identifique
          problemas que precisam de intervencao.
        </li>
        <li>
          <strong>2 semanas antes</strong>: Faca as reparacoes necessarias.
          Substitua lampadas, verifique niveis e corrija codigos de erro.
        </li>
        <li>
          <strong>1 semana antes</strong>: Faca uma segunda leitura OBD2 para
          confirmar que os codigos foram resolvidos. Verifique pneus e luzes.
        </li>
        <li>
          <strong>No dia</strong>: Faca uma viagem de 30 minutos antes da
          inspecao. Verifique que nenhuma luz de aviso esta acesa no painel.
        </li>
      </ul>

      <h2>Os 5 motivos de reprovacao mais frequentes</h2>
      <p>
        Com base nos dados dos centros de inspecao portugueses, os cinco
        motivos mais comuns de reprovacao sao:
      </p>
      <ol>
        <li>
          <strong>Emissoes excessivas</strong> &mdash; Catalisador desgastado,
          DPF entupido ou sonda lambda defeituosa. Representa cerca de 20%
          das reprovacoes.
        </li>
        <li>
          <strong>Iluminacao defeituosa</strong> &mdash; Lampadas fundidas,
          farois desalinhados ou luzes partidas. Cerca de 18% das reprovacoes.
        </li>
        <li>
          <strong>Travoes desgastados</strong> &mdash; Pastilhas abaixo do
          minimo, discos gastos ou desequilibrio entre lados. Cerca de 15%.
        </li>
        <li>
          <strong>Pneus abaixo do limite</strong> &mdash; Piso inferior a
          1,6mm ou danos laterais. Cerca de 12%.
        </li>
        <li>
          <strong>Suspensao com folga</strong> &mdash; Amortecedores gastos,
          rotulas com folga ou molas partidas. Cerca de 10%.
        </li>
      </ol>

      <h2>Em resumo</h2>
      <p>
        Preparar a IPO nao precisa de ser um pesadelo. Com esta lista de
        verificacao e a ajuda do AutoDiag EU, pode chegar ao centro de
        inspecao com confianca. O segredo e a antecipacao: verifique o
        seu carro com pelo menos um mes de antecedencia, resolva os
        problemas identificados e faca uma segunda verificacao antes do
        dia marcado. A IPO custa entre 30&euro; e 35&euro; &mdash;
        reprovar e ter de voltar custa o dobro, sem contar com o stress.
        Investir alguns minutos numa leitura OBD2 pode poupar-lhe tempo,
        dinheiro e dores de cabeca.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artigo 3 — Os 5 ruidos do motor que nao deve ignorar
   ================================================================ */

export function ArticlePT5RuidosMotor() {
  return (
    <ArticleLayout
      title="Os 5 ruidos do motor que nao deve ignorar"
      date="2026-03-05"
      author="Reda Kaouani"
      readingTime={7}
      category="Diagnostico"
    >
      <p>
        O motor do seu carro fala consigo todos os dias. O problema e que a
        maioria dos condutores nao sabe interpretar o que ele esta a dizer.
        Um ruido estranho que aparece de repente &mdash; ou que se instala
        gradualmente &mdash; pode ser um sinal precoce de uma avaria que,
        se detetada a tempo, custa pouco a resolver. Se ignorada, pode
        transformar-se numa reparacao de centenas ou ate milhares de euros.
        Neste artigo, descrevemos os cinco ruidos mais comuns do motor e
        explicamos o que cada um significa.
      </p>

      <h2>1. Estalido ritmico ao ralenti &mdash; balanceiros ou taquets</h2>
      <p>
        Um estalido metalico repetitivo, que acompanha a rotacao do motor,
        e normalmente um sinal de balanceiros ou taquets hidraulicos
        desgastados. Este som e mais audivel quando o motor esta frio e
        tende a diminuir a medida que o oleo aquece e ganha fluidez. Em
        muitos Renault com motor 1.6 e Volkswagen com motor 1.4 TSI, este
        ruido e relativamente comum apos os 80 000 km.
      </p>
      <p>
        <strong>Gravidade:</strong> Media. Nao e uma emergencia, mas nao
        deve ser ignorado durante meses. Os taquets hidraulicos dependem
        da pressao do oleo para funcionar corretamente &mdash; se o ruido
        persistir apos a troca de oleo, pode indicar desgaste mecanico.
      </p>
      <p>
        <strong>Custo estimado:</strong> Troca de oleo e filtro:{" "}
        <strong>40&euro;&ndash;80&euro;</strong>. Substituicao de taquets:{" "}
        <strong>200&euro;&ndash;500&euro;</strong>, dependendo do motor e
        da acessibilidade.
      </p>

      <h2>2. Ronco grave ao conduzir &mdash; rolamento de roda</h2>
      <p>
        Se ouve um ronco grave e constante que aumenta com a velocidade e
        muda de intensidade quando vira o volante (mais forte numa curva,
        mais fraco na outra), provavelmente tem um rolamento de roda
        desgastado. Este som e muitas vezes confundido com o ruido dos pneus,
        mas distingue-se porque muda claramente com a direcao da curva.
        Os rolamentos de roda sao submetidos a enormes esforcos, especialmente
        em estradas irregulares e com lombas de reducao de velocidade.
      </p>
      <p>
        <strong>Gravidade:</strong> Alta. Um rolamento de roda que colapsa
        pode bloquear a roda em andamento. Se o ronco for muito pronunciado,
        evite viagens longas e leve o carro a oficina o mais rapidamente
        possivel.
      </p>
      <p>
        <strong>Custo estimado:</strong>{" "}
        <strong>120&euro;&ndash;300&euro;</strong> por roda, incluindo peca
        e mao-de-obra. Nos BMW e veiculos premium, o custo pode chegar aos
        400&euro;&ndash;500&euro;.
      </p>

      <h2>3. Assobio agudo na aceleracao &mdash; fuga de ar ou turbo</h2>
      <p>
        Um assobio agudo que aparece ao acelerar e desaparece ao largar o
        acelerador aponta normalmente para uma fuga no sistema de admissao
        ou para um problema no turbocompressor. Nos motores turbo diesel
        (muito comuns em Portugal), as tubagens intercooler e as braceletes
        sao pontos frequentes de fuga. Se o assobio for acompanhado de
        perda de potencia, o problema e quase certamente uma fuga de
        pressao no circuito do turbo.
      </p>
      <p>
        Nos motores atmosfericos (sem turbo), um assobio na admissao pode
        indicar uma junta do coletor de admissao desgastada ou uma mangueira
        de vacuo partida. Estes problemas afetam a mistura ar/combustivel
        e podem provocar codigos de erro como o P0171 (mistura pobre).
      </p>
      <p>
        <strong>Gravidade:</strong> Media a alta. Uma fuga de pressao no
        turbo reduz o desempenho e pode danificar o turbo a longo prazo.
      </p>
      <p>
        <strong>Custo estimado:</strong> Tubagem/bracelet:{" "}
        <strong>30&euro;&ndash;100&euro;</strong>. Reparacao do turbo:{" "}
        <strong>800&euro;&ndash;2 000&euro;</strong>. Substituicao completa
        do turbo: <strong>1 500&euro;&ndash;3 500&euro;</strong>.
      </p>

      <h2>4. Pancada forte e irregular &mdash; biela ou detonacao</h2>
      <p>
        Uma pancada metalica forte e profunda, que piora com a aceleracao,
        e um dos sons mais preocupantes que pode ouvir do motor. Pode
        indicar um problema de biela (rod knock), desgaste dos casquilhos
        da cambota ou detonacao. A detonacao (knocking) acontece quando a
        mistura ar/combustivel se inflama prematuramente &mdash; em vez de
        queimar de forma controlada, explode. Isto cria ondas de choque
        dentro do cilindro que danificam os pistoes e as bielas.
      </p>
      <p>
        Nos motores diesel, uma pancada ao ralenti pode tambem indicar
        injetores defeituosos com pulverizacao irregular. Se o som aparecer
        de repente e for forte, pare o motor imediatamente.
      </p>
      <p>
        <strong>Gravidade:</strong> Critica. Se for problema de biela ou
        casquilhos, conduzir pode destruir o motor em poucos quilometros.
      </p>
      <p>
        <strong>Custo estimado:</strong> Injetores:{" "}
        <strong>150&euro;&ndash;400&euro;</strong> por unidade. Casquilhos
        de biela: <strong>800&euro;&ndash;2 500&euro;</strong>. Motor
        recondicionado: <strong>2 000&euro;&ndash;5 000&euro;</strong>.
      </p>

      <h2>5. Rangido ou guincho ao arrancar &mdash; correia de acessorios</h2>
      <p>
        Um rangido agudo ao ligar o motor, que normalmente desaparece
        passados alguns segundos, e quase sempre causado pela correia de
        acessorios (tambem chamada correia de alternador ou correia
        trapezoidal). Esta correia acciona o alternador, a direcao
        assistida, o compressor do ar condicionado e, em alguns carros,
        a bomba de agua. Com o tempo e a exposicao ao calor, a correia
        perde aderencia e comeca a patinar nos roletes, produzindo o
        caracteristico guincho.
      </p>
      <p>
        Nao confundir com o ruido da correia de distribuicao, que e mais
        grave e normalmente manifesta-se como um estalido ritmico e nao
        como um rangido. A correia de distribuicao, se partir, pode causar
        danos catastroficos ao motor (valvulas dobradas, pistoes danificados).
      </p>
      <p>
        <strong>Gravidade:</strong> Baixa a media para a correia de
        acessorios. Critica se for a correia de distribuicao.
      </p>
      <p>
        <strong>Custo estimado:</strong> Correia de acessorios:{" "}
        <strong>40&euro;&ndash;120&euro;</strong>. Kit de distribuicao
        completo (correia + tensor + bomba de agua):{" "}
        <strong>300&euro;&ndash;800&euro;</strong>, consoante o motor.
      </p>

      <h2>Como o Scan Sonoro pode ajudar</h2>
      <p>
        O AutoDiag EU inclui uma funcionalidade chamada{" "}
        <strong>Scan Sonoro</strong> &mdash; uma analise de audio por
        inteligencia artificial que ouve o som do seu motor atraves do
        microfone do telemovel. O algoritmo de IA foi treinado para
        reconhecer 11 classes de sons anomalos, incluindo os cinco
        descritos neste artigo. Em poucos segundos, recebe uma avaliacao
        com o nivel de confianca, a causa provavel e a recomendacao de
        acao. Nao substitui a opiniao de um mecanico, mas funciona como
        um primeiro filtro inteligente que lhe diz se vale a pena ir
        a oficina ou se pode ficar descansado.
      </p>

      <h2>Em resumo</h2>
      <p>
        Os ruidos do motor nao sao apenas irritantes &mdash; sao avisos.
        Um estalido pode custar 50&euro; se resolvido a tempo, ou 2 000&euro;
        se ignorado. Um ronco que parece inofensivo pode significar um
        rolamento de roda prestes a ceder. A regra e simples: se ouvir
        algo diferente do habitual, investigue. O seu ouvido e o primeiro
        sensor de diagnostico &mdash; e com o Scan Sonoro do AutoDiag EU,
        pode ter uma segunda opiniao em segundos.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artigo 4 — OBD2: tudo o que precisa saber em 5 minutos
   ================================================================ */

export function ArticlePTOBD2Compreender() {
  return (
    <ArticleLayout
      title="OBD2: tudo o que precisa saber em 5 minutos"
      date="2026-02-28"
      author="Reda Kaouani"
      readingTime={6}
      category="Tutorial"
    >
      <p>
        Se tem um carro fabricado depois de 2001, ele ja fala uma linguagem
        digital chamada OBD2. Mas a maioria dos condutores nunca ouviu falar
        deste sistema &mdash; apesar de ser uma das ferramentas mais uteis
        para compreender a saude do veiculo. Neste artigo, explicamos tudo
        o que precisa de saber sobre o OBD2 em linguagem simples, sem jargao
        tecnico desnecessario.
      </p>

      <h2>Uma breve historia</h2>
      <p>
        Tudo comecou na California nos anos 80. A CARB (California Air
        Resources Board) exigiu que os fabricantes de automoveis instalassem
        sistemas de autodiagnostico nos veiculos para monitorizar as emissoes
        poluentes. A primeira versao &mdash; OBD1 &mdash; era rudimentar e
        cada fabricante usava o seu proprio protocolo e conector. Resultado:
        era preciso uma ferramenta diferente para cada marca de carro.
      </p>
      <p>
        Em 1996, os Estados Unidos impuseram o OBD2, com um conector
        padronizado de 16 pinos e protocolos de comunicacao universais. A
        Europa seguiu o exemplo com o EOBD (European On-Board Diagnostics),
        obrigatorio desde 2001 para carros a gasolina e 2004 para diesel.
        Hoje em dia, qualquer carro vendido em Portugal, seja um Renault
        Clio ou um BMW Serie 3, possui este sistema.
      </p>

      <h2>O que faz a centralina (ECU)?</h2>
      <p>
        A centralina eletrica do motor (ECU &mdash; Engine Control Unit) e
        o cerebro do seu carro. Recebe informacoes de dezenas de sensores em
        tempo real: temperatura do liquido de arrefecimento, posicao do
        acelerador, massa de ar aspirada, pressao no coletor de admissao,
        velocidade do veiculo, rotacoes do motor (RPM), sinal das sondas
        lambda, e muitos mais. Com base nestes dados, a ECU ajusta
        continuamente a injecao de combustivel, o avanco da ignicao e o
        funcionamento de sistemas auxiliares como o EGR (recirculacao de
        gases de escape).
      </p>
      <p>
        Quando um sensor envia um valor fora do intervalo esperado, a ECU
        regista um codigo de erro (DTC) e, dependendo da gravidade, acende
        a luz de avaria no painel. E precisamente estes codigos que o OBD2
        permite ler.
      </p>

      <h2>O que sao PIDs?</h2>
      <p>
        PID significa Parameter ID &mdash; sao os identificadores dos dados
        que a centralina pode partilhar em tempo real. Por exemplo, o PID
        0x0C corresponde as rotacoes do motor (RPM), o PID 0x0D a velocidade
        do veiculo e o PID 0x05 a temperatura do liquido de arrefecimento.
        Existem centenas de PIDs definidos no padrao SAE J1979, mas cada
        veiculo suporta apenas um subconjunto. O AutoDiag EU deteta
        automaticamente quais os PIDs suportados pelo seu carro e apresenta
        apenas os dados relevantes.
      </p>

      <h2>Os 5 protocolos de comunicacao</h2>
      <p>
        O conector OBD2 pode comunicar atraves de cinco protocolos diferentes.
        O seu carro usa apenas um deles, e a ferramenta de diagnostico tem
        de deteta-lo automaticamente:
      </p>
      <ul>
        <li>
          <strong>ISO 9141-2</strong> &mdash; Usado em veiculos europeus mais
          antigos, especialmente Volkswagen, Audi, BMW e Mercedes dos anos
          90 e inicio dos 2000.
        </li>
        <li>
          <strong>ISO 14230 (KWP2000)</strong> &mdash; Evolucao do ISO 9141,
          comum em veiculos europeus e asiaticos do inicio dos anos 2000.
        </li>
        <li>
          <strong>SAE J1850 PWM</strong> &mdash; Usado principalmente pela
          Ford (America do Norte e Europa).
        </li>
        <li>
          <strong>SAE J1850 VPW</strong> &mdash; Usado principalmente pela
          General Motors (Opel/Vauxhall na Europa).
        </li>
        <li>
          <strong>ISO 15765 (CAN)</strong> &mdash; O protocolo moderno,
          obrigatorio em todos os veiculos vendidos na UE desde 2008. E o
          mais rapido e fiavel, e e o que a grande maioria dos carros
          atuais utiliza.
        </li>
      </ul>

      <h2>Dongles: o que precisa para ler os dados</h2>
      <p>
        Para aceder aos dados OBD2, precisa de um dongle &mdash; um pequeno
        dispositivo que se liga a ficha OBD2 do carro e comunica com o seu
        telemovel via Bluetooth. O mais popular e o <strong>ELM327</strong>,
        um chip que funciona como tradutor entre os protocolos OBD2 e o
        Bluetooth. Existem dezenas de versoes no mercado, mas nem todas sao
        iguais. Recomendamos o <strong>Vgate iCar Pro</strong> (cerca de
        25&euro;), que usa Bluetooth Low Energy (BLE) e e compativel com
        a maioria dos veiculos europeus.
      </p>
      <p>
        Atencao aos dongles muito baratos (5&euro;&ndash;10&euro;): muitos
        usam chips clonados que nao suportam todos os protocolos e podem
        dar leituras erradas. Um bom dongle e um investimento que dura
        anos e funciona em qualquer carro.
      </p>

      <h2>O que pode e nao pode fazer com o OBD2</h2>
      <p>
        Com um leitor OBD2 como o AutoDiag EU, pode:
      </p>
      <ul>
        <li>Ler e apagar codigos de erro (DTCs)</li>
        <li>Ver dados em tempo real (RPM, temperatura, velocidade, etc.)</li>
        <li>Verificar o estado do sistema de emissoes antes da IPO</li>
        <li>Monitorizar o desempenho do motor ao longo do tempo</li>
        <li>Identificar problemas antes de irem a oficina</li>
      </ul>
      <p>
        O que o OBD2 padrao <strong>nao</strong> faz:
      </p>
      <ul>
        <li>Aceder a sistemas especificos do fabricante (airbags, ABS avancado, caixa automatica) &mdash; para isso sao necessarios protocolos proprietarios</li>
        <li>Programar chaves ou fazer adaptacoes de centralinas</li>
        <li>Substituir um diagnostico completo na oficina com equipamento profissional</li>
      </ul>

      <h2>Porque e que isto interessa ao condutor comum?</h2>
      <p>
        Imagine que a luz de avaria se acende a um domingo a noite. Sem um
        leitor OBD2, so tem duas opcoes: ignorar e esperar que nao seja
        grave, ou ligar para o reboque. Com o AutoDiag EU, pode saber em
        dois minutos se e um problema critico (parar imediatamente) ou algo
        menor (pode esperar ate segunda-feira). Pode tambem preparar a sua
        IPO sem surpresas, monitorizar o carro apos uma reparacao para
        confirmar que o problema foi resolvido, ou simplesmente compreender
        melhor o veiculo que conduz todos os dias.
      </p>
      <p>
        O OBD2 nao transforma ninguem em mecanico. Mas transforma qualquer
        condutor num utilizador mais informado &mdash; e isso, por si so,
        ja vale os 25&euro; de um dongle e os dois minutos de uma leitura.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artigo 5 — AutoDiag EU vs oficina: quanto poupa realmente?
   ================================================================ */

export function ArticlePTAutodiagVsOficina() {
  return (
    <ArticleLayout
      title="AutoDiag EU vs oficina: quanto poupa realmente?"
      date="2026-02-20"
      author="Reda Kaouani"
      readingTime={8}
      category="Poupancas"
    >
      <p>
        Ir a oficina para saber o que o carro tem e uma realidade que todos
        os condutores conhecem. O que muitos nao sabem e quanto pagam
        exatamente por esse servico &mdash; e quanto poderiam poupar fazendo
        uma primeira triagem em casa com as ferramentas certas. Neste artigo,
        comparamos o custo real de um diagnostico na oficina com o custo
        do AutoDiag EU, pais a pais, cenario a cenario.
      </p>

      <h2>Quanto custa um diagnostico na oficina?</h2>
      <p>
        Os precos variam consideravelmente consoante o pais, o tipo de
        oficina (independente vs concessionario) e a complexidade do
        diagnostico. Aqui estao os valores medios que levantamos:
      </p>
      <ul>
        <li>
          <strong>Portugal</strong> &mdash; Leitura de codigos:{" "}
          <strong>15&euro;&ndash;40&euro;</strong>. Diagnostico completo
          (com interpretacao e recomendacao):{" "}
          <strong>40&euro;&ndash;80&euro;</strong>. Concessionario:{" "}
          <strong>60&euro;&ndash;120&euro;</strong>.
        </li>
        <li>
          <strong>Franca</strong> &mdash; Leitura de codigos:{" "}
          <strong>20&euro;&ndash;50&euro;</strong>. Diagnostico completo:{" "}
          <strong>50&euro;&ndash;100&euro;</strong>. Concessionario:{" "}
          <strong>80&euro;&ndash;150&euro;</strong>.
        </li>
        <li>
          <strong>Alemanha</strong> &mdash; Leitura de codigos:{" "}
          <strong>25&euro;&ndash;60&euro;</strong>. Diagnostico completo:{" "}
          <strong>60&euro;&ndash;120&euro;</strong>. Concessionario:{" "}
          <strong>100&euro;&ndash;180&euro;</strong>.
        </li>
        <li>
          <strong>Suica</strong> &mdash; Leitura de codigos:{" "}
          <strong>40&ndash;80 CHF</strong>. Diagnostico completo:{" "}
          <strong>80&ndash;150 CHF</strong>. Concessionario:{" "}
          <strong>120&ndash;250 CHF</strong>.
        </li>
        <li>
          <strong>Espanha</strong> &mdash; Leitura de codigos:{" "}
          <strong>15&euro;&ndash;35&euro;</strong>. Diagnostico completo:{" "}
          <strong>35&euro;&ndash;75&euro;</strong>. Concessionario:{" "}
          <strong>50&euro;&ndash;120&euro;</strong>.
        </li>
      </ul>
      <p>
        E importante notar que estes precos sao <em>apenas para o
        diagnostico</em> &mdash; a reparacao e cobrada a parte.
      </p>

      <h2>Cenario 1: A luz de avaria acende-se</h2>
      <p>
        A situacao mais classica. A luz do motor acende-se, e preciso
        saber o que e. Na oficina, paga entre 15&euro; e 40&euro; em
        Portugal so para saber o codigo de erro. Com o AutoDiag EU e um
        dongle de 25&euro; (investimento unico), faz a mesma leitura em
        casa, em dois minutos. A aplicacao traduz o codigo, explica a
        causa provavel e estima o custo da reparacao. Se o problema for
        menor (como um sensor de oxigenio envelhecido), poupa a deslocacao
        a oficina. Se for grave, vai a oficina ja sabendo o que esperar
        &mdash; o que lhe da poder de negociacao.
      </p>
      <p>
        <strong>Poupanca neste cenario:</strong>{" "}
        <strong>15&euro;&ndash;40&euro;</strong> por ocorrencia. Se lhe
        acontecer duas vezes por ano (media europeia), sao{" "}
        <strong>30&euro;&ndash;80&euro;</strong> poupados.
      </p>

      <h2>Cenario 2: Preparacao da IPO</h2>
      <p>
        A IPO em Portugal custa entre 30&euro; e 35&euro;. Reprovar e ter
        de voltar custa o dobro. Com o AutoDiag EU, pode fazer uma
        verificacao pre-inspecao completa &mdash; codigos de erro, emissoes,
        dados em tempo real &mdash; e corrigir problemas antes de ir ao
        centro de inspecao. Muitas oficinas cobram entre 25&euro; e 50&euro;
        por uma &ldquo;pre-inspecao&rdquo; que, na pratica, e pouco mais
        do que uma leitura OBD2 e uma inspecao visual rapida.
      </p>
      <p>
        <strong>Poupanca neste cenario:</strong>{" "}
        <strong>25&euro;&ndash;50&euro;</strong> da pre-inspecao, mais o
        custo de uma eventual reprovacao evitada (30&euro;&ndash;35&euro;).
        Total potencial: <strong>55&euro;&ndash;85&euro;</strong>.
      </p>

      <h2>Cenario 3: Ruido estranho no motor</h2>
      <p>
        Ouve um ruido e quer saber se e grave antes de ir a oficina. O
        Scan Sonoro do AutoDiag EU analisa o som do motor com inteligencia
        artificial e diz-lhe em segundos se e algo preocupante ou normal.
        Na oficina, so para ouvir e dar uma opiniao, muitos mecanicos
        cobram uma hora de mao-de-obra: entre{" "}
        <strong>30&euro; e 60&euro;</strong> em Portugal. Se a IA indicar
        que o som e normal (funcionamento tipico do motor), poupou uma
        deslocacao e o custo do diagnostico.
      </p>
      <p>
        <strong>Poupanca neste cenario:</strong>{" "}
        <strong>30&euro;&ndash;60&euro;</strong> por ocorrencia.
      </p>

      <h2>O calculo anual</h2>
      <p>
        Consideremos o condutor medio em Portugal. Ao longo de um ano, e
        provavel que enfrente pelo menos duas situacoes em que a luz de
        avaria se acende ou um ruido preocupante aparece, alem da
        preparacao anual para a IPO (em veiculos com mais de 8 anos). O
        custo total na oficina para estes diagnosticos situa-se entre{" "}
        <strong>80&euro; e 160&euro; por ano</strong>.
      </p>
      <p>
        O AutoDiag EU Premium custa{" "}
        <strong>55&euro; por ano</strong> (equivalente a 49 CHF). Isto
        inclui leituras OBD2 ilimitadas, Scan Sonoro ilimitado, IA
        mecanico, dados em tempo real completos, pre-IPO para 5 paises,
        historico ilimitado e exportacao de relatorios em PDF. E o dongle
        ELM327 e um custo unico de cerca de 25&euro;.
      </p>
      <p>
        <strong>Poupanca liquida anual:</strong> entre{" "}
        <strong>25&euro; e 105&euro;</strong>, dependendo da frequencia
        com que precisa de diagnosticar o carro. E isto sem contar com o
        valor da tranquilidade de poder verificar o carro a qualquer hora,
        em qualquer lugar, sem marcar hora na oficina.
      </p>

      <h2>E as outras aplicacoes?</h2>
      <p>
        O AutoDiag EU nao e a unica aplicacao de diagnostico OBD2 no
        mercado. Eis como se compara com as principais alternativas:
      </p>
      <ul>
        <li>
          <strong>Carly</strong> &mdash; Preco: 21&euro;&ndash;80&euro;/ano
          + dongle proprietario (59&euro;). Funcionalidades avancadas para
          BMW e VAG, mas sem analise de audio por IA e sem pre-IPO para
          Portugal. Excelente para utilizadores que querem codificacao
          avancada de funcoes.
        </li>
        <li>
          <strong>Car Scanner</strong> &mdash; Preco: gratuito com compras
          na aplicacao (6&euro;&ndash;25&euro;). Compativel com qualquer
          dongle ELM327. Interface tecnica orientada para entusiastas.
          Sem analise de audio, sem IA mecanico, sem contexto europeu
          adaptado.
        </li>
        <li>
          <strong>OBDeleven</strong> &mdash; Preco: gratuito + creditos
          (1&euro; por funcao avancada) + dongle proprietario (50&euro;).
          Forte no grupo VAG (Volkswagen, Audi, Skoda, SEAT). Sem
          cobertura multi-marca significativa fora do grupo VAG.
        </li>
      </ul>
      <p>
        O que distingue o AutoDiag EU e a combinacao unica de{" "}
        <strong>scan audio por IA</strong>,{" "}
        <strong>leitura OBD2 multi-marca</strong>,{" "}
        <strong>IA mecanico personalizada</strong> e{" "}
        <strong>pre-inspecao adaptada a 5 paises europeus</strong> &mdash;
        tudo numa unica aplicacao, a um preco unico. Nenhuma outra
        aplicacao oferece esta combinacao.
      </p>

      <h2>O que o AutoDiag EU nao substitui</h2>
      <p>
        Sejamos honestos: uma aplicacao nao substitui um mecanico. Nao
        aperta parafusos, nao troca pecas, nao faz alinhamentos. E ha
        diagnosticos complexos &mdash; problemas eletricos intermitentes,
        avarias em sistemas proprietarios, danos mecanicos internos &mdash;
        que exigem equipamento profissional e experiencia pratica. O
        AutoDiag EU e a <strong>primeira linha de triagem</strong>: diz-lhe
        se precisa de ir a oficina, quando, e com que urgencia. E quando
        la chega, chega informado &mdash; sabe o que o carro tem, sabe
        quanto deve custar, e sabe se o mecanico esta a ser justo consigo.
      </p>

      <h2>Em resumo</h2>
      <p>
        Uma aplicacao de diagnostico como o AutoDiag EU custa cerca de{" "}
        <strong>55&euro; por ano</strong>. Um unico diagnostico na oficina
        custa entre <strong>15&euro; e 80&euro;</strong>. Ao longo de um
        ano, o condutor medio portugues poupa entre{" "}
        <strong>25&euro; e 105&euro;</strong>, com acesso 24 horas por dia
        a ferramentas de diagnostico, analise de audio por IA, dados em
        tempo real e orientacao clara em portugues.
      </p>
      <p>
        Substitui a oficina por completo? Nao, e nao deve tentar
        substituir. Os mecanicos trazem experiencia pratica insubstituivel.
        Mas uma aplicacao de diagnostico e a defesa perfeita na primeira
        linha &mdash; detetando problemas cedo, evitando deslocacoes
        desnecessarias a oficina e garantindo que, quando la vai, vai como
        cliente informado e nao como cliente preocupado. A{" "}
        <strong>55&euro; por ano</strong>, e um dos melhores investimentos
        que pode fazer como proprietario de um carro em Portugal.
      </p>
    </ArticleLayout>
  );
}
