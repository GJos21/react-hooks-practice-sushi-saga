import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ plates, onMoreSushi, onEatSushi }) {

  return (
    <div className="belt">
      {plates.map((plate) =>
        <Sushi
          key={plate.id}
          plate={plate}
          onEatSushi={onEatSushi} />
      )}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
