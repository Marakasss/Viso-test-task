"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getEntries, deleteEntry } from "@/services/entries";
import EntryGroup from "./EntryGroup";

export default function EntryList() {
  const queryClient = useQueryClient();

  const {
    data: entries = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["entries"],
    queryFn: getEntries,
  });

  const { mutate } = useMutation({
    mutationFn: deleteEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entries"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
    },
  });

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading entries…</p>;
  }

  if (isError) {
    return <p className="text-sm text-red-500">Failed to load entries</p>;
  }

  if (!entries.length) {
    return <p className="text-sm text-muted-foreground">No entries yet</p>;
  }

  // ---- group by date ----
  const grouped = entries.reduce<Record<string, typeof entries>>(
    (acc, entry) => {
      acc[entry.date] = acc[entry.date] || [];
      acc[entry.date].push(entry);
      return acc;
    },
    {},
  );

  return (
    <section className="space-y-6 min-w-96 max-w-md">
      {Object.entries(grouped).map(([date, dayEntries]) => (
        <EntryGroup
          key={date}
          date={date}
          entries={dayEntries}
          onDelete={mutate}
        />
      ))}
    </section>
  );
}
