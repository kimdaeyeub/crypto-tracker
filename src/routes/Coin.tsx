import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  coidId: string;
}

const Coin = () => {
  const { coidId } = useParams<RouteParams>();
  return <div>Coin:{coidId}</div>;
};

export default Coin;
