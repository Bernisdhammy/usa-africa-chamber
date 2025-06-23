import { LeadershipHero } from "@/components/leadership/leadership-hero"
import { LeadershipTeam } from "@/components/leadership/leadership-team"
import { LeadershipValues } from "@/components/leadership/leadership-values"
import { LeadershipJoin } from "@/components/leadership/leadership-join"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Leadership | USA Africa Chamber of Commerce",
  description:
    "Meet our visionary leadership team driving positive change and empowering African diaspora communities worldwide.",
}

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LeadershipHero />
        <LeadershipTeam />
        <LeadershipValues />
        <LeadershipJoin />
      </main>
      <Footer />
    </div>
  )
}
