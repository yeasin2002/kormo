import { CirclePlus, GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/retroui";
import { Avatar } from "@/components/retroui/Avatar";
import { Text } from "@/components/retroui/Text";
import { getContributors } from "@/helpers";

export const ShowContributors = async () => {
	const contributors = await getContributors();
	return (
		<section className="container mx-auto max-w-6xl border-2 border-black bg-primary px-4 py-16 lg:p-16">
			<Text as="h2" className="mb-2 text-center text-black">
				Community Contributors
			</Text>
			<Text className="mb-8 text-center text-black text-xl">
				Make possible with your help
			</Text>
			<div className="flex flex-wrap justify-center gap-2 lg:gap-4">
				{contributors.map((contributor) => (
					<Link
						key={contributor.username + contributor.url}
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
			<div className="mt-12 flex flex-col items-center justify-center gap-4 lg:flex-row">
				<Link
					href="https://github.com/yeasin2002/kormo-setu"
					target="_blank"
					passHref
				>
					<Button
						className="border-black bg-white text-black shadow-black"
						variant="outline"
					>
						<GithubIcon size="16" className="mr-2" />
						Star on Github
					</Button>
				</Link>
				<Link href="/login" passHref>
					<Button
						className="border-black bg-white text-black shadow-black"
						variant="outline"
					>
						<CirclePlus size="16" className="mr-2" />
						Join
					</Button>
				</Link>
			</div>
		</section>
	);
};
