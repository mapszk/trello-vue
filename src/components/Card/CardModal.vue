<script setup>
import { DialogClose } from 'radix-vue'
import Tag from '../Tag.vue'
import Button from '../Button.vue'

const tags = [
  { tag: 'Frontend', id: 1, color: '#8c9e2d' },
  { tag: 'Trello', id: 2, color: '#d82f89' }
]
</script>

<template>
  <div class="w-[800px] h-[500px] rounded-xl bg-white">
    <header class="bg-green-400 w-full h-32 rounded-t-xl flex p-4">
      <DialogClose class="mb-auto ml-auto rounded-md hover:bg-[rgba(0,0,0,0.15)] p-1">
        <Icon icon="radix-icons:cross-2" class="text-gray-800" width="22px" />
      </DialogClose>
    </header>
    <div class="flex">
      <section class="flex-[3_3_0%] p-6 w-full">
        <div class="flex items-start">
          <Icon class="mr-4 mt-1" icon="radix-icons:card-stack" width="22px" />
          <div class="w-full">
            <h4 class="text-xl font-semibold mb-1">
              [FRONT] No se ven accionables de registro de uso con escuelas WL
            </h4>
            <span class="text-sm text-gray-500">en la lista: Columna</span>
            <div class="flex mt-4 gap-1">
              <div class="w-8 h-8 mr-2 rounded-full bg-slate-500"></div>
              <Tag v-for="tag of tags" big :tag="tag.tag" :key="tag.id" :color="tag.color" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-5">
          <Icon class="mr-4 mt-1" icon="radix-icons:text-align-left" width="23px" />
          <div class="w-full">
            <h4 class="text-xl font-semibold mb-1">Description</h4>
            <p class="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consectetur dolor
              aspernatur illum quasi est illo quas inventore magnam architecto, delectus similique
              beatae blanditiis, nobis in pariatur commodi fugiat dolores!
            </p>
          </div>
        </div>
      </section>
      <aside class="flex-1 p-6 flex flex-col gap-2">
        <span class="text-xs font-semibold text-gray-600">Settings</span>
        <Button secondary>
          <Icon icon="solar:tag-linear" width="18px" class="mr-3" />
          Tags
        </Button>
        <Button secondary>
          <Icon icon="mingcute:palette-line" width="18px" class="mr-3" />
          Color
        </Button>
        <span class="text-xs font-semibold text-gray-600 mt-4">Actions</span>
        <Button secondary>
          <Icon icon="radix-icons:arrow-right" width="20px" class="mr-3" />
          Move
        </Button>
        <Button secondary>
          <Icon icon="radix-icons:copy" width="18px" class="mr-3" />
          Copy
        </Button>
        <Button secondary>
          <Icon icon="radix-icons:trash" width="18px" class="mr-3" />
          Delete
        </Button>
      </aside>
    </div>
  </div>
</template>
