import { buildAgentLayer } from "../../scripts/publish-system.mjs";

export async function GET() {
	const { llmsTxt } = buildAgentLayer();
	return new Response(llmsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "no-cache",
		},
	});
}
