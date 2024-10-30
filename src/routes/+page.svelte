<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<section
	class="z-50 flex h-full w-full justify-center p-2 max-lg:flex-col lg:items-center lg:justify-around"
>
	<!-- My Picture And Name -->
	<div class="flex flex-col items-center justify-center">
		<!-- Picure -->
		<img class="size-36 lg:size-72" src="ChapanHarder_300x300.png" alt="ChapanHarder_300x300" />
		<!-- Name -->
		<h1 class="font-custom text-3xl font-bold capitalize text-[#b3b3b3] lg:text-6xl">
			چـپــن <span class="text-[#404040]">هــاردر</span>
		</h1>
		<h2
			class="space- font-custom text-sm font-bold capitalize tracking-[4px] text-[#b3b3b3] lg:text-2xl lg:tracking-[10px]"
		>
			chapan <span class="text-[#404040]">harder</span>
		</h2>
	</div>
	<!-- Links -->
	<div
		class="grid grid-cols-2 gap-2 overflow-x-hidden overflow-y-scroll max-lg:mt-12 md:h-[350px] lg:h-[510px] lg:w-[400px]"
	>
		<Button
			loadPicture="pictures/Aparat.webp"
			inputLink="https://www.aparat.com/Chapan_Harder"
			inputText="Aparat"
		/>
		<Button
			loadPicture="pictures/youtube.webp"
			inputLink="https://www.youtube.com/@chapanharder"
			inputText="YouTube"
		/>
		<Button
			loadPicture="pictures/Igap.webp"
			inputLink="https://profile.igap.net/ChapanHarder"
			inputText="iGap"
		/>
		<Button
			loadPicture="pictures/Telegram_logo.svg.webp"
			inputLink="https://t.me/ChapanHarder"
			inputText="Telegram"
		/>
		<Button
			loadPicture="pictures/Artstation.webp"
			inputLink="https://www.artstation.com/chapan_harder"
			inputText="ArtStation"
		/>
		<Button
			loadPicture="pictures/cara-app-logo-outline-icon.webp"
			inputLink="https://cara.app/chapanharder/portfolio"
			inputText="Cara"
		/>
		<Button
			loadPicture="pictures/Instagram_logo_2022.svg.webp"
			inputLink="https://www.instagram.com/chapanharder?igsh=ZGUzMzM3NWJiOQ=="
			inputText="Instagram"
		/>
		<Button
			loadPicture="pictures/virasty.png"
			inputLink="https://virasty.com/Chapan_Harder"
			inputText="Virasty"
		/>
		<Button
			loadPicture="pictures/pngtree-open-book-logo-png-image_12467719.png"
			inputLink="https://chapanharder.blog.ir"
			inputText="Blog"
		/>
		<Button
			loadPicture="pictures/logo-01.png"
			inputLink="https://hamibash.com/chapan"
			inputText="حمایت مالی"
		/>
	</div>
</section>
