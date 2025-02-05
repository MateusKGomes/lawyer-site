import About from './components/About';
import Contact from './components/Contact';
import PracticeAreas from './components/PracticeAreas';
import UsefulLinks from './components/UsefulLinks';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import PostgraduateCourse from './components/PostgraduateCourse';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="space-y-12 pb-12">
        <SEO />
        <About />
        <PracticeAreas />
        <PostgraduateCourse /> 
        <Contact />
        <UsefulLinks />
        <WhatsAppButton />
        <Footer />

      </main>
    </div>
  );
}

export default App;