import { LearningSyncStatus } from "@/components/learning-sync-status";
import type { Metadata, Viewport } from "next";
import { PwaProvider } from "@/components/pwa-provider";
import "./pwa.css";
import "./globals.css";
import "./personalisation.css";
import "./uiux-hardening.css";
import "./classroom.css";
import "./contextual-teacher.css";
import { AppShell } from "@/components/app-shell";
import { AuthProvider } from "@/lib/auth-context";
import { LearningStoreProvider } from "@/lib/learning-store";
import { PersonalisationProvider } from "@/components/personalisation-provider";

export const metadata: Metadata = {
  title: { default: "Applied Commerce Zimbabwe", template: "%s · Applied Commerce" },
  description: "Applied Commerce Zimbabwe learning platform for Forms 1–4.",
  appleWebApp: { capable: true, title: "AC Zimbabwe", statusBarStyle: "default" },
  icons: { icon: "/icon.svg", apple: "/pwa/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#17313b", viewportFit: "cover" };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><AuthProvider><LearningStoreProvider><PersonalisationProvider><PwaProvider><AppShell><LearningSyncStatus/>{children}</AppShell></PwaProvider></PersonalisationProvider></LearningStoreProvider></AuthProvider></body></html>;
}
