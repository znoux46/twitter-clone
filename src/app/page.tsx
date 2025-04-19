import Image from "next/image";
import TweetForm from "@/app/components/TweetForm";
import TweetList from "@/app/components/TweetList";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto p-4">
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={28}
                priority
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">Twitter Clone</h1>
          <TweetForm />
          <TweetList />
        </main>

        {/* Footer */}
        <footer className="max-w-2xl mx-auto p-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Twitter Clone</p>
        </footer>
      </div>
  );
}