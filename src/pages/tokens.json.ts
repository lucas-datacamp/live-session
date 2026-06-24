import { buildAgentLayer } from "../../scripts/publish-system.mjs";

export async function GET() {
	const { tokensJson } = buildAgentLayer();
	return new Response(tokensJson, {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "no-cache",
		},
	});
}
