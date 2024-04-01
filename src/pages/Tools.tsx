import React from "react";
import Card from "../components/ui/Card";
import InfoButton from "../components/ui/InfoButton";

const Tools = () => {
  return (
    <div className=" h-screen w-full">
      <div className="h-24 flex flex-row items-center">
        <span className="text-5xl text-titlewhite dark:text-titleblack px-2">
          Ferramentas
        </span>
      </div>
      <div className="grid grid-cols-3 justify-between gap-2  w-full">
        <Card
          title="Calcule sua LF"
          content="Estime o tempo que será necessário para você alcançar a liberdade financeira ou a aposentadoria. Leve em consideração suas economias atuais, suas despesas regulares e quaisquer fontes adicionais de renda que você possa ter. Lembre-se, este é apenas um cálculo estimado e os resultados reais podem variar dependendo de vários fatores."
          path="/tools/financeLiberty"
          icon={<InfoButton info="LF - Liberdade Financeira" />}
        />
        <Card
          title="Controle Financeiro "
          content="É absolutamente necessário ter um controle financeiro eficaz para saber o quanto de despesas você tem no mês. Este controle é imprescindível para evitar possíveis dívidas que possam surgir devido ao excesso de gastos. Ter este controle permite a você ter uma visão clara de suas despesas, permitindo que você identifique e corte gastos desnecessários."
          path="/tools/financeControl"
        />
        <Card
          title="Cálculo de Investimento"
          content="É essencial diversificar seus investimentos para minimizar os riscos e maximizar o potencial de retorno a longo prazo. Para fazer isso de maneira eficaz, é importante saber quanto aportar em cada ativo para balancear seu portfólio de maneira eficiente, evitando que um único investimento afete muito o desempenho total."
          path="/tools/invest"
        />
      </div>
    </div>
  );
};

export default Tools;
