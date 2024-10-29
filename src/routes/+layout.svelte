<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="flex h-screen flex-col items-center bg-[#00000f] px-5 py-16">
	{@render children()}
</main>
