import { useEffect } from "react";
import { Switch, Route, Link, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RenewableEnergyPage from "./pages/RenewableEnergyPage";
import SoftwareDevPage from "./pages/SoftwareDevPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import CybersecurityPage from "./pages/CybersecurityPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogCategoryPage from "./pages/BlogCategoryPage";
import BlogTagPage from "./pages/BlogTagPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Refresh AOS animations when route changes
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, [location]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/renergy" component={RenewableEnergyPage} />
        <Route path="/softwaredev" component={SoftwareDevPage} />
        <Route path="/dmarketing" component={DigitalMarketingPage} />
        <Route path="/cybersecurity" component={CybersecurityPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/category/:category" component={BlogCategoryPage} />
        <Route path="/blog/tag/:tag" component={BlogTagPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
