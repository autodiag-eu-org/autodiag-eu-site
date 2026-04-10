import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTPrepararInspecao2026() {
  const faq: FaqItem[] = [
    {
      q: "De quanto em quanto tempo tenho de fazer a IPO em Portugal?",
      a: "Carros novos fazem a primeira IPO aos 4 anos. Depois a cada 2 anos ate aos 8 anos, e anualmente a partir dos 8 anos. Veiculos comerciais e taxis tem intervalos mais curtos. O prazo esta indicado no ultimo certificado de inspecao.",
    },
    {
      q: "Quanto custa a IPO em Portugal em 2026?",
      a: "A tarifa basica ligeiros custa entre 30 e 40 EUR em 2026. Uma reinspecao nos 30 dias seguintes custa entre 10 e 20 EUR. Centros no norte costumam ser mais baratos que em Lisboa.",
    },
    {
      q: "O que acontece se a luz do motor estiver acesa na IPO?",
      a: "Desde 2018, uma luz MIL (avaria do motor) acesa e causa de reprovacao direta. O inspetor le tambem os codigos guardados. Apagar os codigos mesmo antes nao funciona: os monitores de prontidao ficam incompletos e o inspetor deteta.",
    },
    {
      q: "Quanto tempo tenho para a reinspecao?",
      a: "Tem 30 dias para reapresentar o veiculo apos uma reprovacao. Ultrapassado esse prazo, e preciso fazer uma IPO completa nova a tarifa cheia. Com reprovacao grave so pode circular para ir a oficina ou a IPO.",
    },
    {
      q: "Pode o AutoDiag EU substituir a IPO oficial?",
      a: "Nao, a IPO tem de ser feita num centro autorizado IMT. O AutoDiag EU e uma ferramenta de preparacao: leitura de codigos, dados em tempo real, scan de audio do motor. Assim evita surpresas desagradaveis no centro de inspecoes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="pt"
        title="Preparar a inspecao 2026: guia completo"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={10}
        category="Guia IPO"
      >
        <p>
          A cada 1 ou 2 anos chega o momento da IPO &mdash; a inspecao
          periodica obrigatoria. Em Portugal, cerca de 18 por cento dos
          veiculos sao reprovados na primeira tentativa. A boa noticia:
          metade dessas reprovacoes poderia ser evitada com uma
          preparacao estruturada. Aqui esta a checklist atualizada para
          2026, adaptada aos pontos criticos nos centros portugueses.
        </p>

        <h2>A IPO em Portugal em 2026</h2>
        <p>
          A IPO e regulada pelo IMT e realizada em centros credenciados.
          As tarifas basicas para veiculos ligeiros rondam 30 a 40 EUR em
          2026. Os defeitos sao classificados em tipo 1 (menores), tipo 2
          (graves, reinspecao em 30 dias) e tipo 3 (muito graves,
          proibicao de circulacao). As principais causas de reprovacao em
          Portugal sao a iluminacao, os gases de escape e os travoes.
        </p>

        <h2>Passo 1: Pre-diagnostico OBD &mdash; o teste mais importante</h2>
        <p>
          Quatro semanas antes do agendamento: ligue um adaptador ELM327
          a porta OBD2 e inicie o AutoDiag EU. Verifique tres coisas:
          codigos de erro ativos, monitores de prontidao (readiness) e
          valores das sondas lambda. Qualquer codigo deve ser resolvido
          ANTES do teste &mdash; nao apenas apagado. Candidatos
          frequentes:{" "}
          <Link href="/pt/codes/p0420">P0420</Link>,{" "}
          <Link href="/pt/codes/p0171">P0171</Link> e{" "}
          <Link href="/pt/codes/p0128">P0128</Link>. Se apagar um codigo,
          conduza pelo menos 200 km para que os monitores voltem a estar
          &laquo;prontos&raquo;.
        </p>

        <h2>Passo 2: Gases de escape e filtro de particulas diesel</h2>
        <p>
          Em 2026, o controlo de emissoes diesel ficou mais rigoroso em
          Portugal. Um filtro de particulas saturado provoca quase sempre
          reprovacao. Antes do teste: 30 minutos de autoestrada a 2500-
          3000 rpm para forcar uma regeneracao. Com o AutoDiag EU pode
          ler em tempo real a percentagem de fuligem no DPF. Se
          ultrapassar 70 por cento, tem de agir. Gasolina: aquecer o
          catalisador durante pelo menos 20 minutos antes da inspecao.
        </p>

        <h2>Passo 3: Travoes, direcao e suspensao</h2>
        <p>
          Apos a iluminacao, travoes e suspensao sao as causas mais
          frequentes de reprovacao. O banco de rolos mede a eficacia de
          travagem (minimo 50 por cento para o travao de servico).
          Verifique: pastilhas (indicador de desgaste), discos (sulcos
          visiveis), liquido dos travoes (DOT4 a cada 2 anos). Na
          suspensao: rotulas gastas, bielas danificadas, amortecedores
          com fugas. Precos 2026 Portugal: pastilhas 70 a 130 EUR por
          eixo, amortecedores 140 a 320 EUR o par.
        </p>

        <h2>Passo 4: Iluminacao e visibilidade</h2>
        <p>
          Causa numero 1 de reprovacoes em Portugal (cerca de 23 por
          cento). Verifique cada luz: medios, maximos, presenca,
          travagem, piscas, marcha-atras, nevoeiro, matricula. A regulacao
          dos farois e critica. Com xenon ou LED, o corretor automatico
          tem de funcionar. Limpa para-brisas em bom estado, fissuras no
          para-brisas maiores que 10 mm na zona do condutor = reprovacao.
        </p>

        <h2>Passo 5: Pneus e carrocaria</h2>
        <p>
          Profundidade minima legal 1,6 mm, mas os inspetores preferem ver
          2 mm. Desgaste desigual indica problemas de direcao ou
          amortecimento. Deformacoes ou cortes na parede lateral =
          reprovacao direta. Na carrocaria, a corrosao em elementos
          estruturais (longarinas, bases do chassis) e perigosa sobretudo
          em veiculos com mais de 10 anos.
        </p>

        <h2>Passo 6: Calendario ideal de preparacao</h2>
        <ul>
          <li>
            <strong>4 semanas antes:</strong> scan OBD com AutoDiag EU,
            pesquisa das causas dos codigos, scan de audio do motor.
          </li>
          <li>
            <strong>3 semanas antes:</strong> reparacoes na oficina.
          </li>
          <li>
            <strong>2 semanas antes:</strong> iluminacao, limpa
            para-brisas, profundidade dos pneus.
          </li>
          <li>
            <strong>1 semana antes:</strong> niveis (travoes, liquido de
            refrigeracao, lava-para-brisas, oleo). Segundo scan OBD para
            confirmar.
          </li>
          <li>
            <strong>No dia do agendamento:</strong> 30 minutos de
            autoestrada, veiculo limpo, documentos do carro e ultimo
            relatorio de IPO.
          </li>
        </ul>

        <h2>Conclusao</h2>
        <p>
          A IPO nao precisa de ser uma fonte de stress. Comecando 4
          semanas antes com um scan OBD, resolvendo os codigos mais
          comuns, forcando a regeneracao do DPF e verificando a
          iluminacao, passa a IPO 2026 a primeira. O AutoDiag EU e a sua
          ferramenta gratuita de preparacao &mdash; nao substitui a IPO,
          mas e a melhor forma de evitar reinspecoes dispendiosas.
        </p>
      </ArticleLayout>
    </>
  );
}
