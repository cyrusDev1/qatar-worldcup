<template>
    <div class="info-bar">
        <span v-if="date">{{ date }}</span>
    </div>
</template>

<script>
export default{
    props: {
        date: {
            required: false,
            type: String
        }
    }
}
</script>

<style>
.info-bar{
    min-width: 32px;
    padding: 2px 8px;
    line-height: 28px;
    font-size: 14px;
    color: white;
    background-color: #360000;
    border-radius: 3px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
}
</style>