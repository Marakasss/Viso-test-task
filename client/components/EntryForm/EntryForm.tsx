"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createEntry } from "@/services/entries";
import { api } from "@/services/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const todayISO = () => new Date().toISOString().split("T")[0];

export default function EntryForm() {
  const queryClient = useQueryClient();

  const [date, setDate] = useState(todayISO());
  const [project, setProject] = useState("");
  const [hours, setHours] = useState("");
  const [description, setDescription] = useState("");

  const { data: projects = [] } = useQuery<string[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get("/projects");
      return data.projects;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entries"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });

      setHours("");
      setDescription("");
      setProject("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !project || !hours || !description) {
      alert("All fields are required");
      return;
    }

    mutate({
      date,
      project,
      hours: Number(hours),
      description,
    });
  };

  return (
    <section className="min-w-96 max-w-md rounded-xl border bg-background p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">New Time Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Select value={project} onValueChange={setProject}>
          <SelectTrigger>
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((p) => (
              <SelectItem key={p} value={p}>
                {p.replaceAll("_", " ").toLowerCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="number"
          min="0"
          step="0.25"
          placeholder="Hours worked"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <Textarea
          placeholder="What did you work on?"
          className="min-h-[80px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Saving..." : "Save entry"}
        </Button>
      </form>
    </section>
  );
}
