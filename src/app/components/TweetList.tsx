"use client";

import { useQuery } from "@tanstack/react-query";

type Tweet = {
    id: string;
    content: string;
    author: string;
};

export default function TweetList() {
    const { data: tweets, isLoading } = useQuery<Tweet[]>({
        queryKey: ["tweets"],
        queryFn: () => fetch("/api/tweets").then((res) => res.json()),
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {tweets?.map((tweet) => (
                <div key={tweet.id} className="p-4 border-b">
                    <p className="font-bold">{tweet.author}</p>
                    <p>{tweet.content}</p>
                </div>
            ))}
        </div>
    );
}