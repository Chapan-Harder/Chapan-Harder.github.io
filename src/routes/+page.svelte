<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<section class="h-full w-full p-2">
	<!-- My Picture And Name -->
	<div class="flex flex-col items-center justify-center">
		<!-- Picure -->
		<img class="size-36" src="ChapanHarder_300x300.png" alt="ChapanHarder_300x300" />
		<!-- Name -->
		<h1 class="font-sans text-3xl font-bold capitalize text-[#b3b3b3]">
			چـپــن <span class="text-[#404040]">هــاردر</span>
		</h1>
		<h2 class="space- font-sans text-base font-bold capitalize text-[#b3b3b3]">
			chapan <span class="text-[#404040]">harder</span>
		</h2>
	</div>
	<!-- Links -->
	<div class="mt-8 grid grid-cols-2 gap-2">
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
			inputLink="https://cara.app/chapanharder"
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
		<div class="col-span-2">
			<!-- <Button
				loadPicture="pictures/blog.jpg"
				inputLink="https://chapanharder.blog.ir"
				inputText="Blog"
			/> -->
			<a
				href="https://chapanharder.blog.ir/"
				class="flex items-center justify-around rounded-xl border-[2px] border-[#404040] bg-[#00000f] px-3 py-2 transition-all hover:scale-105 hover:border-[#272469] hover:bg-[#222222]"
			>
				<img
					src="pictures/pngtree-open-book-logo-png-image_12467719.png"
					alt="Blog"
					class="size-10"
				/>

				<p class="text-center font-sans text-base font-medium text-slate-300">Blog</p>
			</a>
		</div>
	</div>
</section>
