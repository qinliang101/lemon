<template>
    <div class="app_item_wrap" style="margin-top: 20px;">
        <a :href="to" class="app_item_box">
            <div class="app_item">
                <img class="app_img" src="@/icons/addapp.svg">
                <span>{{label}}</span>
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
    export default defineComponent({
        props: {
            to: String,
            label: String,
        }
    })
</script>