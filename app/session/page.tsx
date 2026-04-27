import BookASession from "@/components/session-page/book-session";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Working Session | Finance, Scheduling, Planned vs Actual. Every Project. One Platform.",
};
export default function BookASessionPage() {
  return <BookASession />;
}
