import React, { useState } from 'react'

import {initialTravelPlan} from "../data/places-normalized";
import PlaceTree from './PlaceTree';

const TravelPlan = () => {

    const [plan, setPlan] = useState(initialTravelPlan)

  return (
    <div>
        {plan.map((place) =>(
            <PlaceTree key={place.id} place={place} />
        ))}
    </div>
  )
}

export default TravelPlan