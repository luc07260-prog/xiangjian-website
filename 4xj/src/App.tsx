/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import VillageLife from './components/VillageLife';
import AIRecommend from './components/AIRecommend';
import Stories from './components/Stories';
import Community from './components/Community';
import JoinPlan from './components/JoinPlan';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Explore />
        <VillageLife />
        <AIRecommend />
        <Stories />
        <Community />
        <JoinPlan />
      </main>
      <Footer />
    </div>
  );
}

