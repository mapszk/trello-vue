<script setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
import Button from '../Button.vue'
import CustomSelect from '../CustomSelect.vue'
import { cardColors } from '../../constants/cards'
</script>

<template>
  <aside class="flex-1 p-6 flex flex-col gap-2">
    <span class="text-xs font-semibold text-gray-600">Settings</span>

    <PopoverRoot v-if="false">
      <PopoverTrigger>
        <Button alignLeft secondary class="w-full">
          <Icon icon="solar:tag-linear" width="18px" class="mr-3" />
          Tags
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :align="'end'"
          class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
        >
          <div>
            <button class="">test</button>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <PopoverRoot>
      <PopoverTrigger>
        <Button alignLeft secondary class="w-full">
          <Icon icon="mingcute:palette-line" width="18px" class="mr-3" />
          Color
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :align="'end'"
          class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
        >
          <div class="text-center w-[200px]">
            <span class="w-full text-gray-600 font-semibold text-sm block mb-3">Card color</span>
            <div class="w-full flex gap-1">
              <button
                class="flex-1 w-8 h-8 rounded-md flex items-center justify-center bg-gray-300"
              >
                <Icon icon="radix-icons:value-none" />
              </button>
              <button
                v-for="color of cardColors"
                :key="color"
                :style="{ backgroundColor: color }"
                class="flex-1 w-8 h-8 rounded-md"
              ></button>
            </div>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <span class="text-xs font-semibold text-gray-600 mt-4">Actions</span>

    <PopoverRoot>
      <PopoverTrigger>
        <Button alignLeft secondary class="w-full">
          <Icon icon="radix-icons:arrow-right" width="20px" class="mr-3" />
          Move
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :align="'end'"
          class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
        >
          <div class="text-center w-[200px]">
            <span class="w-full text-gray-600 font-semibold text-sm block mb-3">Move card</span>
            <CustomSelect placeholder="Choose a column" />
            <Button primary class="mt-2 ml-auto">Move</Button>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <PopoverRoot>
      <PopoverTrigger>
        <Button alignLeft secondary class="w-full">
          <Icon icon="radix-icons:copy" width="18px" class="mr-3" />
          Copy
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :align="'end'"
          class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
        >
          <div class="text-center w-[200px]">
            <span class="w-full text-gray-600 font-semibold text-sm block mb-3">Copy card</span>
            <CustomSelect placeholder="Choose a column" />
            <Button primary class="mt-2 ml-auto">Copy</Button>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <PopoverRoot>
      <PopoverTrigger>
        <Button alignLeft secondary class="w-full">
          <Icon icon="radix-icons:trash" width="18px" class="mr-3" />
          Delete
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :align="'end'"
          class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
        >
          <div class="text-center w-[200px]">
            <span class="w-full text-gray-600 font-semibold text-sm block mb-3"
              >Are you sure you want to delete this card?</span
            >
            <Button delete class="mt-2 ml-auto">Delete</Button>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </aside>
</template>
