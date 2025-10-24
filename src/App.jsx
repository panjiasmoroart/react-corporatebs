import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/abou";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import AppTeams from "./components/team";
import AppTestimonials from "./components/testimonials";
import AppPricing from "./components/pricing";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>
    </div>
  );
}

export default App;
