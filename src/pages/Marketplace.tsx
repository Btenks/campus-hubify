
const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Campus Marketplace</h1>
        <div className="space-y-4">
          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Available Items</h2>
            <p className="text-muted-foreground">
              No items listed yet. Be the first to sell or buy in the marketplace!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
