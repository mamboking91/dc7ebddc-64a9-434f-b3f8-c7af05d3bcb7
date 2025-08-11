import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import ListingsGrid from "@/components/ListingsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryTabs />
      <ListingsGrid />
      <Footer />
    </div>
  );
};

export default Index;
