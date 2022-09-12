<template>
  <component
    :is="buttonIsLink"
    :type="buttonIsLink === 'button' ? 'button' : undefined"
    :href="external && url ? url : null"
    :url="!external && url ? url : null"
    :class="buttonClass"
  >
    <span v-if="icon && !iconRight" class="btn__icon">
      <component :is="svIcon" />
    </span>
    {{ label }}
    <span v-if="icon && iconRight" class="btn__icon btn__icon--right">
      <component :is="svIcon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IEvent } from "@/components/types";

interface ISvButtonProps {
  label: string;
  icon?: string;
  iconRight?: boolean;
  url?: string;
  external?: boolean;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  accent?: boolean;
  white?: boolean;
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  block?: boolean;
  link?: boolean;
  linkDark?: boolean;
  actions?: IEvent[];
}

interface ISvButtonEmits {
  (event: "click", value: object): void;
}

const props = withDefaults(defineProps<ISvButtonProps>(), {
  iconRight: false,
  external: false,
  primary: false,
  secondary: false,
  outline: false,
  accent: false,
  white: false,
  xs: false,
  sm: false,
  lg: false,
  block: false,
  link: false,
  linkDark: false,
});

const emit = defineEmits<ISvButtonEmits>();

const buttonClass = computed(() => {
  return [
    "btn",
    {
      "btn--primary": props.primary,
      "btn--secondary": props.secondary,
      "btn--accent": props.accent,
      "btn--white": props.white,
      "btn--outline": props.outline,
      "btn--xs": props.xs,
      "btn--sm": props.sm,
      "btn--lg": props.lg,
      "btn--block": props.block,
      "btn--link": props.link,
      "btn--link-dark": props.linkDark,
    },
  ];
});

const buttonIsLink = computed(() => {
  if (props.url && props.external) {
    return "a";
  } else if (props.url && !props.external) {
    return "sv-nuxt-link";
  }
  return "button";
});

const svIcon = computed(() => {
  return props.icon ? `sv-icon-${props.icon}` : "div";
});
</script>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  font-weight: 500;
  font-size: 16px;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: 0.4s ease;
  padding-right: 32px;
  padding-left: 32px;

  .btn__icon {
    display: inherit;
    margin-right: 16px;

    &--right {
      margin-right: 0;
      margin-left: 4px;
    }
  }

  &--primary {
    background: var(--red);
    color: #ffffff;

    &:hover {
      background: var(--red-90);
    }

    &:active {
      background: var(--red);
    }

    &:disabled,
    &[disabled] {
      background: var(--red-30);
    }

    &.btn--outline {
      border: 2px solid var(--red);
      background: transparent;
      color: var(--red);

      &:hover {
        background: var(--red-90);
        color: #fff;
      }

      &:active {
        background: var(--red);
        color: #fff;
      }

      &:disabled,
      &[disabled] {
        background: var(--red-30);
        color: #fff;
      }
    }
  }

  &--secondary {
    background: var(--blue-90);
    color: #ffffff;

    &:hover {
      background: var(--blue-80);
    }

    &:active {
      background: var(--blue-90);
    }

    &:disabled,
    &[disabled] {
      background: var(--blue-40);
    }

    &.btn--outline {
      border: 2px solid var(--blue-90);
      background: transparent;
      color: var(--blue-90);

      &:hover {
        background: var(--blue-80);
        color: #fff;
      }

      &:active {
        background: var(--blue-90);
        color: #fff;
      }

      &:disabled,
      &[disabled] {
        background: var(--blue-40);
        color: #fff;
      }
    }
  }

  &--white {
    &.btn--outline {
      border: 1px solid #ffffff;
      background: transparent;
      color: #ffffff;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
        color: #fff;
      }

      &:active {
        background: rgba(255, 255, 255, 0.3);
        color: #fff;
      }

      &:disabled,
      &[disabled] {
        background: rgba(255, 255, 255, 0.3);
        color: #fff;
      }
    }
  }

  &--accent {
    background: var(--blue-50);
    color: #ffffff;

    &:hover {
      background: var(--blue-60);
    }

    &:active {
      background: var(--blue-50);
    }

    &:disabled,
    &[disabled] {
      background: var(--blue-45);
    }

    &.btn--outline {
      border: 2px solid var(--blue-50);
      background: transparent;
      color: var(--blue-50);

      &:hover {
        background: var(--blue-60);
        color: #fff;
      }

      &:active {
        background: var(--blue-50);
        color: #fff;
      }

      &:disabled,
      &[disabled] {
        background: var(--blue-45);
        color: #fff;
      }
    }
  }

  &--link {
    background: transparent;
    color: #fff;

    &-dark {
      color: var(--blue);
    }
  }

  &--xs {
    font-size: 14px;
    font-weight: 400;
    height: 32px;
    align-items: center;
    border-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    .btn__icon {
      display: inherit;
      margin-right: 8px;
    }
    .sv-icon {
      width: 11px;
      height: 14px;
      fill: #ffffff;
    }
  }

  &--sm {
    font-size: 14px;
    font-weight: 400;
    height: 38px;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
  }

  &--lg {
    font-size: 16px;
    font-weight: 500;
    height: 59px;
    border-radius: 4px;
    padding-left: 32px;
    padding-right: 32px;
  }

  &--block {
    width: 100%;
  }

  &--esia {
    background: #0066b3;
    &:hover {
      background: var(--blue-80);
    }
    .btn__icon--right {
      margin-left: 5px;
      margin-bottom: -3px;
    }
    .sv-icon {
      width: 83px;
      height: 13px;
    }
  }
}

@media (max-width: 840px) {
  .btn {
    &--small {
      padding-left: 8px;
      padding-right: 8px;
      font-size: 12px;
      height: 34px;
    }
    &--esia {
      font-size: 16px;
      line-height: 19px;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
}
</style>
