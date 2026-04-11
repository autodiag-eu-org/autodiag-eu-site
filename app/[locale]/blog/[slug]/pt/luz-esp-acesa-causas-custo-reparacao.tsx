import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTLuzESP() {
  const faq: FaqItem[] = [
    {
      q: "Pode-se conduzir com a luz ESP acesa?",
      a: "Sim, mas sem as assistencias eletronicas de estabilidade. A travagem classica e as assistencias basicas continuam a funcionar. Reduza a velocidade, evite manobras bruscas e repare rapidamente. Em condicoes humidas, com gelo ou em curva apertada, a ausencia de ESP aumenta significativamente o risco de perda de controlo.",
    },
    {
      q: "Qual e a diferenca entre ESP e ABS?",
      a: "O ABS impede o bloqueio das rodas ao travar. O ESP (controlo de trajetoria) corrige uma perda de trajetoria travando seletivamente uma ou varias rodas e reduzindo o binario do motor. ESP e ABS partilham alguns sensores (velocidade de roda), pelo que uma avaria comum pode acender ambas as luzes. O ESP usa alem disso um sensor de guinada e um sensor de angulo do volante.",
    },
    {
      q: "Quanto custa uma reparacao do ESP?",
      a: "Sensor de velocidade de roda: 80 a 200 euros a peca mais mao de obra. Sensor de guinada: 250 a 450 euros. Sensor de angulo do volante: 150 a 400 euros. Bloco hidraulico ESP completo: 600 a 1800 euros. Interruptor de luzes de travao (causa frequente negligenciada): 30 a 100 euros. Identifique com precisao a causa antes de encomendar a peca.",
    },
    {
      q: "A luz ESP pode acender sem avaria real?",
      a: "Sim, em alguns casos benignos. Uma bateria fraca pode desencadear um defeito transitorio. Uma desmontagem recente de pneu pode desadaptar temporariamente um sensor de velocidade. Uma desativacao manual atraves do botao ESP OFF acende uma luz diferente. Uma reaprendizagem do sensor de angulo do volante apos substituir uma rotula pode ser necessaria.",
    },
    {
      q: "Que codigos OBD2 acompanham tipicamente uma luz ESP?",
      a: "Os codigos C0035 a C0050 para os sensores de velocidade de roda, C0196 para o sensor de angulo do volante, C0265 para o bloco hidraulico ESP, C0710 para o sensor de guinada. Um scan OBD2 com acesso aos modulos de chassis (nao so motor) e necessario para os ler &mdash; nem todos os scanners de consumo o permitem.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Luz ESP acesa: causas, diagnostico e custo de reparacao"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostico"
      >
        <p>
          A luz ESP, esse pequeno triangulo ou carro a derrapar no seu
          tablier, preocupa com razao. Sinaliza que a estabilidade
          eletronica esta desativada, parcial ou totalmente. Ao
          contrario da luz de motor que pode ficar acesa meses sem
          drama, a luz ESP deve ser tratada rapidamente: afeta
          diretamente a seguranca ativa do veiculo.
        </p>

        <h2>O que e realmente o ESP</h2>
        <p>
          ESP significa Electronic Stability Program. E um sistema que
          compara permanentemente a trajetoria pretendida pelo condutor
          (angulo do volante, aceleracao do pedal) com a trajetoria
          real (sensor de guinada, velocidades de roda). Em caso de
          desvio, trava seletivamente uma ou varias rodas e reduz o
          binario do motor para devolver o veiculo a trajetoria. E
          obrigatorio em todos os carros novos vendidos na Europa desde
          2014.
        </p>

        <h2>Causa 1: sensor de velocidade de roda</h2>
        <p>
          E a causa mais frequente, cerca de 40&nbsp;% dos casos. O
          sensor le um alvo dentado no cubo. Suja-se com depositos de
          travao, parte por impacto ou simplesmente envelhece. A
          substituicao custa 80 a 200 euros a peca, mais 60 a 120 euros
          de mao de obra. Um codigo C0035 (roda dianteira esquerda) ou
          C0040 (dianteira direita) identifica a roda afetada.
        </p>

        <h2>Causa 2: sensor de angulo do volante desadaptado</h2>
        <p>
          Apos uma troca de rotula, um alinhamento mal feito ou um
          impacto, o sensor de angulo do volante pode perder o seu
          zero. O ESP deteta a incoerencia e desativa-se por seguranca.
          A solucao: uma reaprendizagem na oficina com uma ferramenta
          de diagnostico, geralmente 30 a 60 euros. Se o sensor estiver
          avariado, substituicao entre 150 e 400 euros.
        </p>

        <h2>Causa 3: sensor de guinada e acelerometro</h2>
        <p>
          Situado sob o banco ou na consola central, este sensor mede
          as rotacoes em torno do eixo vertical e as aceleracoes
          transversais. Quando avaria, o ESP deixa de ter referencia de
          trajetoria e desativa-se. Substituicao 250 a 450 euros com
          codificacao.
        </p>

        <h2>Causa 4: interruptor de luzes de travao avariado</h2>
        <p>
          Causa muitas vezes ignorada. O interruptor de luzes de travao
          sob o pedal informa o ESP de que esta a travar. Quando envia
          um sinal incoerente (por exemplo permanentemente aceso), o
          ESP entra em defeito. Substituicao rapida 30 a 100 euros, uma
          pechincha comparado com as outras causas.
        </p>

        <h2>Causa 5: bloco hidraulico ESP</h2>
        <p>
          O bloco hidraulico ESP contem as electrovalvulas que travam
          seletivamente cada roda. Quando avaria, e a reparacao mais
          cara: 600 a 1800 euros a peca mais 150 a 300 euros de mao de
          obra e codificacao. As reparacoes eletronicas especializadas
          (cerca de 400 euros) sao uma alternativa viavel em alguns
          modelos.
        </p>

        <h2>Scan OBD2 e codigos de chassis</h2>
        <p>
          Ao contrario dos codigos de motor, os codigos de chassis
          comecam por C. Nao sao acessiveis a todos os scanners de
          consumo. E preciso uma ferramenta que dialogue com o modulo
          ABS ESP no CAN bus do chassis. Uma vez identificado o codigo,
          a causa e quase sempre clara. Veja{" "}
          <Link href="/pt/blog/lire-codes-obd2-telephone">
            como ler codigos OBD2 com um telemovel
          </Link>
          .
        </p>

        <h2>Como evitar o problema</h2>
        <p>
          Primeira regra: nunca lavar com karcher em jato direto os
          sensores de roda, pode arranca-los ou fazer subir agua ao
          conetor. Segunda regra: uma manutencao seria das pastilhas e
          discos evita a sujidade dos sensores por limalha. Terceira
          regra: um controlo visual regular dos feixes sob o veiculo
          deteta roedores e atritos prematuros. Veja{" "}
          <Link href="/pt/blog/checkup-visuel-ia-5-points-vehicule-sain">
            o checkup visual em 5 pontos
          </Link>
          .
        </p>

        <h2>E se voltar depois da reparacao?</h2>
        <p>
          Uma luz ESP que regressa apos a troca do sensor deve fazer
          suspeitar de um problema de cablagem (fio cortado na chicote,
          conetor oxidado) ou de um modulo ABS avariado que continua a
          emitir erros apesar do novo sensor. O diagnostico deve entao
          ser aprofundado num especialista, nomeadamente em carros
          alemaes onde os codigos secundarios sao mais dificeis de
          interpretar. Veja tambem{" "}
          <Link href="/pt/blog/voyant-huile-allume-rouler-ou-arreter">
            luz de oleo acesa: continuar ou parar
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
