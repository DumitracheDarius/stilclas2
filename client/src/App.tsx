import { useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Collections from "@/pages/Collections";
import Categories from "@/pages/Categories";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";
import Reservation from "@/pages/Reservation";
import TermsAndConditions from "@/pages/TermsAndConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import FAQ from "@/pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/collections" component={Categories} />
      <Route path="/collections/legacy" component={Collections} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/faq" component={FAQ} />
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
      <CookieBanner />
      <WhatsAppButton />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;