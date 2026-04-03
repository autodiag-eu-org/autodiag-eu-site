interface CostRangeProps {
  min: number;
  max: number;
  currency?: string;
}

export default function CostRange({
  min,
  max,
  currency = "EUR",
}: CostRangeProps) {
  const formattedMin = new Intl.NumberFormat("fr-FR").format(min);
  const formattedMax = new Intl.NumberFormat("fr-FR").format(max);

  if (min === max) {
    return (
      <span className="text-sm font-medium text-secondary">
        {formattedMin} {currency}
      </span>
    );
  }

  return (
    <span className="text-sm font-medium text-secondary">
      {formattedMin} — {formattedMax} {currency}
    </span>
  );
}
