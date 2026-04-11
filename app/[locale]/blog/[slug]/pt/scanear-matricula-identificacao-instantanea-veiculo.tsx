import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTScanearMatricula() {
  const faq: FaqItem[] = [
    {
      q: "Quanto tempo demora o scan de uma matricula?",
      a: "Menos de dois segundos em condicoes normais. O OCR le os caracteres, consulta a base europeia e devolve marca, modelo, ano, cilindrada e combustivel. Se a luz estiver ma ou a matricula suja, o tempo pode subir para quatro segundos mas o resultado continua fiavel a mais de 95&nbsp;%.",
    },
    {
      q: "O scan de matricula funciona em todos os paises europeus?",
      a: "Funciona nos formatos padrao da UE mais Suica e Reino Unido. Algumas matriculas personalizadas ou diplomaticas nao devolvem dados tecnicos, mas o OCR identifica corretamente os caracteres. As bases tecnicas estao cobertas para Franca, Alemanha, Belgica, Espanha, Italia, Portugal, Reino Unido, Paises Baixos e Suica.",
    },
    {
      q: "Posso scanear a matricula de um carro que quero comprar em segunda mao?",
      a: "E precisamente o uso principal. Chega em frente do veiculo, scaneia a matricula, compara instantaneamente com o anuncio. Marca, modelo, ano, energia: tudo tem de bater certo. Se o anuncio diz gasolina e a base diz gasoleo, vira costas antes mesmo de discutir o preco.",
    },
    {
      q: "A Visao IA deteta se uma matricula foi manipulada?",
      a: "Deteta as incoerencias basicas: formato nao conforme ao pais declarado, caracteres mal alinhados, fundo anormal. Mas nao substitui uma verificacao administrativa completa. Para uma transacao, exija sempre o documento unico e o certificado de penhor como complemento.",
    },
    {
      q: "Os dados recuperados incluem a quilometragem e o historico?",
      a: "Nao, o scan de matricula da apenas as caracteristicas tecnicas do veiculo: marca, modelo, motorizacao, ano, combustivel, emissoes. Para o historico completo (acidentes, km, manutencao), e preciso scanear o VIN que contem 17 caracteres unicos.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Scanear uma matricula: identificacao instantanea do veiculo"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Compra usado"
      >
        <p>
          Imagine: esta num parque de estacionamento em frente a um Golf
          VII que lhe interessa, o vendedor insiste numa versao TSI de
          2016 com poucos quilometros. Tira o telemovel, enquadra a
          matricula, carrega uma vez. Dois segundos depois, a aplicacao
          responde: Volkswagen Golf VII, 1.6 TDI 110 cv, primeira
          matricula 2014. Conversa terminada. Acabou de evitar uma
          burla. E exatamente o que faz o scanner de matricula do
          AutoDiag EU, e e a funcionalidade mais util que ja
          adicionamos para os compradores de usados.
        </p>

        <h2>O OCR ao servico do comprador desconfiado</h2>
        <p>
          O sistema assenta em dois blocos tecnicos: um OCR otimizado
          para os formatos de matriculas europeias, e uma base de dados
          de matriculas que devolve as caracteristicas tecnicas do
          veiculo. O OCR gere os nove formatos principais da UE, mais
          Suica e UK. Sabe distinguir o zero da letra O, o um da letra
          I, e corrige automaticamente as inversoes devidas a um angulo
          de captura. Uma vez lidos os caracteres, sao enviados a API
          de referencia que devolve a ficha tecnica em algumas centenas
          de milissegundos.
        </p>

        <h2>O que obtem em dois segundos</h2>
        <p>
          A resposta contem: a marca, o modelo exato com o seu nivel de
          acabamento se disponivel, a cilindrada e a potencia, o tipo
          de combustivel (gasolina, gasoleo, hibrido, eletrico, GPL,
          GNV, E85), o ano da primeira matricula, e a norma Euro de
          emissoes (Euro 4, 5, 6, 6d). Para um comprador, estas
          informacoes permitem verificar se o veiculo e compativel com
          as zonas de baixas emissoes da sua cidade, se a motorizacao
          anunciada corresponde a realidade, e se o ano e coerente com
          a quilometragem apresentada no conta-quilometros.
        </p>

        <h2>O teste do cafe</h2>
        <p>
          O meu uso preferido: antes de ir ver um veiculo, scaneio a
          matricula a partir das fotos do anuncio online. Se o vendedor
          desfocou a matricula, peco uma foto nitida. Se a resposta da
          IA nao corresponde ao anuncio (energia diferente, ano
          desfasado dois anos, modelo de gama mais baixa), nem sequer
          preciso de me deslocar. Poupei uma viagem inutil, uma hora de
          negociacao e provavelmente um conta-quilometros falso. Em
          cada dez anuncios assim scaneados, em media dois apresentam
          problemas.
        </p>

        <h2>O regulamento europeu e a sua vida privada</h2>
        <p>
          Uma questao volta: e legal scanear qualquer matricula? Sim.
          Uma matricula e publica por definicao. Em contrapartida,
          cruzar essa matricula com os dados pessoais do proprietario e
          proibido, e o AutoDiag EU nao o faz. Recebe a ficha tecnica
          do veiculo, nao o nome ou a morada do proprietario. Esta
          distincao e essencial e respeita o RGPD a letra. As consultas
          nao sao armazenadas, nao constituem perfil.
        </p>

        <h2>O caso do proprietario</h2>
        <p>
          Se scanear a matricula do seu proprio carro, a aplicacao pode
          criar automaticamente um perfil de veiculo: marca, modelo,
          ano, combustivel pre-preenchidos. Ganha cinco minutos de
          introducao manual. Esse perfil serve depois para personalizar
          os diagnosticos OBD2, orientar a{" "}
          <Link href="/pt/blog/preparer-ct-2026">IPO</Link> e adaptar
          os conselhos de manutencao. O scan e uma porta de entrada,
          nao uma simples curiosidade.
        </p>

        <h2>Quando o scan falha</h2>
        <p>
          Tres casos colocam problemas. As matriculas personalizadas ou
          com demasiados caracteres fantasia devolvem um OCR limpo mas
          nenhum dado tecnico. As matriculas antigas (antes de 2009 em
          Franca, formato FNI) funcionam mas os dados sao menos
          completos. As matriculas estrangeiras fora da UE (Noruega,
          Servia, Turquia) saem do perimetro. Nestes casos, a aplicacao
          propoe scanear diretamente o VIN para obter a mesma
          informacao, mais completa.
        </p>

        <h2>A combinacao vencedora matricula + VIN + OBD2</h2>
        <p>
          Para uma verificacao completa antes da compra, o protocolo
          AutoDiag EU combina tres camadas. Primeira camada: o scan da
          matricula em dez segundos para verificar a coerencia de
          base. Segunda camada: o{" "}
          <Link href="/pt/blog/scanner-vin-decoder-historique-complet-voiture">
            scan VIN
          </Link>{" "}
          para recuperar o historico (acidentes, quilometragem,
          manutencao). Terceira camada: a ligacao OBD2 se houver
          dongle disponivel, para ler os codigos armazenados e
          pendentes. Com estas tres camadas ve em quinze minutos o que
          uma inspecao tradicional leva uma hora a encontrar. E o
          poder do{" "}
          <Link href="/pt/blog/autodiag-vs-garage">
            autodiagnostico face a visita a oficina
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
