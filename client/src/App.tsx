import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Workshops from "./pages/Workshops";
import News from "./pages/News";
import Contact from "./pages/Contact";
import FeaturedProjects from "./pages/FeaturedProjects";
import PinataMoon from "./pages/PinataMoon";
import Songcoming from "./pages/Songcoming";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/books"} component={Books} />
      <Route path={"/games"} component={Games} />
      <Route path={"/workshops"} component={Workshops} />
      <Route path={"/featured-projects"} component={FeaturedProjects} />
      <Route path={"/pinata-moon"} component={PinataMoon} />
      <Route path={"/songcoming"} component={Songcoming} />
      <Route path={"/news"} component={News} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
