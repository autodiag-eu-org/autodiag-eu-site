import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTComprarUsadoVerifs() {
  const faq: FaqItem[] = [
    {
      q: "Qual a verificacao mais importante antes de comprar?",
      a: "O scan OBD2 completo, seguido imediatamente de um Scan Sonoro do motor. O primeiro revela codigos ocultos e valores de envelhecimento (lambda, catalisador, fuel trims). O segundo deteta desgastes mecanicos que o vendedor nao pode ocultar nem apagando codigos. Juntos, dao uma foto fiavel da saude real do veiculo em menos de dez minutos.",
    },
    {
      q: "Pode-se apagar uma luz mesmo antes da venda?",
      a: "Sim, e muitos vendedores pouco escrupulosos fazem-no. Mas alguns codigos regressam apos poucos quilometros, e sobretudo os valores de readiness (monitores OBD2) ficam todos a zero. Um vendedor honesto nao apaga os codigos mesmo antes da visita: os monitores estao prontos, o que significa que a centralina teve tempo de reinicializar apos as reparacoes.",
    },
    {
      q: "Como detetar um conta-quilometros manipulado?",
      a: "Cruze tres fontes: o livro de manutencao com datas e quilometragens, o historico IPO ou equivalente, e a quilometragem real medida pelo scanner OBD2 em certas centralinas (ABS, caixa). Uma diferenca superior a 5000&nbsp;km entre fontes e um sinal claro. As maiores manipulacoes ultrapassam os 50000&nbsp;km.",
    },
    {
      q: "Devo pagar uma pre-compra num mecanico?",
      a: "Para um carro acima dos 10000&nbsp;EUR, sim, conte 100 a 200&nbsp;EUR. Abaixo disso, um scan completo com a app mais um teste de estrada cobre 85&nbsp;% dos casos. Se tiver uma duvida especifica (embraiagem, caixa), passar por uma oficina especialista da marca continua a ser tranquilizador.",
    },
    {
      q: "Que documentos exigir imperativamente?",
      a: "Documento unico automovel original, inspecao IPO de menos de 6 meses, livro de manutencao, faturas das grandes intervencoes (distribuicao, embraiagem, turbo). Para um carro importado, verifique que o certificado de conformidade europeu esta presente. Recuse qualquer compra sem estes documentos basicos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Comprar carro usado: as verificacoes essenciais em 2026"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Compra usado"
      >
        <p>
          O mercado de usados e uma armadilha. Os anuncios brilham, os
          vendedores sao amaveis, as fotos favorecem, e no entanto um
          comprador em cada tres lamenta a compra em seis meses segundo
          estudos europeus. A boa noticia: 80&nbsp;% dos maus negocios
          poderiam ter sido evitados com uma inspecao metodica de trinta
          minutos. Aqui a checklist completa que um comprador informado
          deve seguir em 2026.
        </p>

        <h2>Antes mesmo de se deslocar</h2>
        <p>
          Leia a matricula ou o VIN por OCR a partir do anuncio para
          verificar a conformidade basica: marca, modelo, ano,
          combustivel, motorizacao. Um vendedor que se engana no proprio
          carro e um sinal. Consulte os historicos disponiveis para
          verificar quilometragem, sinistros declarados e recalls do
          fabricante.
        </p>

        <h2>Inspecao visual da carrocaria</h2>
        <p>
          Comece por dar uma volta ao carro em plena luz do dia. Procure
          diferencas de tom entre painels (sinal de repintura), restos de
          massa sob plasticos de guarda-lamas, desalinhamentos de capot
          ou portas. Meca a espessura de tinta com medidor (15 a
          30&nbsp;EUR) &mdash; espessura acima de 250 microns denuncia
          reparacao importante. Verifique as porcas de suspensao no cavado
          da roda: se marcadas, o carro sofreu impacto.
        </p>

        <h2>Sob o carro: as fugas que falam</h2>
        <p>
          Olhe para o chao onde o carro esta estacionado. Uma mancha
          fresca castanha sinaliza fuga de oleo. Verde, rosa ou laranja:
          e liquido de refrigeracao. Vermelha: ATF de caixa automatica.
          Transparente: liquido de travoes ou condensado de ar
          condicionado (benigno). As cores falam.
        </p>

        <h2>Os pneus: uma historia em quatro capitulos</h2>
        <p>
          Os pneus contam a geometria e o desgaste. Desgaste central:
          sobrepressao cronica. Desgaste nos ombros: subpressao ou
          amortecedor morto. Desgaste em diagonal (cupping): suspensao ou
          paralelismo. Desgaste uniforme abaixo de 3&nbsp;mm: pneus a
          trocar, fator de negociacao. Verifique tambem as datas de
          fabrico (DOT): pneus com mais de 6 anos endurecem e perdem
          aderencia mesmo com piso.
        </p>

        <h2>Scan OBD2: a sinceridade da centralina</h2>
        <p>
          Ligue o dongle ELM327 e lance um scan completo. Tres coisas a
          verificar. Um: os codigos ativos e pendentes. Dois: os
          monitores OBD2 (readiness) &mdash; devem estar maioritariamente
          em ready, sinal que o carro ja rodou normalmente tempo
          suficiente para a centralina testar todos os sistemas. Tres: as
          quilometragens lidas por certas centralinas (ABS, caixa) para
          cruzar com o conta-quilometros. Um codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link> pendente e aviso
          serio.
        </p>

        <h2>Scan Sonoro: o que o vendedor nao pode ocultar</h2>
        <p>
          O Scan Sonoro e impossivel de manipular. Mesmo que o vendedor
          tenha apagado todos os codigos, o desgaste mecanico deixa a
          sua assinatura acustica. Grave 30 segundos ao ralenti com motor
          quente e outros 30 a 2500&nbsp;rpm. O SVM classifica as
          anomalias. Uma confianca acima de 70&nbsp;% em bearing, knock
          ou tick merece discussao.
        </p>

        <h2>Teste de estrada metodico</h2>
        <p>
          Minimo 20 minutos em condicoes variadas: urbano, arranque
          parado, autoestrada, travagem firme, curva apertada. Oica
          ruidos suspeitos, verifique que as mudancas entram sem solavancos,
          que a travagem e franca e direita, que a direcao nao puxa, que
          o ar condicionado arrefece rapido. Pare o motor quente,
          arranque: um motor de arranque que forca ou fumo ao arrancar
          sao alertas maiores.
        </p>

        <h2>Verificar os documentos</h2>
        <p>
          Documento unico em nome do vendedor, IPO com menos de 6 meses,
          livro de manutencao coerente com a quilometragem, faturas de
          intervencoes importantes. Para carros com mais de 5 anos, a
          fatura de distribuicao e capital. Veja tambem{" "}
          <Link href="/pt/codes/p0420">o codigo P0420</Link>, motivo
          frequente de negociacao.
        </p>

        <h2>Negociar em bases factuais</h2>
        <p>
          Se a inspecao revela defeitos, negoceie com numeros: orcamento
          de reparacao, custo de reposicao, depreciacao do veiculo. Um
          vendedor serio aceita uma negociacao documentada. Um vendedor
          que se agita por um orcamento de 400&nbsp;EUR provavelmente
          tambem esta surpreendido pelo que encontrou. Saia se for
          preciso &mdash; ha sempre outro anuncio.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
