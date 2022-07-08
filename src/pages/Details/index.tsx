import React from "react";
import { useParams } from "react-router-dom";
import { DetailsContainer } from "./styles";

const Details: React.FunctionComponent = () => {
  const { id } = useParams();
  return <DetailsContainer>Details id: {id}</DetailsContainer>;
};

export default Details;
