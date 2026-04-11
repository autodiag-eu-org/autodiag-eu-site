import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTRolamentoRoda() {
  const faq: FaqItem[] = [
    {
      q: "Como identificar o lado do rolamento avariado?",
      a: "Vire ligeiramente o volante para a direita em estrada livre: se o ruido diminui, e o rolamento ESQUERDO (a carga passa para a direita, que esta sa). Se o ruido aumenta, e o DIREITO. O Scan Sonoro traz objetividade, mas este teste manual ajuda a confirmar.",
    },
    {
      q: "O rolamento e motivo de reprovacao na IPO?",
      a: "Sim. Uma folga excessiva do rolamento ou um ruido anormal audivel no banco de rolos provoca reinspecao. O mesmo se aplica ao TUV alemao, ITV espanhol e MOT britanico.",
    },
    {
      q: "Quanto custa substituir um rolamento?",
      a: "Entre 180 e 450 euros por roda, consoante o veiculo e o tipo (rolamento integrado no cubo ou separado). Em alguns modelos alemaes e preciso recodificar o ABS, o que acrescenta 30 a 60 euros de mao de obra.",
    },
    {
      q: "Posso continuar a conduzir com um rolamento a zumbir?",
      a: "Algumas centenas de quilometros sem risco imediato se o ruido for ligeiro. Alem disso, o anel do rolamento aquece, a folga aumenta e, por fim, a roda pode tomar um angulo anormal. A esse ponto, o acidente e possivel.",
    },
    {
      q: "O scan deteta um rolamento que comeca a falhar?",
      a: "Sim, e ate o seu ponto forte. Um rolamento incipiente produz um zumbido fraco entre 200-400 Hz que o ouvido humano, sentado num habitaculo ruidoso, nao nota. O SVM isola-o entre as 138 caracteristicas.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="Ruido de rolamento de roda: detetar o desgaste antes da IPO"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevencao"
      >
        <p>
          O rolamento de roda e uma das pecas mais traicoeiras de um
          carro. Comeca a fatigar-se perto dos 90&nbsp;000 km, da um
          primeiro sinal audivel por volta dos 110&nbsp;000 km e continua
          a rolar ate aos 150&nbsp;000 km antes de se tornar realmente
          perigoso. O problema e que, durante todo esse tempo, o condutor
          habitua-se ao som. Um ano depois, tornou-se o &laquo;ruido
          normal&raquo; do carro dele. O Scan Sonoro, por seu lado, nunca
          esquece o ruido de referencia.
        </p>

        <h2>Fisica do rolamento fatigado</h2>
        <p>
          Um rolamento de esferas ou de rolos em bom estado gira em
          silencio quase total. Aquilo a que chamamos &laquo;zumbido&raquo;
          aparece quando as superficies de contacto comecam a marcar: a
          massa lubrificante degrada-se, as pistas internas apresentam
          micro-descamacoes e cada rotacao gera um choque acustico
          modulado pela velocidade. A frequencia fundamental situa-se
          entre 100 e 300 Hz a 80 km/h, com harmonicos ate 2 kHz. E nesta
          zona que o SVM e mais preciso.
        </p>

        <h2>A assinatura que denuncia</h2>
        <p>
          Tres caracteristicas identificam um rolamento com certeza: o
          ruido aumenta com a velocidade (proporcional), modula com a
          carga lateral (curva ligeira) e desaparece quando alivia
          ligeiramente a roda ao desacelerar. Se as tres estiverem
          presentes, e um rolamento com 90&nbsp;% de certeza. O Scan
          Sonoro integra estas dependencias nas suas 138 caracteristicas:
          nao olha apenas o espetro no instante T, mas tambem como evolui
          ao longo dos trinta segundos de gravacao.
        </p>

        <h2>A importancia para a IPO</h2>
        <p>
          Os pontos de verificacao de suspensao e trem rodante sao cada
          vez mais rigorosos. Uma folga de rolamento medida com
          comparador provoca um defeito maior com reinspecao obrigatoria.
          A mesma logica aplica-se ao TUV alemao, ao MFK suico e a ITV
          espanhola. Detetar o rolamento duas semanas antes da inspecao
          permite reparar sem pressao e passar a primeira.
        </p>

        <h2>O efeito em cascata do rolamento negligenciado</h2>
        <p>
          Um rolamento que se solta nao e so uma peca a trocar. E o calor
          que sobe no cubo, o sensor ABS integrado que queima (150 euros
          adicionais), o disco de travao que aquece assimetricamente e
          empena (mais 150 euros), e em casos extremos a manga de eixo
          que sobreaquece e ganha folga por sua vez (450 euros). Um
          rolamento de 220 euros detetado a tempo torna-se uma fatura de
          970 euros se deixar correr seis meses.
        </p>

        <h2>Protocolo de scan do rolamento</h2>
        <p>
          Para uma detecao fiavel e preciso rodar. Um scan parado quase
          nao capta a assinatura. O bom protocolo: trinta segundos em
          estrada plana a velocidade estavel entre 70 e 90 km/h, com duas
          ligeiras mudancas de faixa para testar a modulacao por carga
          lateral. Evite estradas muito esburacadas que afogam a
          assinatura nos ruidos de suspensao. O SVM dara uma confianca
          &laquo;rolamento&raquo; entre 0 e 100&nbsp;%. Acima de 60&nbsp;%,
          ja sabe que lado verificar em prioridade.
        </p>

        <h2>O que a adaptacao auditiva lhe esconde</h2>
        <p>
          Repito esta ideia porque e central: o seu cerebro adapta a
          perceao aos ruidos recorrentes. Um rolamento que comeca a
          zumbir a 70 km/h, ouve-o no primeiro dia, esquece-o na segunda
          semana e ja nao o nota ao fim de um mes. A IA, por sua vez,
          compara objetivamente cada scan ao anterior. Se a confianca
          rolamento passou de 20&nbsp;% para 55&nbsp;% em dois meses, e
          preciso reagir mesmo que o seu ouvido diga &laquo;esta tudo
          bem&raquo;.
        </p>

        <h2>Para ir mais longe</h2>
        <p>
          Leia tambem{" "}
          <Link href="/pt/blog/controle-preventif-son-eviter-facture-cascade">
            o scan preventivo antes da IPO
          </Link>{" "}
          e{" "}
          <Link href="/pt/blog/usure-invisible-composant-fatigue-endommage-autre">
            como uma peca fatigada danifica outras
          </Link>
          . Se um codigo{" "}
          <Link href="/pt/codes/p0011">P0011</Link>{" "}
          ou um problema de ABS surgir ao mesmo tempo, e possivelmente o
          sensor de velocidade da roda perturbado pela folga do
          rolamento. O OBD2 sozinho nao dira qual dos dois e a causa
          raiz.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
