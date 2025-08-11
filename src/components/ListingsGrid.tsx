import ListingCard from "./ListingCard";
import listing1 from "@/assets/listing1.jpg";
import listing2 from "@/assets/listing2.jpg";
import car1 from "@/assets/car1.jpg";
import car2 from "@/assets/car2.jpg";

const listings = [
  {
    id: "1",
    title: "Oceanfront Villa with Infinity Pool",
    location: "Malibu, California",
    price: 450,
    rating: 4.9,
    reviews: 127,
    image: listing1,
    type: "stay" as const,
    features: ["Ocean View", "Pool", "WiFi", "Kitchen"],
    isFavorite: false,
  },
  {
    id: "2",
    title: "Tesla Model S - Premium Electric",
    location: "Los Angeles, California",
    price: 89,
    rating: 4.8,
    reviews: 89,
    image: car1,
    type: "vehicle" as const,
    features: ["Electric", "Autopilot", "Premium Sound"],
    isFavorite: true,
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.7,
    reviews: 203,
    image: listing2,
    type: "stay" as const,
    features: ["Mountain View", "Fireplace", "Hot Tub"],
    isFavorite: false,
  },
  {
    id: "4",
    title: "Range Rover Luxury SUV",
    location: "Denver, Colorado",
    price: 125,
    rating: 4.9,
    reviews: 156,
    image: car2,
    type: "vehicle" as const,
    features: ["AWD", "Leather", "GPS Navigation"],
    isFavorite: false,
  },
];

const ListingsGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Trending now</h2>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Over 1,000 places and vehicles</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsGrid;