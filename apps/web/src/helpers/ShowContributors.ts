export async function getContributors(): Promise<
	{ avatar: string; username: string; url: string }[]
> {
	const request = await fetch(
		"https://api.github.com/repos/yeasin2002/kormo-setu/contributors",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	const contributorsList = await request.json();
	return [
		contributorsList.map(
			(c: { avatar_url: string; login: string; html_url: string }) => ({
				avatar: c.avatar_url,
				username: c.login,
				url: c.html_url,
			}),
		),
	];
}
