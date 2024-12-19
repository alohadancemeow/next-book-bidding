import { ItemCard } from "@/components/item-card";
import { database } from "@/db/database";

export default async function HomePage() {
  const allItems = await database.query.items.findMany();
  // console.log(allItems, 'allItems');
  

  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold">Items For Sale</h1>

      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
