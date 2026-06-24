import { buildAgentLayer } from "../../scripts/publish-system.mjs";

export async function GET() {
	const { tokensCss } = buildAgentLayer();
	return new Response(tokensCss, {
		headers: {
			"Content-Type": "text/css; charset=utf-8",
			"Cache-Control": "no-cache",
		},
	});
}
