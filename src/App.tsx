import { useState } from "react";
import InfoWidget from "./components/ui/InfoWidget";
import WidgetWrapper from "./components/ui/WidgetWrapper";
import { LuEye, LuEyeOff } from "react-icons/lu";
import BarChart from "./components/ui/BarChart";

function App() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <div className="flex items-center w-full gap-2">
        <WidgetWrapper>
          <InfoWidget name="Valor Aplicado" value="1.543,68" hidden={hidden} />
          <InfoWidget
            name="Saldo Bruto"
            value="1.541,18"
            percentage="-0,16"
            hidden={hidden}
          />
          <InfoWidget
            name="Rendimento"
            value="34,55"
            percentage="2,46"
            hidden={hidden}
          />
          <button className="flex " onClick={() => setHidden(!hidden)}>
            {hidden ? <LuEyeOff size={24} /> : <LuEye size={24} />}
          </button>
        </WidgetWrapper>
        <WidgetWrapper hug>
          <div className="flex flex-col m-0 p-0 gap-0">
            <h1 className="text-base">Proventos</h1>
            <div className="flex py-[10px] ">
              <InfoWidget
                name="Recebidos"
                value="1,92"
                hidden={hidden}
                sm
                color="text-green dark:text-greendark"
              />
              <InfoWidget name="A Receber" value="3,98" hidden={hidden} sm />
              <InfoWidget name="Mês Passado" value="3,18" hidden={hidden} sm />
            </div>
          </div>
        </WidgetWrapper>
      </div>
      <div className="flex items-center w-full gap-2">
        <WidgetWrapper>
          <div className="flex flex-col items-center w-full m-0 p-0 gap-[10px] ">
            <h1 className="text-xl">Evolução Patrimonial</h1>
            <BarChart />
          </div>
        </WidgetWrapper>
        <WidgetWrapper >
          <h1 className="w-[380px]">Minha Carteira</h1>
        </WidgetWrapper>
      </div>
    </div>
  );
}

export default App;
