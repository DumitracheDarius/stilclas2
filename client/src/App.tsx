import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Collections from "@/pages/Collections";
import Categories from "@/pages/Categories";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";
import { CartProvider, useCart } from "@/components/cart/CartContext";
import { Cart } from "@/components/cart/Cart";

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
      <Route component={NotFound} />
    </Switch>
  );
}

// Separate component to use cart context after provider is available
function CartContainer() {
  return (
    <CartProvider>
      <Header />
      <main className="min-h-screen">
        <Router />
      </main>
      <Footer />
      <CartWrapper />
    </CartProvider>
  );
}

// We need this separate wrapper component to access the cart context
function CartWrapper() {
  const { isCartOpen, closeCart } = useCart();
  return <Cart isOpen={isCartOpen} onClose={closeCart} />;
}

function App() {
  return (
    <TooltipProvider>
      <CartContainer />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;