<template>
        <div class="show">
            <slot name="bgimg"></slot>
        </div>
</template>


<script>
export default {
  props: ["navList"]
};
</script>

<style lang="scss" scoped>

    .show{
    position: absolute;
    top: 50%;
    margin-top: -100px;
    margin-left: 380px;
    width: 200px;
    height: 200px;
    background: blue;
    &::after{
        content:'';
        position: absolute;
        top: 50%;
        margin-top: -25px;
        left: -50px;
        border: 25px solid #fff;
        border-top-color :transparent;
        border-left-color :transparent;
        border-bottom-color :transparent;

    }
}
</style>
