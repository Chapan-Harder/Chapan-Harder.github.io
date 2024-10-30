<script lang="ts">
	let { inputText, inputLink, loadPicture }: any = $props();
</script>

<a
	href={inputLink}
	target="_blank"
	class="flex items-center justify-between rounded-xl border-[2px] border-[#404040] bg-[#00000f]/20 px-3 py-2 backdrop-blur-md transition-all hover:scale-95 hover:border-[#2c4f8f] hover:bg-[#222222]/20"
>
	<img src={loadPicture} alt={inputText} class="size-8 lg:size-12" />

	<p class="text-center font-sans text-base font-medium text-slate-300 lg:text-lg">
		{inputText}
	</p>
</a>
