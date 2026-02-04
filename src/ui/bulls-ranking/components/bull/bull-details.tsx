type BullDetailsProps = {
  rankingPosition: number;
  tag: string;
  breed: string;
  monthAge: number;
  origin: string;
};

export function BullDetails({
  rankingPosition,
  tag,
  breed,
  monthAge,
  origin,
}: BullDetailsProps) {
  return (
    <div>
      <p>Bull Details Component</p>
      <p>{rankingPosition}</p>
      <p>{tag}</p>
      <p>{breed}</p>
      <p>{monthAge}</p>
      <p>{origin}</p>
    </div>
  );
}
