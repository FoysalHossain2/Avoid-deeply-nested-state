import { useState } from "react";

import { initialTravelPlan } from "../data/places";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const places = plan.childPlaces;

  console.log(places);
  // This component renders the travel plan as a tree structure

  return (
    <div>
      <ol>
        {plants.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlan;
