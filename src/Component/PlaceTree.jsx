import React from 'react'

const PlaceTree = ({place}) => {

    const childPlaces = place.childPlaces;

  return (
    <div>
        {place.title}
        {
            childPlaces.length > 0 && (
                childPlaces.map((places) => (
                    <PlaceTree key={place.id} place={place} />
                ))
            )
        }
    </div>
  )
}

export default PlaceTree