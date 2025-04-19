"use client"; // Chỉ định đây là Client Component
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const tweetSchema = z.object({
    content: z.string().min(1, "Tweet không được trống!"),
});

export default function TweetForm() {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(tweetSchema),
    });

    const onSubmit = (data: any) => {
        console.log("Tweet submitted:", data);
        // Gọi API POST ở đây
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border-b">
      <textarea
          {...register("content")}
          placeholder="What's happening?"
          className="w-full p-2 outline-none"
      />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
                Tweet
            </button>
        </form>
    );
}
