export default async function SuccessPage({
	searchParams,
}: {
	searchParams: Promise<{ checkout_id: string }>;
}) {
	const params = await searchParams;
	const checkout_id = params.checkout_id;

	return (
		<div className="px-4 py-8">
			<h1>Payment Successful!</h1>
			{checkout_id && <p>Checkout ID: {checkout_id}</p>}
		</div>
	);
}
