<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="flex h-screen flex-col items-center bg-[#00000f] px-5 py-14 sm:px-32">
	<div class="fixed inset-0 overflow-visible">
		<img
			src="/pictures/Background.png"
			alt="Background.png"
			class="animate-infinite-rotation min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[5] object-cover lg:scale-[3]"
		/>
	</div>
	{@render children()}
</main>
