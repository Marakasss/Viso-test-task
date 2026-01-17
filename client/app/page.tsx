import EntryForm from "@/components/EntryForm/EntryForm";
import EntryList from "@/components/EntryList/EntryList";

export default function Home() {
  return (
    <div className="container flex gap-24 items-center justify-center mx-auto mt-8 space-y-8">
      <EntryForm />
      <EntryList />
    </div>
  );
}
