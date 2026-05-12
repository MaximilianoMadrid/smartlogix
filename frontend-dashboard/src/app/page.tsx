import HeroSection from '@/components/HeroSection'
import IntroductionSection from '@/components/IntroductionSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import BenefitsSection from '@/components/BenefitsSection'
import TechStackSection from '@/components/TechStackSection'
import SecuritySection from '@/components/SecuritySection'
import EvaluationSection from '@/components/EvaluationSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <ArchitectureSection />
      <BenefitsSection />
      <TechStackSection />
      <SecuritySection />
      <EvaluationSection />
      <Footer />
    </main>
  )
}
