import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTVisaoIAFugasSobCarro() {
  const faq: FaqItem[] = [
    {
      q: "Como distingue a Visao IA uma fuga de oleo de uma de liquido de refrigeracao?",
      a: "O modelo analisa tres sinais em simultaneo: a cor da mancha (castanho-preto para oleo motor, verde/laranja/rosa para refrigerante), a viscosidade estimada pela forma da aureola, e a posicao sob o veiculo. Uma mancha verde fluor em frente ao motor = refrigerante a 95&nbsp;%. Uma mancha castanho-preta ao centro = oleo motor.",
    },
    {
      q: "A partir de que tamanho devo preocupar-me?",
      a: "Abaixo de 2&nbsp;cm falamos de transudacao: vigiar, nao urgente. Entre 2 e 10&nbsp;cm, a junta ou tubo cansa a serio, preveja intervencao em 15 dias. Acima de 10&nbsp;cm ou se a mancha reaparece em horas: nao ande, reboque aconselhado.",
    },
    {
      q: "Posso andar se vir uma gota por dia sob o carro?",
      a: "Sim, mas verifique o nivel afetado de tres em tres dias. Uma gota de oleo por dia equivale a uns 30&nbsp;ml por mes: tem de compensar. Se for liquido de travoes, pare de andar imediatamente, o circuito nao tolera qualquer perda.",
    },
    {
      q: "E preciso por algo sob o carro para a detecao?",
      a: "Um simples cartao branco A4 posto no chao antes de estacionar toda a noite chega. De manha fotografa o cartao: a IA gere melhor os contrastes sobre fundo claro e mede a mancha com precisao.",
    },
    {
      q: "A Visao IA substitui uma visita a oficina?",
      a: "Nao, avisa-o. Diz-lhe o que foge, onde e com que gravidade, e encaminha para a reparacao certa. A oficina continua indispensavel para intervir, mas chega com um dossier claro em vez de um orcamento aberto.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Visao IA: detetar fugas sob o seu carro com um telemovel"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Visao IA"
      >
        <p>
          Faz marcha-atras de manha e ve uma mancha no betao. Primeiro
          reflexo: apertar os olhos e perguntar se ja estava ontem.
          Segundo reflexo, a partir de agora: tirar o telemovel. A
          Visao IA do AutoDiag EU identifica em segundos o que foge,
          onde e com que severidade. Sem ser mecanico, sem cheirar o
          liquido nem molhar um dedo.
        </p>

        <h2>A foto que vale um diagnostico</h2>
        <p>
          O principio e simples: fotografa a mancha no chao, a app
          analisa tres dimensoes em paralelo. Primeira: a cor dominante
          calibrada pela luz ambiente. Segunda: textura e viscosidade
          estimadas pela forma do bordo e da aureola. Terceira: a
          posicao sob o veiculo — o utilizador indica onde estava a
          roda da frente esquerda e o modelo triangula a origem
          provavel.
        </p>

        <h2>O catalogo cromatico dos liquidos</h2>
        <p>
          Cada liquido de um carro tem a sua assinatura. O oleo motor
          comeca ambar e torna-se castanho-preto apos alguns milhares
          de quilometros: gorduroso, denso, cai sob o bloco. O
          refrigerante existe em verde fluor, laranja, rosa ou amarelo
          conforme a quimica (IAT, OAT, HOAT) — fluido, ligeiramente
          adocicado, perto do radiador ou tubos. O liquido de travoes
          e transparente a amarelo palha, muito fluido, foge perto das
          rodas ou do cilindro mestre. A transmissao automatica e
          vermelha cereja nova, castanha usada. A direcao assistida e
          vermelha ambar. O lava-vidros azul claro. Essa e a paleta.
        </p>

        <h2>A gravidade pelo caudal</h2>
        <p>
          Duas manchas identicas nao contam a mesma historia. Uma
          mancha de 10&nbsp;cm apos 8 horas estacionado e um alerta
          serio: cerca de 200&nbsp;ml por noite. A mesma acumulada em
          tres semanas e uma transudacao a vigiar. Por isso a app
          pergunta ha quanto tempo o carro esta estacionado. Com esse
          dado calcula um caudal em ml/h e classifica em quatro
          niveis: transudacao, fuga lenta, fuga moderada, fuga critica.
        </p>

        <h2>Apanhar a junta antes da quebra</h2>
        <p>
          O interesse desta detecao precoce nao e estetico. Um retentor
          de cambota a transudar custa 180 a 350&nbsp;EUR a trocar.
          Ignorado seis meses, chega ao volante motor e contamina a
          embraiagem: fatura salta para 1400&nbsp;EUR. Um tubo de
          radiador a gotejar custa 60&nbsp;EUR. O mesmo tubo que
          rebenta na autoestrada sobreaquece o motor e parte a junta
          da cabeca: 2000&nbsp;EUR minimo. A Visao IA da uma ou duas
          semanas de avanco.
        </p>

        <h2>Quando andar, quando rebocar</h2>
        <p>
          O sistema da uma recomendacao clara no fim da analise.
          Transudacao ligeira: andar normalmente e passar na oficina
          durante a semana. Fuga lenta: verificar nivel antes de cada
          trajeto, reparacao em 15 dias. Fuga moderada: trajetos ao
          estritamente necessario, reparacao em 48 horas. Fuga critica
          de liquido de travoes ou refrigerante importante: nao andar,
          reboque obrigatorio. Mesma logica que o{" "}
          <Link href="/pt/codes/p0128">codigo P0128</Link> — antecipar
          custa sempre menos.
        </p>

        <h2>O que a foto nao pode fazer</h2>
        <p>
          A Visao IA identifica liquido e gravidade, mas nao substitui
          um diagnostico mecanico completo. Nao diz qual junta
          exatamente esta em causa — sera precisa inspecao em
          elevador. Nao deteta fugas internas que nao saem ao chao,
          como uma junta de cabeca que manda refrigerante para o oleo.
          Para esses casos, o{" "}
          <Link href="/pt/blog/o-seu-motor-fala-detecao-avarias-pelo-som">
            Scan Sonoro motor
          </Link>{" "}
          toma o testemunho.
        </p>

        <h2>O protocolo que funciona</h2>
        <p>
          O metodo com melhores resultados: estacione em chao claro,
          liso e seco. Se o chao for escuro, deslize um cartao branco
          A4 sob o veiculo antes de desligar o motor. Deixe repousar
          duas horas minimo, idealmente toda a noite. De manha,
          agache-se a um metro, enquadre a mancha com uma referencia
          no chao (moeda, chave) para a escala. Lance o scan. Em tres
          segundos sabe o que foge. Faca a foto da mesma forma na
          semana seguinte para seguir a evolucao.
        </p>

        <h2>Combinar com o checkup mensal</h2>
        <p>
          A detecao de fugas e a primeira etapa de um{" "}
          <Link href="/pt/blog/checkup-visual-ia-5-pontos-veiculo-saudavel">
            checkup visual em cinco pontos
          </Link>{" "}
          que pode fazer em cinco minutos por mes. Outros pontos:
          desgaste de pneus, pastilhas atraves dos raios, niveis sob o
          capot, iluminacao exterior. Se tambem tiver dongle OBD2,
          pense no{" "}
          <Link href="/pt/codes/p0420">codigo P0420</Link> que
          frequentemente acompanha uma fuga de oleo que atingiu o
          catalisador. As duas tecnologias — Visao e Scan Sonoro —
          completam-se.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
