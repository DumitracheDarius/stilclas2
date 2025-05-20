import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Collections from "@/pages/Collections";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/collections" component={Collections} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Header />
      <main className="min-h-screen">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
