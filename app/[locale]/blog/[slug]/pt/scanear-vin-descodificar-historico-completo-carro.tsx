import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTScanearVIN() {
  const faq: FaqItem[] = [
    {
      q: "O que e um VIN e onde encontra-lo?",
      a: "O VIN (Vehicle Identification Number) e um numero unico de 17 caracteres gravado em cada veiculo desde 1981. Encontra-se gravado na parte inferior do para-brisas lado condutor, no aro da porta do condutor, sob o capot numa placa do fabricante e no livrete. A Visao IA le diretamente os 17 caracteres fotografando a placa ou a gravacao.",
    },
    {
      q: "O que contem exatamente o VIN?",
      a: "O VIN decompoe-se em tres seccoes: WMI (3 caracteres, identifica o fabricante e o pais), VDS (6 caracteres, descreve o modelo, carroceria e motorizacao), VIS (8 caracteres, inclui ano modelo, fabrica de montagem e numero de serie). Cada caractere tem significado preciso e nao pode ser inventado.",
    },
    {
      q: "Um scan VIN da o historico completo do veiculo?",
      a: "Da acesso ao historico agregado pelas bases europeias: declaracoes de acidentes, quilometragens sucessivas na IPO, manutencoes declaradas em concessionarios, chamadas de recolha. A profundidade depende do pais de origem e da cooperacao dos servicos oficiais. E incomparavel com um simples scan de matricula.",
    },
    {
      q: "Porque o VIN e mais fiavel do que a matricula para comprar?",
      a: "Porque a matricula pode ser substituida, trocada, falsificada. O VIN esta gravado no metal, acompanha o veiculo toda a vida. Um veiculo cujo VIN nao coincide com o livrete e provavelmente roubado ou manipulado. E o numero de seguranca do carro.",
    },
    {
      q: "Ha riscos de privacidade ao scanear um VIN?",
      a: "Para o seu proprio veiculo, nenhum. Para um veiculo que quer comprar, esta no seu direito de consultar o historial &mdash; o vendedor e inclusivamente obrigado a comunicar certas informacoes na Europa. A AutoDiag&nbsp;EU nao armazena os VIN scaneados num perfil ligado a sua identidade.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Scanear o VIN: descodificar o historico completo de um carro"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Compra de usado"
      >
        <p>
          Dezassete caracteres. E tudo o que e preciso para conhecer
          toda a historia de um carro. O VIN (Vehicle Identification
          Number) e o verdadeiro ADN do veiculo: codifica fabricante,
          fabrica, ano modelo, tipo de motor, carroceria, e cada
          exemplar recebe um numero de serie unico. Scanear esse VIN
          com o seu telemovel e abrir um dossier completo em dois
          segundos &mdash; e evitar, em caso de compra de usado,
          milhares de euros de ma surpresa.
        </p>

        <h2>A anatomia dos 17 caracteres</h2>
        <p>
          O VIN e padronizado mundialmente desde 1981. Os tres
          primeiros caracteres formam o WMI (World Manufacturer
          Identifier): designam pais e fabricante. WDB para
          Mercedes-Benz na Alemanha, VF1 para Renault em Franca, WVW
          para Volkswagen na Alemanha. Os seis seguintes formam o VDS
          (Vehicle Descriptor Section): codificam modelo, carroceria,
          motorizacao e por vezes o sistema de retencao. Os oito
          ultimos formam o VIS (Vehicle Identifier Section): o decimo
          caractere e o ano modelo (A&nbsp;= 2010, B&nbsp;= 2011,
          etc., saltando I, O, Q, U, Z), o decimo primeiro e a
          fabrica de montagem, os seis ultimos o numero de serie
          unico.
        </p>

        <h2>O que capta o OCR Visao IA</h2>
        <p>
          O VIN esta gravado ou colocado em varios pontos do carro. O
          mais acessivel e a parte inferior do para-brisas lado
          condutor, visivel do exterior atraves do vidro. A gravacao
          e pequena, refletora, por vezes tapada por sujidade. A
          Visao IA gere essas condicoes: iguala a exposicao, elimina
          reflexos e le os 17 caracteres com tolerancia as confusoes
          classicas (zero contra O, um contra I). Tambem pode ler o
          VIN na placa do fabricante sob o capot, ou ate numa foto do
          livrete.
        </p>

        <h2>A compra de usado que muda de natureza</h2>
        <p>
          Cenario tipico: responde a um anuncio de um Audi A4 Avant
          2.0 TDI de 2016, 145&nbsp;000&nbsp;km anunciados. O vendedor
          tem faturas de manutencao, o carro parece limpo, tudo
          parece bem. Scaneia o VIN com o telemovel. A resposta chega
          em tres segundos: o ano modelo e 2016, mas a quilometragem
          media registada na ultima IPO (ha 14&nbsp;meses) era
          168&nbsp;000&nbsp;km. Conclusao: o conta-quilometros foi
          rebobinado em 23&nbsp;000&nbsp;km. Voce sai. Esta fraude e
          a mais comum do mercado de usados e a Visao IA deteta-a em
          tres segundos.
        </p>

        <h2>Os recalls esquecidos</h2>
        <p>
          Cada fabricante emite regularmente campanhas de recolha por
          defeitos identificados apos a comercializacao. Airbag
          Takata, valvula EGR, bomba de alta pressao, modulo ABS,
          injetores &mdash; a lista e longa. O proprietario deveria
          receber uma carta, mas com mudancas de morada, vendas
          sucessivas e cartas perdidas, muitos veiculos circulam com
          defeitos por corrigir. O scan VIN consulta as bases do
          fabricante e mostra a lista de recalls aplicaveis a esse
          veiculo preciso, com o seu estado. Se um estiver aberto,
          pode exigir o tratamento gratuito num concessionario antes
          da compra.
        </p>

        <h2>O pedido de pecas sem erro</h2>
        <p>
          Outro uso, menos espetacular mas muito pratico: o pedido de
          pecas. Quando pede uma pastilha de travao para um SEAT
          Leon, ha frequentemente tres ou quatro referencias
          distintas conforme o tipo de travoes (diametro de disco),
          nivel de acabamento, ano de producao exato. O VIN transmite
          essa info precisa ao vendedor que encontra a boa referencia
          a primeira. Acabaram-se as idas e voltas ao fornecedor, os
          erros a 30&nbsp;EUR de custos de devolucao. Para a
          manutencao regular, leia tambem o artigo sobre o{" "}
          <Link href="/pt/blog/prevenir-avaria-motor-diagnostico-sonoro-preventivo">
            diagnostico preventivo
          </Link>
          .
        </p>

        <h2>O seguro e os orcamentos</h2>
        <p>
          Quando pede um orcamento de seguro, as companhias por
          vezes pedem apenas a matricula, por vezes o VIN completo.
          Os orcamentos baseados em VIN sao mais precisos porque tem
          em conta o modelo exato, o nivel de equipamento e as
          eventuais modificacoes declaradas. Um scan VIN antes de
          meter a concorrencia a jogar pode variar o orcamento entre
          10 e 25&nbsp;% num sentido ou noutro. Para um orcamento
          anual tipico de 600 a 1200&nbsp;EUR, sao 60 a 300&nbsp;EUR
          anuais potencialmente poupados.
        </p>

        <h2>Os limites e a privacidade</h2>
        <p>
          O scan VIN nao da tudo. Os acidentes nao declarados nao
          aparecem nas bases. As intervencoes em oficinas
          independentes nem sempre sao registadas. A profundidade do
          historico depende do pais: Espanha, Franca, Alemanha e
          Belgica tem bases de inspecao solidas, outros paises sao
          mais lacunares. Quanto a privacidade, a AutoDiag&nbsp;EU
          nao associa o VIN scaneado a sua conta pessoal, e as
          consultas sao purgadas ao fim de sete dias. Consulta,
          decide, esquece. Para complementar com uma verificacao
          eletronica, passe por um scan OBD2 que revela os codigos
          em memoria como o{" "}
          <Link href="/pt/codes/p0011">P0011</Link> frequentemente
          ligado a uma manutencao descuidada da distribuicao.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
