import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import EmptyBag from "../components/EmptyBag";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.length === 0 ? (
              <EmptyBag />
            ) : (
              finalItems.map((item) => <BagItem key={item.id} item={item} />)
            )}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
