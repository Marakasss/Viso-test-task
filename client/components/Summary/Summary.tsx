"use client";

import { useQuery } from "@tanstack/react-query";
import { getSummary } from "@/services/entries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Summary() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading summary…</p>;
  }

  if (isError || !data) {
    return <p className="text-sm text-red-500">Failed to load summary</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {data.summary.length === 0 ? (
          <p className="text-sm text-muted-foreground">No data yet</p>
        ) : (
          <ul className="space-y-2">
            {data.summary.map((day) => (
              <li key={day.date} className="flex justify-between text-sm">
                <span>{day.date}</span>
                <span className="font-medium">{day.totalHours}h</span>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>{data.grandTotal}h</span>
        </div>
      </CardContent>
    </Card>
  );
}
