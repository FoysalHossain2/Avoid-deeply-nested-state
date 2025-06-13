const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;

  return (
    <li>
      <h1>djs</h1>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((places) => (
            <PlaceTree key={place.id} place={places} />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
