import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchActions.markFetchingStarted())
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.markFetchDone())
        dispatch(fetchActions.markFetchingFinished())        
        dispatch (itemActions.addInitialItems(items))
        // console.log(`items ${items}`);
      });
    return () => {
      console.log("Cleaning up UseEffect");
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <></>
  );
};

export default FetchItems;
