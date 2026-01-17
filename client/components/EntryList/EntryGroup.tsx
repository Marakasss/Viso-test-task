import { Button } from "@/components/ui/button";
import { TimeEntry } from "@/types/entry";

interface Props {
  date: string;
  entries: TimeEntry[];
  onDelete: (id: number) => void;
}

export default function EntryGroup({ date, entries, onDelete }: Props) {
  const totalHours = entries.reduce((sum, e) => sum + e.hours, 0);

  return (
    <div className="rounded-xl border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">{date}</h3>
        <span className="text-sm text-muted-foreground">{totalHours}h</span>
      </div>

      <ul className="space-y-2">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="flex items-start gap-4 rounded-md bg-muted/40 p-3"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">
                {entry.project.replaceAll("_", " ").toLowerCase()}
              </p>
              <p className="text-sm text-muted-foreground break-words whitespace-pre-wrap">
                {entry.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm font-medium">{entry.hours}h</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (confirm("Delete this entry?")) {
                    onDelete(entry.id);
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
