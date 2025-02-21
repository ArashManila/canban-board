
import Table from "./Table/Table";
import { useAppSelector } from "../redux/store";
import { tablesSlice } from "../modules/tables-slice";

const Main = () => {

  // const [cardsData, setCardsData] = useState<CardsData>(() => {
  //     const newData = data.Get("cardsData");
  //     if (newData) return JSON.parse(newData);
  //     else return {};
  //   });
  
  //   useEffect(() => {
  //     data.Set("cardsData", JSON.stringify(cardsData));
  //   }, [cardsData]);
  
  //   const updateCardData = (data: CardType) => {
  //     setCardsData((cards: CardsData) => {
  //       const newCardsData = JSON.parse(JSON.stringify(cards));
  //       if (!newCardsData[data.tableId]) newCardsData[data.tableId] = {};
  //       newCardsData[data.tableId][data.cardId] = data;
  //       return newCardsData;
  //     });
  //   };
  //   const removeCardData = (tableId: number, cardId: string) => {
  //     setCardsData((prevCardsState) => {
  //       const newData = structuredClone(prevCardsState);
  //       delete newData[tableId][cardId];
  //       return newData;
  //     });
  //   };

  // const [tablesData, setTablesData] = useState<TablesData>(() => {
  //   const newData = data.Get("Tablesdata");
  //   return newData ? JSON.parse(newData) : tableNameData;
  // });

  // useEffect(() => {
  //   data.Set("Tablesdata", JSON.stringify(tablesData));
  // }, [tablesData]);

  const tablesData = useAppSelector((state)=>tablesSlice.selectors.selectTablesNames(state))
  const tablesIds = useAppSelector((state)=>tablesSlice.selectors.selecttablesIds(state))


  return (
    <main className="content container">
      <div className="board">
        <ul className="board__list">
        {tablesData && tablesIds.map(id=>{
          return(<Table tableId={id} key={id}/>)
        })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
