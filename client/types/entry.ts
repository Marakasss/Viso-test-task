export interface TimeEntry {
  id: number;
  date: string;
  project: string;
  hours: number;
  description: string;
  createdAt: string;
}

export interface SummaryDay {
  date: string;
  totalHours: number;
}

export interface SummaryResponse {
  summary: SummaryDay[];
  grandTotal: number;
}
