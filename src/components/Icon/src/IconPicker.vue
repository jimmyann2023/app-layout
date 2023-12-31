<template>
  <Input
    v-model:value="currentSelect"
    readonly
    :style="{ width }"
    :placeholder="t('component.icon.placeholder')"
    :class="prefixCls"
    @click="triggerPopover"
  >
    <template #addonAfter>
      <Popover
        v-model="visible"
        placement="bottomLeft"
        trigger="click"
        :overlayClassName="`${prefixCls}-popover`"
      >
        <template #title>
          <div class="flex justify-between">
            <Input
              :placeholder="t('component.icon.search')"
              allowClear
              @change="debounceHandleSearchChange"
            />
          </div>
        </template>

        <template #content>
          <div v-if="getPaginationList.length">
            <ScrollContainer class="border border-solid border-t-0">
              <ul class="flex flex-wrap px-2">
                <li
                  v-for="icon in getPaginationList"
                  :key="icon"
                  :class="currentSelect === icon ? 'border border-primary' : ''"
                  class="p-2 w-1/8 cursor-pointer mr-1 mt-1 flex justify-center items-center border border-solid hover:border-primary"
                  :title="icon"
                  @click="handleClick(icon)"
                >
                  <SvgIcon v-if="isSvgMode" :name="icon" />
                  <Icon v-else :icon="icon" />
                </li>
              </ul>
            </ScrollContainer>
            <div v-if="getTotal >= pageSize" class="flex py-2 items-center justify-center">
              <Pagination
                showLessItems
                size="small"
                :pageSize="pageSize"
                :total="getTotal"
                @change="handlePageChange"
              />
            </div>
          </div>
          <template v-else>
            <div class="p-5"><Empty /></div>
          </template>
        </template>

        <div ref="trigger">
          <span
            v-if="isSvgMode && currentSelect"
            class="cursor-pointer px-2 py-1 flex items-center"
          >
            <SvgIcon :name="currentSelect" />
          </span>
          <Icon
            v-else
            :icon="currentSelect || 'ion:apps-outline'"
            class="cursor-pointer px-2 py-1"
          />
        </div>
      </Popover>
    </template>
  </Input>
</template>
<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core';
import { Empty, Input, Pagination, Popover } from 'ant-design-vue';
import svgIcons from 'virtual:svg-icons-names';
import { ref, watch, watchEffect } from 'vue';

import { ScrollContainer } from '@/components/Container';
import { useDesign } from '@/hooks/web/useDesign';
import { useI18n } from '@/hooks/web/useI18n';
import { usePagination } from '@/hooks/web/usePagination';
import { copyText } from '@/utils/copyTextToClipboard';

import iconsData from '../data/icons.data';
import Icon from '../Icon.vue';
import SvgIcon from './SvgIcon.vue';

function getIcons() {
  const prefix = iconsData.prefix;
  return iconsData.icons.map((icon) => `${prefix}:${icon}`);
}

function getSvgIcons() {
  return svgIcons.map((icon: string) => icon.replace('icon-', ''));
}

export interface Props {
  value?: string;
  width?: string;
  pageSize?: number;
  copy?: boolean;
  mode?: 'svg' | 'iconify';
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  width: '100%',
  pageSize: 140,
  copy: false,
  mode: 'iconify',
});

// Don't inherit FormItem disabled、placeholder...
defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits(['change', 'update:value']);

const isSvgMode = props.mode === 'svg';
const icons = isSvgMode ? getSvgIcons() : getIcons();

const currentSelect = ref('');
const visible = ref(false);
const currentList = ref(icons);
const trigger = ref<HTMLDivElement>();

const triggerPopover = () => {
  if (trigger.value) {
    trigger.value.click();
  }
};

const { t } = useI18n();
const { prefixCls } = useDesign('icon-picker');

const debounceHandleSearchChange = useDebounceFn(handleSearchChange, 100);

const { getPaginationList, getTotal, setCurrentPage } = usePagination(currentList, props.pageSize);

watchEffect(() => {
  currentSelect.value = props.value;
});

watch(
  () => currentSelect.value,
  (v) => {
    emit('update:value', v);
    emit('change', v);
  },
);
function handlePageChange(page: number) {
  setCurrentPage(page);
}

function handleClick(icon: string) {
  currentSelect.value = icon;
  if (props.copy) {
    copyText(icon, t('component.icon.copy'));
  }
}

function handleSearchChange(e: Event) {
  const value = (e.target as HTMLInputElement).value;

  if (!value) {
    setCurrentPage(1);
    currentList.value = icons;
    return;
  }
  currentList.value = icons.filter((item) => item.includes(value));
}
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-icon-picker';

.@{prefix-cls} {
  .ant-input-group-addon {
    padding: 0;
  }

  .ant-input {
    cursor: pointer;
  }

  &-popover {
    width: 300px;

    .ant-popover-inner-content {
      padding: 0;
    }

    .scrollbar {
      height: 220px;
    }
  }
}
</style>
