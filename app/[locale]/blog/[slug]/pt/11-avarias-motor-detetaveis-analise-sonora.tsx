import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePT11AvariasSonoras() {
  const faq: FaqItem[] = [
    {
      q: "Porque 11 classes e nao mais?",
      a: "Porque e o numero de classes para as quais temos dados etiquetados suficientes (minimo 250 gravacoes por classe) para treinar um modelo SVM fiavel. Abaixo desse limiar, o risco de falsos positivos torna-se demasiado alto. Adicionamos uma classe sempre que o dataset atinge o minimo.",
    },
    {
      q: "O scan pode confundir duas avarias?",
      a: "Sim, e o limite natural de qualquer classificador. Um ruido de rolamento de baixa frequencia pode confundir-se com folga de biela em 8&nbsp;% dos casos. Por isso o sistema mostra sempre uma confianca: abaixo de 60&nbsp;%, o resultado e marcado como &laquo;a vigiar&raquo; e recomenda-se um segundo scan.",
    },
    {
      q: "Qual a avaria mais facil de detetar?",
      a: "As fugas de ar de admissao (air leak) tem a melhor precisao, cerca de 96&nbsp;%. O assobio agudo e continuo e muito distinto dos outros sons do motor. Ao contrario, as falhas de ignicao (misfire) sao mais dificeis a 87&nbsp;% porque por vezes confundem-se com um ralenti irregular normal em motor diesel.",
    },
    {
      q: "Quanto custa ignorar um ruido suspeito?",
      a: "Depende da avaria. Uma correia de distribuicao que se parte em motor de interferencia custa entre 2000 e 8000&nbsp;EUR de reparacao. Uma chumaceira de cambota que cede destroi o motor completo, frequentemente mais de 4000&nbsp;EUR. Um assobio turbo ignorado pode custar 1500&nbsp;EUR de substituicao.",
    },
    {
      q: "Motor frio ou quente para o scan?",
      a: "Ambos sao uteis mas respondem a perguntas diferentes. A frio deteta folgas mecanicas e ruidos de arranque. A quente a temperatura normal deteta fugas de oleo, desgastes de rolamento quentes e estado do turbo. Ideal: fazer os dois e comparar.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="pt"
        title="11 avarias de motor detetaveis por analise sonora IA"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostico"
      >
        <p>
          Aqui tem a lista completa das 11 classes de avarias que o
          Scan Sonoro AutoDiag EU sabe reconhecer hoje. Cada uma foi
          treinada sobre centenas de gravacoes reais, etiquetadas a
          mao, cobrindo motores gasolina, diesel, GPL, hibridos e
          turbo. Para cada avaria: a assinatura sonora, o risco se
          ignorar e uma ordem de grandeza do custo de reparacao na
          Europa.
        </p>

        <h2>1. Batida motor (knock)</h2>
        <p>
          Um som metalico, frequentemente descrito como &laquo;berlindes
          numa caixa&raquo;, que aparece sob carga ou na reaceleracao.
          Causa comum: auto-ignicao devido a carburante de ma
          qualidade ou sensor de knock defeituoso, por vezes
          desgaste de chumaceira. Custo: de 40&nbsp;EUR (troca de
          velas) a 3500&nbsp;EUR (retificacao bloco motor). O scan
          distingue uma batida leve (aviso) de uma severa (paragem
          imediata).
        </p>

        <h2>2. Ruido de rolamento (bearing noise)</h2>
        <p>
          Um ronco surdo, a baixa frequencia (50-200&nbsp;Hz), que
          varia com o regime. Indica uma chumaceira de biela,
          cambota ou arvore de cames fatigada. Custo: se detetado
          cedo, 300 a 800&nbsp;EUR de chumaceiras. Se ignorado,
          rotura motor completa, 3500 a 6000&nbsp;EUR. E a avaria
          onde a detecao precoce traz o maior retorno.
        </p>

        <h2>3. Fuga de ar de admissao (air leak)</h2>
        <p>
          Um assobio agudo, continuo, frequentemente mais forte ao
          ralenti do que em alto regime. Uma manga de admissao
          rachada, uma junta de coletor fatigada, uma tomada de ar
          no corpo da borboleta. Frequentemente correlacionado com
          codigo{" "}
          <Link href="/pt/codes/p0171">P0171 &mdash; mistura pobre</Link>.
          Custo: 15 a 200&nbsp;EUR se detetar cedo, contra 400 a
          800&nbsp;EUR se a sonda lambda acabar por sofrer.
        </p>

        <h2>4. Fuga de escape (exhaust leak)</h2>
        <p>
          Um sopro ritmado no tempo de explosao, frequentemente mais
          forte a frio. Junta de coletor, fissura de flexivel, braga
          solta depois do catalisador. Impacto direto na depuracao
          e frequentemente no codigo{" "}
          <Link href="/pt/codes/p0420">P0420</Link>. Custo: 80 a
          450&nbsp;EUR conforme o local.
        </p>

        <h2>5. Assobio turbo (turbo whistle)</h2>
        <p>
          Um assobio agudo que sobe com a carga, diferente do
          simples ruido de compressor normal. Pode indicar folga de
          eixo, fuga na canalizacao de ar ou wastegate a vibrar.
          Custo: 200 a 1800&nbsp;EUR conforme a avaria. Nunca
          ignorar: um turbo que cede pode enviar oleo para a
          admissao e destruir o motor.
        </p>

        <h2>6. Ruido de correia (belt noise)</h2>
        <p>
          Um chiado, frequentemente a frio ou com humidade. Correia
          de acessorios vitrificada, tensor fatigado, roldana
          encravada. Custo: 30 a 250&nbsp;EUR. Importante: uma
          correia de acessorios que se parte nao e dramatico, mas
          a correia de distribuicao merece a sua propria categoria
          (ver classe 11).
        </p>

        <h2>7. Tique (tick)</h2>
        <p>
          Um tapping rapido e regular, alinhado ao regime motor.
          Frequentemente os impulsores hidraulicos (nivel de oleo
          baixo, oleo muito velho) ou um injetor sujo. Custo: uma
          mudanca de oleo com oleo de qualidade basta em 60&nbsp;%
          dos casos. Senao, limpeza de injetores ou troca de
          impulsores.
        </p>

        <h2>8. Ruido de injetor (injector noise)</h2>
        <p>
          Um estalar seco e rapido, concentrado em cima do motor,
          presente em diesel common rail e gasolina de injecao
          direta. Injetor encravado, mola fatigada, retorno de
          injetor com fuga. Custo: 80&nbsp;EUR (limpeza) a
          2000&nbsp;EUR (jogo completo em alguns motores premium).
        </p>

        <h2>9. Falhas de ignicao (misfire)</h2>
        <p>
          Um batimento irregular, o motor que &laquo;tropeca&raquo;.
          Assinatura muito proxima do codigo{" "}
          <Link href="/pt/codes/p0300">P0300</Link>. Velas, bobinas,
          injetor morto, fuga de compressao. Custo: 15&nbsp;EUR
          (uma vela) a 900&nbsp;EUR (junta de cabeca).
        </p>

        <h2>10. Motor saudavel (normal engine)</h2>
        <p>
          Nao e uma avaria, mas e uma classe essencial: evita
          falsos positivos. Quando o scan sai &laquo;normal
          engine&raquo; com mais de 80&nbsp;% de confianca, sabe que
          nada visivel esta a derivar. E um boletim de saude, nao
          um diagnostico.
        </p>

        <h2>11. Ruido de distribuicao / correia dentada</h2>
        <p>
          Um ruido diferente das correias de acessorios: mais surdo,
          frequentemente mascarado pelo resto do motor, visivel
          sobretudo para a IA que isola a assinatura espectral.
          Tensor de distribuicao fatigado, correia a comecar a
          saltar dentes, roldana de reenvio encravada. E a avaria
          mais cara de ignorar em motor de interferencia: 2000 a
          8000&nbsp;EUR se parte. Leitura imperdivel:{" "}
          <Link href="/pt/blog/correia-distribuicao-gasta-detetar-pelo-som">
            detetar uma correia de distribuicao gasta pelo som
          </Link>
          .
        </p>

        <h2>O que ha a reter</h2>
        <p>
          Estas 11 classes cobrem cerca de 85&nbsp;% das avarias
          mecanicas encontradas em clientela em motores de menos de
          15 anos. A precisao global do modelo e de 91.3&nbsp;%.
          Quando ve uma predicao acima dos 80&nbsp;%, aja rapido.
          Entre 60 e 80&nbsp;%, faca um segundo scan dentro da
          semana para confirmar. Abaixo de 60&nbsp;%, o sistema
          mantem-se prudente e mostra &laquo;indicativo&raquo;. Para
          entender em profundidade como funciona a detecao, leia{" "}
          <Link href="/pt/blog/como-funciona-svm-tecnologia-scan-sonoro">
            a tecnologia por tras do Scan Sonoro
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}
