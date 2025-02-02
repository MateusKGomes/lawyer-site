import About from './components/About';
import Contact from './components/Contact';
import PracticeAreas from './components/PracticeAreas';
import UsefulLinks from './components/UsefulLinks';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header'
import PostgraduateCourse from './components/PostgraduateCourse';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="space-y-12 pb-12">
        <Header />
        <About />
        <PracticeAreas />
        <PostgraduateCourse /> 
        <Contact />
        <UsefulLinks />
        <WhatsAppButton />

      </main>
    </div>
  );
}

export default App;