<script lang="ts">
	let { inputText, inputLink, loadPicture }: any = $props();
</script>

<a
	href={inputLink}
	class="flex items-center justify-between rounded-xl border-[2px] border-[#404040] bg-[#00000f] px-3 py-2 transition-all hover:scale-105 hover:border-[#272469] hover:bg-[#222222]"
>
	<img src={loadPicture} alt={inputText} class="size-8" />

	<p class="text-center font-sans text-base font-medium text-slate-300">
		{inputText}
	</p>
</a>
