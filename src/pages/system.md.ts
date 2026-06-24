import { buildAgentLayer } from "../../scripts/publish-system.mjs";

export async function GET() {
	const { systemMd } = buildAgentLayer();
	return new Response(systemMd, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "no-cache",
		},
	});
}
