import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePTAvariasMaisCaras2026() {
  const faq: FaqItem[] = [
    {
      q: "Qual a avaria mais cara num carro moderno?",
      a: "Num termico, e a rotura de motor apos falha de distribuicao num motor de interferencia: entre 4500 e 9000&nbsp;EUR para uma substituicao completa. Num hibrido ou eletrico, e a bateria de alta tensao: de 3500 a 12&nbsp;000&nbsp;EUR sem mao de obra consoante o modelo.",
    },
    {
      q: "Qual a idade mais arriscada para as grandes avarias?",
      a: "Entre 8 e 14 anos para a maioria das avarias mecanicas pesadas. E o periodo em que a distribuicao chega ao fim em muitos modelos, o turbo comeca a fatigar, e as pecas de desgaste intermedio acumulam os seus danos.",
    },
    {
      q: "Podem-se antecipar todas essas avarias?",
      a: "A maioria, sim. Um scan preventivo mensal combinando OBD2, som e visual apanha os sinais fracos em 80&nbsp;% dos casos. Os restantes 20&nbsp;% sao defeitos brutais impossiveis de antecipar.",
    },
    {
      q: "As avarias dos hibridos sao todas caras?",
      a: "Nao. Um hibrido nao plug-in comporta-se muitas vezes melhor que um termico classico nas avarias correntes: menos desgaste do motor de arranque, travoes regenerativos que poupam as pastilhas. A bateria HV continua a ser o ponto caro, mas a sua vida ultrapassa frequentemente 15 anos ou 300&nbsp;000&nbsp;km.",
    },
    {
      q: "Garantia mecanica: vale a pena?",
      a: "Num seminovo de 6 a 10 anos, sim, desde que leia bem as exclusoes. As boas cobrem turbo, caixa, motor, sem pecas de desgaste. Conte 30 a 60&nbsp;EUR por mes para uma cobertura correta.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="As avarias mais caras de 2026 e como evita-las"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Custos de reparacao"
      >
        <p>
          Um carro nunca se avaria quando lhe da jeito. Certas avarias
          custam mais que um carro usado inteiro, outras parecem
          modestas no orcamento mas explodem uma vez contados os danos
          colaterais. Este ranking das dez avarias mais caras em 2026
          baseia-se em casos reais dos nossos utilizadores e nas
          margens observadas nas redes independentes europeias.
        </p>

        <h2>1 &mdash; Turbo partido e as suas consequencias</h2>
        <p>
          Margem: 1500 a 3000&nbsp;EUR para o turbo sozinho, ate
          5000&nbsp;EUR com danos colaterais. Quando um turbo parte e o
          oleo vai para a admissao, o motor pode embalar-se e
          destruir-se em poucos segundos. Sinais previos: assobio
          anormal, fumo azul, perda de potencia progressiva. Deteccao
          precoce por scan sonoro.
        </p>

        <h2>2 &mdash; FAP entupido e linha de escape</h2>
        <p>
          Margem: 1000 a 2500&nbsp;EUR para substituicao, 200 a 400 para
          limpeza. O FAP entope quando nao se regenera corretamente:
          demasiada cidade, percursos curtos. Uma vez colmatado,
          provoca perda de potencia, sobreconsumo e acaba por bloquear
          o veiculo em modo degradado.
        </p>

        <h2>3 &mdash; DSG e caixas robotizadas</h2>
        <p>
          Margem: 1500 a 4500&nbsp;EUR consoante o modelo. As DSG 7 a
          seco tem ma fama, as DSG 6 em banho de oleo envelhecem
          melhor. Sinais: solavancos ao mudar, vibracoes ao arrancar,
          luz PRNDS. Uma mudanca de oleo aos 60&nbsp;000&nbsp;km
          prolonga a sua vida.
        </p>

        <h2>4 &mdash; Valvula EGR e sistema de descontaminacao</h2>
        <p>
          Margem: 400 a 1200&nbsp;EUR. A valvula EGR bloqueia por
          incrustacoes em diesel principalmente urbanos. Sintomas:
          solavancos, fumo negro, perda de potencia, codigo{" "}
          <Link href="/pt/codes/p0420">P0420</Link> associado.
        </p>

        <h2>5 &mdash; Corrente ou correia de distribuicao</h2>
        <p>
          Margem: 500 a 1200&nbsp;EUR para substituicao preventiva,
          3500 a 6000&nbsp;EUR em caso de rotura em motor de
          interferencia. A avaria mais rentavel de antecipar. Mude
          sistematicamente nos intervalos do fabricante e oica o seu
          motor.
        </p>

        <h2>6 &mdash; Catalisador</h2>
        <p>
          Margem: 800 a 2500&nbsp;EUR. O catalisador raramente morre
          sozinho: quase sempre e consequencia de uma sonda lambda
          cansada, de uma mistura rica prolongada ou de um consumo de
          oleo que envenena os metais preciosos.
        </p>

        <h2>7 &mdash; Junta de cabeca</h2>
        <p>
          Margem: 1200 a 3500&nbsp;EUR. Frequentemente consequencia de
          um sobreaquecimento. Sinais: fumo branco, bolhas no vaso de
          expansao, temperatura instavel, oleo emulsionado.
        </p>

        <h2>8 &mdash; Bateria de alta tensao hibrida</h2>
        <p>
          Margem: 3500 a 12&nbsp;000&nbsp;EUR. A grande inquietacao dos
          compradores de hibrido usado. Vida media excelente em Toyota
          Prius, Lexus, Honda.
        </p>

        <h2>9 &mdash; Centralina airbag ou ABS</h2>
        <p>
          Margem: 600 a 2000&nbsp;EUR. Uma centralina a falhar exige
          frequentemente uma codificacao apos substituicao. Um codigo
          ABS ou airbag persistente deve ser levado a serio.
        </p>

        <h2>10 &mdash; Compressor de climatizacao</h2>
        <p>
          Margem: 700 a 1800&nbsp;EUR. Um compressor gripado danifica
          todo o circuito (expansor, evaporador, condensador). Sinal
          previo: ruido metalico ao engatar o ar.
        </p>

        <h2>Antecipacao: o seu melhor aliado</h2>
        <p>
          Nove destas dez avarias dao sinais fracos detetaveis muito
          antes da rotura completa. Um scan combinado som-OBD2-visao
          uma vez por mes durante 5 minutos apanha a maioria desses
          sinais antes de se tornarem faturas de quatro algarismos.
        </p>
      </ArticleLayoutV2>
    </>
  );
}
