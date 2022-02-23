import Marker from "../Marker";

const MarkerDefinition = ({ color, id }) => {
  return (
    <svg>
      <defs>
        <Marker id={id}>
          <polyline
            stroke={color}
            fill={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            points="-5,-4 0,0 -5,4 -5,-4"
          />
        </Marker>
      </defs>
    </svg>
  );
};

export default MarkerDefinition;
