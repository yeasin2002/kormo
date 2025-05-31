import { Button } from "@/components/retroui";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";
import { getContributors } from "@/helpers";
import { GithubIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ShowContributors = async () => {
  const contributors = await getContributors();
  return (
    <section className="container max-w-6xl mx-auto border-2 bg-primary border-black py-16 px-4 lg:p-16 ">
      <Text as="h2" className="text-center text-black mb-2">
        Community Contributors
      </Text>
      <Text className="text-xl text-center text-black mb-8">
        Make possible with your help
      </Text>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {contributors.map((contributor) => (
          <Link
            key={contributor.username}
            href={contributor.url}
            target="_blank"
            passHref
            className="flex flex-col items-center"
          >
            <Avatar className="h-12 w-12 border-black lg:h-16 lg:w-16">
              <Avatar.Image
                src={contributor.avatar}
                alt={contributor.username}
              />
            </Avatar>
          </Link>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-12">
        <Link
          href="https://github.com/logging-stuff/retroui"
          target="_blank"
          passHref
        >
          <Button
            className="bg-white border-black shadow-black text-black"
            variant="outline"
          >
            <GithubIcon size="16" className="mr-2" />
            Star on Github
          </Button>
        </Link>
        <Link href="https://discord.gg/Jum3NJxK6Q" target="_blank" passHref>
          <Button
            className="bg-white border-black shadow-black text-black"
            variant="outline"
          >
            <MessageCircle size="16" className="mr-2" />
            Join Community
          </Button>
        </Link>
      </div>
    </section>
  );
};
